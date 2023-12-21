import { memo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Laptop from "./picture/1.webp";
import Laptop1 from "./picture/2.webp";
import Laptop2 from "./picture/3.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
const profilePage = () => {
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
    <div id="Main">
      <h3>MacBook Pro M2 13" (8GB/256GB) - Chính hãng Apple Việt Nam</h3>
      <div class="context">
        <div className="carousel-container item">
          <Slider {...settings}>
            <div>
              <img src={Laptop} alt="Slide 1" />
            </div>
            <div>
              <img src={Laptop1} alt="Slide 2" />
            </div>
            <div>
              <img src={Laptop2} alt="Slide 3" />
            </div>
          </Slider>
        </div>
        <div class="item1 item-infomation">
          <div>
            <h1>29.000.000</h1>
          </div>
          <div>
            <h5>
              <span class="gach-ngang">29.000.000</span> | Giá đã bao gồm VAT
            </h5>
          </div>
          <button>Miễn phí toàn bộ vận chuyển</button>
          <p class="text-black">Lựa chọn phiên bản</p>
          <button type="checkbox" class="t256">256GB</button>
          <button type="checkbox"class="t512">512GB</button>
          <p class="text-black credit">Lựa chọn màu</p>
          <button type="checkbox"class="t256">Xanh</button>
          <button type="checkbox"class="t512">Đỏ</button>
          <div class="credit">
            <button class="t256 gop gopss">Mua ngay</button>
            <button class="t512 gop gops">Trả góp</button>
          </div>
        </div>

        <div class="item2">
          <h5>ƯU ĐÃI THANH TOÁN</h5>
          <p>Ưu đãi tới 300.000đ </p>
          <p>Ưu đãi tới 300.000đ </p>
          <p>Trả góp qua Home PayLater </p>
          <p>Ưu đãi tới 200.000đ </p>
          <p>Ưu đãi trả góp </p>
          <p>Nhận Voucher 250.000đ </p>
        </div>
      </div>
      
      <div class="address">
        
        <div class="item">
          <p>194 Lê Duẩn, Hà Nội 0962.066.208 </p>
          <p>122 Thái Hà, Hà Nội 0973.790.122 </p>
          <p>126 Phố Huế, Hà Nội 0968.668.995 </p>
          <p>392 Cầu Giấy, Hà Nội 0968.32.33.99 </p>
          </div>
        <div class="item1">
          <p>392 Trương Định, Hoàng Mai, Hà Nội 083.263.9292 </p>
          <p> 196 Quang Trung, Hà Đông, Hà Nội 098.2468.196 </p>
          <p>89 Tam Trinh, Hoàng Mai, Hà Nội 0815.86.79.89 </p>
          <p>109 Trần Duy Hưng, Cầu Giấy, Hà Nội 0985568109 </p>
        </div>
      </div>


      <div class="introduce-product">
            <button>TOP CÁC SẢN PHẨM BÁN CHẠY</button>
        </div>

      <div class="accessory">
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
      </div>
    </div>
  );
};
export default memo(profilePage);
