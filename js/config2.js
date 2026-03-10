// js/config.js
// ============================================
// MASTER CONFIGURATION FILE
// ============================================

const SITE_CONFIG = {
    siteName: "CreativeHub",
    tagline: "Showcasing Creative Excellence",
    heroTitle: "Welcome to Our Creative Portfolio",
    heroSubtitle: "Explore stunning designs crafted with passion and precision"
};

const CATEGORIES = [
    {
        id: "branding",
        name: "Branding",
        icon: "🎨",
        subcategories: [
            //{ id: "logo-design", name: "Logo Design", page: "pages/logo-design.html" },
           // { id: "brand-identity", name: "Brand Identity", page: "pages/brand-identity.html" },
            //{ id: "business-cards", name: "Business Cards", page: "pages/business-cards.html" },
            //{ id: "letterhead", name: "Letterhead", page: "pages/letterhead.html" },
		    { id: "garments-poster-designs", name: "Garments Poster Designs", page: "pages/garments-poster-designs.html" }
        ]
    },
   // {
      //  id: "social-media",
      //  name: "Social Media",
       // icon: "📱",
       // subcategories: [
           // { id: "social-media-posts", name: "Posts", page: "pages/social-media-posts.html" }
         //   { id: "story-designs", name: "Story Designs", page: "pages/story-designs.html" },
          //  { id: "banner-ads", name: "Banner Ads", page: "pages/banner-ads.html" },
          //  { id: "carousel-posts", name: "Carousel Posts", page: "pages/carousel-posts.html" }
       // ]
  //  },
   // {
      //  id: "print-design",
      //  name: "Print Design",
      //  icon: "🖨️",
      //  subcategories: [
      //      { id: "brochures", name: "Brochures", page: "pages/brochures.html" },
      //      { id: "flyers", name: "Flyers", page: "pages/flyers.html" },
      //      { id: "posters", name: "Posters", page: "pages/posters.html" },
       //     { id: "catalogs", name: "Catalogs", page: "pages/catalogs.html" }
       // ]
   // },
    {
        id: "ui-ux",
        name: "UI/UX Design",
        icon: "💻",
        subcategories: [
            { id: "website-ui", name: "Website UI", page: "pages/website-ui.html" }
           // { id: "app-ui", name: "App UI", page: "pages/app-ui.html" },
           // { id: "landing-pages", name: "Landing Pages", page: "pages/landing-pages.html" },
           // { id: "dashboards", name: "Dashboards", page: "pages/dashboards.html" }
        ]
    },
    {
       id: "video",
        name: "Video & Motion",
        icon: "🎬",
        subcategories: [
        //    { id: "motion-graphics", name: "Motion Graphics", page: "pages/motion-graphics.html" },
           { id: "video-ads", name: "Garments Video Ads", page: "pages/video-ads.html" }
          // { id: "reels", name: "Reels", page: "pages/reels.html" },
          // { id: "animations", name: "Animations", page: "pages/animations.html" }
       ]
    },

    // ============================================
    // 🆕 NEW CATEGORIES ADDED
    // ============================================
    {
        id: "kids-collection",
        name: "Kids Collection",
        icon: "👶",
        subcategories: [
            { id: "kids-photoshoots", name: "Kids Photoshoots", page: "pages/kids-photoshoots.html" },
            { id: "kids-tshirts-designs", name: "Kids T-Shirts Designs", page: "pages/kids-tshirts-designs.html" }
        ]
    },
    {
        id: "mens-collection",
        name: "Men's Collection",
        icon: "👔",
        subcategories: [
            { id: "mens-tshirts-designs", name: "Men's T-Shirts Designs", page: "pages/mens-tshirts-designs.html" },
            { id: "men-photoshoots", name: "Men Photoshoots", page: "pages/men-photoshoots.html" }
        ]
    },
    {
        id: "ladies-collection",
        name: "Ladies Collection",
        icon: "👗",
        subcategories: [
            { id: "ladies-kurtis-designs", name: "Ladies Kurtis Designs", page: "pages/ladies-kurtis-designs.html" },
            { id: "ladies-suits-designs", name: "Ladies Suits Designs", page: "pages/ladies-suits-designs.html" }
        ]
    }
];

// ============================================
// CREATIVE IMAGES DATA
// ============================================

const designData = {
    "website-ui": [
     //   { 
         //   url: "https://lh3.googleusercontent.com/d/1yz1-mOVPjwaKdWhtZC-MiuYVW84PN92N", 
          //  type: "image",
          //  projectUrl: "https://tnayyar09.github.io/my-html-project/Clinic-1.0.0/"  // ✅ Redirect URL
    //    },
        { 
            url: "https://lh3.googleusercontent.com/d/1kkKQHtt1TJMH4tXaFq6LhwCmtlxIkWkr", 
            type: "image",
            projectUrl: "https://tnayyar09.github.io/3drealweb/3d"
        },
        { 
            url: "https://lh3.googleusercontent.com/d/17pyQraF87h5yqrINOV59jFTfQrxMT3fP", 
            type: "image",
            projectUrl: "https://tnayyar09.github.io/luxe3dwebsite/"
        }
    ],
};

// Helper functions
function getGoogleDriveDirectLink(fileId) {
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
}

function getGoogleDriveVideoLink(fileId) {
    return `https://drive.google.com/file/d/${fileId}/preview`;
}

function getPathPrefix() {
    const path = window.location.pathname;
    if (path.includes('/pages/')) {
        return '../';
    }
    return '';
}