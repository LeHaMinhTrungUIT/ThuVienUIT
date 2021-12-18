import React from "react";

function Hello(){
    return(
        <div id="hello">
            <ul id="hellocontent">
                <li>
                    <div id ="hellotitle">Chào mừng bạn <br></br>đến với Thư viện</div>
                    <p>Mục tiêu phát triển của Thư viện là trở thành Thư viện
                    <br></br>  hiện đại có khả năng lưu trữ, khai thác, phát triển các 
                    <br></br> dịch vụ và cung cấp thông tin tư liệu đầy đủ, chính xác, 
                    <br></br>hiệu quả phục vụ cho việc giảng dạy, học tập và 
                    <br></br>nghiên cứu khoa học chính yếu trong lĩnh vực 
                    <br></br> Công nghệ thông tin và trong các lĩnh vực có liên quan.</p>
                    <button name="hellobutton" type="button">Giới thiệu</button>
                </li>
                <li>
                    <div id="helloimg">
                        <img src="https://image.freepik.com/free-vector/university-campus-library-bookcases-flat-composition-with-students-reading-books-articles-with-bookshelves_1284-30797.jpg"></img>
                    </div>
                </li>                
            </ul>
        </div>
    );
}

export default Hello;