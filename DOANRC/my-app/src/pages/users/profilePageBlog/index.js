import { memo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Laptop from "./picture/blogImg.jpg";
import "./style.scss";
const profilePageBlog = () => {
  return (
    <div class="container">
      <div class="name">
        <h2>BLOG</h2>
      </div>
      <div class="h"></div>
      <ul class="blog">
        <div class="item-img">
          <img src={Laptop} height="220" />
        </div>
        <div class="item-cap">
          <h3>
            Top 10 Laptop Dell Core i3 vừa túi tiền cho công việc văn phòng
          </h3>
          <p>
            Máy tính xách tay Laptop Dell có những tính năng vượt trội so với
            những máy tính cùng loại khác trên thị trường.
          </p>
          <p class="infomation">Chúng có những đặc điểm giúp đáp ứng nhu cầu của khách hàng như: độ bền của máy cao, thời lượng pin tốt, tốc độ xử lí dữ liệu nhanh,hệ thống...</p>
        </div>

        
      </ul>
      <ul class="blog">
        <div class="item-img">
          <img src={Laptop} height="220" />
        </div>
        <div class="item-cap">
          <h3>
            Top 10 Laptop Dell Core i3 vừa túi tiền cho công việc văn phòng
          </h3>
          <p>
            Máy tính xách tay Laptop Dell có những tính năng vượt trội so với
            những máy tính cùng loại khác trên thị trường.
          </p>
          <p class="infomation">Chúng có những đặc điểm giúp đáp ứng nhu cầu của khách hàng như: độ bền của máy cao, thời lượng pin tốt, tốc độ xử lí dữ liệu nhanh,hệ thống...</p>
        </div>

        
      </ul>
      <ul class="blog">
        <div class="item-img">
          <img src={Laptop} height="220" />
        </div>
        <div class="item-cap">
          <h3>
            Top 10 Laptop Dell Core i3 vừa túi tiền cho công việc văn phòng
          </h3>
          <p>
            Máy tính xách tay Laptop Dell có những tính năng vượt trội so với
            những máy tính cùng loại khác trên thị trường.
          </p>
          <p class="infomation">Chúng có những đặc điểm giúp đáp ứng nhu cầu của khách hàng như: độ bền của máy cao, thời lượng pin tốt, tốc độ xử lí dữ liệu nhanh,hệ thống...</p>
        </div>

        
      </ul>
      <ul class="blog">
        <div class="item-img">
          <img src={Laptop} height="220" />
        </div>
        <div class="item-cap">
          <h3>
            Top 10 Laptop Dell Core i3 vừa túi tiền cho công việc văn phòng
          </h3>
          <p>
            Máy tính xách tay Laptop Dell có những tính năng vượt trội so với
            những máy tính cùng loại khác trên thị trường.
          </p>
          <p class="infomation">Chúng có những đặc điểm giúp đáp ứng nhu cầu của khách hàng như: độ bền của máy cao, thời lượng pin tốt, tốc độ xử lí dữ liệu nhanh,hệ thống...</p>
        </div>

        
      </ul>
    </div>
  );
};
export default memo(profilePageBlog);
