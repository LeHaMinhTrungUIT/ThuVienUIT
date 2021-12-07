import React from 'react';
import './NewsBulletin.css';
/* npm install react-icons --save */
import { BsFillCaretLeftFill } from 'react-icons/bs';
import { BsFillCaretRightFill } from 'react-icons/bs';
import { BsBookmarkHeart } from 'react-icons/bs';
import { BsCaretUp } from 'react-icons/bs';
import { BsEye } from 'react-icons/bs';
import { HiOutlineChatAlt2 } from 'react-icons/hi';




class NewsBulletin extends React.Component {

    constructor(props) {
      super(props);
      this.state = { change: true };
    }


    render() {
        return (

          <div class="NewsBulletin">
            <div class="FeaturedArticle">
              <div className="Layout_FA_Content">
                <h1 style={{color: 'white'}}>Top Thịnh Hành <br/></h1> 
                <div className="FA_Content">

                  <text className="text1_FA_Content">
                    Bài Viết Nổi Bật <br/>
                  </text>

                  <a className="text2_FA_Content" href="https://www.w3schools.com/">
                    World’s Most Dangerous Technology Ever Made. <br/>
                  </a>

                  <text className="text3_FA_Content">
                    Ralph Hawkins . May 7th, 2019 (10 mins read)  <br/>
                  </text>

                  <text className="text4_FA_Content">
                    Proident aliquip velit qui commodo officia qui consectetur 
                    dolor ullamco aliquip elit incididunt. Ea minim ex 
                    consectetur excepteur. Ex laborum nostrud mollit sint 
                    consectetur Lorem amet aliqua do enim. Commodo duis 
                    dolor anim excepteur. In aliquip mollit nulla consequat 
                    velit magna.
                  </text>
                </div>
              </div>
            </div>  


{/**** ĐỪNG BỎ LỠ*****/}
            <div className="DoNotMiss">
              <div style={{padding: 12, marginTop: 50}}>
                <svg width="10" height="30">
                  <rect width="10" height="30" style={{fill: 'blue '}} />
                </svg>
                <text className="text1_DNM">
                  ĐỪNG BỎ LỠ
                </text>
              </div>

              <div className="Rectangle">
                <div style={{width: 101, height: 436, backgroundColor: 'white' , float:'left'}}>
                  <button className="button-28" onClick={()=>{
                    this.setState({ change: !this.state.change });
                  }}>
                   <BsFillCaretLeftFill size={50} color='slategray' />
                  </button>
                </div>

                <div style={{width: 1020, height: 386, backgroundColor: 'white', float:'left', marginLeft: 46, marginTop: 25, overflow: 'hidden'}}>
                {this.state.change ? (
                  <div>
                    <div className="Content_1_DNM">
                      <div>
                        <div className="Left_DNM"> 
                          <BsBookmarkHeart size={25} style={{marginTop: 179, marginLeft: 250}} />  
                          <br/>
                          <BsCaretUp size={30} color='slategray' style={{marginTop: 110, marginLeft: 145}}/>
                          <BsEye size={25} color='slategray' style={{marginLeft: 20, marginBottom: 1}}/>
                          <HiOutlineChatAlt2 size={25} color='slategray' style={{marginLeft: 30,  marginBottom: 1 }}/>
                        </div>
                        <div className="Content_left_DNM">
                          <a className="text_1_DNM" href="https://www.w3schools.com/">
                            long established <br/>
                          </a>
                          <text className="text_2_DNM">
                          It is a long established fact that a reader 
                          will be distracted by the readable content 
                          of a page when looking at its layout. The 
                          point of using Lorem Ipsum is that....
                          </text>
                          <text className="text_3_DNM">
                          <br/> <br/> 
                            May 20th 2020 <br/>
                            6 phút đọc 
                             &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &nbsp; 
                            15
                            &emsp; &nbsp; &nbsp;   &nbsp;
                            115
                            &emsp; &emsp;
                            15
                            
                          </text>
                        </div>
                      </div>
                    </div>
                    <div className="Content_2_DNM">
                    <div>
                        <div className="Center_DNM"> 
                          <BsBookmarkHeart size={25} style={{marginTop: 179, marginLeft: 250}} />  
                          <br/>
                          <BsCaretUp size={30} color='slategray' style={{marginTop: 110, marginLeft: 145}}/>
                          <BsEye size={25} color='slategray' style={{marginLeft: 20, marginBottom: 1}}/>
                          <HiOutlineChatAlt2 size={25} color='slategray' style={{marginLeft: 30,  marginBottom: 1 }}/>
                        </div>
                        <div className="Content_left_DNM">
                          <a className="text_1_DNM" href="https://www.w3schools.com/">
                            long established <br/>
                          </a>
                          <text className="text_2_DNM">
                          It is a long established fact that a reader 
                          will be distracted by the readable content 
                          of a page when looking at its layout. The 
                          point of using Lorem Ipsum is that....
                          </text>
                          <text className="text_3_DNM">
                          <br/> <br/> 
                            May 20th 2020 <br/>
                            6 phút đọc 
                             &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &nbsp; 
                            15
                            &emsp; &nbsp; &nbsp;   &nbsp;
                            115
                            &emsp; &emsp;
                            15
                            
                          </text>
                        </div>
                      </div>
                    </div>
                    <div className="Content_2_DNM">
                    <div>
                        <div className="Right_DNM"> 
                          <BsBookmarkHeart size={25} style={{marginTop: 179, marginLeft: 250}} />  
                          <br/>
                          <BsCaretUp size={30} color='slategray' style={{marginTop: 110, marginLeft: 145}}/>
                          <BsEye size={25} color='slategray' style={{marginLeft: 20, marginBottom: 1}}/>
                          <HiOutlineChatAlt2 size={25} color='slategray' style={{marginLeft: 30,  marginBottom: 1 }}/>
                        </div>
                        <div className="Content_left_DNM">
                          <a className="text_1_DNM" href="https://www.w3schools.com/">
                            long established <br/>
                          </a>
                          <text className="text_2_DNM">
                          It is a long established fact that a reader 
                          will be distracted by the readable content 
                          of a page when looking at its layout. The 
                          point of using Lorem Ipsum is that....
                          </text>
                          <text className="text_3_DNM">
                          <br/> <br/> 
                            May 20th 2020 <br/>
                            6 phút đọc 
                             &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &nbsp; 
                            15
                            &emsp; &nbsp; &nbsp;   &nbsp;
                            115
                            &emsp; &emsp;
                            15
                            
                          </text>
                        </div>
                      </div>
                    </div>
                  </div>

                ) : (

                  <div>
                    <div className="Content_1_DNM">
                      <div>
                        <div className="Left1_DNM"> 
                          <BsBookmarkHeart size={25} style={{marginTop: 179, marginLeft: 250}} />  
                          <br/>
                          <BsCaretUp size={30} color='slategray' style={{marginTop: 110, marginLeft: 145}}/>
                          <BsEye size={25} color='slategray' style={{marginLeft: 20, marginBottom: 1}}/>
                          <HiOutlineChatAlt2 size={25} color='slategray' style={{marginLeft: 30,  marginBottom: 1 }}/>
                        </div>
                        <div className="Content_left_DNM">
                          <a className="text_1_DNM" href="https://www.w3schools.com/">
                            long established <br/>
                          </a>
                          <text className="text_2_DNM">
                          It is a long established fact that a reader 
                          will be distracted by the readable content 
                          of a page when looking at its layout. The 
                          point of using Lorem Ipsum is that....
                          </text>
                          <text className="text_3_DNM">
                          <br/> <br/> 
                            May 20th 2020 <br/>
                            6 phút đọc 
                             &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &nbsp; 
                            15
                            &emsp; &nbsp; &nbsp;   &nbsp;
                            115
                            &emsp; &emsp;
                            15
                            
                          </text>
                        </div>
                      </div>
                    </div>
                    <div className="Content_2_DNM">
                    <div>
                        <div className="Center1_DNM"> 
                          <BsBookmarkHeart size={25} style={{marginTop: 179, marginLeft: 250}} />  
                          <br/>
                          <BsCaretUp size={30} color='slategray' style={{marginTop: 110, marginLeft: 145}}/>
                          <BsEye size={25} color='slategray' style={{marginLeft: 20, marginBottom: 1}}/>
                          <HiOutlineChatAlt2 size={25} color='slategray' style={{marginLeft: 30,  marginBottom: 1 }}/>
                        </div>
                        <div className="Content_left_DNM">
                          <a className="text_1_DNM" href="https://www.w3schools.com/">
                            long established <br/>
                          </a>
                          <text className="text_2_DNM">
                          It is a long established fact that a reader 
                          will be distracted by the readable content 
                          of a page when looking at its layout. The 
                          point of using Lorem Ipsum is that....
                          </text>
                          <text className="text_3_DNM">
                          <br/> <br/> 
                            May 20th 2020 <br/>
                            6 phút đọc 
                             &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &nbsp; 
                            15
                            &emsp; &nbsp; &nbsp;   &nbsp;
                            115
                            &emsp; &emsp;
                            15
                            
                          </text>
                        </div>
                      </div>
                    </div>
                    <div className="Content_2_DNM">
                    <div>
                        <div className="Right1_DNM"> 
                          <BsBookmarkHeart size={25} style={{marginTop: 179, marginLeft: 250}} />  
                          <br/>
                          <BsCaretUp size={30} color='slategray' style={{marginTop: 110, marginLeft: 145}}/>
                          <BsEye size={25} color='slategray' style={{marginLeft: 20, marginBottom: 1}}/>
                          <HiOutlineChatAlt2 size={25} color='slategray' style={{marginLeft: 30,  marginBottom: 1 }}/>
                        </div>
                        <div className="Content_left_DNM">
                          <a className="text_1_DNM" href="https://www.w3schools.com/">
                            long established <br/>
                          </a>
                          <text className="text_2_DNM">
                          It is a long established fact that a reader 
                          will be distracted by the readable content 
                          of a page when looking at its layout. The 
                          point of using Lorem Ipsum is that....
                          </text>
                          <text className="text_3_DNM">
                          <br/> <br/> 
                            May 20th 2020 <br/>
                            6 phút đọc 
                             &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &nbsp; 
                            15
                            &emsp; &nbsp; &nbsp;   &nbsp;
                            115
                            &emsp; &emsp;
                            15
                            
                          </text>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                </div>
                
                <div style={{width: 101, height: 436, backgroundColor: 'white' , float:'left', marginLeft: 45}}>
                  <button className="button-28" onClick={()=>{
                    this.setState({ change: !this.state.change });
                  }}>
                   <BsFillCaretRightFill size={50} color='slategray'/>
                  </button>
                </div>
                
              </div>
            </div>
          </div>
        );
    }
}



export default NewsBulletin;