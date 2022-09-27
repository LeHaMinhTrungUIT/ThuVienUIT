import React from "react";

function Mail() {
  return (
    <div className="">
      <div className="headerColumn">Gửi thư</div>
      <div>Tên của bạn</div>
      <input type="text" className="rect1"></input>
      <div>Email</div>
      <input type="text" className="rect1"></input>
      <div>Lời nhắn</div>
      <input type="text" className="rect2"></input>
      <div>
        <button className="lightBlueTheme">Gửi ngay</button>
      </div>
    </div>
  );
}

export default Mail;
