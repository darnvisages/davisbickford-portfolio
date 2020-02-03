import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Davis Bickford | Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: `Hi, I'm `,
  name: 'Davis Bickford',
  subtitle: 'Software Engineer',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'davis-img.jpg',
  paragraphOne: 'Software engineer passionate about solving complex challenges through technical experience, effective communication, collaboration, and a growth mindset.',
  paragraphTwo: ' ',
  paragraphThree: ' ',
  resume: 'https://drive.google.com/open?id=1rIftYRApheSlJFM68FOvzGL_yvoqHN6B', // if no URL, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'vlcsnap-2019-12-29-11h34m14s083.png',
    title: 'PlayBound',
    info: 'PlayBound is a video game currently in development. I am the sole developer and artist.',
    info2: "PlayBound tells the story of Kelvin, a boy whose parents have become fatally boring. Strap on your velcro light-up kicks and equip your POG slammers, because it's time to save the world from certain lameness!",
    skills: ['game development', 'c#', 'digital art', 'unity engine'],
    url: 'https://store.steampowered.com/app/1181800/PlayBound/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'pug-or-not-pug.png',
    title: 'Pug or Not Pug',
    info:
      'Pug or Not Pug is a web application that will determine whether a pug is in a provided image.',
    info2: '',
    skills: [
      'react',
      'machine learning',
      'rest api',
      'node.js',
      'express.js',
      'postgres',
      'sql',
      'html',
      'css',
      'javascript',
    ],
    url: 'https://darnvisages.github.io/pug-or-not-pug/',
    repo: 'https://github.com/darnvisages/pug-or-not-pug', // if no repo, the button will not show up
  },
  // {
  //   id: uuidv1(),
  //   img: 'ecommerce.png',
  //   title: 'Ecommerce Site',
  //   info: '',
  //   info2: '',
  //   skills: [
  //     'react',
  //     'redux',
  //     'hooks',
  //     'context api',
  //     'firebase',
  //     'graphQL',
  //     'apollo',
  //     'html',
  //     'css',
  //     'javascript',
  //   ],
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'davis.bickford@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: uuidv1(),
    //   name: 'twitter',
    //   url: '',
    // },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/davisbickford/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/darnvisages',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
