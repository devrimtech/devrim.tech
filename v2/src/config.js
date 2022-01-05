module.exports = {
  siteTitle: 'Kai McCormick | Programmer',
  siteDescription:
    'I am a high school student who attends University Preparatory Academy in San Jose, California. I have a passion for coding and making.',
  siteKeywords:
    'Kai McCormick, Kai Devrim, Devrim, Devrim.tech, software engineer, front-end engineer, web developer, Javascript, San Jose, ',
  siteUrl: 'https://devrim.tech',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Kai McCormick',
  location: 'San Jose, CA',
  email: 'kai@devrim.tech',
  github: 'https://github.com/kaidevrim',
  twitterHandle: '@devrimkai',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/kaidevrim',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/kai-mccormick',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/devrimkai',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
