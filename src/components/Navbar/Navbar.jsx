import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logo, breadCrumb } from "./../../assets/Callback";
import Button from "../Button/Button";
import { FaShoppingCart } from "react-icons/fa";
import CustomLink from "../CustomLink/CustomLink";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import "../components.scss";
import { useContext } from "react";
import { CartContext } from "../../context api/AddToCartContext";
import { routeContext } from "../../context api/NavbarContex";
import { AuthContext } from "../../context api/UserContext";
import { ScrollToTop } from "../ScrollTop/ScrollTop";

const Navbar = () => {
  // context api
  const { products } = useContext(CartContext);
  const { routePath, setRoutePath } = useContext(routeContext);
  const { user, logOut } = useContext(AuthContext);

  // all states
  const [top, setTop] = useState(true);
  const [nav, setNav] = useState(0);
  const [hover, setHover] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [buttonHoverVillage, setButtonHoverVillage] = useState(false);
  const [buttonHoverFreedom, setButtonHoverFreedom] = useState(false);
  const [buttonHoverVillageDrop, setButtonHoverVillageDrop] = useState(false);
  const [buttonHoverFreedomDrop, setButtonHoverFreedomDrop] = useState(false);

  // functions
  const dropDownControl = () => {
    setDropDown(!dropDown);
  };

  const scroll = () => {
    if (window.scrollY < 50 && routePath !== "cart") {
      setTop(true);
    } else {
      setTop(false);
    }

    setNav(window.scrollY);
  };

  // use Effects
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  });

  const handleNavScroll = () => {
    ScrollToTop();
  };
  return (
    <div
      className={`p-5  fixed top-0 w-full z-50 md:p-0 ${
        top
          ? "bg-transparent duration-[.3s] ease-in"
          : "bg-black duration-[.3s] ease-in"
      }`}
    >
      <div className="flex justify-between  items-center navbar-container bg-transparent text-[17px] md:mx-[3%] relative">
        <div className="hidden md:flex md:items-center" onClick={handleNavScroll}>
          <CustomLink
            route={"/about"}
            value={"ABOUT FLUX"}
            routeName={"about"}
          ></CustomLink>

          <div
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
            className=" ml-[40px] py-[40px] relative font-semibold"
          >
            {/* DESIGN YOURS hover div */}
            <div
              className={`w-full bg-[#ddc861] h-[1px] absolute top-2  ${
                hover
                  ? "opacity-100 duration-500 ease-in "
                  : "opacity-0 duration-500 ease-in"
              }`}
            ></div>
            <Link
              onClick={handleNavScroll}
              className={`py-[30px]  font-semibold ${
                hover ? "text-[#ddc861]" : ""
              } duration-500 ease-in`}
            >
              DESIGN YOURS
            </Link>
            {/* hover flux */}
            <div
              className={`${
                hover ? "" : "h-0 opacity-0"
              } absolute top-[70%] w-[160px] bg-[#161816] p-1 rounded duration-300 ml-[-20px]`}
            >
              {/* flux village */}
              <Link to="/village">
                <div
                  onMouseEnter={() => {
                    setButtonHoverVillage(true);
                  }}
                  onMouseLeave={() => {
                    setButtonHoverVillage(false);
                  }}
                  className={` p-3  text-white ${
                    buttonHoverVillage ? "bg-[#635929]" : "bg-transparent"
                  }`}
                >
                  <Link onClick={handleNavScroll}  to="/village">FLUX VILLAGE</Link>
                </div>
              </Link>
              {/* flux freedom */}
              <Link
                onClick={() => {
                  setRoutePath("freedom");
                }}
                to="/freedom"
              >
                <div
                  onMouseEnter={() => {
                    setButtonHoverFreedom(true);
                  }}
                  onMouseLeave={() => {
                    setButtonHoverFreedom(false);
                  }}
                  className={`p-3  ${
                    buttonHoverFreedom ? "bg-[#635929]" : "bg-transparent"
                  }`}
                >
                  <Link onClick={handleNavScroll}  to="/freedom">FLUX FREEDOM</Link>
                </div>
              </Link>
            </div>
          </div>
          <CustomLink
            route={"/contact"}
            value={"CONTACT"}
            routeName={"contact"}
          ></CustomLink>
        </div>

        {/* logo */}
        <div
          onClick={() => {
            setRoutePath("home");
          }}
        >
          <Link onClick={handleNavScroll}  to="/">
            <img
              className="w-[40%] cursor-pointer md:w-[55%]"
              src={logo}
              alt=""
            />
          </Link>
        </div>

        <div className="flex items-center">
          {/* Shoping cart */}

          <div
            className={`dropdown dropdown-end ${user?.email ? "" : "hidden"}`}
          >
            <Link onClick={handleNavScroll}  to="/cart">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <Link onClick={handleNavScroll}  to="/cart">
                    <FaShoppingCart className="text-[18px] text-white cursor-pointer " />
                  </Link>
                  <span className="badge badge-sm indicator-item">
                    {products.length}
                  </span>
                </div>
              </label>
            </Link>
          </div>

          {/* Store and Stay update */}
          <div className="hidden md:block" onClick={handleNavScroll}>
            <CustomLink
              route={"/store"}
              value={"STORE"}
              routeName={"store"}
            ></CustomLink>
          </div>
          <div
            onClick={() => {
              setRoutePath("stay");
            }}
          >
            <Link onClick={handleNavScroll}>
            <Button 
              to={"/stayUpdate"}
              value={"STAY UPDATE"}
              left={"ml-[40px]"}
              hiden={true}
            /></Link>
          </div>

          {/* user sign up and profile */}
          <div>
            {user?.email ? (
              <div className="pl-8 mr-[-20px] ">
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        src={`${
                          user?.photoURL
                            ? user?.photoURL
                            : "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                        }`}
                        alt=""
                      />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <Link onClick={handleNavScroll}  to="/profile" className="justify-between">
                        Your Profile
                      </Link>
                    </li>
                    <li>
                      <Link onClick={handleNavScroll}  to="/orders">Orders</Link>
                    </li>
                    <li
                      onClick={() => {
                        logOut();
                      }}
                    >
                      <Link>Logout</Link>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div>
                <CustomLink
                  route={"/signup"}
                  value={"SIGN UP"}
                  routeName={"signup"}
                ></CustomLink>
              </div>
            )}
          </div>

          {/* drawer */}
          <div className="cursor-pointer">
            <div className="drawer drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer-4"
                  className="drawer-button cursor-pointer"
                >
                  <img
                    className="w-[40px] ml-[40px] "
                    src={breadCrumb}
                    alt=""
                  />
                </label>
              </div>
              <div className="drawer-side cursor-auto z-[999]">
                <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                <ul className="menu p-4 w-[340px] min-h-full bg-black text-base-content">
                  <div className="mt-[10%] mx-[2%] ">
                    {/* colse button */}
                    <label
                      htmlFor="my-drawer-4"
                      className="text-[18px] p-2 absolute right-[10%] hover:opacity-80 cursor-pointer "
                    >
                      X
                    </label>
                    {/* all buttons */}
                    <div
                      onClick={() => {
                        setRoutePath("home/stay");
                      }}
                      className="mt-[17%] flex items-center"
                    >
                      <Link onClick={handleNavScroll}>
                        <div className="text-[18px] font-semibold text-[#ddc861] hover:opacity-70 select-none">
                          Home
                        </div>
                      </Link>
                      <div>
                        {user?.uid ? (
                          <Link onClick={handleNavScroll} to={"/profile"} className="ml-5">
                            <label
                              tabIndex={0}
                              className="btn btn-ghost btn-circle avatar"
                            >
                              <div className="w-10 rounded-full">
                                <img
                                  src={`${
                                    user?.photoURL
                                      ? user?.photoURL
                                      : "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                                  }`}
                                  alt=""
                                />
                              </div>
                            </label>
                          </Link>
                        ) : (
                          <Link onClick={handleNavScroll}  to={`/signup`}>
                            <div className="text-[18px] font-semibold text-[#ddc861] hover:opacity-70 select-none ml-5">
                              Sign Up
                            </div>
                          </Link>
                        )}
                      </div>
                    </div>
                    <Link
                      onClick={() => {
                        setRoutePath("about");
                      }}
                      to="/about"
                      className=""
                    >
                      <div onClick={handleNavScroll}  className="text-[16px] mt-[18%] font-semibold text-white hover:opacity-70 select-none">
                        About Flux
                      </div>
                    </Link>
                    <div
                      onClick={() => {
                        dropDownControl();
                      }}
                      className="text-[16px] mt-[8%] font-semibold text-white cursor-pointer hover:opacity-70"
                    >
                      <div className="flex justify-between select-none">
                        <span>Design Yours</span>
                        {dropDown ? <BiChevronDown /> : <BiChevronUp />}
                      </div>
                      <div className={dropDown ? "block" : "hidden"}>
                        <div className={`px-5 py-7`}>
                          {/* Flux village drower*/}
                          <Link
                            onClick={() => {
                              setRoutePath("village");
                            }}
                            to="/village"
                            onMouseEnter={() => {
                              setButtonHoverVillageDrop(true);
                            }}
                            onMouseLeave={() => {
                              setButtonHoverVillageDrop(false);
                            }}
                          >
                            <div
                            onClick={handleNavScroll} 
                              className={`p-3 text-white select-none ${
                                buttonHoverVillageDrop ? "bg-[#635929]" : ""
                              }`}
                            >
                              Flux Village
                            </div>
                          </Link>

                          {/* Flux freedom drower*/}
                          <Link
                            onClick={() => {
                              setRoutePath("freedom");
                            }}
                            to="/freedom"
                            onMouseEnter={() => {
                              setButtonHoverFreedomDrop(true);
                            }}
                            onMouseLeave={() => {
                              setButtonHoverFreedomDrop(false);
                            }}
                          >
                            <div onClick={handleNavScroll} 
                              className={`p-3 text-white select-none ${
                                buttonHoverFreedomDrop ? "bg-[#635929]" : ""
                              }`}
                            >
                              Flux Freedom
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <Link
                      onClick={() => {
                        setRoutePath("store");
                      }}
                      to="/store"
                      className=""
                    >
                      <div onClick={handleNavScroll}  className="select-none text-[16px] mt-[8%] font-semibold text-white hover:opacity-70">
                        Store
                      </div>
                    </Link>
                    <Link
                      onClick={() => {
                        setRoutePath("more");
                      }}
                      to="/about"
                      className=""
                    >
                      <div onClick={handleNavScroll}  className="select-none text-[16px] my-[20%] font-semibold text-white hover:opacity-70">
                        More About Flux
                      </div>
                    </Link>
                    <Link
                      onClick={() => {
                        setRoutePath("contact");
                      }}
                      to="/contact"
                      className=""
                    >
                      <div onClick={handleNavScroll}  className="text-[16px]  font-semibold text-white hover:opacity-70 select-none">
                        Contact Us
                      </div>
                    </Link>
                    <Link
                      onClick={() => {
                        setRoutePath("contact");
                      }}
                      to="/privacy"
                      className=""
                    >
                      <div onClick={handleNavScroll}  className="text-[16px] mt-[5%]  font-semibold text-white hover:opacity-70 select-none">
                        Privacy policy
                      </div>
                    </Link>
                    <Link
                      onClick={() => {
                        setRoutePath("contact");
                      }}
                      to="/terms"
                      className=""
                    >
                      <div onClick={handleNavScroll}  className="text-[16px] mt-[5%] font-semibold text-white hover:opacity-70 select-none">
                        Terms of Use
                      </div>
                    </Link>
                    <Link
                      onClick={() => {
                        setRoutePath("contact");
                      }}
                      to="/stayUpdate"
                      className=""
                    >
                      <div onClick={handleNavScroll}  className="text-[16px] mt-[5%] font-semibold text-white hover:opacity-70 select-none">
                        Stay Update
                      </div>
                    </Link>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          {/* drawer end */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
