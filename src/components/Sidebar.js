import React from 'react';
import dstt from '../img/dstt.png';
import ltnhung from '../img/ltnhung.png';
import '../style/Sidebar.css'
function Sidebar() {

    return (
        <sidebar class="sidebar">
            <div className='sidebar1'>
                <div className='sidebar1title'>
                    <div><p>Tài liệu mới</p></div>
                    <div><a href='#'>Xem thêm</a></div>
                </div>
                <div className='sidebar1image'>
                    <div><img src={dstt}></img></div>
                    <div><img src={ltnhung}></img></div>
                </div>
                <div className='sidebar1info'>
                    <div><p>Đại số tuyến tính <br></br>Cao Thanh Tình</p></div>
                    <div><p>Lập trình nhúng <br></br>Lâm Đức Khải</p></div>
                </div>
            </div>

            <div className='sidebar2'>
                <div className='sidebar1title'>
                    <div><p>Mượn nhiều</p></div>
                    <div><a href='#'>Xem thêm</a></div>
                </div>
                <div className='sidebar2content'>
                    <ul id='sidebar2list'>
                        <li>Đại số tuyến tính - Cao Thanh Tình</li>
                        <li>Lập trình nhúng trên thiết bị di động - Lâm Đức Khải</li>
                        <li>Phân tích hệ thống thông tin - Cao Như Ngọc</li>
                        <li>Xác suất thống kê - Lê Minh Tài</li>
                    </ul>
                </div>
            </div>

            <div className='sidebar3'>
                <div className='sidebar1title'>
                    <p>Sách theo kho</p>
                    
                </div>
                <div className='sidebar2content'>
                    <ul id='sidebar2list'>
                        <li>Kho đọc</li>
                        <li>Kho mượn - Giáo trình</li>
                        <li>Kho mượn - Tham khảo</li>
                        <li>Khóa luận - Luận văn</li>
                    </ul>
                </div>
            </div>

            
        </sidebar>
    );
}

export default Sidebar;