import React from "react";
import "./styleNavBar.css";
import { RiSearchLine } from "react-icons/ri";
import { MdOutlineWbSunny } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Button from "./Button";
function NavBar() {
  return (
    <div className="navbar-container">
      <div className="img-navbar">
        <img
          src="https://live.themewild.com/moplay/assets/img/logo/logo.png"
          width={200}
          alt=""
        />
      </div>
      <ul className="navbar-container-list">
        <li style={{ color: "#29B6F6" }}>
          <Link to="/">Home</Link>
        </li>
        <li>
          Genre <RiArrowDownSLine />
        </li>
        <li>
          Country <RiArrowDownSLine />
        </li>
        <li>
          Pages <RiArrowDownSLine />
        </li>
        <li>
          {" "}
          <Link to="/Movies">Movies</Link>
        </li>
        <li>
          Tv Shows <RiArrowDownSLine />
        </li>
        <li id="last-li">
          <div class="circle"> </div>
          Live
        </li>
      </ul>
      <div className="elts-navbar">
        <RiSearchLine size={20} />
        <MdOutlineWbSunny size={20} />
        <Button
          icon={<PiSignInBold size={17} />}
          title={"SIGN IN"}
          padding={"15px 20px"}
        />
      </div>
    </div>
  );
}

export default NavBar;
