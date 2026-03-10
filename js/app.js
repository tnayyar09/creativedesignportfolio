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
        if (item.type === 'video') {
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
            gridHTML += `
                <div class="gallery-item" 
                     onclick="openLightbox(${index}, '${categoryId}')"
                     data-index="${index}">
                    <div class="skeleton"></div>
                    <img src="${item.url}" 
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
}

// Get video thumbnail from Google Drive
function getVideoThumbnail(videoUrl) {
    // Extract file ID from Google Drive URL
    const match = videoUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (match) {
        return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w400`;
    }
    // Fallback placeholder
    return 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 400%22%3E%3Crect fill=%22%231a1a2e%22 width=%22400%22 height=%22400%22/%3E%3Ctext fill=%22%23666%22 font-size=%2240%22 x=%22150%22 y=%22210%22%3E🎬%3C/text%3E%3C/svg%3E';
}

// ============================================
//  GALLERY RENDERING
// ============================================
function renderGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;

    const category = galleryGrid.getAttribute('data-category');
    const designs = designData[category];

    if (!designs || designs.length === 0) {
        galleryGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align:center; padding:60px 20px;">
                <div style="font-size:80px; margin-bottom:20px;">📭</div>
                <h2 style="color:#fff;">No Designs Yet</h2>
                <p style="color:#888;">Coming soon!</p>
            </div>
        `;
        return;
    }

    // ✅ Loop through designs
    designs.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'design-card';
        card.style.animationDelay = `${index * 0.1}s`;

        // ========== IMAGE ==========
        if (item.type === "image") {
            card.innerHTML = `
                <div class="card-image-container">
                    <img 
                        src="${item.url}" 
                        alt="${item.title || 'Design'}" 
                        class="card-image"
                        loading="lazy"
                        onerror="this.src='https://via.placeholder.com/400x300/1a1a2e/ffffff?text=Image+Not+Found'"
                    >
                </div>
                ${item.projectUrl ? `
                    <div class="card-bottom">
                        <a href="${item.projectUrl}" target="_blank" class="btn-visit-project">
                            🔗 Visit Project
                        </a>
                    </div>
                ` : ''}
            `;
        }

        // ========== VIDEO ==========
        else if (item.type === "video") {
            card.innerHTML = `
                <div class="card-video-container">
                    <iframe 
                        src="${item.url}" 
                        width="100%" 
                        height="300" 
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                        class="card-video">
                    </iframe>
                </div>
            `;
        }

        // ========== INSTAGRAM ==========
        else if (item.type === "instagram") {
            card.innerHTML = `
                <div class="card-instagram-container">
                    <iframe 
                        src="${item.url}" 
                        width="100%" 
                        height="480" 
                        frameborder="0"
                        scrolling="no"
                        class="card-instagram">
                    </iframe>
                </div>
            `;
        }

        galleryGrid.appendChild(card);
    });
}