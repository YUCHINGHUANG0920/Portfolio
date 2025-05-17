/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Yu-Ching",
  title: "Hi all, I'm Yu-Ching",
  subTitle: emoji(
    "Engineer turned Backend Developer, passionate about turning data into action. Experienced in building web applications using Python, JavaScript, React.js, and other frameworks."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/YUCHINGHUANG0920",
  linkedin: "https://www.linkedin.com/in/yuching0920/",
  gmail: "yuching1994h@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

const greeting1 = {
  title: "from Stormwater to Software",
  subTitle:
    "My journey began in water — building hydraulic models, analyzing rainfall data, and simulating flood scenarios to develop urban resilience strategies.\n" +
    "As a civil engineer, I relied heavily on statistics, custom code, and spatial analysis to understand complex systems and design practical solutions. That same mindset now drives my work in software and data engineering.\n" +
    "Today, I build backend systems and data pipelines, expanding from hydrologic datasets to web APIs, logs, and user behavior data — all with the goal of making data-driven decisions more scalable, reliable, and impactful.\n" +
    "Different Domain, Same Mission: Solving Meaningful Problems with Code and Data.",
  resumeLink: "", // Set to empty to hide the button
  displayGreeting1: true // Set false to hide this section, defaults to true
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "FULL STACK DEVELOPER WITH A BACKEND & DATA ENGINEERING FOCUS",
  skills: [
    emoji(
      " * Develop scalable backend systems and RESTful APIs for modern web applications"
    ),
    emoji(
      " * Build  ETL pipelines and optimize SQL databases for analytics and operations"
    ),
    emoji(" * Integrated third party services such as AWS / Azure / Firebase ")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    }
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },

    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "The City University of New York",
      logo: require("./assets/images/cuny.png"),
      subHeader: "Master of Science in Information Systems",
      duration: "August 2023 - May 2025",
      desc: "Ranked top 5% of the program. Assisted professors in researching financial performance and risk factors by automating text extraction, data collection, and association rule mining using Python, reducing manual workload by over 75%.",
      descBullets: [
        "Courses: Cybersecurity, Principle of Database Management, Data Warehousing and Analytics, Big Data Technologies, Managerial Statistics"
      ]
    },
    {
      schoolName: "National Taiwan University ",
      logo: require("./assets/images/ntu.png"),
      subHeader: "Master of Science in Civil Engineering",
      duration: "September 2016 - June 2018",
      desc: "Ranked top 10% of the program. Published master’s thesis ''Relationship between Delta Progradation and Sediment Supply Distribution,'' applying programming for statistical and numerical analysis.",
      descBullets: [
        "Courses: Engineering Mathematics (IV), Advanced Hydrologic Analysis"
      ]
    },
    {
      schoolName: "National Cheng Kung University",
      logo: require("./assets/images/ncku.png"),
      subHeader: "Bachelor of Science in Hydraulic and Ocean Engineering",
      duration: "September 2012 - June 2016",
      desc: "Ranked top 10% in the program. Was the Activities and Finance Officer at The Student Association.",
      descBullets: [
        "Courses: Calculus (Ⅰ)(Ⅱ), Engineering Mathematics (Ⅰ)(Ⅱ)(III), Engineering Statistics, Computer Programming"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Backend Developer",
      company: "Mamon11",
      companylogo: require("./assets/images/mamon11.png"),
      date: "March 2025 – Present",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Integrated TikTok Marketing APIs into RESTful backend services to automate ad operations, including OAuth authorization, access token lifecycle management, and so on",
        "Designed internal service workflows with modular request handling, PostgreSQL-backed data retrieval and data validation logic in Python, reducing setup time by over 50%"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "LITEON Technology Corp.",
      companylogo: require("./assets/images/liteon.png"),
      date: "July 2024 – August 2024",
      // desc: "Built Flask-based APIs and a multilingual React dashboard for real-time monitoring, sleep mode control, and data visualization"
      descBullets: [
        "Developed a predictive energy-saving system for 5G base stations by analyzing 200K+ traffic and energy logs using MySQL, Pandas, and Prophet, reducing energy usage by 20%",
        "Built Flask-based APIs and a multilingual React dashboard for real-time monitoring, sleep mode control, and data visualization"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Radical AI",
      companylogo: require("./assets/images/radicalai.png"),
      date: "June 2024 – August 2024",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Built and integrated core features with React and Firebase, securely storing user profiles and data in Cloud Firestore",
        "Designed a Firestore-based logging system to track CRUD operations, enable behavior analysis, and trigger alerts on suspicious activities"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/openai.png"),
      projectName: "Learning Assistant Application",
      projectDesc:
        "A full-stack platform to recommend GitHub repositories based on user-defined difficulty and topics via GitHub and OpenAI APIs",
      footerLink: [
        {
          name: "More Details",
          url: "https://github.com/YUCHINGHUANG0920/Learning-Assistant"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/springboot.png"),
      projectName: "Employee Management System",
      projectDesc:
        "A backend system for employee CRUD operations using Spring Boot, Spring Data JPA, and PostgreSQL",
      footerLink: [
        {
          name: "More Details",
          url: "https://github.com/YUCHINGHUANG0920/Employee-Management-System"
        }
      ]
    },
    {
      image: require("./assets/images/yelp.png"),
      projectName: "Yelp Ratings & Inspection Analysis",
      projectDesc:
        "An ETL project that extracts Yelp API data into an Azure PostgreSQL warehouse and visualizes key metrics with Tableau",
      footerLink: [
        {
          name: "More Details",
          url: "https://github.com/YUCHINGHUANG0920/Analysis-of-Yelp-Rating-and-Restaurant-Inspection-Score"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications"),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Open to new opportunities and collaborations! Feel free to reach out!",
  number: "",
  email_address: "yuching1994h@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  greeting1,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
