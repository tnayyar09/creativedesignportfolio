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
        id: "social-media",
        name: "Social Media Creatives",
        icon: "📱",
        subcategories: [
            { id: "social-media-posts", name: "Posts", page: "pages/social-media-posts.html" },
			{ id: "posters", name: "Posters", page: "pages/posters.html" }
           // { id: "story-designs", name: "Story Designs", page: "pages/story-designs.html" }
          //  { id: "banner-ads", name: "Banner Ads", page: "pages/banner-ads.html" },
          //  { id: "carousel-posts", name: "Carousel Posts", page: "pages/carousel-posts.html" }
        ]
   },

    {
        id: "ui-ux",
        name: "Website Designs",
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
            { id: "video-editing", name: "Video Editing Samples", page: "pages/video-ads.html" }
        //    { id: "motion-graphics", name: "Motion Graphics", page: "pages/motion-graphics.html" },
          // { id: "reels", name: "Reels", page: "pages/reels.html" },
          // { id: "animations", name: "Animations", page: "pages/animations.html" }
       ]
    }
];


// ============================================
// CREATIVE IMAGES DATA
// ============================================

const designData = {
    "website-ui": [
        { 
          url: "https://lh3.googleusercontent.com/d/1mIHPe25pv2EIWmJUeMG---Sw8cLzcrHj", 
            type: "image",
            projectUrl: "https://tnayyar09.github.io/my-html-project/Clinic-1.0.0/index.html"  // ✅ Redirect URL
       },
        { 
            url: "https://lh3.googleusercontent.com/d/1GRH60EcZ-T31Wb4SdGXt74jXlXR83PUI", 
            type: "image",
            projectUrl: "https://tnayyar09.github.io/3drealweb/3d"
        },
		{ 
            url: "https://lh3.googleusercontent.com/d/1ZWaP54RhYWeTV94_MW4M6Ec41w8sSeVI", 
            type: "image",
            projectUrl: "https://tnayyar09.github.io/roccos/"
        },
	    { 
            url: "https://lh3.googleusercontent.com/d/1I4-_DCmskUt5snsJ4o2816MO-sk3pLGb", 
            type: "image",
            projectUrl: "https://tnayyar09.github.io/salon/"
        },
		{ 
            url: "https://lh3.googleusercontent.com/d/1rAQAxrXe9cm1fjZQlLuohOeykYPizmk6", 
            type: "image",
            projectUrl: "https://tnayyar09.github.io/bakery/index.html"
        },

		{ 
            url: "https://lh3.googleusercontent.com/d/1VoFALqVtaBbCLDcXUKsycPAcwtW226W-", 
            type: "image",
            projectUrl: "https://tnayyar09.github.io/immigration/"
        },
		{ 
            url: "https://lh3.googleusercontent.com/d/1EwNAXPjzzBerEUay8FR6wT5B-LZOXeb7", 
            type: "image",
            projectUrl: "https://tnayyar09.github.io/property/"
        },
		{ 
            url: "https://lh3.googleusercontent.com/d/1b2WPRZe0Vf9U8XmhqihQGQVkhJ7Unp7v", 
            type: "image",
            projectUrl: "https://tnayyar09.github.io/restfeast/"
        },
		{ 
            url: "https://lh3.googleusercontent.com/d/1RoEIdmc2icmhO9XHixko7557073fCybW", 
            type: "image",
            projectUrl: "https://tnayyar09.github.io/immihelp/index.html"
        },
		{ 
            url: "https://lh3.googleusercontent.com/d/1qngTZDxinWXWf9j380WjZK_-qTRgTCN7", 
            type: "image",
            projectUrl: "https://tnayyar09.github.io/beautyparlor/index.html"
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
