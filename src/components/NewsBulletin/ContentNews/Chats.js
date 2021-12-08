import React from 'react';
import './Chats.css';
import './Chat.scss';
import { AiOutlinePicture } from 'react-icons/ai';
import { AiOutlineSmile } from 'react-icons/ai';
import { AiOutlineSend } from 'react-icons/ai';
import { BsCaretUp } from 'react-icons/bs';
import { BsCaretDown } from 'react-icons/bs';

class Chats extends React.Component {

    constructor(props) {
      super(props);
      this.state = { change: true };
    }


    render() {
        return (
            <div className="Chats">
                <div class="Chat">
                    <div class="form__group field">
                    <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
                    <label for="name" class="form__label">Hãy chia sẻ cảm nghĩ của bạn về bài  viết</label>
                    </div>
                    <div class="Icon_Chat">
                    <button className="button-33" style={{ marginLeft:60}}>
                    <AiOutlinePicture size={28} style={{marginTop: 20,}}/>  
                    </button>
                    <button className="button-33" style={{ marginLeft:30}}>
                    <AiOutlineSmile size={28} style={{marginTop: 20,}}/>  
                    </button>
                    <button className="button-33" style={{ marginLeft:30}}>
                    <AiOutlineSend size={28} style={{marginTop: 20,}}/> 
                    </button>
                    </div>
                </div>
                <div style={{width: 1216, height: 38, backgroundColor: 'white', marginTop: 46}}>
                <button className="button-33-Chats" style={{ marginLeft:900}}>
                Hot Nhất
                </button>
                <button className="button-33-Chats " style={{ marginLeft:30}}>
                Mới Nhất
                </button>
                </div>

                <div className="Content-Chats">
                    <div style={{width:'100%', height: 158, backgroundColor: 'white'}}>
                    <div style={{width: 249, height: 43, backgroundColor: 'white'}}>
                       <div className="avt-Chats"></div>
                       <div style={{width: 140, height:43, backgroundColor: 'white', marginLeft: 55}}>
                           <div className="text1-Chats">Arthur Black <br/></div>
                           <div className="text2-Chats">23 tháng 10 2018</div>
                        </div> 
                    </div>
                    <div style={{width: '100%', height: 85, marginTop: 29, backgroundColor: 'white'}}>
                        <div className="text3-Chats">
                        Ipsum adipisicing culpa est nisi consequat ex amet magna culpa veniam tempor irure ea. Reprehenderit labore do tempor eiusmod in consectetur ex sunt id mollit commodo ipsum deserunt quis.
                        </div>
                        <div style={{width: '100%', height: 20, float: 'left', backgroundColor: 'white'}}>
                            <div className="text4-Chats">48 &emsp; &emsp; &emsp; &emsp; 
                            <text style={{fontSize: 16}}>Trả lời </text>
                            </div>
                            <BsCaretUp size={35} color='slategray' style={{marginLeft: -210, marginTop: 8}}/>
                            <BsCaretDown size={35} color='slategray' style={{marginLeft: 30}}/>      
                        </div>
                    </div>
                    </div>
                    
                    <div className="content2-Chats">
                        <div className="line-Chats"></div>
                        <div className="content3-Chats">
                            <div style={{width: 10, height: 30, color: 'white'}}> hello</div>
                            <div style={{width: 249, height: 43, backgroundColor: 'white',}}>
                                <div className="avt-Chats"></div>
                                <div style={{width: 140, height:43, backgroundColor: 'white', marginLeft: 55}}>
                                    <div className="text1-Chats">Arthur Black <br/></div>
                                    <div className="text2-Chats">23 tháng 10 2018</div>
                                </div> 
                            </div>
                            <div style={{width: '100%', height: 85, marginTop: 29, backgroundColor: 'white'}}>
                                <div className="text3-Chats">
                                     Ipsum adipisicing culpa est nisi consequat ex amet magna culpa veniam tempor irure ea. Reprehenderit labore do tempor eiusmod in consectetur ex sunt id mollit commodo ipsum deserunt quis.
                                </div>
                                <div style={{width: '100%', height: 20, float: 'left', backgroundColor: 'white'}}>
                                    <div className="text4-Chats">48 &emsp; &emsp; &emsp; &emsp; 
                                    <text style={{fontSize: 16}}>Trả lời </text>
                                    </div>
                                    <BsCaretUp size={35} color='slategray' style={{marginLeft: -210, marginTop: 8}}/>
                                    <BsCaretDown size={35} color='slategray' style={{marginLeft: 30}}/>      
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{width:'100%', height: 158, backgroundColor: 'white', marginTop: 13}}>
                    <div style={{width: 249, height: 43, backgroundColor: 'white'}}>
                       <div className="avt-Chats"></div>
                       <div style={{width: 140, height:43, backgroundColor: 'white', marginLeft: 55}}>
                           <div className="text1-Chats">Arthur Black <br/></div>
                           <div className="text2-Chats">23 tháng 10 2018</div>
                        </div> 
                    </div>
                    <div style={{width: '100%', height: 85, marginTop: 29, backgroundColor: 'white'}}>
                        <div className="text3-Chats">
                        Ipsum adipisicing culpa est nisi consequat ex amet magna culpa veniam tempor irure ea. Reprehenderit labore do tempor eiusmod in consectetur ex sunt id mollit commodo ipsum deserunt quis.
                        </div>
                        <div style={{width: '100%', height: 20, float: 'left', backgroundColor: 'white'}}>
                            <div className="text4-Chats">48 &emsp; &emsp; &emsp; &emsp; 
                            <text style={{fontSize: 16}}>Trả lời </text>
                            </div>
                            <BsCaretUp size={35} color='slategray' style={{marginLeft: -210, marginTop: 8}}/>
                            <BsCaretDown size={35} color='slategray' style={{marginLeft: 30}}/>      
                        </div>
                    </div>
                    </div>
                    
                    <div className="content4-Chats">
                        <div className="line2-Chats"></div>
                        <div style={{width: 10, height: 10, color: 'white'}}> </div>
                        <div style={{width:'100%', height: 158, backgroundColor: 'white', marginLeft: 33}}>
                    <div style={{width: 249, height: 43, backgroundColor: 'white'}}>
                       <div className="avt-Chats"></div>
                       <div style={{width: 140, height:43, backgroundColor: 'white', marginLeft: 55}}>
                           <div className="text1-Chats">Arthur Black <br/></div>
                           <div className="text2-Chats">23 tháng 10 2018</div>
                        </div> 
                    </div>
                    <div style={{width: '100%', height: 85, marginTop: 29, backgroundColor: 'white'}}>
                        <div className="text3-Chats">
                        Ipsum adipisicing culpa est nisi consequat ex amet magna culpa veniam tempor irure ea. Reprehenderit labore do tempor eiusmod in consectetur ex sunt id mollit commodo ipsum deserunt quis.
                        </div>
                        <div style={{width: '100%', height: 20, float: 'left', backgroundColor: 'white'}}>
                            <div className="text4-Chats">48 &emsp; &emsp; &emsp; &emsp; 
                            <text style={{fontSize: 16}}>Trả lời </text>
                            </div>
                            <BsCaretUp size={35} color='slategray' style={{marginLeft: -210, marginTop: 8}}/>
                            <BsCaretDown size={35} color='slategray' style={{marginLeft: 30}}/>      
                        </div>
                    </div>
                    </div>
                    
                    <div className="content5-Chats">
                        <div className="line-Chats"></div>
                        <div className="content6-Chats">
                            <div style={{width: 10, height: 30, color: 'white'}}> </div>
                            <div style={{width: 249, height: 43, backgroundColor: 'white',}}>
                                <div className="avt-Chats"></div>
                                <div style={{width: 140, height:43, backgroundColor: 'white', marginLeft: 55}}>
                                    <div className="text1-Chats">Arthur Black <br/></div>
                                    <div className="text2-Chats">23 tháng 10 2018</div>
                                </div> 
                            </div>
                            <div style={{width: '100%', height: 85, marginTop: 29, backgroundColor: 'white'}}>
                                <div className="text3-Chats">
                                     Ipsum adipisicing culpa est nisi consequat ex amet magna culpa veniam tempor irure ea. Reprehenderit labore do tempor eiusmod in consectetur ex sunt id mollit commodo ipsum deserunt quis.
                                </div>
                                <div style={{width: '100%', height: 20, float: 'left', backgroundColor: 'white'}}>
                                    <div className="text4-Chats">48 &emsp; &emsp; &emsp; &emsp; 
                                    <text style={{fontSize: 16}}>Trả lời </text>
                                    </div>
                                    <BsCaretUp size={35} color='slategray' style={{marginLeft: -210, marginTop: 8}}/>
                                    <BsCaretDown size={35} color='slategray' style={{marginLeft: 30}}/>      
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>


                    <div style={{width:'100%', height: 158, backgroundColor: 'white', marginTop: 18}}>
                    <div style={{width: 249, height: 43, backgroundColor: 'white'}}>
                       <div className="avt-Chats"></div>
                       <div style={{width: 140, height:43, backgroundColor: 'white', marginLeft: 55}}>
                           <div className="text1-Chats">Arthur Black <br/></div>
                           <div className="text2-Chats">23 tháng 10 2018</div>
                        </div> 
                    </div>
                    <div style={{width: '100%', height: 85, marginTop: 29, backgroundColor: 'white'}}>
                        <div className="text3-Chats">
                        Ipsum adipisicing culpa est nisi consequat ex amet magna culpa veniam tempor irure ea. Reprehenderit labore do tempor eiusmod in consectetur ex sunt id mollit commodo ipsum deserunt quis.
                        </div>
                        <div style={{width: '100%', height: 20, float: 'left', backgroundColor: 'white'}}>
                            <div className="text4-Chats">48 &emsp; &emsp; &emsp; &emsp; 
                            <text style={{fontSize: 16}}>Trả lời </text>
                            </div>
                            <BsCaretUp size={35} color='slategray' style={{marginLeft: -210, marginTop: 8}}/>
                            <BsCaretDown size={35} color='slategray' style={{marginLeft: 30}}/>      
                        </div>
                    </div>
                    </div> 


                </div>
            </div>
        );
    }
}

export default Chats;