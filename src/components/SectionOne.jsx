import React from "react";
import "./styleSectionOne.css";
import { RiSearchLine } from "react-icons/ri";
import ListSectionOne from "./ListSectionOne";
import { TbCaretUpDownFilled } from "react-icons/tb";
import Button from "./Button";
import ReactStars from "react-stars";
import { VscDebugRestart } from "react-icons/vsc";
function SectionOne({ setSearch, ratingChanged }) {
  return (
    <div className="section-one">
      <div className="search-section-one">
        <input
          type="text"
          placeholder="Enter Keywords..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>
        <div className="search-icon">
          <RiSearchLine size={20} color="rgb(41, 182, 246)" />
        </div>
      </div>
      <div className="elements-sec-one">
        {/* <div className="dropdown-parent">
          <ListSectionOne title={"Type"} />
          <div className="dropdown">
            <ul className="dropdown-menu">
              <li>Action</li>
              <li>Fantasy</li>
              <li>Sports</li>
              <li>Animation</li>
              <li>Crime</li>
              <li>Drama</li>
            </ul>
          </div>
        </div> */}

        {/* <div className="dropdown-parent">
          <ListSectionOne title={"Quality"} />
          <div className="dropdown">
            <ul className="dropdown-menu">
              <li>Any</li>
              <li>HDs</li>
              <li>SD</li>
              <li>TS</li>
              <li>CAM</li>
              <li>DVD</li>
            </ul>
          </div>
        </div> */}
        <div className="elements-sec-one">
          <div className="rate-restart">
            <ReactStars
              count={5}
              onChange={(newRating) => {
                ratingChanged(newRating);
              }}
              size={35}
              half={true}
              color2={"#ffd700"}
            />
            <VscDebugRestart
              color="grey"
              size={30}
              onClick={() => {
                ratingChanged(0);
              }}
            />
          </div>
          {/* <div className="dropdown-parent">
            <ListSectionOne title={"Sort By"} />
            <div className="dropdown">
              <ul className="dropdown-menu">
                <li>Any</li>
                <li>Trending</li>
                <li>Latest Movies</li>
                <li>Most Watched</li>
                <li>IMDB Rate</li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
      <div className="btn-sec-one">
        <Button
          icon={<TbCaretUpDownFilled size={17} />}
          title={"FILTER"}
          padding={"15px 20px"}
        />
      </div>
    </div>
  );
}

export default SectionOne;
