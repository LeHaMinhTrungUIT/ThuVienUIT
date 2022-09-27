import React from "react";

function Panel() {
  return (
    <div className="rightPanel">
      <div className="sidepanelHeader">CÓ THỂ BẠN QUAN TÂM</div>
      <div className="sidepanelText">
        <li>
          <a href="">Unit test là gì?</a>
        </li>
        <li>
          <a href="">
            Công nghệ đã và đang thay đổi cách thay đổi cách vận hành của doanh
            nghiệp như thế nào?
          </a>
        </li>
      </div>

      <div className="sidepanelHeader">LIÊN KẾT</div>
      <div className="sidepanelText">
        <li>
          <a href="">Hướng dẫn người mới</a>
        </li>
        <li>
          <a href="">Fanpage thư viện</a>
        </li>
        <li>
          <a href="">Nhận xét về thư viện</a>
        </li>
      </div>
    </div>
  );
}

export default Panel;
