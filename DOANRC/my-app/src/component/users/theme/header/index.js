import { memo } from "react";
import { useState } from "react";
import "./style.scss";
import Logo from "./picture/logo.png";
import Picture from "./picture/logoGioHang.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
const Header = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    {
      label: "CHÍNH SÁCH THANH TOÁN",
      value: "http://localhost:3000/chinhsachthanhtoan",
    },
    {
      label: "CHÍNH SÁCH GIAO HÀNG",
      value: "http://localhost:3000/chinhsachgiaohang",
    },
    {
      label: "CHÍNH SÁCH ĐỐI TRẢ",
      value: "http://localhost:3000/chinhsachdoitra",
    },
  ];

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // Handle navigation based on the selected value
    if (selectedValue) {
      window.location.href = selectedValue;
    }
  };

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
            <a href="sanpham">SAN PHAM</a>
          </div>
          <div class="item">
            <a href="blog">BLOG</a>
          </div>
          <div class="item">
            <a href="lienhe">LIEN HE</a>
          </div>
          <div class="item">
            <select
              id="dropdown"
              value={selectedOption}
              onChange={handleOptionChange}
              style={{ border: 'none', outline: 'none', WebkitAppearance: 'none' }}
              >
              <option value="">
                <a>CÁC CHÍNH SÁCH</a>
              </option>
              {options.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div id="actions">
          <div class="item legoRight">
            <a href="" class="lego legoRight">
              <img src={Picture} alt="" height="30px" width="30px" />
            </a>
          </div>
          <div class="item legoLeft">
            <a href="login" className="logincss">
              <i class="bi bi-person-circle"></i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="40"
                fill="currentColor"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
                href="login"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                  href="login"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
