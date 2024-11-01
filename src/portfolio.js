// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
    buttonColor: "#4305ba",
    LinkHighlightColor: "#4305ba"
}

// Transitions
const transitions = {
    active: true, // activate for all sections
    onlyLanding: false, // activate only for initial load of landing page
    showOnce: true, // transition only once
    thresholdOption: 0.2 // indicates at what percentage of the sections visibility the transition should start
}

// Splash Screen
const splashScreen = true // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
    intro: "Hello 👋, my name is",
    name: "Bete Goshme",
    message: "Driven Software Engineer with two years plus experience in software development. Loves to write codein JavaScript, Python and Golang. I Excel in problem-solving and thrive in a team environment. Seekinga challenging role where I can showcase my technical expertise and contribute to building the futuretogether with a dynamic and innovative team.",
    basedLocation: "Addiss Ababa Ethiopia",
    resumeLink: "https://drive.google.com/file/d/1IEYzxWMapIv84oQ7DQ2NZ2NGMLy7EUa3/view?usp=sharing", 
    logo: {
        custom: true 
    },
    portraitLink: 'images/me.jpg'
}

const socialMediaLinks = {
    github: "https://github.com/bete7512",
    linkedin: "https://www.linkedin.com/in/betegoshme/",
    medium: "https://medium.com/@betekbebe",
    stackoverflow: "https://stackoverflow.com/users/18930053/bete-goshme",
} // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
    autobiography: [
        "My name is Bete Goshme and Driven Software Engineer with two years plus experience in software development. Loves to write codein JavaScript, Python and Golang. I Excel in problem-solving and thrive in a team environment. Seekinga challenging role where I can showcase my technical expertise and contribute to building the futuretogether with a dynamic and innovative team."
    ], // Separated items are paragraphs
    techStack: [
        "Golang",
        "Python",
        "JavaScript",
        "Vue.js",
        "MySQL",
        "GRAPHQL",
        "Django",
        "Nginx",
    ],
    photo1Link: "images/portrait1.jpeg",
    photo2Link: "images/portrait2.jpeg",
    // photo3Link: "images/me.jpg"
}

// --- 🛡️ Experience Section ---
const experiences = [
    {
        position: "Backend Developer",
        company: {
            name: "Minab It Solution PLC",
            link: "https://minabtech.com"
        },
        duration: "Aug 2023 - Present",
        bulletPoints: [
            "I have developed a robust backend using Golang, PostgreSQL, NATS, and AWS services such as EC2, S3, and RDS. With these technologies, I have walked through the process of building a single microservice and then streamlining multiple microservices together to function as a cohesive product that aligns with business needs.",
        ],
        hashtags: [
            "Golang",
            "AWS",
            "Nginx",
            "Docker",
            "NATS",
            "PostgresQL"
        ]
    },

    {
        position: "DevOps Engineer",
        company: {
            name: "Intuitio Ventures Investment PLC",
            link: "https://intuitio.xyz"
        },
        duration: "Apr 2024 - Present",
        bulletPoints: [
            "Maintain existing Django Backend project and add new features",
            "Data Migration to new Servers",
            "Vue 2, VueX, PostgresQL",
            "Digital Ocean Server Management"
        ],
        hashtags: [
            "VPS",
            "Digital Ocean",
            "Plesk",
            "Django",
            "PostgresQL"
        ]
    },
    {
        position: "Fullstack Developer",
        company: {
            name: "Hulu Labs",
            link: "https://hululabs.com"
        },
        duration: "Sept 2023 - June 2024",
        bulletPoints: [
            "I have developed a Fullstack Web Application using FastAPI in Python, React, PostgreSQL, and River Financial Blockchain. I have worked extensively as a full-stack developer, handling tasks from building the backend to designing the frontend. Additionally, I have engaged in discussions with business owners to ensure the delivery of the desired product.",
        ],
        hashtags: [
            "Pyhton",
            "Digital Ocean VPS",
            "Nginx",
            "Docker",
            "FastAPI",
            "React"
        ]
    },
    {
        position: "Fullstack Developer and Team Lead",
        company: {
            name: "Rensys Engineering PLC/ Bahir Dar Institute of Technology Incubation Center",
            link: "https://rensysengineering.com"
        },
        duration: "Feb 2023 - Jul 2023",
        bulletPoints: [
            "Designed and implemented a user-friendly web-based interface using Vue.js, enhancing the overall user experience and ensuring easy navigation for admin from scratch.",
            "Utilized Hasura, Node.js and Express to build a robust backend, ensuring seamles communication between the frontend and the database for quick and accurate data retrieval.",
            "Integrated PostgreSQL to store and manage data, creating a scalable and secure database solution."
        ],
        hashtags: [
            "Nuxt 3",
            "Digital Ocean VPS",
            "Nginx",
            "Docker",
            "Vue Js"
        ]
    },

    {
        position: "Intern",
        company: {
            name: "Minab It Solution PLC",
            link: "https://minabtech.com"
        },
        duration: "May 2022 - Aug 2022",
        bulletPoints: [
            "As a Intern, gained practical knowledge in full-stack development using,Hasura GraphQl , Vue.js,Tailwind CSS, Node.js Express, Docker Products,Nginx Web server and PostgreSQL from professionaldevelopers. This experience has equipped me to create innovative solutions and excel in the dynamicworld of software development.",
        ],
        hashtags: [
            "Hasura",
            "Node JS",
            "Vue Js",
            "Tailwind",
            "Nuxt",
            "Docker Products",
            "Tailwind"
        ]
    },





]

