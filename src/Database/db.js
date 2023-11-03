export const ReviewsDb = [
    {
        "id": 1,
        "photo": "./reviewer5.webp",
        "name": "Savita Chakrabarti",
        "testimonial": "This is a great project! I'm really impressed with the quality of work and the attention to detail."
    },
    {
        "id": 2,
        "photo": "./reviewer4.webp",
        "name": " Sarah Williams",
        "testimonial": "This project is really innovative and well-designed. I'm excited to see what the developers do next."
    },
    {
        "id": 3,
        "photo": "./reviewer3.jpg",
        "name": "Silvia Jons",
        "testimonial": "This project is a great example of what's possible with React. I'm glad I had the opportunity to work on it."
    },
    {
        "id": 4,
        "photo": " ./reviewer1.webp",
        "name": "Jane Doe",
        "testimonial": "This project was a lot of fun to work on. I'm really happy with the results."
    },
    {
        "id": 5,
        "photo": "./reviewer5.webp",
        "name": "David Brown",
        "testimonial": "This project is a great example of my skills and experience as a React developer."
    }
];

export const otherReviews = [
    {
        name: 'Tom Hardy',
        des: "I Told You I'm Going To Do My Job",
        path: ''
    },
    {
        name: 'Andrew Garfield',
        des: "I Love The Idea That If You Know Someone'...",
        path: ''
    },
    {
        name: 'Patrick Bateman',
        des: "I'm Still Here",
        path: ''
    },
    {
        name: 'Rayan Reynolds',
        des: 'Well, I want to remember us. I swear to God...',
        path: ''
    },
];

