import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";

import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";

export const navItems = [
  {
    name: "Home",
    icon: <AiOutlineHome />,
    link: "/",
  },
  {
    name: "Skills",
    icon: <GrProjects />,
    link: "#skills",
  },
  {
    name: "Projects",
    icon: <AiOutlineProject />,
    link: "#projects",
  },
  {
    name: "Resume",
    icon: <BsPerson />,
    link: "#resume",
  },
  {
    name: "Contact",
    icon: <AiOutlineMail />,
    link: "#contacts",
  },
];
