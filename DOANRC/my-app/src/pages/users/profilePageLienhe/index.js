import { memo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Laptop from "./picture/blogImg.jpg";
import "./style.scss";
const profilePageLienhe = () => {
  return (
    <div class="container">
      <h2>Liên hệ</h2>
      <p>Mọi thắc mắc hoặc góp ý, quý khách vui lòng liên hệ trực tiếp với bộ phận chăm sóc khách hàng của chúng tôi bằng cách điền đầy đủ thông tin vào form bên dưới</p>
      <div class="form">
        <label>Tên đầy đủ *</label>
        <input></input>
      </div>
      <div class="form">
        <label>Email * </label>
        <input></input>
      </div>
      <div class="form">
        <label>Điẹn thoại *</label>
        <input></input>
      </div>
      <div class="form">
        <label>Thông tin liên hệ</label>
        <input></input>
      </div>

      <button>Gửi liên hệ</button>
    </div>
  );
};
export default memo(profilePageLienhe);
