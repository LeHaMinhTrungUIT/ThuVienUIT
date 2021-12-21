import React from 'react';
import '../style/Navigation.css'
import { BrowserRouter,Router, Route, Link, NavLink, Routes } from "react-router-dom";

function Content() {

    return (
        <div class="title">
            <ul id="header2">
                <li>
                    <ul id="logoname">
                        <li><img src="https://haitrieu.com/wp-content/uploads/2021/10/Logo-DH-Cong-Nghe-Thong-Tin-UIT.png"></img></li>
                        <li id="name"><b>THƯ VIỆN TRƯỜNG ĐẠI HỌC CÔNG NGHỆ THÔNG TIN</b></li>
                    </ul>
                </li>
                <li>
                    <ul id="login">
                        <li id="searchicon"><a href='#'>⌕</a></li>
                        <li id="dangky"><a href="#">Đăng ký</a></li>
                        <li>|</li>
                        <li id="dangnhap"><Link to='/Login'>Đăng nhập</Link></li>
                    </ul>
                </li>
                <li>
                    <ul id="mainnavigation">
                        <li><Link to='/'>Trang chủ</Link></li>
                        <li><Link to='/NewsBulletin'>Bảng tin</Link></li>
                        <li><Link to='/Search'>Tra cứu tài liệu</Link></li>
                        <li><Link to='/Service'>Dịch vụ</Link></li>
                        <li><Link to='/Forum'>Forum</Link></li>
                        <li><Link to='/Contacts'>Liên hệ</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Content;