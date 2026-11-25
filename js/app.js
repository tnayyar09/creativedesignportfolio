// js/app.js
// ============================================
// MAIN APPLICATION LOGIC
// Handles Navbar, Grid Rendering
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initGrid();
    initPageLoader();
    initScrollEffects();
});

// ============================================
// PAGE LOADER
// ============================================
function initPageLoader() {
    const loader = document.querySelector('.page-loader');
    if (loader) {
        window.addEventListener('load', function() {
            setTimeout(() => {
                loader.classList.add('hidden');
                setTimeout(() => loader.remove(), 500);
            }, 300);
        });
    }
}

// ============================================
// SCROLL EFFECTS
// ============================================
function initScrollEffects() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ============================================
// NAVBAR BUILDER
// ============================================
function initNavbar() {
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.getElementById('hamburger');
    const mobileOverlay = document.getElementById('mobileOverlay');
    
    if (!navMenu) return;

    const pathPrefix = getPathPrefix();

    // Build Home link
    let menuHTML = `
        <li class="nav-item">
            <a href="${pathPrefix}index.html" class="nav-link ${isCurrentPage('index.html') ? 'active' : ''}">
                🏠 Home
            </a>
        </li>
    `;

    // Build category menus with dropdowns
    CATEGORIES.forEach(category => {
        let dropdownItems = '';
        category.subcategories.forEach(sub => {
            dropdownItems += `
                <a href="${pathPrefix}${sub.page}" class="dropdown-item ${isCurrentPage(sub.id) ? 'active' : ''}">
                    ${sub.name}
                </a>
            `;
        });

        menuHTML += `
            <li class="nav-item">
                <button class="nav-link" onclick="toggleDropdown(this, event)">
                    ${category.icon} ${category.name}
                    <span class="arrow">▼</span>
                </button>
                <ul class="dropdown-menu">
                    ${dropdownItems}
                </ul>
            </li>
        `;
    });

    navMenu.innerHTML = menuHTML;

    // Hamburger toggle
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            if (mobileOverlay) mobileOverlay.classList.toggle('active');
            document.body.classList.toggle('lightbox-open');
        });
    }

    // Close mobile menu on overlay click
    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            mobileOverlay.classList.remove('active');
            document.body.classList.remove('lightbox-open');
        });
    }

    // Close mobile menu on link click
    navMenu.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                if (mobileOverlay) mobileOverlay.classList.remove('active');
                document.body.classList.remove('lightbox-open');
            }
        });
    });
}

// Toggle dropdown on mobile
function toggleDropdown(element, event) {
    if (window.innerWidth <= 768) {
        event.preventDefault();
        event.stopPropagation();
        const navItem = element.closest('.nav-item');
        
        // Close other dropdowns
        document.querySelectorAll('.nav-item.dropdown-open').forEach(item => {
            if (item !== navItem) {
                item.classList.remove('dropdown-open');
            }
        });
        
        navItem.classList.toggle('dropdown-open');
    }
}

// Check if current page
function isCurrentPage(pageName) {
    const path = window.location.pathname.toLowerCase();
    return path.includes(pageName.toLowerCase());
}

