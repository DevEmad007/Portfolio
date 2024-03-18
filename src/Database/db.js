export const ReviewsDb = [
    {
        "id": 1,
        "photo": "./reviewer5.webp",
        "name": "React ",
        "blog": {
            "section": [
                {
                    header: 'What is React Query?',
                    p: 'React Query is a powerful data synchronization library for React that solves these problems. It provides you with a set of hooks that you can use to fetch, cache, and update data in your React and Next.js applications. React Query uses a stale-while-revalidate caching  means it will serve stale data (if available) right away and then update it in the background as soon as new data arrives.'
                },
                {
                    header: '',
                    p: 'React Query is not a state management library, but it is often used alongside state management libraries like Redux or Zustand to handle server state, which is the  derived from asynchronous requests.'
                },
                {
                    header: 'How we will use React Query',
                    p: 'When you use React Query to fetch data, the results are stored in a local cache. This means that if you request the same data again, React Query will return the cached  instead of making another API call. The cache is automatically invalidated when the data changes, so you’ll always get the latest data.'
                },
                {
                    header: '',
                    p: 'In addition to caching, React Query also supports  refetching. This means that React Query will automatically fetch new data in the background if the cached data is stale. The stale time is the amount of time that the cached data is allowed to be out-of-date before it is refetched. The default stale time is 5 minutes.'
                },
                {
                    header: '',
                    p: 'The combination of local caching and  refetching makes React Query a powerful tool for managing data fetching in React applications. It can help you to improve performance, reduce API calls, and ensure that your data is always up-to-date.'
                },
            ]
        }
    },
    {
        "id": 2,
        "photo": "./reviewer5.webp",
        "name": "React Query",
        "blog": {
            "section": [
                {
                    header: 'What is React Query?',
                    p: 'React Query is a powerful data synchronization library for React that solves these problems. It provides you with a set of hooks that you can use to fetch, cache, and update data in your React and Next.js applications. React Query uses a stale-while-revalidate caching strategy, which means it will serve stale data (if available) right away and then update it in the background as soon as new data arrives.'
                },
                {
                    header: '',
                    p: 'React Query is not a state management library, but it is often used alongside state management libraries like Redux or Zustand to handle server state, which is the state derived from asynchronous requests.'
                },
                {
                    header: 'How we will use React Query',
                    p: 'When you use React Query to fetch data, the results are stored in a local cache. This means that if you request the same data again, React Query will return the cached results instead of making another API call. The cache is automatically invalidated when the data changes, so you’ll always get the latest data.'
                },
                {
                    header: '',
                    p: 'In addition to caching, React Query also supports background refetching. This means that React Query will automatically fetch new data in the background if the cached data is stale. The stale time is the amount of time that the cached data is allowed to be out-of-date before it is refetched. The default stale time is 5 minutes.'
                },
                {
                    header: '',
                    p: 'The combination of local caching and background refetching makes React Query a powerful tool for managing data fetching in React applications. It can help you to improve performance, reduce API calls, and ensure that your data is always up-to-date.'
                },
            ]
        }
    },
    {
        "id": 3,
        "photo": "./reviewer5.webp",
        "name": "Virtual DOM",
        "blog": {
            "section": [
                {
                    header: 'What is Virtual DOM?',
                    p: 'Virtual DOM is not an actual DOM, but a representation of actual DOM which is kept in memory. It’s a representation of  DOM nodes in a tree format which is just a plain JavaScript Object',
                    code: '<div><h1 className="title">Want to learn about Virtual DOM?</h1> <div className="button-container"><Button title="Yes" /><Button title="No" /> </div> </div>'
                },
                {
                    header: '',
                    p: 'The type defined in the Virtual DOM, in general, refers to the type of HTML DOM element. If you have noticed in the example above, we have used a React Component <Button />. Now, this is not a conventional HTML element. Hence, React treats these components a little differently. If it’s a functional component, React directly calls the function with its assigned props and if it’s a class component, React creates a new instance of the class component and calls its render method.'
                },
                {
                    header: '',
                    p: 'The key and ref properties are the same props that you know are used in components. key is required while rendering a list of elements, which we will see later in the article and ref are the references we pass in any HTML DOM element to manipulate the element like for managing focus'
                },
                {
                    header: 'Reconciliation',
                    p: 'After every component update, React creates a new Virtual DOM tree. It then compares the old tree with the new tree to register all the changes that need to be done to the real DOM. This process of generating a new tree and comparing is called Reconciliation.'
                },
                {
                    header: '',
                    p: 'React uses a Diffing algorithm to compare both trees to effectively update the UI in a minimum number of operations. This algorithm is quite complex but it is based on two assumptions: 1. Two elements of different types will produce different trees.2. The developer can hint at which child elements may be stable across different renders with a key prop'
                },
            ]
        }
    },
    {
        "id": 4,
        "photo": "./reviewer5.webp",
        "name": "Next.js",
        "blog": {
            "section": [
                {
                    header: 'What is Next.js?',
                    p: 'Next.js is a React framework that gives you building blocks to create web applications.By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.'
                },
                {
                    header: '',
                    p: 'You can use React to build your UI, then incrementally adopt Next.js features to solve common application requirements such as routing, data fetching, integrations - all while improving the developer and end-user experience.'
                },
                {
                    header: '',
                    p: 'Whether you’re an individual developer or part of a larger team, you can leverage React and Next.js to build fully interactive, highly dynamic, and performant web applications.'
                },
                {
                    header: 'Building Blocks of a Web Application',
                    p: 'There are a few things you need to consider when building modern applications. Such as:',
                    ul: [
                        {
                            keyWord: 'User Interface',
                            description: 'how users will consume and interact with your application.'
                        },
                        {
                            keyWord: 'Routing ',
                            description: 'how users navigate between different parts of your application.'
                        },
                        {
                            keyWord: 'Data Fetching',
                            description: 'where your data lives and how to get it.'
                        },
                        {
                            keyWord: 'Rendering',
                            description: 'when and where you render static or dynamic content.'
                        },
                        {
                            keyWord: 'Integrations ',
                            description: 'what third-party services you use (CMS, auth, payments, etc) and how you connect to them.'
                        },
                        {
                            keyWord: 'Infrastructure ',
                            description: 'where you deploy, store, and run your application code (Serverless, CDN, Edge, etc).'
                        },
                        {
                            keyWord: 'Performance ',
                            description: 'how to optimize your application for end-users.'
                        },
                        {
                            keyWord: 'Scalability ',
                            description: 'how your application adapts as your team, data, and traffic grow.'
                        },
                        {
                            keyWord: 'Developer Experience',
                            description: 'your team’s experience building and maintaining your application.'
                        },
                    ]
                },
            ]
        }
    },

    {
        "id": 5,
        "photo": "./reviewer5.webp",
        "name": "David Brown",
        "testimonial": "This project is a grthe attenis is a great project! I'm really impressed with the quality of work is is a great project! I'm really impressed with the quality ouality of work aand the attenis is a great project! I'm really impressed with the quality of work is is a great project! I'm really impressed with the quality of work aand the attenis is a great project! I'm really impressed with the quality of work is is a great project! I'm really impressed with the quality of work aand the attenis is a great project! I'm really impressed with the quality of work is is a great project! I'm really impressed with the quality of work aand the attenis is a great project! I'm really impressed with the quality of work is is a great projeclot of fun to work on. work aand the attenis is a great project! I'm really impressed with the quality of work is is a great project! I'm really impressed with the quality of work aand the attenis is a great project! I'm really impressed with the quality of work is is a great project! I'm really impressed with the quality of work aand the attenis is a great project! I'm really impressed with the quality of work is is a great project! I'm really impressed with the quality of work aand the attenis is a great project! I'm really impressed with the quality of work is is a great project! I'm really impressed with the quality of work aand the attenis is a great project! I'm really impressed with the quality of work is is a great projeceat example of my skills and experience as a React developer."
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
                    Name: "Dark Mode",
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
        skils: [ 'Node JS', 'Express JS']
    },
    {
        heading: 'Database',
        skils: [ 'MySQL',"MongoDB"]
    },
    {
        heading: 'DevOps',
        skils: [ 'GIT','GITHUB','Docker',"Firebase" ]
    },
];

export const about =
{
    name: "Farshid Ibtihaj Yemad",
    university: "University of Chittagong",
    Depertment: "Human Resource Management",
    description: ''
};