// --- 💻 Work Section ---
const works = [
    {
        projectName: "Work Space Booking System",
        yearCompleted: "2024",
        description: "Developed and Maintained a system for booking and ordering workspaces. Worked with Django, Python, MySQL, Vue Js, Quasar to create a user-friendly and efficient web application.",
        techStack: "Django, Python, MySQL, Vue Js, Quasar",
        links: [
            {
                label: "",
                type: "git",
                url: "https://app.hubbits.co/#//"
            },
            {
                label: "",
                type: "external",
                url: "https://app.hubbits.co/#"
            }
        ],
        imageLink: "images/portfolio2.png",
        alignLeft: false
    },
    {
        projectName: "Child Center Tracking",
        yearCompleted: "2024",
        description: "Built Production Graded web application for tracking child center for Plan International Based in Hawassa which helps for low income mothers to provide nearest and cheapest child center.",
        techStack: "Hasura, Golang ,PostgresQL",
        links: [
            {
                label: "",
                type: "external",
                url: "https://uymp.org"
            }
        ],
        imageLink: "images/portfolio3.png",
        alignLeft: true
    },
    {
        projectName: "Access To Finance Management",
        yearCompleted: "2023",
        description: "Built a system  for managing access finance from finance providers, NGOs and Banks , user , memebership , and transaction management with differnet authorizations for users, banks and NGOs.",
        techStack: "Golang, GraphQL, NATS(PUB/SUB)",
        links: [
            {
                label: "",
                type: "external",
                url: "https://kena.eyea.et"
            }
        ],
        imageLink: "images/portfolio4.png",
        alignLeft: false
    },
    {
        projectName: "Sheger Gebeta",
        yearCompleted: "2024",
        description: "Built a Backend for one of well known restaurant , hotel, caffe and catering reviewer which is under development  ",
        techStack: "JS, HTML, CSS",
        links: [
            {
                label: "",
                type: "external",
                url: "https://shegergebeta.com" 
            }
        ],
        imageLink: "images/portfolio5.png",
        alignLeft: true
    },
]

const archiveLink = "https://github.com/bete7512?tab=repositories"

// --- 📭 Contact Section ---
// 2 Options available - Choose 1
const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "Want to do impact? Reach out to me at",
        ],
        link: {
            email: "betekbebe@gmail.com", 
            // other: "https://forms.gle"
        },
        responseTimeMessage: "...and I'll resopnd within the next 24hrs"
    },
    formEmbedLink: "" 
}

export default {
    colors,
    transitions,
    splashScreen,
    greeting,
    socialMediaLinks,
    about,
    experiences,
    works,
    archiveLink,
    contact
}
