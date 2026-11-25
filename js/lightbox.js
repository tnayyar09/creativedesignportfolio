// js/lightbox.js
// ============================================
// LIGHTBOX / BLACKBOX / SLIDESHOW LOGIC
// ============================================


// ============================================
// VIDEO / MOBILE FIX (styles injected from here)
// ============================================
(function injectLightboxVideoStyles() {
    const css = `
    .lightbox-content.is-video {
        position: relative;
        aspect-ratio: 9 / 16;          /* Instagram Reels */
        height: 86vh;
        height: min(86dvh, 820px);
        width: auto;
        max-width: 100vw;
        background: #000;
        border-radius: 12px;
        overflow: hidden;
    }
    .lightbox-content.is-video iframe {
        width: 100% !important;
        height: 100% !important;
        max-width: none !important;
        max-height: none !important;
        border: 0;
        display: block;
        background: #000;
        filter: none !important;
    }
    /* Drive ka top-right pop-out icon block */
    .lightbox-content.is-video::after {
        content: "";
        position: absolute; top: 0; right: 0;
        width: 64px; height: 64px;
        z-index: 2;
    }
    /* grid: video cards 9:16 */
    .gallery-item.video-item { aspect-ratio: 9 / 16; overflow: hidden; }
    .gallery-item.video-item img { width: 100%; height: 100%; object-fit: cover; }

    @media (max-width: 768px) {
        .lightbox-content.is-video {
            height: 80vh;
            height: 80dvh;             /* width auto = height * 9/16 */
            border-radius: 10px;
        }
        /* arrows neeche, taaki video ke upar na aayein */
        .lightbox-nav {
            top: auto !important;
            bottom: 18px !important;
            transform: none !important;
        }
        .lightbox-prev { left: 28% !important; right: auto !important; }
        .lightbox-next { right: 28% !important; left: auto !important; }
    }`;
    const st = document.createElement('style');
    st.textContent = css;
    document.head.appendChild(st);
})();

let currentLightboxIndex = 0;
let currentLightboxImages = [];
let touchStartX = 0;
let touchEndX = 0;

// ============================================
// OPEN LIGHTBOX
// ============================================
function openLightbox(index, categoryId) {
    currentLightboxImages = CREATIVE_IMAGES[categoryId] || [];
    currentLightboxIndex = index;

    if (currentLightboxImages.length === 0) return;

    const overlay = document.getElementById('lightboxOverlay');
    if (!overlay) createLightboxElement();

    showLightboxContent();
    document.getElementById('lightboxOverlay').classList.add('active');
    document.body.classList.add('lightbox-open');

    // Add keyboard listeners
    document.addEventListener('keydown', handleLightboxKeys);
}

// ============================================
// CREATE LIGHTBOX DOM (if not exists)
// ============================================
function createLightboxElement() {
    const lightboxHTML = `
        <div class="lightbox-overlay" id="lightboxOverlay">
            <button class="lightbox-close" id="lightboxClose" title="Close (Esc)">✕</button>
            <button class="lightbox-nav lightbox-prev" id="lightboxPrev" title="Previous (←)">❮</button>
            <button class="lightbox-nav lightbox-next" id="lightboxNext" title="Next (→)">❯</button>
            <div class="lightbox-container">
                <div class="lightbox-content" id="lightboxContent"></div>
            </div>
            <div class="lightbox-counter" id="lightboxCounter"></div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', lightboxHTML);

    // Event Listeners
    document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
    document.getElementById('lightboxPrev').addEventListener('click', showPrevImage);
    document.getElementById('lightboxNext').addEventListener('click', showNextImage);
    
    document.getElementById('lightboxOverlay').addEventListener('click', function(e) {
        if (e.target === this || e.target.classList.contains('lightbox-container')) {
            closeLightbox();
        }
    });

    // Touch/Swipe support
    const container = document.getElementById('lightboxOverlay');
    container.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    container.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
}

// ============================================
// SHOW LIGHTBOX CONTENT
// ============================================
function showLightboxContent() {
    const content = document.getElementById('lightboxContent');
    const counter = document.getElementById('lightboxCounter');
    const item = currentLightboxImages[currentLightboxIndex];

    if (!item) return;

    content.classList.toggle('is-video', item.type === 'video');

    if (item.type === 'video') {
        content.innerHTML = `
            <iframe src="${item.url}" 
                    allowfullscreen
                    allow="autoplay; encrypted-media; fullscreen"
                    title="Creative Video">
            </iframe>
        `;
    } else {
        content.innerHTML = `
            <img src="${item.url}" 
                 alt="Creative Design"
                 onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 600%22%3E%3Crect fill=%22%231a1a2e%22 width=%22800%22 height=%22600%22/%3E%3Ctext fill=%22%23666%22 font-size=%2240%22 x=%22280%22 y=%22310%22%3EImage not found%3C/text%3E%3C/svg%3E'">
        `;
    }

    counter.textContent = `${currentLightboxIndex + 1} / ${currentLightboxImages.length}`;

    // Update nav button visibility
    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');
    
    prevBtn.style.opacity = currentLightboxImages.length <= 1 ? '0.3' : '1';
    nextBtn.style.opacity = currentLightboxImages.length <= 1 ? '0.3' : '1';
    prevBtn.style.pointerEvents = currentLightboxImages.length <= 1 ? 'none' : 'auto';
    nextBtn.style.pointerEvents = currentLightboxImages.length <= 1 ? 'none' : 'auto';
}

// ============================================
// NAVIGATION
// ============================================
function showPrevImage() {
    if (currentLightboxImages.length <= 1) return;
    currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxImages.length) % currentLightboxImages.length;
    showLightboxContent();
}

function showNextImage() {
    if (currentLightboxImages.length <= 1) return;
    currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxImages.length;
    showLightboxContent();
}

// ============================================
// CLOSE LIGHTBOX
// ============================================
function closeLightbox() {
    const overlay = document.getElementById('lightboxOverlay');
    if (overlay) {
        overlay.classList.remove('active');
    }
    document.body.classList.remove('lightbox-open');
    document.removeEventListener('keydown', handleLightboxKeys);

    // Stop any playing videos
    const content = document.getElementById('lightboxContent');
    if (content) {
        const iframe = content.querySelector('iframe');
        if (iframe) iframe.src = '';
        content.innerHTML = '';
    }
}

// ============================================
// KEYBOARD CONTROLS
// ============================================
function handleLightboxKeys(e) {
    switch(e.key) {
        case 'Escape':
            closeLightbox();
            break;
        case 'ArrowLeft':
            showPrevImage();
            break;
        case 'ArrowRight':
            showNextImage();
            break;
    }
}

// ============================================
// SWIPE HANDLING
// ============================================
function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            showNextImage(); // Swipe left = next
        } else {
            showPrevImage(); // Swipe right = prev
        }
    }
}
