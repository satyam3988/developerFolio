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
  username: "Satyam Pathak",
  title: "Hi all, I'm Satyam",
  subTitle: emoji(
    "A versatile Technologist 🚀, blending Full Stack Development and Data Engineering, creating impactful Web and Mobile apps with JavaScript, React.js, Node.js, React Native, and pioneering data solutions with Python, SQL, and Big Data technologies."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Ztis5axCujpMdv0rT93eMlvW-ChLyExT/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/satyam3988",
  linkedin: "https://www.linkedin.com/in/satyam-pathak1/",
  gmail: "pathaksatyam@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "VERSATILE DATA ENGINEER AND SOFTWARE DEVELOPER WHO LOVES EXPLORING VARIOUS TECH STACKS",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for web and mobile applications"),
    emoji("⚡ Design and implement data pipelines and architectures for efficient data analysis and insight generation"),
    emoji("⚡ Progressive Web Applications (PWA) development in normal and SPA Stacks"),
    emoji("⚡ Expertise in data analysis and visualization tools like Plotly Dash, Databricks, and Power BI"),
    emoji("⚡ Integration of third-party services such as Firebase, AWS, Digital Ocean"),
    emoji("⚡ Develop and optimize machine learning models for predictive analysis and data-driven decision-making"),
    emoji("⚡ Manage CI/CD pipelines for streamlined development and deployment processes")
  ]
,

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
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
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
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
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "California State University, Long Beach",
      logo: require("./assets/images/csulbb.jpg"),
      subHeader: "Master of Science - MS, Computer Science",
      duration: "Jul 2022 - May 2024",
      desc: "During my tenure at California State University, Long Beach (CSULB), I published two research papers and achieved a high GPA of 3.88. As a member of Tau Beta Pi, the engineering honor society, I pursued advanced coursework in artificial intelligence, algorithms, and software engineering. My academic and practical skills were further demonstrated by winning the Marina Hacks Hackathon.",
      descBullets: ["Member of Tau Beta Pi Engineering Honor Society" , "Published Research Paper in RANLP","First Place and Most Creative Hack at MarinaHacks 3.0 for Aimagine","Research Presentation at ICTD 2024"]
    },
    {
      schoolName: "Manipal Academy of Higher EducationManipal Academy of Higher Education",
      logo: require("./assets/images/manipal.png"),
      subHeader: "Bachelor of Technology - BTech, Computer and Communication Engeenering Bachelor of Technology",
      duration: "Jul 2018 - May 2022",
      desc: "Participated in the research of NLP and published Feature Based Opinion Mining for Mobile Reviews ",
      descBullets: [
        "Research Presentation at ICAITPR IEEE",
      ]
    },

  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Web Development",
      progressPercentage: "85%"
    },
    {
      Stack: "Database Management",
      progressPercentage: "75%"
    },
    {
      Stack: "Cloud Services",
      progressPercentage: "80%"
    },
    {
      Stack: "DevOps",
      progressPercentage: "70%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "85%" // Added Machine Learning with proficiency
    },
    {
      Stack: "Data Analysis",
      progressPercentage: "60%" // Added Data Analysis with proficiency
    },
    {
      Stack: "Mobile Development",
      progressPercentage: "75%" // Added Mobile Development with proficiency
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section
};


// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Engineer",
      company: "Institutional Research & Analytics, CA",
      companylogo: require("./assets/images/csulbb.jpg"), // Using Quora logo for all entries
      date: "May 2023 – Present",
      desc: "Designed a Major Change Index dashboard using Plotly Dash, integrating data from Databricks API and Azure Blob, leading to a 30% boost in user engagement.",
      descBullets: [
        "Led successful migration to Databricks, achieving 40% faster data processing.",
        "Upgraded to CatBoost model, resulting in 27% improvement in key evaluation metrics."
      ]
    },
    {
      role: "Research And Development Engineer",
      company: "Pack Lab, California",
      companylogo: require("./assets/images/PACK-logo.png"), // Using Quora logo for all entries
      date: "Aug 2022 – May 2023",
      desc: "Facilitated and maintained 'sumo-reinforcement’ Infrastructure, optimizing Traffic Signal Control.",
      descBullets: [
        "Managed CI/CD pipelines, reducing training time by 40%.",
        "Optimized RL algorithms, integrating cloud capabilities for training."
      ]
    },
    {
      role: "Software Engineer",
      company: "Enquero",
      companylogo: require("./assets/images/enquero_logo.jpeg"), // Using Quora logo for all entries
      date: "January 2022 – July 2022",
      desc: "Developed a recommendation engine using advanced data filtering techniques to anticipate customer engagement.",
      descBullets: [
        "Utilized SQL, Python, and C++ to implement software algorithms.",
        "Shared project experiences and collaborated with the team for knowledge enhancement."
      ]
    },
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
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

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Open for job opportunities, project discussions, or just a friendly chat. My inbox is open for all.",
  number: "(+1)5625383577",
  email_address: "pathaksatyam@gmail.com"
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
  isHireable
};
