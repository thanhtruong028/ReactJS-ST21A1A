import { memo } from "react";
import "./style.scss";
import Logo from "./picture/logo.png"
import Picture from "./picture/logoGioHang.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
const Header = () => {
  return (
    <div id="wrapper">
      <div id="header">
        <a href="" class="lego">
          <img src={Logo} alt="" height="40px" width="70px" />
        </a>
        <div id="menu">
          <div class="item">
            <a href="http://localhost:3000">TRANG CHU</a>
          </div>
          <div class="item">
            <a href="">SAN PHAM</a>
          </div>
          <div class="item">
            <a href="blog">BLOG</a>
          </div>
          <div class="item">
            <a href="lienhe">LIEN HE</a>
          </div>
        </div>
        <div id="actions">
          <div class="item legoRight">
            <a href="" class="lego legoRight">
              <img src={Picture} alt="" height="30px" width="30px"/>
            </a>
          </div>
          
        </div>
      </div>
      

    </div>
    
  );
};

export default memo(Header);
