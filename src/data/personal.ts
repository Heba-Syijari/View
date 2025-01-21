import { IBtnList } from "@/interfaces/interfaces";

export const BtnList: IBtnList[] = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/Heba-Syijari/",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/heba-syijari-624557265/",
    icon: "linkedin",
    newTab: true,
  },
  // {
  //     label: "Gitlab",
  //     link: "https://gitlab.com/Heba-Sy/",
  //     icon: "gitlab",
  //     newTab: true,
  // },
  {
    label: "Resume",
    link: "/Heba Syijari.pdf",
    icon: "resume",
    newTab: true,
  },
];
export const NAME = "Heba Syijari";
export const NUMBER_OF_CLIENTS = "+2";
export const YEARS_OF_EXPERIENCE = "+3";