export const projectsdb = [
    {
        name: 'Adidas Clone',
        github: 'https://github.com/DevEmad007/adidas-clone',
        demo: 'https://adidas-clone-3c3ed.web.app/',
        img: './adidas.jpg',
        des: {
            header: 'Description',
            body: "This project is an Adidas clone website built with React and vanilla CSS. The main focus of the project is to create a complex navigation menu layout with tons of options while maintaining responsiveness. The navigation menu is divided into several sections, each of which contains a variety of options. The user can easily navigate to the desired section and option by clicking on the corresponding item in the menu. The menu is also responsive, so it will look good on all devices, regardless of screen size. In addition to the complex navigation menu, the project also features a variety of other features, such as a product carousel, a product grid, and a shopping cart. The product carousel showcases the latest Adidas products, while the product grid allows users to browse all of the Adidas products available. The shopping cart allows users to add items to their cart and purchase them at checkout.",
        },
        keyFeatures: [ 'Complex navigation menu with tons of options','Responsive design',"Shopping cart","Product grid" ],
        techs: [ 'React JS','Vanilla CSS',' Redux',' Firestore ' ],
    },
    {
        name: 'Social Media Site',
        github: 'https://github.com/DevEmad007/finger.com',
        demo: 'https://the-f-site.web.app/',
        img: './social-media.jpg',
        des: {
            header: 'Tech Advantages',
            body: "the social media website also features a variety of other features, such as a user profile, a shopping mart, and an admin panel. The user profile allows users to edit their personal information, such as their name, bio, and profile picture. The shopping mart allows users to browse and purchase products. The admin panel allows administrators to manage the website, including adding and removing users, managing products, and viewing orders.",
            list: [
                {
                    Name: "React",
                    body: "React is a JavaScript library for building user interfaces. It is known for its speed, scalability, and ease of use. React is also very component-based, which makes it easy to create and maintain complex UIs."
                },
                {
                    Name: "Firebase",
                    body: "Firebase is a backend platform for developing mobile and web applications. It provides a variety of services, including authentication, storage, database, and hosting. Firebase is also known for its real-time data synchronization capabilities, which makes it ideal for social media applications",
                },
                {
                    Name: "Firestore Database",
                    body: "Firestore is a NoSQL database from Firebase. It is a cloud-based database that is designed to be scalable and flexible. Firestore is also well-suited for social media applications because it can handle a large number of concurrent reads and writes.",
                },
                {
                    Name: "Context API",
                    body: "The Context API is a React feature that allows you to share data between components without passing props through the component tree. This can be useful for managing global state in social media applications.",
                },
                {
                    Name: "Dark Mode:",
                    body: "Dark mode is a feature that allows users to change the appearance of an application to a darker color scheme. Dark mode is popular among users because it can reduce eye strain and improve battery life.",
                },
            ]
        },
        keyFeatures: [ 'Complex navigation menu with tons of options','Responsive design',"Shopping cart","Product grid" ],
        techs: [ 'React JS','Vanilla CSS','Firebase' ],
    },
    {
        name: 'Super Tic-Tac-Toe',
        github: 'https://github.com/DevEmad007/super-tic-tac-toe',
        demo: 'https://super-tic-tac-toe-f7b62.web.app/',
        img: './Super-tic-tac-toe.jpg',
        des: {
            header: 'Tech Advantages',
            body: "VSauce-inspired Super-Tic-Tac-Toe is a game with complex logic running under the hood. It is a multi-player game with a built-in chat feature. Building the game in React JS was a challenging and fun project. As we all know Reacts data flow is one way. But the game logic data flow isn't one way so, managing the state was a tough task as every cell has its ID and every 9 cell combined boxes have their winner and carry box ID. Besides that 9 boxes combine the whole game which is the game winner. ",
            list: [
                {
                    Name: "React",
                    body: "React is a JavaScript library for building user interfaces. It is known for its speed, scalability, and ease of use. React is also very component-based, which makes it easy to create and maintain complex UIs."
                },
                {
                    Name: "Firebase",
                    body: "Firebase is a backend platform for developing mobile and web applications. It provides a variety of services, including authentication, storage, database, and hosting. Firebase is also known for its real-time data synchronization capabilities, which makes it ideal for social media applications",
                },
                {
                    Name: "Firestore Realtime Database",
                    body: "Firebase Realtime Database is a cloud-hosted database that lets you store and sync data between your users in realtime. This means that changes made to the database are immediately reflected in all connected clients. Firebase Realtime Database is a NoSQL database, which means that it does not use a traditional relational database schema. Instead, data is stored as JSON objects.",
                },
                {
                    Name: "Context API",
                    body: "The Context API is a React feature that allows you to share data between components without passing props through the component tree. This can be useful for managing global state in social media applications.",
                },
            ]
        },
        keyFeatures: [ 'Complex navigation menu with tons of options','Responsive design',"Shopping cart","Product grid" ],
        techs: [ 'React','React Bootstrap','Custom CSS','Firebase Realtime Database' ],
    },
    {
        name: 'Portfolio',
        github: 'https://github.com/DevEmad007/portfolio',
        demo: 'https://farshid-ibtihaj.web.app',
        img: './portfolio.jpg',
        des: {
            header: 'Description',
            body: "This portfolio is also a one of my project so why not show case it too!",
            list: [
                {
                    Name: "React",
                    body: "React is a JavaScript library for building user interfaces. It is known for its speed, scalability, and ease of use. React is also very component-based, which makes it easy to create and maintain complex UIs."
                },
                {
                    Name: "Tailwind CSS",
                    body: "One of the key benefits of Tailwind CSS is that it can help you to write more concise and readable CSS. Instead of having to write a lot of custom CSS for each component, you can simply use the Tailwind CSS utility classes to achieve the same effect. This can make your CSS code easier to maintain and update.Tailwind CSS is very responsive, so your website will look good on all devices and it is optimized for performance, so it won't slow down your website."
                },

            ]
        },
        keyFeatures: [ 'Elegent Header','Responsive design',"Github API" ],
        techs: [ 'React ','Tailwind ' ]
    },
];

export const otherProjects = [
    {
        name: 'Minesweeper',
        des: 'Vanilla JS,Firebase',
        path: 'https://github.com/DevEmad007/Minesweeper'
    },
    {
        name: 'Protfolio',
        des: 'React Tailwind css',
        path: 'https://github.com/DevEmad007/portfolio',
    },
    {
        name: 'HR Shop',
        des: 'React Bootstrap',
        path: 'https://github.com/DevEmad007/HUMAN-RESOURCE'
    },
    {
        name: 'Network Share App',
        des: 'React and web',
        path: 'https://github.com/DevEmad007/Share-via-web'
    },
];

export const skills = [
    {
        heading: 'Frontend',
        skils: [ 'HTML',"CSS","Javascript","Tailwind CSS","Bootstrap","React","RESTFULL API","Redux" ]
    },
    {
        heading: 'Backend',
        skils: [ 'PHP','lavarel' ]
    },
    {
        heading: 'Database',
        skils: [ 'MySQL',"MongoDB","PostgreSQL" ]
    },
    {
        heading: 'Devops',
        skils: [ 'GIT','GITHUB','Docker',"Firebase","Google Cloud" ]
    },
];