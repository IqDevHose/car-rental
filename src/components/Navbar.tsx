import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import CustomButton from "./CustomButton";

const links = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Gallery",
    link: "/",
  },
  {
    label: "Contact",
    link: "/contact",
  },
  {
    label: "About",
    link: "/about",
  },
];

const NavBar = () => (
  <header className="w-full fixed overflow-hidden z-40">
    <motion.nav className=" max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
      <motion.div
        initial={{
          y: -50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <Link to="/" className="flex justify-center items-center">
          <img
            src="/logo.png"
            alt="logo"
            width={100}
            height={18}
            className="object-contain"
          />
        </Link>
      </motion.div>

      <motion.ul
        initial={{
          y: -50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        className="flex items-center gap-x-2"
      >
        {links.map((link) => (
          <li className="py-1 px-2 text-white" key={link.link + link.label}>
            <Link to={link.link}>{link.label}</Link>
          </li>
        ))}
      </motion.ul>
    </motion.nav>
  </header>
);

export default NavBar;
