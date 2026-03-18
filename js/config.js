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
    {
        id: "social-media",
        name: "Social Media",
        icon: "📱",
        subcategories: [
            { id: "social-media-posts", name: "Posts", page: "pages/social-media-posts.html" }
         //   { id: "story-designs", name: "Story Designs", page: "pages/story-designs.html" },
          //  { id: "banner-ads", name: "Banner Ads", page: "pages/banner-ads.html" },
          //  { id: "carousel-posts", name: "Carousel Posts", page: "pages/carousel-posts.html" }
        ]
   },
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

const CREATIVE_IMAGES = {

    // HOME PAGE
    "home": [
{ url: "https://lh3.googleusercontent.com/d/1g-we7bXsIgv8wKi1cubtxi--dUuHItvI", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1TBHilylJOkKV_CVAmjbLlCdKYwDdsW6g", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1TisLvh-JkWBz3enQah4CVWq072w3Sukg", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1OZlQQkdciYlOV6HhFuTgBat7l_6kymxq", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1JBM7miHWtVg1K7x704Nmb1CiqlAc-t8m", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1i1173jYYcuBgLtLMT7Eqx8m0iPuxIa8o", type: "image" },		
{ url: "https://lh3.googleusercontent.com/d/1Agzge37-zMxEYwieKq-saXaNBIGz6czf", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1Bni7dy3IFqsFzuBvUR8MXpc79uj-ibAL", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1yE_WRb1GnOwABIPVZYMYl2BcuOZMrx1h", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1rzh71NMqgbNze_YcpY1wnuydKqPBVZmm", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/12mWABHjxb0dLWYiJg1luFi12H1ZaooNy", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1LCjGzyexkRDySBgPA8vOpRhTHCPvsDyW", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/10cgzxljbh8sw35EWWUh_yaNiP_PtX3I0", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1Xsr5TEpepclJuJ405E8x6IyA4ruSkOYC", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1ZVOwNIzsFzc2_PPdtBFluNDBJaZHPYSW", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1dznY4s1dFz5bQ1f3zskNVV9236FV4bAU", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1dh70BlVLl7a8Xar6Y-Thm2H8hLT8rnez", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1R-V8XTWbsAQeoJx1dbRScWjXs7SkhsgJ", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1cDjD8eDeNdnRojcxMLFPOvTRy-I8YIJe", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1fRP8gVfFV0_c3M4n2qiQjVUsG9SI0VWe", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1YE_E6J6UpQmbrzRRKpA0kdfOCsG7ROXD", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1JDddGrna8uQXAuccathvkZcyGj48V-uI", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1yEOPyVzBwwI3vxVmLDVbqSYHfQQZvMGq", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1pQey9bqNqO2kHDQ8dTbVgLwhSitCQxww", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/12qDGPoch9z4QvwaUKb27RcDe3xCwl9GQ", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/171P2B-BwvdwR4ABo4O-n4AtRIFzHTcx-", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/16L6SHltexOtRrgATaIOicY8-fTK6gNSa", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1WF5250FIHKdHiSPGwTJ2MdQpLxwE0BnQ", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1mBhiPCL-OBt3vnDAEpwGXlHwbkiuau7c", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1f0LWKisYEFycwTPeNRZdZNjd07cYVRMJ", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/18D4KMTtERDC76nJ7pd1Q2J0Wy24vx88W", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/14L6EpQQVbKwkU-Et7sOmpO-HpnxcZJyn", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1gyUY8MMV2jvyQbRFJ4L7RVxTo5MbqGiF", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/15x9ET9eT2B6P-SGDsu4zzT5_sLGFe6R2", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1KVx-2qbxhAFiJEhIGFkRo01UrFHoCUEf", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1TC_ddMtsPEz2fc3stwv04v-DDlQE1dB1", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1xi4iDCzpGucIN6_DU1ZFuugv_iEVFzyh", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1-Zclo7UU8Qq5dCUXzwBwxsSPx1fjSkrH", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/18Zi16z04Syj_AMDcuvB7nCnXhJR8Ufrt", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1H6iUjNYJg8h2kYCR5Ja5jSSHet6e9wm2", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1YLmAjw6cZrBKKDD2WCPEnCaAUGI4LPxe", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1OpL11fPCX1sviUc_PEyXHLuW3vuOutNL", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1aB5KBnRBowHr-GalYARllrwEzYnU0BM_", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1yanKhA7-eRfw3vWQ6G0rYl3YqoTn6m0H", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1bQz0mjTJddFpoJFTxVQ0YCj_IeitN-i0", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1ZQXN5PyGpiVZgT-8QrlokXbQ9JRgAI0c", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1ckn9KsI9ama6qqplxrNeL5S_2roR3yLN", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1Aoux7RdnFpRuZIkof621sDK1sirDtR09", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1CGvcIgQ9F_7_dUloancFiBEbR8mK7Mwd", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1_5Yo0s1B_hfliFumweLhWuNP0dehGUM1", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1_D8V2dpg4JBkBrt51Wz4pH1BkvrSYyqy", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1cDLLGfuAySZORXzMNqFjJUPEbL0sUiyA", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1KG5i_ulY-NT0p7JieLB9V0T_QB0cpFWg", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1VEW_KNk8Q9aBezwhZAM-aOvyp3-mR70E", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1ISfMWaf9bOY4FllN1KREBZSj7Uzbf0ZM", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1BHuCZRyUPijuVLPq7JEsJk6Enhbq56o8", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1gP47ydHB8o1YC-tL4SCxp4ACStqFyhGK", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1m1a2YAs09fD2jipwVXz-lOZ0IAIJBLkw", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1Yxu295zqTfTWz_C5O2FAi2r8P_vINGf7", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1mnecSsj3w2kXpKHAW516TDqWV8fgaurz", type: "image" }



    ],

    // BRANDING
    "logo-design": [
        { url: "https://drive.google.com/uc?export=view&id=REPLACE_LOGO_1", type: "image" },
        { url: "https://drive.google.com/uc?export=view&id=REPLACE_LOGO_2", type: "image" },
        { url: "https://drive.google.com/uc?export=view&id=REPLACE_LOGO_3", type: "image" },
        { url: "https://drive.google.com/uc?export=view&id=REPLACE_LOGO_4", type: "image" },
        { url: "https://drive.google.com/uc?export=view&id=REPLACE_LOGO_5", type: "image" },
        { url: "https://drive.google.com/uc?export=view&id=REPLACE_LOGO_6", type: "image" }
    ],

    "brand-identity": [
        { url: "https://drive.google.com/uc?export=view&id=REPLACE_BRAND_1", type: "image" },
        { url: "https://drive.google.com/uc?export=view&id=REPLACE_BRAND_2", type: "image" },
        { url: "https://drive.google.com/uc?export=view&id=REPLACE_BRAND_3", type: "image" }
    ],

    "business-cards": [
        { url: "https://drive.google.com/uc?export=view&id=REPLACE_CARD_1", type: "image" },
        { url: "https://drive.google.com/uc?export=view&id=REPLACE_CARD_2", type: "image" },
        { url: "https://drive.google.com/uc?export=view&id=REPLACE_CARD_3", type: "image" }
    ],

    "letterhead": [
        { url: "https://drive.google.com/uc?export=view&id=REPLACE_LH_1", type: "image" }
    ],
	
	    "garments-poster-designs": [
        { url: "https://lh3.googleusercontent.com/d/1vgMlAzK65V9XU4pPYmNdir5M-ffV_jDt", type: "image" },
		 { url: "https://lh3.googleusercontent.com/d/1DnfyNMClXWx4S9XALDd5DgSUIfSOtWpT", type: "image" },
		{ url: "https://lh3.googleusercontent.com/d/1fEeg2qL1s2tGVe6xwlmoJQtyQKkJgZX4", type: "image" },
		{ url: "https://lh3.googleusercontent.com/d/1yHDlgeB4qt7WS1-MBEfjC61pCtz7MuJR", type: "image" },
		{ url: "https://lh3.googleusercontent.com/d/1FCDcOP8OTPXRl0AIYEbqXz71XiYtkXZ5", type: "image" },
		{ url: "https://lh3.googleusercontent.com/d/1uIaLX-7qp_vYwwhDmhOOuaLCjqg8dfBI", type: "image" }
    ],


    // SOCIAL MEDIA
    "social-media-posts": [
        { url: "https://lh3.googleusercontent.com/d/1Zp-gSeqfoZqw1VwifJQZI7QJGH4Xfcw8", type: "image" },
		{ url: "https://lh3.googleusercontent.com/d/1T2nBMhyUne7baAHu5GRrj7fGQ8TmLNUg", type: "image" },
	    { url: "https://lh3.googleusercontent.com/d/1-JcvCtTDYd8oxv4jxDK7HFeEqWcn8opN", type: "image" },
	    { url: "https://lh3.googleusercontent.com/d/1CmNHDIbMhlfSf9pA0fO565TPdwC94nQJ", type: "image" },
		{ url: "https://lh3.googleusercontent.com/d/1t5clo0PH6bokkbJM9pWX_U4VRZ4DGR-o", type: "image" },
		{ url: "https://lh3.googleusercontent.com/d/1CxwlBZtgPcswBSu8NdIRDx0NUa_S3_SL", type: "image" },
		{ url: "https://lh3.googleusercontent.com/d/1STgiirhJ7KMJfQ0dlCLzKjf9RRHHPjny", type: "image" },
		{ url: "https://lh3.googleusercontent.com/d/1kv4bqWZckWmyxh3FE54CUORXXo1ADOXR", type: "image" },
		{ url: "https://lh3.googleusercontent.com/d/1X7NZdl5zAfE2xXcgBIjpgObHMiJUf_Vs", type: "image" },
		{ url: "https://lh3.googleusercontent.com/d/1Jo3_X_gB1Qz1lxRp8eGnZmi7r4uNCBOj", type: "image" },
		{ url: "https://lh3.googleusercontent.com/d/19Qd_GXjUjPDjWVFVfIsBXFpeJXEhmkaA", type: "image" },
		{ url: "https://lh3.googleusercontent.com/d/1dOHOg6J1JwxMqorVqItOt-u5FONFJo2k", type: "image" },
		{ url: "https://lh3.googleusercontent.com/d/14CF6UWSYqzNG6ih4Zc6j8tSqjtvmxGPL", type: "image" },
		{ url: "https://lh3.googleusercontent.com/d/1wwFstuh7orTPS3nBilrGRjr_d5hOloAx", type: "image" },
		{ url: "https://lh3.googleusercontent.com/d/1AihNBfwn7z8aSkiz_hY0OehDf7aNd4cr", type: "image" },
		{ url: "https://lh3.googleusercontent.com/d/14iTUUSAPXgs8yzi1JYQrLNPy2o5jE8B9", type: "image" },
		{ url: "https://lh3.googleusercontent.com/d/1hGwB3RrUUqKo8IL_1LDL5dJ_UrKP9Nd9", type: "image" },
		{ url: "https://lh3.googleusercontent.com/d/1k3SwNlDbRBQd9z9Wv4mKSJiNT21tOKHY", type: "image" },  
		{ url: "https://lh3.googleusercontent.com/d/1x6WkY5UFutE8fVc-Hn5u_x9ERZIWv6IG", type: "image" },
		{ url: "https://lh3.googleusercontent.com/d/1hLJNFW8tskYXJ2h9BFr-6qrFFw2_TkjP", type: "image" },
		{ url: "https://lh3.googleusercontent.com/d/198mzPbL_dCoFhE67hbfLa-7OcIKDINNg", type: "image" },
		{ url: "https://lh3.googleusercontent.com/d/13e5gfB5NbMZPTGT1FARdEv3TzBTkKpjc", type: "image" },
		{ url: "https://lh3.googleusercontent.com/d/1BJz5DbrfDNOEwsKY8jG2B5cXTcOU1RhE", type: "image" },
		{ url: "https://lh3.googleusercontent.com/d/1jskgKE1wmTsWweaowN3jzH2LdsPt2Bj1", type: "image" },
		{ url: "https://lh3.googleusercontent.com/d/1lsshSLL9uRdREejgLJ1ntqFQuViqqGVb", type: "image" },
		{ url: "https://lh3.googleusercontent.com/d/1L9u7U13mcgggiEJdCxbPTTKosZy8V5VF", type: "image" },
		{ url: "https://lh3.googleusercontent.com/d/1OXOLHxeFnA_woCVMOyMIswryyI6YrDx3", type: "image" },
		{ url: "https://lh3.googleusercontent.com/d/12tCkDhfpLMNN9w9dBb7c-WwF2b4ilo1q", type: "image" },
		{ url: "https://lh3.googleusercontent.com/d/1EIJ7ZR-0os7ksKmDOcdFO0mNek3YVIyF", type: "image" },
		{ url: "https://lh3.googleusercontent.com/d/1-GSaKi57_fhbs1yyRPo1TLd-VFaQlhF6", type: "image" },
		{ url: "https://lh3.googleusercontent.com/d/1kU4iW4Gf-rZL1H9kdtA8E8vIcLMbPX85", type: "image" },
		{ url: "https://lh3.googleusercontent.com/d/1EbmAOepql3vEykO4BSPtLQbQY_JjPvsG", type: "image" },
		{ url: "https://lh3.googleusercontent.com/d/1ZfP2ExwZc8P__IoJ7BOIt0IPeqQO1VRn", type: "image" },
		{ url: "https://lh3.googleusercontent.com/d/1I7szx0NpWtWdWj-zVgJaSp2EHFG33FPc", type: "image" },
		{ url: "https://lh3.googleusercontent.com/d/1d8bWTbis4USFj6MEHgV0d1uq81ST692k", type: "image" },
		{ url: "https://lh3.googleusercontent.com/d/1zHW4JObQXwLshovB53WgrF9fuLBm95wf", type: "image" }
    ],

    "story-designs": [
        { url: "https://drive.google.com/uc?export=view&id=REPLACE_STORY_1", type: "image" },
        { url: "https://drive.google.com/uc?export=view&id=REPLACE_STORY_2", type: "image" },
        { url: "https://drive.google.com/uc?export=view&id=REPLACE_STORY_3", type: "image" }
    ],

    "banner-ads": [
        { url: "https://drive.google.com/uc?export=view&id=REPLACE_BANNER_1", type: "image" },
        { url: "https://drive.google.com/uc?export=view&id=REPLACE_BANNER_2", type: "image" },
        { url: "https://drive.google.com/uc?export=view&id=REPLACE_BANNER_3", type: "image" }
    ],

    "carousel-posts": [
        { url: "https://drive.google.com/uc?export=view&id=REPLACE_CAROUSEL_1", type: "image" },
        { url: "https://drive.google.com/uc?export=view&id=REPLACE_CAROUSEL_2", type: "image" }
    ],

    // PRINT DESIGN
    "brochures": [
        { url: "https://drive.google.com/uc?export=view&id=REPLACE_BROCHURE_1", type: "image" },
        { url: "https://drive.google.com/uc?export=view&id=REPLACE_BROCHURE_2", type: "image" },
        { url: "https://drive.google.com/uc?export=view&id=REPLACE_BROCHURE_3", type: "image" }
    ],

    "flyers": [
        { url: "https://drive.google.com/uc?export=view&id=REPLACE_FLYER_1", type: "image" },
        { url: "https://drive.google.com/uc?export=view&id=REPLACE_FLYER_2", type: "image" }
    ],

    "posters": [
        { url: "https://drive.google.com/uc?export=view&id=REPLACE_POSTER_1", type: "image" },
        { url: "https://drive.google.com/uc?export=view&id=REPLACE_POSTER_2", type: "image" },
        { url: "https://drive.google.com/uc?export=view&id=REPLACE_POSTER_3", type: "image" }
    ],

    "catalogs": [
        { url: "https://drive.google.com/uc?export=view&id=REPLACE_CAT_1", type: "image" }
    ],

    "app-ui": [
        { url: "https://drive.google.com/uc?export=view&id=REPLACE_APP_1", type: "image" },
        { url: "https://drive.google.com/uc?export=view&id=REPLACE_APP_2", type: "image" }
    ],

    "landing-pages": [
        { url: "https://drive.google.com/uc?export=view&id=REPLACE_LP_1", type: "image" },
        { url: "https://drive.google.com/uc?export=view&id=REPLACE_LP_2", type: "image" },
        { url: "https://drive.google.com/uc?export=view&id=REPLACE_LP_3", type: "image" }
    ],

    "dashboards": [
        { url: "https://drive.google.com/uc?export=view&id=REPLACE_DASH_1", type: "image" },
        { url: "https://drive.google.com/uc?export=view&id=REPLACE_DASH_2", type: "image" }
    ],

    // VIDEO & MOTION
    "motion-graphics": [
        { url: "https://drive.google.com/file/d/REPLACE_MG_VIDEO_1/preview", type: "video" },
        { url: "https://drive.google.com/uc?export=view&id=REPLACE_MG_THUMB_1", type: "image" }
    ],

    "video-ads": [
{ url: "https://drive.google.com/file/d/1AfE9yCD_R__mejCgiOsJwb8BvGGRtJew/preview", type: "video" },
{ url: "https://drive.google.com/file/d/1oJmj-tuWMDyM8JwKVi915t0Pz4i-o2DX/preview", type: "video" },
{ url: "https://drive.google.com/file/d/1Hxw6Cvibbkvl3Eo3lotVXpcw-HLVuiNg/preview", type: "video" }
    ],

    "reels": [
        { url: "https://drive.google.com/file/d/REPLACE_REEL_1/preview", type: "video" },
        { url: "https://drive.google.com/file/d/REPLACE_REEL_2/preview", type: "video" },
        { url: "https://drive.google.com/file/d/REPLACE_REEL_3/preview", type: "video" }
    ],

    "animations": [
        { url: "https://drive.google.com/file/d/REPLACE_ANIM_1/preview", type: "video" },
        { url: "https://drive.google.com/file/d/REPLACE_ANIM_2/preview", type: "video" }
    ],

    // ============================================
    // 🆕 KIDS COLLECTION
    // ============================================

    "kids-photoshoots": [
{ url: "https://lh3.googleusercontent.com/d/1_pMr_x--PodwQt2opfd5R3EtNyOZ74cC", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1VQc-a8VMkPpxZ-JKmatk7fu7K5Hh5Z5l", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1GhehblaUgPqGw3uYPRdZfeKk3ulY8BTe", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1SGw-iE_LHFEdTxdCY25AQ0NomktRejXY", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1oqZsNXcfmkgJbV1AihCI5WsTx2NInIFK", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1x0sEthdSvNWMgLi2A--J8xYmgeS8auPB", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/16t6h22Qe1K47lEqqqPh-XERq4XTbr6zQ", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1VvaY6BKKp3J7AhppIPdQMhi8SgL06jf9", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1vuvs3gXlJXtyRTOmgMtYIRMxK8X58nTA", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1mL8x0m0bZPIdI8AecQTQb-QnVlQF5W0S", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1BaRzsyCZr943dfZdRk7_fGhtq8goJ-K8", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1UFWxdr6yB-B9MqzLLS8NYghlQFXrDDg8", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1WoCG2YVFx54ROwZj1-WOIW0_ZO_1j6AL", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1b2G2vDUMjBD9bWmJWvb6SNhMMPjpbS7b", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1d9axCTkqvvTS5w1d5K56CKXLjKN-U9FR", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1OENo2RZSn-nNSPtc-WM0QfcYonnLwCPt", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1rQ0IAPrn-Zg3JTc-NXLKGqaUNG52zLG7", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1NVixnaVmlPuQhAwIT15W-9idk5vVgaU6", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1WgOjlsatFdIW_GtlGouP4tn_zIq2tWzP", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1_oSe9Im9r0LT6SYLJwsf7FZMZHf8XOov", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1ftv79LXBWt903FtN2ODKQcCMffwaEin_", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1E0voV-BarrmePn71htMsCssefv1IQPux", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1igqjuO5rh8e9BQkHZ5uhLt_IrGLl1u2f", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1lQ5Cp98y8jbxCVnfrmjx98rRuL-JOUXk", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/17xNAYNDugjWeVBNBwvuCc2QdQB8kIPzH", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1PXMkMQyw3wTlbCCpfIyuJJIRjDGANamj", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1pgbnCRJfDUxVw_TMkKoLPtrRaKDFjG8F", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1AaoHrj98tgxZMiHvj_2WDxJ_-AeN3iCk", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1SIy_l2L-j0iOL2dxBnNNytv8NFEcyT50", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1bhhaAE0Oj8-mPgczYw-wYASm4miZlnVt", type: "image" }
    ],

    "kids-tshirts-designs": [
{ url: "https://lh3.googleusercontent.com/d/131XoM8oTdc2a_nuwihvr8On1_hSc6Oun", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1kigeGcyAy8wornyet_no12y6TnW8yGNC", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1qeFEIe_DfFooLQrPGkb4JDTDp7EG8Bhm", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/11fTy4lfJavP0M7X4IfrWAeIHReuX2Hl2", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1hFMY8jZzR0p954yXdBsGu69hEA6t70mZ", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1-xI7qClEtG1Vf89IOYdhaE8ryPxNmZ3G", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1KbTTDQC6lB7GI-yV1Kn5uw6IjiK_Q4UG", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1p4igJ31MvgbhhmCTsFpjOv4rm5UiF9el", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1xxcR_nTqUIyw9DdXNrLDsGDBTpjfln3D", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1FamxY1EDgi4uD5lFwZVrO0FLk13XpvtF", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1TkbYOtWNeAVvmwMsTUKMfXaDyb8l6ez-", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1aeKLS02m5WjQbxFDl4Ixvf2nK6K-NZxT", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1bEWaY_KbdRBciqkm91RhnedVqSgdBumU", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1KR3TBAzBbtFOhQzVVhhDxpyQb14-TBM-", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1nJrSSdu3fRX4loiK-CszSXNJkw60Fk9o", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1Zpif_p6kb3pySCRpFRzW7LYvovdDrMFI", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1ReuthVBuAkdMPCbVFOM53frOOraPGRhi", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1fxYuD02sYR7RLV3v3NntG6pY5BNSs-Cy", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1xgAVxcAd4sFZboLc0PEncN5SPvYNpey5", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1Vr9DPerdyUgvsGvPSdHR4wv4ay7k868E", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/14alV1i3UI6q374_wRqeUl9adkBtReEN1", type: "image" }
    ],

    // ============================================
    // 🆕 MEN'S COLLECTION
    // ============================================

    "mens-tshirts-designs": [
{ url: "https://lh3.googleusercontent.com/d/1hZ8awEsAp4bNPokN3Ra0cAwvnTKoozwT", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1I2b4FqUYNBJ2N_t-ppMN9wyeVuZZ6DaG", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1xZmE8MGJCBApO4Ce7q4lC6GeP8-b36HS", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1dOzVCZXN2esMjlc971qb3-ZEoa5TVXxj", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1nSwV8zMw12BGb91EMia74jFVtb4JLDy5", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1xiIV2042OsPY6WgRM_F3Bspd0sE8Txdi", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1awzEPBgDJVztiSStBOuf0Yp4i6VEKQ4O", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1xpvxvjrGBqRzAiJlmBt8f3p99NM4Kvng", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1E6dhtLfw80qcaGSk0ln8kaBqvW4FvPdR", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1w7a3wnjzAGLtrUS2S4NueNRnA_M4UUOi", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1437R_VThA83vsOUWPTs9qv522ukzs8E_", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1I3FWVJbRzRjdcdkrG_SEN3XK0W8WEYkY", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1B4pTcf5UdTN1RQVAJoqNVDZgn5f84dxC", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1Z2rwqVrBfenBVEjmQXMjt2NQtR0tTXhh", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1uepiRuh_FHOWabmhlNUtbEa4yFVF8VPT", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1WEiCYlc87zXr1t283oysMF-u96uowQ0u", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1KsVSXAJJVDKA6cqHnrE9-7e7U0OUzfM5", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/16cJ7ahzeLd62QzmdlR3_C3RKqePL4C0J", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/164_gMw5xptY5j4f2fMo3v0cyOESvnvYK", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1384R49h_rM3IB6_Gteqe1hB1AvVgeJU_", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1EVR26TmigFqokC_1LjrSiktNCkpdKi52", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1TmKLrQ4gXKafHWArkKfy5Vzl47ea8_-B", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/10GGSpV6Js_5JEkQD8JidVEYyhzAMhxD0", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1iDq0mqpgY_jCrjGK7W-XM2Gen2B6oxmG", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1kjwjKG4dEjbfoV5uao9vJs7iQCbl6W93", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1GJcBZjn0Yv0143futl5NHLk2BLk-GpQK", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1Zp_2sNqVNcqy-bws2P1Qu84YFU3r9_FB", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/11ONkFvEBkFnQS0yxumtUPY84VkXOYqvp", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1dYXhBC5ut63hbnJOPsXVRsuCDHjgdHmH", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/13z_wHGPh5C46pKJ-d3CviJaJWnZ-jnxW", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/11cqUwMosSm7LnA8z7g9OUVkhUkCEfmFl", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1hR7m_a_hGy9t5Qgztd97OR6lY7_CxDHV", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/169csYpXxrK_fWiFZ2PU8E7MYhhLdUkx7", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1m841elgzh_cM8QY-2q4Evr7hoHwO2VWd", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1cCbjRP5SGAFIxHI2ONHEXV6_64wX-f8l", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1jP5fm7EFOYaXJ0S6eT2YVWC36q8sV48u", type: "image" }
    ],

    "men-photoshoots": [
{ url: "https://lh3.googleusercontent.com/d/1kzW4cFaUGxPjs2HKOcHkDaRWGbZkTM0L", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1ER8CVpdcWsKswJ7vgVvCOaHb6QtXruRg", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1dPQuPLD6YBoFr_Dw0kGmN09APaR14nx2", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1K4DmDySbNvAuL5QsMMWwH8GqPHseT14h", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1QlKD3BmMLBbOE_r0rZ6_4mn8sL1JR7cv", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1zHv90K94o3Ckf66CHdoUr-KkwsffFOBk", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/12PeRjuWliKPg9s_i6EcOhZokdm2QRtu8", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/15Eej1xr6h2t2IKB94a5gpsisj0iw_D3a", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1DWbAe6zZJt7EfSQ29Gxj9fVhd--FuJ9Q", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1EJNB3SwjiyogMt-FOzxR1JTM4PLZkSfH", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1FNwkDYghpPqWLhGO6WMhfsdH3fKsd4Xx", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1zu2SCuIlZCC-jKMVOmjuRXBqk8bz6Zoi", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/12-DQWhlw9iApcDjHSYzOsWieFauxRTaU", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/15DPpCv2i7W5In72J4uBX9K1RBbfkXJHa", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1Pgjia7X-sdVtbpo703AUiWBHteKEDQKP", type: "image" }
    ],

    // ============================================
    // 🆕 LADIES COLLECTION
    // ============================================

    "ladies-kurtis-designs": [
{ url: "https://lh3.googleusercontent.com/d/14Nuyp9yqOrS_0jdeZrWnU6Ysh9gRIm6o", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/108f3bolXDgDFas4MCOGlUwiAk26vjMh2", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1uIlQrZeI10Wdgg2o7p80qsyX426Or7Xu", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1dDPyb4JC891DWfYHLNvD7V_a-1uHERkr", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1eT--7nC1ng6Uzm08Z9iACTl-rj9VpqeX", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1l10jeacT8u8vJfEUbUrrR2fb17L2nTnQ", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1TBiwKH9Qf2YfKqostqGLpQatUmoig-s-", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1KrpiQfgAmW8RMxiYsfaz3q-ryFDqx0my", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1ny4JjiNiyo7zeFXEgHQeyyR4ybVBXAaq", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1WhBg1iEXPB70JjaGXBYL78YiUieCEhum", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1s8Jodd3M9B0Kp6O9k3nEHatX_LmA0B5s", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1e8XhY0bhSFCP2gexjnCLOZygPc-M-U6w", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/11RWfqWY67CKgaZoRZNRq7g66fvubaGp3", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/10xSwSs0KeFOldh2T6NJ-owOP2ECJl7KA", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/17YLjxC_4xL_us2bcKu3ZoccbtIWUV0kN", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1IrzlyOY_ssZUCL3X7Or5OpbDkSMyf-n9", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1wSc2_ODwaCcCR8UgJ5gXs97Jtirb6oRB", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1WCCv5CY6-f9d1VIrTBc3PIu8jAPf-6zq", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1BoeAbCNq90v_aY5qYwWE5fa0lCXs5tdX", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1gTqFAcW-WiwzElohSAzZtBVMOIShzcdT", type: "image" }
    ],

    "ladies-suits-designs": [
{ url: "https://lh3.googleusercontent.com/d/1DS8p3d67G_OaRl28MWxpT5273TGVfay7", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1zWJn9Fy1N9LZqZTG5Eu9-RrlcAM9PHhp", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1t2rLEmtwLZb3HOSGXJtt2sstQU2DV7d7", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1G25BvBget070q0KRY3M82-7ksJYOH7Ad", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/18SCLzSER-PWZBQljYmTfg5zgIGNSXXqm", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/13PLjiGs8cAMfKPMHXX1BM3Qm2H3kFJ2Y", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1BrJI_Z30jbZH80yFf4WnhE_fmIsLzXY9", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1kumlisPq0QN7boBdzNSpLUcLRa_9Swyr", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/12jM6nYw4E0XPFXNEENoVFHXjctRRFlZz", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1LoSFDxtWf5x11hK13M_lAllgRy-etuvX", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1qhjEEa4cNyAugYwlaoF0B8eX6ZOVVshA", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1kIfwWckPbDpNVYbr-sI9BwN9PS-tneKU", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1sKS4GysKK2v8fCxT2qhnbdym4GSOfRUs", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1Veq7HtXpccnZc5S9_Wn3bEA03D8n4F91", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1Fs5I8IktkYqcK3wdNcXzTP6AJKkcmEJ3", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1_4TBKcJW15adPchMEaYBFKcBqFzaX2Xp", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1nFn0W45X53rN87mNSld2jtJmNlaCLNU8", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1Wa4WTQNbOAU1o7PV-oFVg6pjb8-x-JLb", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/14ugKkrd3su9MHnwn0lqIPPWgb3BcCloA", type: "image" },
{ url: "https://lh3.googleusercontent.com/d/1QNmBOyVOq-9qC8m56egw4zud71SSTKiO", type: "image" }
    ]
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
