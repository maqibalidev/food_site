import React, { useContext, useEffect, useRef, useState } from "react";
import "./header.css";
import logo from "../../assets/images/3.png";
import { CartContext } from "../contexts/cartContextApi/cartContext";
import { Link } from "react-router-dom";
const Header = () => {
  const cartContext = useContext(CartContext);
  const [active, setActive] = useState(false);
  const [showPageoptions, setShowPageoptions] = useState(false);
  const [showSlider, setShowSlider] = useState(false);
  const [page, setPage] = useState("HOME");
  const [pageOption, setpageOption] = useState("PAGES");
  const pageOptionsRef = useRef(null);

  const handleToggle = () => {
    !active && setActive(true);
  };

  const optionClick = (page, e) => {
    setShowPageoptions(false);

    if (window.screen.width < 766) {
      setPage(page);
    } else {
      setpageOption("PAGES");
      setPage(page);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (
      pageOptionsRef.current &&
      !pageOptionsRef.current.contains(event.target)
    ) {
      setActive(false);
      setShowPageoptions(false);
      setShowSlider(false);
    }
  };

  const addActiveSliderClass = (e) => {
    const slider_opt = document.querySelectorAll(".slider-option");
    slider_opt.forEach((element) => {
      element.classList.remove("slider-option-active");
    });
    e.target.classList.add("slider-option-active");
  };

  const addActiveClass = () => {
    const mobile_search = document.getElementById("mobile-seach-input");
    const tab = document.getElementById("tablet-seach-input");
    mobile_search.classList.toggle("mob-search-active");
    tab.classList.toggle("tab-search-active");
  };
  return (
    <div className="d-flex flex-column ">
      <div className=" d-flex align-items-start align-items-sm-center header-container px-0 px-md-2">
        <div className="d-flex vw-100 align-items-center ">
          <div className="w-100 me-md-0 d-flex pt-md-0 flex-md-grow-0 flex-grow-1 ">
            <div className="d-flex flex-grow-1 justify-content-between justify-content-md-center ">
              <div className="container  header-cont justify-content-end ms-0  justify-content-sm-start d-flex ">
                {/* /////////////////    HEADER  LEFT SECTION  //////////////////////// */}
                <div className="d-flex left-container    ms-0  mt-sm-0 align-items-center">
                  <div className="left mx-1  mt-1 d-flex align-items-center h-100 ms-1 ms-sm-1 ms-lg-3 ">
                    {" "}
                  </div>
                  <button
                    role='button'
                    className=" border-0 bg-transparent me-1 ms-2  align-self-centera align-self-sm-center"
                    onClick={() => setShowSlider(true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#000000"
                    >
                      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                    </svg>
                  </button>
                </div>
                {/* /////////////////    HEADER  CATEGORY AND SEARCH INPUT  //////////////////////// */}
                <div className="d-flex mt-2 mt-sm-0">
                  <div className="header-form-container  mt-sm-0  d-flex">
                    <form
                      className="form ps-lg-4 ps-0 d-none d-sm-flex"
                      action=""
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <div className="d-flex align-items-center select-input-container ">
                        <select
                          defaultValue={"all_cat"}
                          className="   px-4 form-select header-selectbox border-0"
                          name=""
                          id=""
                        >
                          <option  value="all_cat">
                            All Categories
                          </option>
                          <option  value="abc">
                            abc
                          </option>
                          <option value="abc">abc</option>
                          <option value="abc">abc</option>
                        </select>
                        <div className="d-flex align-items-center header-search-container px-2 ">
                          <input
                            className=" header-search form-control border-0 d-flex align-items-center"
                            type="text"
                            placeholder="Search for more than 20,000 products"
                          />
                          <button className="border-0 bg-transparent d-block aling-self-center">
                            <svg
                              className=" mb-1"
                              onClick={() => {
                                // handleToggle();
                                // addActiveClass()
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              height="20px"
                              viewBox="0 -960 960 960"
                              width="20px"
                              fill="#666666"
                            >
                              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>

                  {/* /////////////////    HEADER  PAGE LINKS  //////////////////////// */}

                  <div className="d-flex pages-select-container align-items-center position-relative">
                    <div className="pe-0 pe-sm-0 right mx-0 mx-md-1 header-page-links-conainer d-flex justify-content-end  ">
                      <div className="header-links   flex-grow-1 d-flex align-items-start align-items-md-center me-0 ms-5 ms-sm-0 me-lg-0 justify-content-start justify-content-md-start  d-sm-flex">
                        <p
                          id="current-page"
                          className=" header-current-page-txt d-none d-md-block text-dark mx-3 text-decoration-none fw-bold"
                          href=""
                        >
                          {page}
                        </p>
                        <div className="position-relative">
                          <button
                            className="header-current-page-txt  pb-sm-0  text-dark ms-1 ms-sm-0 msx-0 ms-sm-1 text-decoration-none fw-bold d-flex align-items-center"
                            href=""
                            onClick={() => {
                              setShowPageoptions(!showPageoptions);
                            }}
                          >
                            {pageOption}{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="24px"
                              viewBox="0 -960 960 960"
                              width="24px"
                              fill="#666666"
                            >
                              <path d="M480-360 280-560h400L480-360Z" />
                            </svg>
                          </button>

                          {showPageoptions && (
                            <div
                              className="page-option-container"
                              ref={pageOptionsRef}
                            >
                              <div
                                className={`page-option ${
                                  page === "HOME" && "page-option-active"
                                }`}
                                onClick={(e) => optionClick("HOME", e)}
                              >
                                HOME
                              </div>
                              <div
                                className={`page-option ${
                                  page === "ABOUT" && "page-option-active"
                                }`}
                                onClick={(e) => optionClick("ABOUT", e)}
                              >
                                ABOUT
                              </div>
                              <div
                                className={`page-option ${
                                  page === "CONTACT" && "page-option-active"
                                }`}
                                onClick={(e) => optionClick("CONTACT", e)}
                              >
                                CONTACT
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /////////////////    HEADER RIGHT SECTION  ICONS  //////////////////////// */}
              <div className="d-flex flex-column me-2">
                <div
                  className="ps-0 ps-xl-5 ms-0 ms-lg-5  me-md-0 me-lg-2 align-items-center header-right-icons d-flex justify-content-start justify-content-sm-end  pe-md-0 mx-0 me-md-0 ms-md-3"
                  style={{ flex: 1 }}
                >
                  <Link
                    to="/account"
                    className="mx-1 mx-sm-2 d-flex align-items-center  align-items-md-center"
                  >
                    <svg
                      className=""
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 -960 960 960"
                      width="20px"
                      fill="#666666"
                    >
                      <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
                    </svg>
                  </Link>

                  <a
                    href=""
                    className="mx-1 mx-sm-2 d-flex align-items-center align-items-md-center"
                  >
                    <svg
                      className=""
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 -960 960 960"
                      width="20px"
                      fill="#666666"
                    >
                      <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" />
                    </svg>
                  </a>
                  <Link
                    to="/cart"
                    className="ms-1 me-2 mx-sm-2 d-flex align-items-center align-items-md-center position-relative"
                  >
                    <svg
                      className=""
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 -960 960 960"
                      width="20px"
                      fill="#666666"
                    >
                      <path d="M200-80q-33 0-56.5-23.5T120-160v-480q0-33 23.5-56.5T200-720h80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720h80q33 0 56.5 23.5T840-640v480q0 33-23.5 56.5T760-80H200Zm0-80h560v-480H200v480Zm280-240q83 0 141.5-58.5T680-600h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85h-80q0 83 58.5 141.5T480-400ZM360-720h240q0-50-35-85t-85-35q-50 0-85 35t-35 85ZM200-160v-480 480Z" />
                    </svg>
                    <div className=" position-absolute text-light cart-count-txt d-flex align-items-center justify-content-center">
                      {cartContext.products && cartContext.products.length
                        ? cartContext.products.length
                        : 0}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* /////////////////    HEADER  BOTTOM SEATCH INPUT(MOBILE)  //////////////////////// */}
      <form
        className="form mobile-form-contianer ps-lg-4 ps-0 d-flex d-sm-none justify-content-end px-2 mb-2 position-relative"
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="d-flex align-items-center select-input-container w-100  ms-2">
          <select
            defaultValue={"all_cat"}
            className="  form-select header-selectbox border-0"
            name=""
            id=""
          >
            <option value="all_cat">All Categories</option>
            <option  value="abc">
              abc
            </option>
            <option value="abc">abc</option>
            <option value="abc">abc</option>
          </select>
          <div
            id="mobile-seach-input"
            className={` mob-search-active d-flex align-items-center  mobile-search     px-2    d-lg-flex `}
          >
            <input
              className=" form-control border-0 flex-grow-1  d-flex align-items-center"
              type="text"
              placeholder="Search for more than 20,000 products"
            />
          </div>
          <button className={`border-0 bg-transparent`}>
            <svg
              className="mb-1 "
              onClick={() => {
                handleToggle();
                addActiveClass();
              }}
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#666666"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
          </button>
        </div>
      </form>

      {/* /////////////////    HEADER  SIDEBAR  //////////////////////// */}
      <div
        id="header-slider"
        className={`header-slider-container d-flex flex-column justify-content-center ${
          showSlider && "header-slider-active"
        }`}
        ref={pageOptionsRef}
      >
        <div className="header-slider d-flex flex-column">
          <div className="btn-cancel-container">
            <button
              className="btn-cancel border-0 d-flex align-items-center"
              onClick={() => setShowSlider(!showSlider)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#666666"
              >
                <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
              </svg>{" "}
            </button>
          </div>

          <div
            className="slider-option"
            onClick={(e) => {
              addActiveSliderClass(e);
            }}
          >
            HOME PAGE
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#666666"
            >
              <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
            </svg>
          </div>

          <div
            className="slider-option"
            onClick={(e) => {
              addActiveSliderClass(e);
            }}
          >
            HOME PAGE
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#666666"
            >
              <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
            </svg>
          </div>

          <div
            className="slider-option"
            onClick={(e) => {
              addActiveSliderClass(e);
            }}
          >
            HOME PAGE
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#666666"
            >
              <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
            </svg>
          </div>

          <div
            className="slider-option"
            onClick={(e) => {
              addActiveSliderClass(e);
            }}
          >
            HOME PAGE
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#666666"
            >
              <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
            </svg>
          </div>

          <div
            className="slider-option"
            onClick={(e) => {
              addActiveSliderClass(e);
            }}
          >
            HOME PAGE
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#666666"
            >
              <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
            </svg>
          </div>

          <div
            className="slider-option"
            onClick={(e) => {
              addActiveSliderClass(e);
            }}
          >
            HOME PAGE
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#666666"
            >
              <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
