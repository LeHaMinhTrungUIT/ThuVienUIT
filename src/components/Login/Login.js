import React, { useEffect, useState } from "react";
import './Login.css';
import { BiShow } from 'react-icons/bi';
import { BiHide } from 'react-icons/bi';
import { BrowserRouter,Router, Route, Link, NavLink, Routes } from "react-router-dom";




class Login extends React.Component {

    constructor(props) {
      super(props);
      this.state = { change: true };
    
    }       
    
    render() {
        return (
            <div className="Login">
                <div className='content1_Login'>
                    <div className='img1_Login'></div>
                </div>
                <div className='content2_Login'>
                    <div className='text1_Login'>Chào Mừng Bạn Trở Lại Thư Viện</div>
                    <div className='text2_Login'>Bạn chưa có tài khoản, <a className='text2_Login' style={{color: "blue"}}>Đăng Kí ngay!</a>
                    </div>
                    <br/> <br/>
                    <div className='text1_Login'>Gmail</div>
                    <input type="input" className='frame1' placeholder='giaotiepnguoimay@gm.uit.edu.vn'>
                    </input>
                    <br/> 
                    <div className='text1_Login'>Mật Khẩu</div>
                    <Password/>
                    <br/>
                    <div>
                        <input type="checkbox" checked="checked"  className="cb_Login"></input>
                        <text class="text3_Login">Tự Động Đăng Nhập Lần Sau</text>
                        <text class="text4_Login">Quên Mật Khẩu</text>
                    </div>
                    <div className="content3_Login">
                        <Link className="button-27" to='/'>
                        Đăng Nhập
                        </Link>
                    </div>
                    
                </div>
            </div>
        );
    }
}

function Password() {
 
  const [pwd, setPwd] = useState('');
  const [isRevealPwd, setIsRevealPwd] = useState(false);
 
  return (
    <div >
      <div className="frame2">
        <input className="frame3"
          name="pwd"
          placeholder="Nhập mật khẩu của bạn"
          type={isRevealPwd ? "text" : "password"}
          value={pwd}
          onChange={e => setPwd(e.target.value)}
        >
        </input>
        <div
          text={isRevealPwd ? "Hide password" : "Show password"}
          onClick={() => setIsRevealPwd(prevState => !prevState)}
        >
          {isRevealPwd ? (
            <BiShow size={30} style={{color: '#9EB0EA', marginLeft: 5, marginTop: 5}}/>
          ) : (
            <BiHide size={30} style={{color: '#9EB0EA',  marginLeft: 5, marginTop: 5}}/>
          )}
        </div>
      </div>
 
    </div>
  );
}

export default Login;