import React from 'react';

function Header() {

    return (
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <ul id="nav">
                    <li><a href="#">Quản lý thư viện</a></li>
                    <li>|</li>
                    <li><a href="#">Hỗ trợ</a></li>
                    <li>|</li>
                    <li><a href="#">Tải ứng dụng</a></li>
                    <li>|</li>
                    <li><a href="#">Kết nối</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;