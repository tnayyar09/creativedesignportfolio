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
            { id: "website-ui", name: "Website Designs", page: "pages/website-ui.html" }
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

const CREATIVE_IMAGES = {
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
	  "video-editing": [
  // Cafe Videos
  { url: "https://drive.google.com/file/d/1b2P0GphEFj4PJOXAE-Vijrcc65_lIBeR/preview", type: "video", name: "cafe-1.mp4" },
  { url: "https://drive.google.com/file/d/1sak3bAx8AsryorAuilzryAz-Uds0cb8F/preview", type: "video", name: "cafe-2.mp4" },
  { url: "https://drive.google.com/file/d/1-rWZLrDEvyED2VQRZ96Y7XZ0i1iVyPTI/preview", type: "video", name: "cafe-3.mp4" },
  { url: "https://drive.google.com/file/d/1iKkvzuvr89mp23jF9hkcq_wveS_Hoa-X/preview", type: "video", name: "cafe-4.mp4" },

  // Car Showroom Videos
  { url: "https://drive.google.com/file/d/15Z_rRhOLwvyD8K23vrvouJmgbpMkZu6k/preview", type: "video", name: "Car Showroom-1.mp4" },
  { url: "https://drive.google.com/file/d/1XEsd5vgpqX_TUtFjpjw_LftgwJJac8Dv/preview", type: "video", name: "Car Showroom-2.mp4" },

  // Clothing Videos
  { url: "https://drive.google.com/file/d/1DmMm0IatB4Cv9-vEu39NvQaho1KqO5OF/preview", type: "video", name: "clothing-1.mp4" },
  { url: "https://drive.google.com/file/d/1YYjoCKWCitOLaDXL3m-Pd6GKWAHeIZqd/preview", type: "video", name: "clothing-2.mp4" },
  { url: "https://drive.google.com/file/d/1zgJul6zbcEmMyJnwOZfKJeFpCbOc__aq/preview", type: "video", name: "clothing-3.mp4" },
  { url: "https://drive.google.com/file/d/1xQ5-qHgIWmRRutksXSERJJgF0w_fxmeh/preview", type: "video", name: "clothing-4.mp4" },

  // Motion Graphic
  { url: "https://drive.google.com/file/d/1m1y3HuOsif3gnHHeYl40WLXfFSVvloD4/preview", type: "video", name: "Motion- Graphic Reel.mp4" },

  // Real Estate Videos
  { url: "https://drive.google.com/file/d/1Dxr0aSSOsd5IJadcTtO3gGVAes9pcSSy/preview", type: "video", name: "real estate-1.mp4" },
  { url: "https://drive.google.com/file/d/1ctz6uxKQ4ac-ouhW9eajvAiQHEeGMFfZ/preview", type: "video", name: "real estate-2.mp4" },
  { url: "https://drive.google.com/file/d/1MjvXuRXTOPDHPDBHB1ee1CqWxTvT75_e/preview", type: "video", name: "real estate-3.mp4" },
  { url: "https://drive.google.com/file/d/10K2qpXe4isy4v1CZZpaFa7w51kK8Npdn/preview", type: "video", name: "real estate-4.mp4" },
  { url: "https://drive.google.com/file/d/1JW4OvFYyX88DAGKyJvTauHtc3zPjCOit/preview", type: "video", name: "real estate-5.mp4" },
  { url: "https://drive.google.com/file/d/1yGSrjl9NwvcMO7XLz9DiWYTqoJe69wPW/preview", type: "video", name: "real estate-6.mp4" },

  // Restaurant Videos
  { url: "https://drive.google.com/file/d/1LwycElG8yIpXr_AsWEUkyAZXfgsdmk6k/preview", type: "video", name: "Restaurant-1.mp4" },
  { url: "https://drive.google.com/file/d/1q92q2orSoVchKbT1eVq8eitTh-wuhze4/preview", type: "video", name: "Restaurant-2.mp4" },

  // Travel Videos
  { url: "https://drive.google.com/file/d/1VhiYWDXi27e_-Mq2anaIKBNDar11veQl/preview", type: "video", name: "Travel-1.mp4" },
  { url: "https://drive.google.com/file/d/1O6uSm5ZB1-mruSy5WPd4dbRZ2AXv-QkD/preview", type: "video", name: "Travel-2.mp4" },
  { url: "https://drive.google.com/file/d/1po0p8c_obrt-ahSm60HDiIgwZ-qx507s/preview", type: "video", name: "Travel-3.mp4" }
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
