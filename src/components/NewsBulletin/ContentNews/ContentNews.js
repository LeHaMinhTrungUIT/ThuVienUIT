import React from 'react';
import './ContentNews.css';
import { BsFillCaretLeftFill } from 'react-icons/bs';
import { BsFillCaretRightFill } from 'react-icons/bs';
import { BsBookmarkHeart } from 'react-icons/bs';
import { BsCaretUp } from 'react-icons/bs';
import { BsEye } from 'react-icons/bs';
import { HiOutlineChatAlt2 } from 'react-icons/hi';

class ContentNews extends React.Component {

    constructor(props) {
      super(props);
      this.state = { change: true };
    }


    render() {
        return (
            <div className="ContentNews">
                <div className="Content">
                    <div className="Content1">
                        <text className="text1">Sách</text>
                    </div>
                    <div style={{width: 800, height: 120, marginTop: 14}}>
                    <text className="text2">What I Learned About Life and  &emsp; Food Backpacking Around Greece</text>
                    </div>
                    <text className="text3">Aug 1th, 2021 • 7 min read</text>
                    <div className="Content2"></div>
                    <div style={{width: 800, height: 133, marginTop: 92, textAlign: 'justify', textJustify: 'inter-word'}}>
                    <text className="text4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices 
                    dui diam arcu pharetra at laoreet pellentesque. Imperdiet sit ut 
                    ornare nulla risus id fames nascetur urna.
                    </text>
                    </div>
                    <div style={{width: 800, height: 133, marginTop: 30, textAlign: 'justify', textJustify: 'inter-word'}}>
                    <text className="text5">
                    Vel leo proin facilisis metus sit ut cursus sagittis. Diam donec mus malesuada et ac 
                    vulputate. Aenean lacinia suspendisse et mattis adipiscing id dictum commodo nunc. 
                    Feugiat lorem cras ut cras enim neque, elit, facilisi habitasse. Facilisis faucibus nunc 
                    congue urna diam. Vitae, diam justo, massa, elit. In et nibh ut in diam tellus at tellus 
                    diam.
                    </text>
                    </div>

                    <div className="Content3">
                        <div className="text6">In this article</div>
                        <div className="text7">1. How to travel without spending a dime</div>
                        <div className="text7">2. Get the most out of your credit card reward points</div>
                        <div className="text7">3. Why you don’t need more than 3 pieces of clothing</div>
                    </div>
                    <div style={{width: 800, height: 131, marginTop: 40, textAlign: 'justify', textJustify: 'inter-word'}}>
                        <text className="text5">
                        Amet aliquet at a aliquam ac suspendisse euismod. Lectus sit in ut erat in. Et nulla a 
                        magna amet, amet. Sodales malesuada laoreet bibendum neque amet turpis non. Ac 
                        arcu lacus turpis elementum imperdiet. Euismod purus, libero scelerisque vitae, libero 
                        fermentum urna, nunc.
                        </text>
                    </div>
                    <div className="text8">How to travel without spending a dime</div>
                    <div style={{width: 800, height: 130, marginTop: 20, textAlign: 'justify', textJustify: 'inter-word'}}>
                        <text className="text5">
                        Dignissim lacus sit congue lacus aliquam. Ut non fermentum vulputate donec enim sed 
                        ornare scelerisque. Sollicitudin orci leo egestas fermentum platea a imperdiet nisl. Velit 
                        placerat nibh nisl ut feugiat. Egestas id egestas nunc mattis. Sed mauris vitae 
                        commodo pharetra, vestibulum rhoncus natoque.
                        </text>
                    </div>
                    <div style={{width: 800, height: 130, marginTop: 20, textAlign: 'justify', textJustify: 'inter-word'}}>
                        <text className="text5">
                        Leo id aliquet potenti enim sed maecenas sed ornare. Risus nam mauris etiam nibh 
                        maecenas nibh interdum mauris suspendisse. Volutpat, enim interdum facilisi mauris 
                        vitae id. Vel malesuada sit etiam dolor. Ullamcorper habitant vitae, nec pretium 
                        ullamcorper viverra integer praesent tincidunt. At erat sagittis tellus ultricies in a. 
                        </text>
                    </div>

                    <div className="text8">Get the most out of your credit card reward points</div>
                    <div style={{width: 800, height: 130, marginTop: 20, textAlign: 'justify', textJustify: 'inter-word'}}>
                        <text className="text5">
                        Massa, libero morbi morbi sed non sed. In et neque lectus ultricies leo eros. Auctor in 
                        elementum accumsan malesuada gravida neque cursus pellentesque nunc. Dui nullam 
                        odio neque varius massa praesent. Neque, porta vel, morbi nulla at tincidunt. Neque, et 
                        ultrices duis fermentum, tincidunt sem sed. Erat accumsan dui enim nisl morbi feugiat.
                        </text>
                    </div>
                    <div style={{width: 800, height: 130, marginTop: 20, textAlign: 'justify', textJustify: 'inter-word'}}>
                        <text className="text5">
                        Ac eget lorem sit nulla sed fusce etiam. Elementum nibh in eu sed. Nibh non semper amet sit hac tristique orci. Quis velit vitae amet magnis nec in nunc. Amet vitae id cras nibh. Sed ipsum, lacinia in sit vitae. Duis luctus convallis risus purus sollicitudin purus id eu. Faucibus mattis eget ullamcorper eu suspendisse elit elit lacus purus. Tortor felis.
                        </text>
                    </div>

                    <div className="text8">Why you don’t need more than 3 pieces of clothing</div>
                    <div style={{width: 800, height: 130, marginTop: 20, textAlign: 'justify', textJustify: 'inter-word'}}>
                        <text className="text5">
                        Massa aenean cursus nulla urna dui, fermentum cursus in facilisis. Vulputate euismod vestibulum dolor in elementum quis quis. Erat proin in eget arcu tellus ut ultrices. Quis maecenas ullamcorper ante sit leo placerat. Quisque dictum laoreet eget quam leo tortor scelerisque sit nullam. Lacus, tortor, aenean mattis lobortis lacinia mauris. Viverra nulla.
                        </text>
                    </div>
                    <div style={{width: 800, height: 130, marginTop: 20, textAlign: 'justify', textJustify: 'inter-word'}}>
                        <text className="text5">
                        Sed pellentesque quam lorem urna. Mauris donec molestie eget massa pellentesque facilisis netus mauris. Magna eget eget sollicitudin at faucibus odio. At augue sit nisi et metus cras dignissim vel, tortor. Maecenas molestie consequat cursus posuere ultrices facilisis hac bibendum semper. Sed lorem vel donec proin. Volutpat aliquet rhoncus sit et.
                        </text>
                    </div>
                </div>

                {/**** BÀI VIẾT CÙNG CHỦ ĐỀ*****/}
            <div className="DoNotMiss">
              <div style={{padding: 12, marginTop: 50}}>
                <svg width="10" height="30">
                  <rect width="10" height="30" style={{fill: 'blue '}} />
                </svg>
                <text className="text1_DNM">
                BÀI VIẾT CÙNG CHỦ ĐỀ
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

export default ContentNews;