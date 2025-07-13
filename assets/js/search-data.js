// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a short version of my CV. If you&#39;d like to see the full version, just send me an email. I&#39;d be happy to share it ;)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "I&#39;m still working on this page---details on my projects will be added soon. Stay tuned!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-lt-i-gt-n-lt-i-gt-lt-sub-gt-a-lt-sub-gt",
          title: "&lt;i&gt;N&lt;/i&gt;&lt;sub&gt;A&lt;/sub&gt;",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-let-39-s-visualize-brillouin-zone-with-vesta",
        
          title: "Let&#39;s visualize Brillouin zone with VESTA",
        
        description: "Script to visualize Brillouin zone with VESTA.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/visualize-brillouin-zone/";
          
        },
      },{id: "post-interaxion-podcast-episode-62-altermagnet",
        
          title: "Interaxion Podcast Episode 62: Altermagnet",
        
        description: "I was invited to talk about altermagnets, a new type of magnetically ordered state, on the Interaxion podcast.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/interaxion-ep62/";
          
        },
      },{id: "post-interaxion-podcast-episode-60-welcome-to-the-physics-world",
        
          title: "Interaxion Podcast Episode 60: Welcome to the Physics World",
        
        description: "I was invited to talk about physics, research, and life in the US on the Interaxion podcast.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/interaxion-ep60/";
          
        },
      },{id: "news-a-new-paper-structural-stability-and-polymorphic-transitions-in-lnsi-ln-lanthanides-published-in-dalton-transactions",
          title: 'A New Paper “Structural stability and polymorphic transitions in LnSI (Ln = lanthanides)”...',
          description: "",
          section: "News",},{id: "news-launched-my-personal-website-finally",
          title: 'Launched my personal website, finally.',
          description: "",
          section: "News",},{id: "news-this-paper-in-dalton-transactions-selected-as-a-hot-article",
          title: 'This paper in Dalton Transactions selected as a HOT article!',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%75%67%75%72%75.%79@%73%63%6C.%6B%79%6F%74%6F-%75.%61%63.%6A%70", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=XeaL7RcAAAAJ&hl=en", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-1016-5031", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/suguru-yoshida-b78a73282", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/Suguru_SgY", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
