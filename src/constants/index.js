export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#hero',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#project',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  

  
  export const myProjects = [
    {
      title: 'Notedown App',
      desc: 'Created a dynamic web app for note-taking, utilizing React.js for responsive design',
      subdesc:
      'Backend operations were powered by Node.js/Express.js and PosgreSQL, enabling secure data storage retrieval. Utilized PostgreSQL for secure and scalable data storage, including features for data retrieval, updates, and deletion,ensuring reliable performance and data integrity',
      href: 'https://github.com/swapnil-sriv/Notedown-App',
      
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'Node.js',
          path: '/assets/Node.png',
        },
        {
          id: 4,
          name: 'PostgreSQL',
          path: '/assets/postgre.png',
        },
      ],
    },
    {
      title: 'Face Mask Detector',
      desc: 'Developed a real-time face mask detection system using OpenCV and Keras, capable of identifying individuals wearing x`face masks within streaming video feeds.',
      subdesc:
        'Leveraged image processing techniques to detect and analyze faces in real-time. Utilized OpenCV for video stream handling, face detection, and pre-processing tasks, facilitating seamless integration with the Keras model for real-time analysis.',
      href: 'https://github.com/swapnil-sriv/Face_Mask_Detection',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'Keras',
          path: '/assets/keras.png',
        },
        {
          id: 2,
          name: 'OpenCV',
          path: 'assets/opencv.png',
        },
        {
          id: 3,
          name: 'Tensorflow',
          path: '/assets/tensorflow.png',
        },
        
      ],
    },
    {
      title: 'Movie Recommender',
      desc: 'Recommends movies to users using content based and collaborative filtering techniques.',
      subdesc:
        ' Leveraged advanced algorithms to analyze user preferences and movie characteristics. Employed matrix factorization techniques, such as Singular Value Decomposition (SVD), to handle large-scale user-item interaction data and improve recommendation quality.',
      href: 'https://github.com/swapnil-sriv/Movie_Recommender',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'Python',
          path: '/assets/python.png',
        },
        {
          id: 2,
          name: 'Jupyter Notebook',
          path: 'assets/jupyter.png',
        },
        
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
