import { useCallback, useEffect, useState, useRef } from "react";
import logo from "../../assets/logo.png";
import Button from "../Button";
import { motion, useInView } from "framer-motion";
import { MenuBar, CloseIcon } from "../Svgs";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const headerRef = useRef(null);
  const isInView = useInView(headerRef);

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -40,
    },
    visible: {
      opacity: 1,
      y: 0,

      transition: { duration: 0.005 },
    },
  };

  const handleScroll = useCallback(() => {
    if (openMenu) return;
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > 400 && currentScrollPos < scrollPos) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }

    setScrollPos(currentScrollPos);
  }, [openMenu, scrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPos, openMenu]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };

    if (openMenu) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("touchstart", handleOutsideClick);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [openMenu]);

  return (
    <motion.header
      initial="hidden"
      variants={headerVariants}
      animate={isInView ? "visible" : "hidden"}
      ref={headerRef}
      id="header"
      className={`${
        isSticky ? "sticky z-50" : "absolute"
      } backdrop-blur-lg bg-transparent pt-5 md:pt-10 pb-5 top-0 text-white w-full transition-all duration-300 ease-linear`}
    >
      <div
        style={{
          backgroundSize: "100% 100%",
        }}
        className={`relative md:bg-header md:py-3  max-w-[95%] md:max-w-[90%] mx-auto`}
      >
        <div className="mx-auto flex flex-col md:flex-row md:items-center justify-between md:gap-5 md:px-10">
          <div
            style={{
              backgroundSize: "100% 100%",
            }}
            className={`py-5  px-10 md:px-0 md:py-0 flex justify-between items-center bg-headersm md:bg-none`}
          >
            <Link to="/">
              <img className="w-[150px]" src={logo} />
            </Link>
            <button
              onClick={() => setOpenMenu((prev) => !prev)}
              className="md:hidden"
            >
              {openMenu ? <CloseIcon /> : <MenuBar />}
            </button>
          </div>
          {/* Mobile Nav */}
          <motion.nav
            initial={{ height: 0 }}
            animate={{ height: openMenu ? 250 : 0 }}
            className={`overflow-hidden md:px-0 bg-light-blue`}
          >
            <ul className="md:hidden border-t-4 px-2 md:border-b-0 border-black font-chivo py-5 lg:py-0 text-black flex flex-col gap-8">
              <li onClick={() => setOpenMenu(false)}>
                <Link to="/#speakers">SPEAKERS</Link>
              </li>
              <li onClick={() => setOpenMenu(false)}>
                <Link to="/#sponsors">SPONSORS</Link>
              </li>
              <li onClick={() => setOpenMenu(false)}>
                <NavLink className="link" to="/contact">
                  CONTACT
                </NavLink>
              </li>
              <li className="cursor-pointer max-w-[170px]">
                <Button aria-label="ticket button" color="black">
                  GET TICKETS
                </Button>
              </li>
            </ul>
          </motion.nav>
          <nav>
            <ul className="hidden md:flex px-2 md:border-b-0 border-black font-chivo py-5 lg:py-0 text-black  items-center flex-row gap-8">
              <li onClick={() => setOpenMenu(false)}>
                <Link to="/#speakers">SPEAKERS</Link>
              </li>
              <li onClick={() => setOpenMenu(false)}>
                <Link to="/#sponsors">SPONSORS</Link>
              </li>
              <li onClick={() => setOpenMenu(false)}>
                <NavLink className="link" to="/contact">
                  CONTACT
                </NavLink>
              </li>
              <li className="cursor-pointer">
                <Button aria-label="ticket button" color="black">
                  GET TICKETS
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
