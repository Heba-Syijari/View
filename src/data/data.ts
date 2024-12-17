import { IProjectData, ISkill } from "@/interfaces/interfaces";
// skills
import {
  Html,
  Css,
  JS,
  bootstrap,
  Typescript,
  TailwindCss,
  React,
  Redux,
  Next,
  Framer,
  reactHookForm,
  materialUI,
  reactQuery,
  shadcnUI,
  reactRouter,
  vite,
  zod,
  lottiefiles,
  swiper,
  prisma,
  nextAuth,
  clerk,
  formik,
  npm,
} from "@/assets";

// projects
import {
  MultiPr,
  MultiPr1,
  MultiPr2,
  MultiPr3,
  MultiPr4,
  Portal,
  Portal1,
  Portal2,
  Portal3,
  Portal4,
  Portal5,
  CodeAI,
  CodeAI1,
  CodeAI2,
  CodeAI3,
  CodeAI4,
  Portfolio,
  Portfolio1,
  Portfolio2,
  Portfolio3,
  Portfolio4,
  Baby,
  Baby1,
  Baby2,
  Baby3,
  Baby4,
  Baby5,
  Baby6,
  Baby7,
  Car,
  Car1,
  Car2,
  Car3,
  Car4,
} from "@/assets";
// let uuid = self.crypto.randomUUID();
export const projectsData: IProjectData[] = [
  {
    id: 1,
    images: [MultiPr, MultiPr1, MultiPr2, MultiPr3, MultiPr4],
    name: "Multi Project Customfield",
    description: `I developed a "Multi Project Picker" feature for Jira Cloud, allowing users to reference multiple Jira projects in a single custom field. The functionality includes a multi-select dropdown to choose projects, with options to restrict the list based on project categories, types, or specific projects. Additionally, the feature supports advanced JQL queries (is, in, =) for seamless and powerful project-based issue searches.`,
    date: new Date("2023-7"),
    skills: [
      "React JS",
      "Jira Cloud Developer",
      "Atlassian Design System",
      "Forge",
      "Bitbucket",
    ],
    links: {
      demo: "https://marketplace.atlassian.com/apps/1221612/multi-project-customfield?hosting=datacenter&tab=overview",
      //   repo: "https://github.com/",
    },
  },
  {
    id: 2,
    images: [Portal],
    name: "Idea Portal",
    description: `This application was developed in collaboration with Innovura to create a portal for users to share and engage with various threads, such as ideas, opinions, and complaints. Users can post new threads, view detailed information about existing threads, comment on others’ threads, and vote to express support or agreement.
    _______________
    Features:
        1. Thread Management:
    Pages to view all threads, view thread details, and add new threads.
        2. User Engagement:
    Users can comment on threads shared by others.
    Voting system for threads to prioritize the most popular ones.
        3. Admin Control:
    Admins can manage the portal, oversee threads, and moderate interactions.
    _______________
    Design & Components:
        Atlassian Design System was used for components like navigation, buttons, forms, comments, and more, ensuring a professional and consistent UI.
        React Query and Redux Toolkit were used for efficient state management and data fetching.
        TailwindCSS enabled responsive and modern styling across all pages.`,
    date: new Date("2024-06"),
    skills: [
      "React JS",
      "TypeScript",
      "React Router DOM",
      "Redux",
      "React Query",
      "Atlassian Design System",
    ],
    links: {
      //   repo: "https://github.com/",
      //   demo: "https://",
    },
  },
  {
    id: 3,
    images: [CodeAI],
    name: "CodeAI",
    description: `Designed and developed a tool that utilizes AI to analyze and evaluate code changes.
    Streamlined the code review process by automating it in a collaborative development environment.
    _______________
    Features:
        AI-Powered Code Analysis:
        The tool leverages AI to detect potential issues, suggest improvements, and ensure code quality.
        UI Design and Integration:
        Designed and implemented a user-friendly interface for seamless interaction with the tool.
        Git Integration:
        Integrated the tool with Bitbucket Cloud, automating the review workflow to enhance developer productivity.
        Deployment:
        Deployed the tool using Atlassian Forge, ensuring secure and efficient functionality within the Bitbucket ecosystem.
`,
    date: new Date("2024-11"),
    skills: [
      "React JS",
      "TypeScript",
      "Bitbucket Cloud Developer",
      "Forge",
      "Atlassian Design System",
    ],
    links: {
      //   demo: "https://drive.google.com",
      //   repo: "https://github.com/",
    },
  },
  {
    id: 4,
    images: [Portfolio, Portfolio1, Portfolio2, Portfolio3, Portfolio4],
    name: "Portfolio Website",
    description: `I've created a sleek, dark-themed portfolio website using the latest web technologies. It showcases my projects and skills in a visually appealing and interactive manner. The site is built with React JS, TypeScript, and styled with Tailwind CSS for a custom and efficient development process.`,
    date: new Date("2022-04"),
    skills: ["React JS", "TypeScript", "TailwindCSS"],
    links: {
      demo: "https://heba-syijari.vercel.app/",
      repo: "https://github.com/Heba-Syijari/Portfolio-3D",
    },
  },
  {
    id: 5,
    images: [Baby, Baby1, Baby2, Baby3, Baby4, Baby5, Baby6, Baby7],
    name: "BabyShop Website",
    description: `BabyShop is an e-commerce website developed to cater to a store specializing in children’s clothes and accessories. The platform provides a user-friendly experience for customers to explore, select, and purchase products, while also offering robust administrative tools for managing the store's inventory and promotions.
    Features:

    1. User Features:
    Authentication:
    Users can register, log in, and reset their passwords if forgotten.
    Product Browsing:
    An organized layout showcasing products with categories, details, and pricing.
    Personalized Experience:
    Each user has access to a profile page where they can view and update personal details.
    A favorites page allows users to save their favorite items for easy access later.
    Shopping Cart:
    Users can add, remove, and update products in their cart before checkout.
    _______________
    2. Admin Features:
    Product Management:
    Admins can add, edit, and delete products from the store’s inventory.
    Discount Coupons:
    Admins can create, manage, and delete promotional discount codes to attract customers.`,
    date: new Date("2023-08"),
    skills: ["React JS", "Redux", "Bootstrap", "JavaScript"],
    links: {
      demo: "https://drive.google.com",
      repo: "https://github.com/Heba-Syijari/Children-Store-FrontEnd",
    },
  },
  {
    id: 6,
    images: [Car, Car1, Car2, Car3, Car4],
    name: "Smart system For self-driving the cars",
    description: `This project focused on developing advanced visual perception techniques to improve the performance of autonomous driving systems. The work involved a comprehensive exploration of image processing, machine learning, and deep learning methods, rigorously tested on the KITTI dataset and validated in the CARLA simulator.
        * Image Processing Techniques: Implemented edge detection, vehicle lane detection, and feature extraction methods such as SIFT, ORB, and HOG to enhance object recognition and lane detection.
        * Machine Learning Classifiers: Developed and tested classifiers including SVM, Random Forest, and LDA to improve the accuracy of object classification.
        * Advanced Deep Learning Models: Trained state-of-the-art deep learning models, from YOLOv3 to YOLOv10, achieving high precision in real-time object detection and tracking.
        * Stereo Vision: Applied stereo vision techniques for depth perception, leading to more accurate 3D object detection.
        * LIDAR Data Integration: Integrated LIDAR data to enhance 3D object detection and provide a more comprehensive understanding of the vehicle's environment.
        * Object Tracking: Utilized DeepSORT for robust and efficient object tracking in dynamic scenarios
        * Simulation Testing: Conducted extensive testing and validation in the CARLA simulator, ensuring the system's reliability and performance in various driving conditions. `,
    date: new Date("2024-08"),
    skills: [
      "Python",
      "Computer Vision",
      "Image Processing",
      "Machine Learning",
      "Deep Learning",
      "TensorFlow",
    ],
    links: {
      //   demo: "https://drive.google.com",
      //   repo: "https://github.com",
    },
  },
];
export const SkillData: ISkill[] = [
  {
    name: "HTML 5",
    Image: Html,
  },
  {
    name: "CSS 3",
    Image: Css,
  },
  {
    name: "JavaScript",
    Image: JS,
  },
  {
    name: "Bootstrap",
    Image: bootstrap,
  },
  {
    name: "TypeScript",
    Image: Typescript,
  },
  {
    name: "Vite",
    Image: vite,
  },
  {
    name: "React JS",
    Image: React,
  },
  {
    name: "Redux",
    Image: Redux,
  },
  {
    name: "React Query",
    Image: reactQuery,
  },
  //   {
  //     name: "Next JS",
  //     Image: Next,
  //   },
  //   {
  //     name: "Framer Motion",
  //     Image: Framer,
  //   },
  //   {
  //     name: "Material UI",
  //     Image: materialUI,
  //   },
  //   {
  //     name: "Prisma",
  //     Image: prisma,
  //   },
  //   {
  //     name: "NextAuth",
  //     Image: nextAuth,
  //   },
  //   {
  //     name: "Clerk",
  //     Image: clerk,
  //   },
  //   {
  //     name: "Lottie Files",
  //     Image: lottiefiles,
  //   },
  //   {
  //     name: "Swiper.js",
  //     Image: swiper,
  //   },
  //   {
  //     name: "React Hook Form",
  //     Image: reactHookForm,
  //   },
  //   {
  //     name: "Formik",
  //     Image: formik,
  //   },
  //   {
  //     name: "Zod",
  //     Image: zod,
  //   },
  {
    name: "React Router DOM",
    Image: reactRouter,
  },

  {
    name: "TailwindCSS",
    Image: TailwindCss,
  },
  {
    name: "Shadcn UI",
    Image: shadcnUI,
  },
  {
    name: "npm",
    Image: npm,
  },
];