// ============================================
// GRID BUILDER
// ============================================
function initGrid() {
    const gridContainer = document.getElementById('galleryGrid');
    if (!gridContainer) return;

    const categoryId = gridContainer.getAttribute('data-category') || 'home';
    const images = CREATIVE_IMAGES[categoryId] || [];
    gridContainer.classList.add('cat-' + categoryId);
    injectGridStyles();

    if (images.length === 0) {
        gridContainer.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">📁</div>
                <h3>No Creatives Yet</h3>
                <p>Creative designs will appear here soon. Stay tuned!</p>
            </div>
        `;
        return;
    }

    let gridHTML = '';

    images.forEach((item, index) => {
        if (item.type === 'reel') {
            // Instagram Reel: cover image dikhao, click par seedha Instagram naye tab mein khule
            // thumb: Drive link ya apne project ka local path (jaise "images/reel-1.jpg")
            // thumbDriveId: Drive par jo video/image hai uska ID (download ki zaroorat nahi)
            const thumbSrc = item.thumbDriveId
                ? `https://drive.google.com/thumbnail?id=${item.thumbDriveId}&sz=w800`
                : item.thumb
                    ? (/^(https?:|data:)/.test(item.thumb) ? getThumbUrl(item.thumb) : getPathPrefix() + item.thumb)
                    : '';
            const hasThumb = !!thumbSrc;
            // thumbnail nahi diya => Instagram ka embed hi preview (cover) ban jata hai
            const cover = hasThumb
                ? `<img src="${thumbSrc}" alt="Instagram Reel" loading="lazy"
                        onload="this.classList.add('loaded')"
                        onerror="this.style.display='none'">`
                : `<iframe class="reel-preview" src="${getReelEmbedUrl(item.url)}" loading="lazy" scrolling="no" tabindex="-1"
                           title="Instagram Reel preview"
                           style="position:absolute;top:0;left:0;border:0;width:400px;height:711px;transform-origin:0 0;pointer-events:none;background:#fff;"></iframe>
                   <div style="position:absolute;inset:0;z-index:2;"></div>`;
            // FIX: reel hamesha seedha Instagram par redirect hogi (newTab flag ki zaroorat nahi)
            gridHTML += `
                <div class="gallery-item video-item reel-item"
                     onclick="window.open('${item.url}', '_blank', 'noopener')"
                     data-index="${index}"
                     style="background:linear-gradient(160deg,#833ab4,#fd1d1d,#fcb045);cursor:pointer;">
                    ${cover}
                    <div class="zoom-icon">▶</div>
                </div>
            `;
        } else if (item.type === 'video') {
            // Video thumbnail
            gridHTML += `
                <div class="gallery-item video-item" 
                     onclick="openLightbox(${index}, '${categoryId}')"
                     data-index="${index}">
                    <div class="skeleton"></div>
                    <img src="${getVideoThumbnail(item.url)}" 
                         alt="Creative Design" 
                         loading="lazy"
                         onload="this.classList.add('loaded')"
                         onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 400%22%3E%3Crect fill=%22%231a1a2e%22 width=%22400%22 height=%22400%22/%3E%3Ctext fill=%22%23666%22 font-size=%2240%22 x=%22150%22 y=%22210%22%3E🎬%3C/text%3E%3C/svg%3E'; this.classList.add('loaded')">
                    <div class="zoom-icon">▶</div>
                </div>
            `;
        } else {
            // Image
            const clickAction = item.projectUrl
                ? `window.open('${item.projectUrl}', '_blank')`
                : `openLightbox(${index}, '${categoryId}')`;
            gridHTML += `
                <div class="gallery-item" 
                     onclick="${clickAction}"
                     data-index="${index}">
                    <div class="skeleton"></div>
                    <img src="${getThumbUrl(item.url)}" 
                         alt="Creative Design" 
                         loading="lazy"
                         onload="this.classList.add('loaded')"
                         onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 400%22%3E%3Crect fill=%22%231a1a2e%22 width=%22400%22 height=%22400%22/%3E%3Ctext fill=%22%23666%22 font-size=%2240%22 x=%22140%22 y=%22210%22%3E🖼️%3C/text%3E%3C/svg%3E'; this.classList.add('loaded')">
                    <div class="zoom-icon">🔍</div>
                </div>
            `;
        }
    });

    gridContainer.innerHTML = gridHTML;
    fitReelPreviews();
    window.addEventListener('resize', fitReelPreviews);
}

// Reel preview iframe ko card ki width ke hisaab se scale karta hai
function fitReelPreviews() {
    document.querySelectorAll('.reel-item').forEach(card => {
        const f = card.querySelector('.reel-preview');
        if (!f) return;
        const w = card.clientWidth || 300;
        const h = card.clientHeight || (w * 16 / 9);
        const scale = w / 400;
        f.style.width = '400px';
        f.style.height = (h / scale) + 'px';
        f.style.transform = 'scale(' + scale + ')';
    });
}

// Instagram reel ka embed URL (jab thumbnail nahi diya ho)
function getReelEmbedUrl(url) {
    const clean = url.split('?')[0].replace(/\/?$/, '/');
    return clean + 'embed';
}

// Grid ke liye chhota (fast) image, lightbox mein full image
function getThumbUrl(url, width = 700) {
    if (url.includes('lh3.googleusercontent.com/d/') && !url.includes('=')) {
        return url + '=w' + width;
    }
    return url;
}

// Website screenshots ke liye grid style
function injectGridStyles() {
    if (document.getElementById('gridExtraStyles')) return;
    const st = document.createElement('style');
    st.id = 'gridExtraStyles';
    st.textContent = `
    .cat-website-ui .gallery-item { aspect-ratio: 16 / 9 !important; height: auto !important; min-height: 0 !important; overflow: hidden; }
    .cat-website-ui .gallery-item img { width: 100% !important; height: 100% !important; object-fit: cover !important; object-position: top center !important; }
    `;
    document.head.appendChild(st);
}

// Get video thumbnail from Google Drive
function getVideoThumbnail(videoUrl) {
    // Extract file ID from Google Drive URL
    const match = videoUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (match) {
        return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w800`;
    }
    // Fallback placeholder
    return 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 400%22%3E%3Crect fill=%22%231a1a2e%22 width=%22400%22 height=%22400%22/%3E%3Ctext fill=%22%23666%22 font-size=%2240%22 x=%22150%22 y=%22210%22%3E🎬%3C/text%3E%3C/svg%3E';
}
