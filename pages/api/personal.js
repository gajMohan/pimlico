export default function handler(req, res) {
  res.status(200).json({
    name: {
      short: 'Gaj Mohan',
      firstName: 'Gajalakshan',
      lastName: 'Mohankumar',
    },
    location: 'London',
    bio: 'Senior Backend Engineer, Football fanatic, Full time geek',
    website: 'https://www.gajmohan.dev',
    image: '/img/gaj_mohan.jpg',
    links: [
      {
        type: 'twitter',
        name: '@inspectorgajit',
        url: 'https://twitter.com/Inspectorgajit',
      },
      {
        type: 'linkedin',
        name: 'Gajalakshan Mohankumar',
        url: 'https://www.linkedin.com/in/gajalakshan',
      },
      {
        type: 'github',
        name: 'gajMohan',
        url: 'https://github.com/gajMohan',
      },
      {
        type: 'instagram',
        name: 'gajalakshan',
        url: 'https://www.instagram.com/gajalakshan',
      },
    ],
  });
}
