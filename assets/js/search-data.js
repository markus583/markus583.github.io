// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-photography",
          title: "photography",
          description: "A few moments from life.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/photography/";
          },
        },{id: "news-wtpsplit-the-repository-containing-the-library-for-our-state-of-the-art-text-segmentation-tool-segment-any-text-reached-️1000-stars-️-on-github-check-it-out-here",
          title: '🌍 wtpsplit, the repository containing the library for our state-of-the-art text segmentation tool...',
          description: "",
          section: "News",},{id: "news-two-papers-from-my-deezer-research-internship-accepted-at-acl-2025-and-ismir-2025-i-will-present-at-ismir-in-daejeon-south-korea-prof-schedl-will-present-at-acl",
          title: '🎉 Two papers from my Deezer Research internship accepted at ACL 2025 and...',
          description: "",
          section: "News",},{id: "news-successfully-completed-an-exchange-semester-at-national-taiwan-university-of-science-and-technology-ntust-in-taipei-a-wonderful-experience-exploring-research-language-and-culture-in-taiwan",
          title: '🎓 Successfully completed an exchange semester at National Taiwan University of Science and...',
          description: "",
          section: "News",},{id: "news-presented-our-paper-at-ismir-2025-in-daejeon-south-korea-my-first-ismir-and-a-great-chance-to-connect-with-the-music-information-retrieval-community",
          title: '🎵 Presented our paper at ISMIR 2025 in Daejeon, South Korea - my...',
          description: "",
          section: "News",},{id: "news-️-served-as-volunteer-coordinator-at-emnlp-2025-in-suzhou-china-helping-ensure-a-smooth-conference-experience-for-all-attendees-my-chinese-came-in-quite-handy",
          title: '🙋‍♂️ Served as Volunteer Coordinator at EMNLP 2025 in Suzhou, China, helping ensure...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%61%72%6B%75%73.{%6C%61%73%74%6E%61%6D%65}@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/markus583", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/markus-frohmann", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=8PxZyK8AAAAJ", "_blank");
        },
      },{
        id: 'social-semanticscholar',
        title: 'Semantic Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://www.semanticscholar.org/author/Markus-Frohmann/2226600284", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/FrohmannM", "_blank");
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
