import { memo } from "react";
import "./style.scss";
const Footer = () => {
    return (
        <div id="footer">
          <ul class="footer">
            <div class="item1">
              <li>Hỗ trợ dịch vụ</li>
              <li>Hướng dẫn đặt hàng và thanh toán</li>
              <li>Tra cứu đơn hàng</li>
              <li>Chính sách bảo hành</li>
              <li>Phạm vi, điều khoản gói bảo hành mở rộng</li>
              <li>Chính sách bảo mật</li>
              <li>Chính sách giải quyết khiếu nại</li>
              <li>Câu hỏi thường gặp</li>
            </div>

            <div class="item1 item-2">
              <li>Thông tin liên hệ</li>
              <li>Bán hàng Online</li>
              <li>Chăm sóc khách hàng</li>
              <li>Dịch vụ sửa chữa </li>
              <li>Hợp tác kinh doanh</li>
            </div>
            <div class="item1 item-3">
              <li>Hệ thống 127 siêu thị trên toàn quốc</li>
              <li>Danh sách 127 siêu thị trên toàn quốc</li>
            </div>
            <div class="item item-3">
              <li>Tổng đài</li>
              <li>
                <button>0989447962</button>
              </li>
            </div>
            <p class="context-footer">
              © 2020. CÔNG TY CỔ PHẦN XÂY DỰNG VÀ ĐẦU TƯ THƯƠNG MẠI HOÀNG HÀ.
              MST: 0106713191. (Đăng ký lần đầu: Ngày 15 tháng 12 năm 2014, Đăng
              ký thay đổi ngày 24/11/2022) GP số 426/GP-TTĐT do sở TTTT Hà Nội
              cấp ngày 22/01/2021
            </p>
          </ul>
        </div>
    )
    
}
export default memo(Footer)