// js/lightbox.js
// ============================================
// LIGHTBOX (images + Google Drive videos)
// Mobile-friendly, self-contained (CSS injected from here)
// Needs: CREATIVE_IMAGES (config.js), openLightbox(index, categoryId) called from app.js
// ============================================

(function () {
    // ---------- STYLES ----------
    const css = `
    body.lightbox-open { overflow: hidden; }

    .clb {
        position: fixed; inset: 0; z-index: 99999;
        display: none; align-items: center; justify-content: center;
        background: rgba(0,0,0,.92);
        -webkit-tap-highlight-color: transparent;
    }
    .clb.open { display: flex; }

    .clb-stage {
        position: relative;
        display: flex; align-items: center; justify-content: center;
        width: 100%; height: 100%;
        padding: 56px 0 24px;
        box-sizing: border-box;
    }

    .clb-img {
        max-width: 94vw; max-height: 100%;
        object-fit: contain; border-radius: 8px;
        user-select: none; -webkit-user-drag: none;
    }

    /* video frame: letterboxes inside, so portrait + landscape both work */
    .clb-video {
        position: relative;
        width: min(94vw, 1000px);
        height: min(78vh, 78dvh, 600px);
        background: #000; border-radius: 10px; overflow: hidden;
    }
    .clb-video iframe { width: 100%; height: 100%; border: 0; display: block; }

    /* blocks Drive's top-right "pop-out" icon */
    .clb-video::after {
        content: ""; position: absolute; top: 0; right: 0;
        width: 64px; height: 64px; z-index: 2;
    }

    .clb-btn {
        position: absolute; z-index: 5;
        width: 44px; height: 44px; border: 0; border-radius: 50%;
        background: rgba(255,255,255,.15); color: #fff;
        font-size: 22px; line-height: 44px; text-align: center; cursor: pointer;
        backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
    }
    .clb-btn:hover { background: rgba(255,255,255,.3); }
    .clb-close { top: 8px; right: 12px; }
    .clb-prev  { left: 12px;  top: 50%; transform: translateY(-50%); }
    .clb-next  { right: 12px; top: 50%; transform: translateY(-50%); }
    .clb-count {
        position: absolute; top: 18px; left: 16px; z-index: 5;
        color: #ddd; font: 14px/1 sans-serif;
    }

    @media (max-width: 768px) {
        .clb-stage { padding: 56px 0 16px; }
        .clb-video {
            width: 100vw; border-radius: 0;
            height: min(80vh, 80dvh);
        }
        .clb-img { max-width: 100vw; border-radius: 0; }
        /* arrows move to bottom so they don't cover the video */
        .clb-prev, .clb-next { top: auto; bottom: 14px; transform: none; }
        .clb-prev { left: calc(50% - 56px); }
        .clb-next { right: calc(50% - 56px); }
        .clb-video, .clb-img { margin-bottom: 56px; }
    }`;

    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    // ---------- DOM ----------
    const box = document.createElement('div');
    box.className = 'clb';
    box.innerHTML = `
        <div class="clb-count"></div>
        <button class="clb-btn clb-close" aria-label="Close">✕</button>
        <button class="clb-btn clb-prev" aria-label="Previous">‹</button>
        <button class="clb-btn clb-next" aria-label="Next">›</button>
        <div class="clb-stage"></div>`;

    function mount() { document.body.appendChild(box); }
    if (document.body) mount();
    else document.addEventListener('DOMContentLoaded', mount);

    const stage = box.querySelector('.clb-stage');
    const countEl = box.querySelector('.clb-count');

    let items = [];
    let current = 0;

    // ---------- RENDER ----------
    function render() {
        const item = items[current];
        if (!item) return;

        stage.innerHTML = '';  // old iframe removed => video stops playing

        if (item.type === 'video') {
            const wrap = document.createElement('div');
            wrap.className = 'clb-video';
            const f = document.createElement('iframe');
            f.src = item.url;
            f.allow = 'autoplay; fullscreen';
            f.setAttribute('allowfullscreen', '');
            wrap.appendChild(f);
            stage.appendChild(wrap);
        } else {
            const img = document.createElement('img');
            img.className = 'clb-img';
            img.src = item.url;
            img.alt = 'Creative Design';
            img.draggable = false;
            stage.appendChild(img);
        }

        countEl.textContent = (current + 1) + ' / ' + items.length;
        const multi = items.length > 1;
        box.querySelector('.clb-prev').style.display = multi ? '' : 'none';
        box.querySelector('.clb-next').style.display = multi ? '' : 'none';
    }

    // ---------- OPEN / CLOSE / NAV ----------
    window.openLightbox = function (index, categoryId) {
        const list = (typeof CREATIVE_IMAGES !== 'undefined' && CREATIVE_IMAGES[categoryId]) || [];
        const item = list[index];
        if (!item) return;

        // website designs: click => open live site
        if (item.projectUrl) {
            window.open(item.projectUrl, '_blank');
            return;
        }

        items = list;
        current = index;
        render();
        box.classList.add('open');
        document.body.classList.add('lightbox-open');
    };

    function closeLightbox() {
        box.classList.remove('open');
        stage.innerHTML = '';   // stop video
        document.body.classList.remove('lightbox-open');
    }
    window.closeLightbox = closeLightbox;

    function go(step) {
        if (!items.length) return;
        current = (current + step + items.length) % items.length;
        render();
    }

    box.querySelector('.clb-close').addEventListener('click', closeLightbox);
    box.querySelector('.clb-prev').addEventListener('click', () => go(-1));
    box.querySelector('.clb-next').addEventListener('click', () => go(1));

    // click on dark background closes
    box.addEventListener('click', (e) => {
        if (e.target === box || e.target === stage) closeLightbox();
    });

    // keyboard
    document.addEventListener('keydown', (e) => {
        if (!box.classList.contains('open')) return;
        if (e.key === 'Escape') closeLightbox();
        else if (e.key === 'ArrowLeft') go(-1);
        else if (e.key === 'ArrowRight') go(1);
    });

    // swipe (images only; on videos the iframe takes the touches)
    let sx = 0;
    stage.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; }, { passive: true });
    stage.addEventListener('touchend', (e) => {
        const dx = e.changedTouches[0].clientX - sx;
        if (Math.abs(dx) > 60) go(dx < 0 ? 1 : -1);
    }, { passive: true });
})();
