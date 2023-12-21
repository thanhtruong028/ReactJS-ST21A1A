import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";
import MyImage4 from "./picture/mac2.png";
import MyImage6 from "./picture/mac3.png";
import MyImage8 from "./picture/mac4.png";
import Laptop from "./picture/laptop.jpg";
import Start from "./picture/start.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";

class MyComponent extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true, // Bật chuyển đổi tự động
      autoplaySpeed: 2000, 
    };
    return (
      <div id="homePage">
        <div id="banner">
          <div class="box-left">
            <h2>
              <span>LAPTOP - PC</span>
              <div>
                <span>HÀNG CHÍNH HÃNG</span>
              </div>
            </h2>
            <p>Chuyên cung cấp các loại máy tính, linh kiện, sửa chữa 24h</p>
            <button>Mua ngay</button>
          </div>
          <div class="box-right">
            <img src={MyImage4} alt="" />
            <img src={MyImage6} class="mid" alt="" />
            <img src={MyImage8} alt="" />
          </div>
        </div>
        <div id="wp-product">
          <h2>Sản phẩm của chúng tôi</h2>
          <ul id="menu">
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Hãng
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle>Hãng</Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle>Hãng</Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown class="dropdowns">
              <Dropdown.Toggle>Hãng</Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <input type="text" placeholder="Enter text" />
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" class="buttonContainer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="20"
                  viewBox="0 0 50 50"
                >
                  <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                </svg>
              </button>
            </a>
          </ul>

          <div class="introduce-product">
            <button>TOP CÁC SẢN PHẨM BÁN CHẠY</button>
          </div>
          <Slider {...settings}>
            <div id="carousel">
              <ul id="list-product">
                <div class="product">
                  <img src={Laptop} alt="" height="150px" width="200px" />
                  <div class="sale">
                    
                  </div>
                  <div class="name">HP 15s fq5162TU i5 1235U (7C134PA)</div>
                  <div class="config">
                    <div class="item">
                      <a href="">Trang chu</a>
                    </div>
                    <div class="item">
                      <a href="">San pham</a>
                    </div>
                  </div>
                  <div class="price">14.000.000</div>
                  
                </div>
                <div class="product">
                  <img src={Laptop} alt="" height="150px" width="200px" />
                  <div class="sale">
                    
                  </div>
                  <div class="name">HP 15s fq5162TU i5 1235U (7C134PA)</div>
                  <div class="config">
                    <div class="item">
                      <a href="">Trang chu</a>
                    </div>
                    <div class="item">
                      <a href="">San pham</a>
                    </div>
                  </div>
                  <div class="price">14.000.000</div>
                  
                </div>
                <div class="product">
                  <img src={Laptop} alt="" height="150px" width="200px" />
                  <div class="sale">
                    
                  </div>
                  <div class="name">HP 15s fq5162TU i5 1235U (7C134PA)</div>
                  <div class="config">
                    <div class="item">
                      <a href="">Trang chu</a>
                    </div>
                    <div class="item">
                      <a href="">San pham</a>
                    </div>
                  </div>
                  <div class="price">14.000.000</div>
                  
                </div>
                <div class="product">
                  <img src={Laptop} alt="" height="150px" width="200px" />
                  <div class="sale">
                    
                  </div>
                  <div class="name">HP 15s fq5162TU i5 1235U (7C134PA)</div>
                  <div class="config">
                    <div class="item">
                      <a href="">Trang chu</a>
                    </div>
                    <div class="item">
                      <a href="">San pham</a>
                    </div>
                  </div>
                  <div class="price">14.000.000</div>
                  
                </div>
                
              </ul>
            </div>
            <div id="carousel">
              <ul id="list-product">
                <div class="product">
                  <img src={Laptop} alt="" height="150px" width="200px" />
                  <div class="sale">
                    
                  </div>
                  <div class="name">HP 15s fq5162TU i5 1235U (7C134PA)</div>
                  <div class="config">
                    <div class="item">
                      <a href="">Trang chu</a>
                    </div>
                    <div class="item">
                      <a href="">San pham</a>
                    </div>
                  </div>
                  <div class="price">14.000.000</div>
                  
                </div>
                <div class="product">
                  <img src={Laptop} alt="" height="150px" width="200px" />
                  <div class="sale">
                    
                  </div>
                  <div class="name">HP 15s fq5162TU i5 1235U (7C134PA)</div>
                  <div class="config">
                    <div class="item">
                      <a href="">Trang chu</a>
                    </div>
                    <div class="item">
                      <a href="">San pham</a>
                    </div>
                  </div>
                  <div class="price">14.000.000</div>
                  
                </div>
                <div class="product">
                  <img src={Laptop} alt="" height="150px" width="200px" />
                  <div class="sale">
                    
                  </div>
                  <div class="name">HP 15s fq5162TU i5 1235U (7C134PA)</div>
                  <div class="config">
                    <div class="item">
                      <a href="">Trang chu</a>
                    </div>
                    <div class="item">
                      <a href="">San pham</a>
                    </div>
                  </div>
                  <div class="price">14.000.000</div>
                  
                </div>
                <div class="product">
                  <img src={Laptop} alt="" height="150px" width="200px" />
                  <div class="sale">
                    
                  </div>
                  <div class="name">HP 15s fq5162TU i5 1235U (7C134PA)</div>
                  <div class="config">
                    <div class="item">
                      <a href="">Trang chu</a>
                    </div>
                    <div class="item">
                      <a href="">San pham</a>
                    </div>
                  </div>
                  <div class="price">14.000.000</div>
                  
                </div>
                
              </ul>
            </div>
            <div id="carousel">
              <ul id="list-product">
                <div class="product">
                  <img src={Laptop} alt="" height="150px" width="200px" />
                  <div class="sale">
                    
                  </div>
                  <div class="name">HP 15s fq5162TU i5 1235U (7C134PA)</div>
                  <div class="config">
                    <div class="item">
                      <a href="">Trang chu</a>
                    </div>
                    <div class="item">
                      <a href="">San pham</a>
                    </div>
                  </div>
                  <div class="price">14.000.000</div>
                  
                </div>
                <div class="product">
                  <img src={Laptop} alt="" height="150px" width="200px" />
                  <div class="sale">
                    
                  </div>
                  <div class="name">HP 15s fq5162TU i5 1235U (7C134PA)</div>
                  <div class="config">
                    <div class="item">
                      <a href="">Trang chu</a>
                    </div>
                    <div class="item">
                      <a href="">San pham</a>
                    </div>
                  </div>
                  <div class="price">14.000.000</div>
                  
                </div>
                <div class="product">
                  <img src={Laptop} alt="" height="150px" width="200px" />
                  <div class="sale">
                    
                  </div>
                  <div class="name">HP 15s fq5162TU i5 1235U (7C134PA)</div>
                  <div class="config">
                    <div class="item">
                      <a href="">Trang chu</a>
                    </div>
                    <div class="item">
                      <a href="">San pham</a>
                    </div>
                  </div>
                  <div class="price">14.000.000</div>
                  
                </div>
                <div class="product">
                  <img src={Laptop} alt="" height="150px" width="200px" />
                  <div class="sale">
                    
                  </div>
                  <div class="name">HP 15s fq5162TU i5 1235U (7C134PA)</div>
                  <div class="config">
                    <div class="item">
                      <a href="">Trang chu</a>
                    </div>
                    <div class="item">
                      <a href="">San pham</a>
                    </div>
                  </div>
                  <div class="price">14.000.000</div>
                  
                </div>
                
              </ul>
            </div>
            <div id="carousel">
              <ul id="list-product">
                <div class="product">
                  <img src={Laptop} alt="" height="150px" width="200px" />
                  
                  <div class="sale">
                    
                  </div>
                  <div class="name">HP 15s fq5162TU i5 1235U (7C134PA)</div>
                  <div class="config">
                    <div class="item">
                      <a href="">Trang chu</a>
                    </div>
                    <div class="item">
                      <a href="">San pham</a>
                    </div>
                  </div>
                  <div class="price">14.000.000</div>
                  
                </div>
                <div class="product">
                  <img src={Laptop} alt="" height="150px" width="200px" />
                  <div class="sale">
                    
                  </div>
                  <div class="name">HP 15s fq5162TU i5 1235U (7C134PA)</div>
                  <div class="config">
                    <div class="item">
                      <a href="">Trang chu</a>
                    </div>
                    <div class="item">
                      <a href="">San pham</a>
                    </div>
                  </div>
                  <div class="price">14.000.000</div>
                  
                </div>
                <div class="product">
                  <img src={Laptop} alt="" height="150px" width="200px" />
                  <div class="sale">
                    
                  </div>
                  <div class="name">HP 15s fq5162TU i5 1235U (7C134PA)</div>
                  <div class="config">
                    <div class="item">
                      <a href="">Trang chu</a>
                    </div>
                    <div class="item">
                      <a href="">San pham</a>
                    </div>
                  </div>
                  <div class="price">14.000.000</div>
                  
                </div>
                <div class="product">
                  <img src={Laptop} alt="" height="150px" width="200px" />
                  <div class="sale">
                    
                  </div>
                  <div class="name">HP 15s fq5162TU i5 1235U (7C134PA)</div>
                  <div class="config">
                    <div class="item">
                      <a href="">Trang chu</a>
                    </div>
                    <div class="item">
                      <a href="">San pham</a>
                    </div>
                  </div>
                  <div class="price">14.000.000</div>
                  
                </div>
                
              </ul>
            </div>
          </Slider>

          <div id="name">
            <h5> <bold>APPLE</bold></h5>
          </div>
          <ul id="list-product">
            <div class="product">
              <a href="thong-tin-san-pham"><img src={Laptop} alt="" height="150px" width="200px" /></a>
              
              <div class="sale">
                <a>
                  <button class="button-product">Đang giảm giá</button>
                </a>
              </div>
              <div class="name">HP 15s fq5162TU i5 1235U (7C134PA)</div>
              <div class="config">
                <div class="item">
                  <a href="">Trang chu</a>
                </div>
                <div class="item">
                  <a href="">San pham</a>
                </div>
              </div>
              <div class="price">14.000.000</div>
              <p>VNPAY - Ưu đãi tới 300.000đ</p>
              <div class="starts">
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
              </div>
            </div>
            <div class="product">
              <a href="thong-tin-san-pham"><img src={Laptop} alt="" height="150px" width="200px" /></a>
              
              <div class="sale">
                <a>
                  <button class="button-product">Đang giảm giá</button>
                </a>
              </div>
              <div class="name">HP 15s fq5162TU i5 1235U (7C134PA)</div>
              <div class="config">
                <div class="item">
                  <a href="">Trang chu</a>
                </div>
                <div class="item">
                  <a href="">San pham</a>
                </div>
              </div>
              <div class="price">14.000.000</div>
              <p>VNPAY - Ưu đãi tới 300.000đ</p>
              <div class="starts">
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
              </div>
            </div>
            <div class="product">
              <a href="thong-tin-san-pham"><img src={Laptop} alt="" height="150px" width="200px" /></a>
              
              <div class="sale">
                <a>
                  <button class="button-product">Đang giảm giá</button>
                </a>
              </div>
              <div class="name">HP 15s fq5162TU i5 1235U (7C134PA)</div>
              <div class="config">
                <div class="item">
                  <a href="">Trang chu</a>
                </div>
                <div class="item">
                  <a href="">San pham</a>
                </div>
              </div>
              <div class="price">14.000.000</div>
              <p>VNPAY - Ưu đãi tới 300.000đ</p>
              <div class="starts">
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
              </div>
            </div>
            <div class="product">
              <a href="thong-tin-san-pham"><img src={Laptop} alt="" height="150px" width="200px" /></a>
              
              <div class="sale">
                <a>
                  <button class="button-product">Đang giảm giá</button>
                </a>
              </div>
              <div class="name">HP 15s fq5162TU i5 1235U (7C134PA)</div>
              <div class="config">
                <div class="item">
                  <a href="">Trang chu</a>
                </div>
                <div class="item">
                  <a href="">San pham</a>
                </div>
              </div>
              <div class="price">14.000.000</div>
              <p>VNPAY - Ưu đãi tới 300.000đ</p>
              <div class="starts">
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
              </div>
            </div>
            <div class="product">
              <a href="thong-tin-san-pham"><img src={Laptop} alt="" height="150px" width="200px" /></a>
              
              <div class="sale">
                <a>
                  <button class="button-product">Đang giảm giá</button>
                </a>
              </div>
              <div class="name">HP 15s fq5162TU i5 1235U (7C134PA)</div>
              <div class="config">
                <div class="item">
                  <a href="">Trang chu</a>
                </div>
                <div class="item">
                  <a href="">San pham</a>
                </div>
              </div>
              <div class="price">14.000.000</div>
              <p>VNPAY - Ưu đãi tới 300.000đ</p>
              <div class="starts">
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
              </div>
            </div>
            <div class="product">
              <a href="thong-tin-san-pham"><img src={Laptop} alt="" height="150px" width="200px" /></a>
              
              <div class="sale">
                <a>
                  <button class="button-product">Đang giảm giá</button>
                </a>
              </div>
              <div class="name">HP 15s fq5162TU i5 1235U (7C134PA)</div>
              <div class="config">
                <div class="item">
                  <a href="">Trang chu</a>
                </div>
                <div class="item">
                  <a href="">San pham</a>
                </div>
              </div>
              <div class="price">14.000.000</div>
              <p>VNPAY - Ưu đãi tới 300.000đ</p>
              <div class="starts">
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
              </div>
            </div>
            <div class="product">
              <a href="thong-tin-san-pham"><img src={Laptop} alt="" height="150px" width="200px" /></a>
              
              <div class="sale">
                <a>
                  <button class="button-product">Đang giảm giá</button>
                </a>
              </div>
              <div class="name">HP 15s fq5162TU i5 1235U (7C134PA)</div>
              <div class="config">
                <div class="item">
                  <a href="">Trang chu</a>
                </div>
                <div class="item">
                  <a href="">San pham</a>
                </div>
              </div>
              <div class="price">14.000.000</div>
              <p>VNPAY - Ưu đãi tới 300.000đ</p>
              <div class="starts">
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
              </div>
            </div>
            <div class="product">
              <a href="thong-tin-san-pham"><img src={Laptop} alt="" height="150px" width="200px" /></a>
              
              <div class="sale">
                <a>
                  <button class="button-product">Đang giảm giá</button>
                </a>
              </div>
              <div class="name">HP 15s fq5162TU i5 1235U (7C134PA)</div>
              <div class="config">
                <div class="item">
                  <a href="">Trang chu</a>
                </div>
                <div class="item">
                  <a href="">San pham</a>
                </div>
              </div>
              <div class="price">14.000.000</div>
              <p>VNPAY - Ưu đãi tới 300.000đ</p>
              <div class="starts">
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
                <span>
                  <img src={Start} alt="" height="30px" width="20px" />
                </span>
              </div>
            </div>
            
          </ul>
        </div>
        
        <div id="content">
          <h2>Mua MacBook giá rẻ chính hãng tại Hoàng Hà Mobile</h2>
          <p class="content-p">
            Apple từ trước tới nay có lẽ đã là một thương hiệu không còn quá xa
            lạ đối với nhiều người tiêu dùng hiện nay. Song hành với iPhone,
            MacBook hiện đang là một trong hai dòng sản phẩm mang tính biểu
            tượng của nhà Táo kể từ khi ra mắt cho đến hiện tại. Vậy dòng laptop
            này của Apple có gì đặc biệt mà lại được nhiều người dùng quan tâm
            và săn đón đến như vậy?
          </p>

          <h3>Những lý do nên lựa chọn MacBook</h3>
          <p>
            Apple hiện đang có 2 dòng laptop MacBook chính là MacBook Air và
            MacBook Pro. Bên cạnh đó, trong những năm gần đây Apple còn cho ra
            mắt thêm dòng MacBook M series sử dụng con chip Apple Silicon M do
            chính công ty nghiên cứu và sản xuất.
          </p>

          <h3>Thiết kế hiện đại, sang trọng</h3>
          <p>
            So với những dòng sản phẩm laptop đến từ các thương hiệu khác, dòng
            MacBook của Apple sở hữu một ngôn ngữ thiết kế đẹp và bóng bẩy mà
            khi nhìn vào sản phẩm, người dùng sẽ thấy ngay được cảm giác cao cấp
            và sang trọng. Đối với nhiều dòng MacBook, phần logo quả táo ở nắp
            máy còn có thể sáng lên. Và đây cũng chính là những đặc điểm nhận
            diện thương hiệu vô cùng đặc biệt, giúp các mẫu Apple MacBook khác
            biệt hoàn toàn so với những chiếc máy tính xách tay tới từ các hãng
            khác. Ở các dòng laptop MacBook, người dùng sẽ không thể tìm thấy
            bất cứ một mẫu máy nào có thiết kế cồng kềnh. Mọi sản phẩm MacBook
            đều mang kích thước vô cùng mỏng gọn cùng trọng lượng siêu nhẹ, chỉ
            rơi vào khoảng từ 1 đến 1.5kg. Ngoài ra, mọi chi tiết dù là nhỏ nhất
            trên máy cũng đều được hoàn thiện vô cùng tỉ mỉ và liền mạch. Bạn sẽ
            khó có thể tìm thấy một chi tiết thừa, hay bộ khung bị ọp ẹp trên
            các mẫu MacBook. Quả thật, sản phẩm do Apple làm ra luôn mang một
            chất lượng và đẳng cấp khác biệt so với phần còn lại của thế giới
            công nghệ.
          </p>
          <h3>Màn hình sắc nét, màu sắc cực chuẩn</h3>
          <p>
            Những mẫu sản phẩm MacBook luôn được Apple trang bị màn hình với độ
            phân giải cao, khả năng hiển thị vô cùng sắc nét cùng màu sắc tái
            hiện cực chuẩn. Đây chính là một trong nhiều ưu điểm của dòng máy
            tính xách tay tới từ nhà Táo. Nếu như bạn là một người làm những
            công việc có liên quan tới đồ họa, lập trình hay sáng tạo nội dung
            thì các thiết bị MacBook sẽ là sản phẩm vô cùng thích hợp với bạn.
            Với MacBook, bạn hoàn toàn có thể yên tâm sử dụng mà không sợ gặp
            phải những tình trạng sai màu, hình ảnh bị nhòe, không rõ nét, từ đó
            tăng hiệu quả và chất lượng trong công việc.
          </p>

          <h3>Hiệu năng khủng, đáp ứng mượt mà mọi tác vụ</h3>
          <p>
            Hầu hết những mẫu laptop MacBook mới hiện nay đều sử dụng bộ vi xử
            lý “cây nhà lá vườn” Apple M series (mới đây nhất là Apple M2). Đây
            là những bộ vi xử lý do chính Apple nghiên cứu và sản xuất, có hiệu
            năng siêu khủng, giúp người dùng thực hiện mọi tác vụ công việc,
            giải trí một cách mượt mà và nhanh chóng hơn bao giờ hết.
          </p>
          <h3>Trackpad có độ hữu dụng cao</h3>
          <p>
            Phần Trackpad (bàn di chuột) trên những sản phẩm MacBook từ trước
            đến nay có thể nói là “out trình” so với trackpad trên các sản phẩm
            laptop chạy Windows. Những thao tác từ Trackpad trên MacBook có khả
            năng đáp ứng mượt mà, mức độ cảm ứng siêu nhạy. Nếu đã sử dụng quen
            phần Trackpad này rồi thì chắc chắn bạn không còn cần phải dùng tới
            những chú chuột rời nữa. Dưới đây sẽ là một vài thao tác vô cùng hữu
            dụng của Trackpad trên MacBook:
          </p>
          <p class="context">
            ● Chạm 3 ngón: Di chuyển cửa sổ, bôi đen text, di chuyển các tập
            tin, thư mục,…
          </p>
          <p class="context">
            ● Chạm 4 ngón rồi vuốt lên: Giúp xem nhanh các cửa sổ đang mở trong
            phiên làm việc
          </p>
          <p class="context">
            ● Chạm 4 ngón rồi vuốt phải: Giúp di chuyển nhanh qua màn hình 2, 3
            hoặc 4.
          </p>

          <h3>Pin bền bỉ, sử dụng lâu dài</h3>
          <p>
            Tùy từng dòng sản phẩm mà chúng có thể có thời lượng pin và thời
            gian sử dụng khác nhau, nhưng nhìn chung, hầu hết các sản phẩm
            MacBook đều được trang bị pin có khả năng sử dụng bền bỉ và lâu dài.
            Trung bình nếu người dùng chỉ lướt web bằng kết nối Wi-Fi khi màn
            hình được thiết lập ở độ sáng 50%, máy sẽ trụ được khoảng hơn 9
            tiếng liên tục. Con số này vượt qua mức 7 tiếng của XPS 13 và 7
            tiếng 30 phút của Surface Pro 7, trong khi đó với những mẫu laptop
            HP Envy, thời gian sử dụng trung bình chỉ rơi vào khoảng hơn 6
            tiếng.
          </p>

          <h3>Khả năng đồng bộ tốt</h3>
          <p>
            Vì là một sản phẩm nằm trong hệ sinh thái khép kín của Apple nên
            MacBook có khả năng đồng bộ rất tốt với các thiết bị khác như
            iPhone, iPad, Apple Watch hay AirPods,…Lấy ví dụ đơn giản, chỉ cần
            bạn cùng sử dụng một lúc iPhone và MacBook, bạn sẽ cảm thấy việc
            đồng bộ hóa dữ liệu giữa hai thiết bị này là vô cùng dễ dàng và
            nhanh chóng thông qua AirDrop. Đây là thứ mà bạn không thể có được
            khi sử dụng điện thoại Android và máy tính Windows.
          </p>
          <h3>Mức độ bảo mật cao</h3>
          <p>
            Đây cũng chính là niềm tự hào của những người dùng sử dụng MacBook.
            Windows mặc dù hiện đang là hệ điều hành được sử dụng nhiều nhất
            trên thế giới, tuy nhiên do tính chất là một hệ điều hành mở, cộng
            thêm việc nó quá phổ biến khiến cho mức độ bảo mật không cao. Trong
            khi đó một chiếc MacBook chạy macOS dù cho không cần cài đặt quá
            nhiều phần mềm chống virus nhưng chắc chắn là sẽ ít có nguy cơ bị
            lây nhiễm và bị tấn công hơn máy tính Windows.
          </p>
        </div>

        
      </div>
    );
  }
}

export default MyComponent;
