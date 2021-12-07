import React from 'react';
import './Topic.css';

/* npm install react-icons --save */
import { BsBookmark } from 'react-icons/bs';
import { BsCaretUp } from 'react-icons/bs';
import { BsEye } from 'react-icons/bs';
import { HiOutlineChatAlt2 } from 'react-icons/hi';



class Topic extends React.Component {

    constructor(props) {
      super(props);
      this.state = { changetopic: true };
    }


    render() {
        return (
            <div class="Topic">
                <div className="Sidebar">
                    <text className="text1_Sidebar">Chủ Đề</text> 
                    <div className="btn_Sidebar">
                        <button className="button-33" onClick={()=>{
                        this.setState({ change: !this.state.changetopic });
                         }}>
                        Tin Nổi Bật
                        </button>
                        <br/>
                        <button className="button-33" onClick={()=>{
                        this.setState({ change: !this.state.changetopic });
                         }}>
                        Tin Mới Nhất
                        </button>
                        <br/>
                        <button className="button-33" onClick={()=>{
                        this.setState({ change: !this.state.changetopic });
                         }}>
                        Sách
                        </button>
                        <br/>
                        <button className="button-33" onClick={()=>{
                        this.setState({ change: !this.state.changetopic });
                         }}>
                        Web
                        </button>
                        <br/>
                        <button className="button-33" onClick={()=>{
                        this.setState({ change: !this.state.changetopic });
                         }}>
                        Mobile
                        </button>

                        <br/>
                        <button className="button-33" onClick={()=>{
                        this.setState({ change: !this.state.changetopic });
                         }}>
                        Concept 
                        </button>

                        <br/>
                        <button className="button-33" onClick={()=>{
                        this.setState({ change: !this.state.changetopic });
                         }}>
                        Thủ Thuật/Ừng Dụng
                        </button>

                        <br/>
                        <button className="button-33" onClick={()=>{
                        this.setState({ change: !this.state.changetopic });
                         }}>
                        Công Nghệ Vui
                        </button>

                        <br/>
                        <button className="button-33" onClick={()=>{
                        this.setState({ change: !this.state.changetopic });
                         }}>
                        Sự Kiện
                        </button>

                        <br/>
                        <button className="button-33" onClick={()=>{
                        this.setState({ change: !this.state.changetopic });
                         }}>
                        Cuộc Thi
                        </button>

                        <br/>
                        <button className="button-33" onClick={()=>{
                        this.setState({ change: !this.state.changetopic });
                         }}>
                        Trò Chuyện/Tâm Sự
                        </button>
                    </div> 
                </div>

                <div className="Content_Topic">
                    <div className="Content1_Topic">
                        <div className="Content2_Topic">
                         <text className="text1_Content_Topic">Sách&nbsp; </text>
                         <text className="text2_Content_Topic">- 6 Phút Đọc <br/> <br/></text>
                         <text className="text3_Content_Topic">long established <br/> </text>
                         <text className="text4_Content_Topic"> <br/>It is a long established fact that a reader will be distracted by <br/> </text>
                         <text className="text4_Content_Topic">the readable content of a page when looking at its layout. The  <br/> </text>
                         <text className="text4_Content_Topic">point of using Lorem Ipsum is that.... <br/> <br/> </text>
                         <text className="text5_Content_Topic">May 20th 2020  <br/> </text>
                         <text className="text5_Content_Topic">
                             <br/>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; 
                             &emsp;  &emsp;  &emsp;  &emsp;  &emsp;  &emsp;  &emsp;  &emsp;  &emsp;  &emsp; 
                             15 
                             &emsp; &nbsp; &nbsp;   &nbsp;
                            115
                            &emsp; &emsp;
                            15
                         </text>
                        </div>

                        <div className="Content3_Topic">
                            <BsBookmark size={25} color='slategray' style={{marginTop: 0,marginLeft: -70}} />  
                            <br/>
                            <BsCaretUp size={30} color='slategray' style={{marginTop: 170, marginLeft: -185}}/>
                            <BsEye size={25} color='slategray' style={{marginLeft: 20, marginBottom: 1}}/>
                            <HiOutlineChatAlt2 size={25} color='slategray' style={{marginLeft: 30,  marginBottom: 1 }}/>
                             
                        </div>
                    </div>
                    <div className="Content1_Topic">
                        <div className="Content2_Topic">
                         <text className="text1_Content_Topic">Sách&nbsp; </text>
                         <text className="text2_Content_Topic">- 6 Phút Đọc <br/> <br/></text>
                         <text className="text3_Content_Topic">long established <br/> </text>
                         <text className="text4_Content_Topic"> <br/>It is a long established fact that a reader will be distracted by <br/> </text>
                         <text className="text4_Content_Topic">the readable content of a page when looking at its layout. The  <br/> </text>
                         <text className="text4_Content_Topic">point of using Lorem Ipsum is that.... <br/> <br/> </text>
                         <text className="text5_Content_Topic">May 20th 2020  <br/> </text>
                         <text className="text5_Content_Topic">
                             <br/>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; 
                             &emsp;  &emsp;  &emsp;  &emsp;  &emsp;  &emsp;  &emsp;  &emsp;  &emsp;  &emsp; 
                             15 
                             &emsp; &nbsp; &nbsp;   &nbsp;
                            115
                            &emsp; &emsp;
                            15
                         </text>
                        </div>

                        <div className="Content4_Topic">
                            <BsBookmark size={25} color='slategray' style={{marginTop: 0,marginLeft: -70}} />  
                            <br/>
                            <BsCaretUp size={30} color='slategray' style={{marginTop: 170, marginLeft: -185}}/>
                            <BsEye size={25} color='slategray' style={{marginLeft: 20, marginBottom: 1}}/>
                            <HiOutlineChatAlt2 size={25} color='slategray' style={{marginLeft: 30,  marginBottom: 1 }}/>
                             
                        </div>
                    </div>

                    <div className="Content1_Topic">
                        <div className="Content2_Topic">
                         <text className="text1_Content_Topic">Sách&nbsp; </text>
                         <text className="text2_Content_Topic">- 6 Phút Đọc <br/> <br/></text>
                         <text className="text3_Content_Topic">long established <br/> </text>
                         <text className="text4_Content_Topic"> <br/>It is a long established fact that a reader will be distracted by <br/> </text>
                         <text className="text4_Content_Topic">the readable content of a page when looking at its layout. The  <br/> </text>
                         <text className="text4_Content_Topic">point of using Lorem Ipsum is that.... <br/> <br/> </text>
                         <text className="text5_Content_Topic">May 20th 2020  <br/> </text>
                         <text className="text5_Content_Topic">
                             <br/>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; 
                             &emsp;  &emsp;  &emsp;  &emsp;  &emsp;  &emsp;  &emsp;  &emsp;  &emsp;  &emsp; 
                             15 
                             &emsp; &nbsp; &nbsp;   &nbsp;
                            115
                            &emsp; &emsp;
                            15
                         </text>
                        </div>

                        <div className="Content5_Topic">
                            <BsBookmark size={25} color='slategray' style={{marginTop: 0,marginLeft: -70}} />  
                            <br/>
                            <BsCaretUp size={30} color='slategray' style={{marginTop: 170, marginLeft: -185}}/>
                            <BsEye size={25} color='slategray' style={{marginLeft: 20, marginBottom: 1}}/>
                            <HiOutlineChatAlt2 size={25} color='slategray' style={{marginLeft: 30,  marginBottom: 1 }}/>
                             
                        </div>
                    </div>

                    <div className="Content1_Topic">
                        <div className="Content2_Topic">
                         <text className="text1_Content_Topic">Sách&nbsp; </text>
                         <text className="text2_Content_Topic">- 6 Phút Đọc <br/> <br/></text>
                         <text className="text3_Content_Topic">long established <br/> </text>
                         <text className="text4_Content_Topic"> <br/>It is a long established fact that a reader will be distracted by <br/> </text>
                         <text className="text4_Content_Topic">the readable content of a page when looking at its layout. The  <br/> </text>
                         <text className="text4_Content_Topic">point of using Lorem Ipsum is that.... <br/> <br/> </text>
                         <text className="text5_Content_Topic">May 20th 2020  <br/> </text>
                         <text className="text5_Content_Topic">
                             <br/>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; 
                             &emsp;  &emsp;  &emsp;  &emsp;  &emsp;  &emsp;  &emsp;  &emsp;  &emsp;  &emsp; 
                             15 
                             &emsp; &nbsp; &nbsp;   &nbsp;
                            115
                            &emsp; &emsp;
                            15
                         </text>
                        </div>

                        <div className="Content6_Topic">
                            <BsBookmark size={25} color='slategray' style={{marginTop: 0,marginLeft: -70}} />  
                            <br/>
                            <BsCaretUp size={30} color='slategray' style={{marginTop: 170, marginLeft: -185}}/>
                            <BsEye size={25} color='slategray' style={{marginLeft: 20, marginBottom: 1}}/>
                            <HiOutlineChatAlt2 size={25} color='slategray' style={{marginLeft: 30,  marginBottom: 1 }}/>
                             
                        </div>
                    </div>
                    <div className="Content1_Topic">
                        <div className="Content2_Topic">
                         <text className="text1_Content_Topic">Sách&nbsp; </text>
                         <text className="text2_Content_Topic">- 6 Phút Đọc <br/> <br/></text>
                         <text className="text3_Content_Topic">long established <br/> </text>
                         <text className="text4_Content_Topic"> <br/>It is a long established fact that a reader will be distracted by <br/> </text>
                         <text className="text4_Content_Topic">the readable content of a page when looking at its layout. The  <br/> </text>
                         <text className="text4_Content_Topic">point of using Lorem Ipsum is that.... <br/> <br/> </text>
                         <text className="text5_Content_Topic">May 20th 2020  <br/> </text>
                         <text className="text5_Content_Topic">
                             <br/>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; 
                             &emsp;  &emsp;  &emsp;  &emsp;  &emsp;  &emsp;  &emsp;  &emsp;  &emsp;  &emsp; 
                             15 
                             &emsp; &nbsp; &nbsp;   &nbsp;
                            115
                            &emsp; &emsp;
                            15
                         </text>
                        </div>

                        <div className="Content7_Topic">
                            <BsBookmark size={25} color='slategray' style={{marginTop: 0,marginLeft: -70}} />  
                            <br/>
                            <BsCaretUp size={30} color='slategray' style={{marginTop: 170, marginLeft: -185}}/>
                            <BsEye size={25} color='slategray' style={{marginLeft: 20, marginBottom: 1}}/>
                            <HiOutlineChatAlt2 size={25} color='slategray' style={{marginLeft: 30,  marginBottom: 1 }}/>
                             
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Topic