import React from "react";
import image21 from '../img/image21.png';
import '../style/Decoration.css'
import image20 from '../img/image20.png';
import image17 from '../img/image17.png';
import image19 from '../img/image19.png';




function Decoration() {
    return (
        <div className="decoration">
            <div className="decoration1">
                <div><img src={image21} id="image21"></img></div>
                <div className="image21content">
                    <h1>Không gian học tập</h1>
                    <p>Là không gian lý tưởng được các bạn sinh viên và thầy cô
                        <br></br> sử dụng để học tập, trao đổi. Khi bước vào thư viện
                        <br></br> bạn sẽ cảm nhận được không gian yên tĩnh, thích hợp
                        <br></br>cho việc học và nghiên cứu.
                    </p>
                    <button class="image21button" type="button">Xem thêm</button>
                </div>
            </div>
            <div className="decoration2">
                <div className="image20content">
                    <h1>Kho tài liệu phong phú</h1>
                    <p>Kho tài liệu gồm nhiều thứ tiếng. Chủ yếu là
                        <br></br>tiếng Anh và tiếng Việt sẽ cung cấp nhiều thông tin
                        <br></br>cần tìm kiếm. Bên cạnh đó những tài liệu mới
                        <br></br> luôn được cập nhật liên tục.
                    </p>
                    <button class="image21button" type="button">Tải về</button>
                </div>
                <div><img src={image20} id="image20"></img></div>
            </div>
            <div className="decoration3">
                <div><img src={image17} id="image17"></img></div>
                <div><img src={image19} id="image19"></img></div>
            </div>
        </div>

    );
}

export default Decoration;