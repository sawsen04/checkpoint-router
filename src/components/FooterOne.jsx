import React from "react";
import "./styleFooterOne.css";
import { FaCaretDown } from "react-icons/fa";
import ListFooterOne from "./ListFooterOne";
import { FaMinus } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import Button from "./Button";
function FooterOne() {
  return (
    <div className="footer-container">
      <div className="els-one-footer">
        <img
          src="https://live.themewild.com/moplay/assets/img/logo/logo.png"
          width={300}
          alt=""
        />
        <p>
          We are many variations of passages <br /> available the majority have
          suffered <br /> alteration in some form by injected <br /> humour
          words believable.
        </p>
        <button className="btn-els-one-footer">
          <img
            src="https://cdn-icons-png.flaticon.com/256/555/555526.png"
            alt=""
          />
          <h3>English</h3>
          <FaCaretDown className="icon-down" />
        </button>
      </div>
      <div className="els-two-footer">
        <ListFooterOne
          title={"Moplay"}
          one={"About Us"}
          two={"Testimonials"}
          three={"Contact Us"}
          four={"Terms Of Service"}
          five={"Privacy policy"}
          six={"Update News"}
        />
        <ListFooterOne
          title={"Genres"}
          one={"Action"}
          two={"Biography"}
          three={"Documentary"}
          four={"Adventure"}
          five={"Talk Show"}
          six={"Psychological"}
        />
        <ListFooterOne
          title={"Support"}
          one={"Help Center"}
          two={"FAQ's"}
          three={"My Account"}
          four={"Request Movie"}
          five={"Support"}
          six={"Media Center"}
        />
      </div>
      <div className="els-three-footer">
        <h2>Newsletter</h2>
        <div className="minus">
          <FaMinus size={20} color="rgb(41, 182, 246)" />
          <FaMinus size={15} color="rgb(41, 182, 246)" />
        </div>
        <h4>
          Subscribe Our Newsletter To Get Latest <br /> Update And News
        </h4>
        <input className="input" type="text" placeholder="Your Email" />
        <Button
          icon={<BsFillSendFill size={17} />}
          title={"SUBSCRIBE NOW"}
          padding={"15px 103px"}
        />
      </div>
    </div>
  );
}

export default FooterOne;
