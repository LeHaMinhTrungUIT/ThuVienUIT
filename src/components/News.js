import React from 'react';
import '../style/News.css';
/* npm install react-icons --save */
import { BsFillCaretLeftFill } from 'react-icons/bs';
import { BsFillCaretRightFill } from 'react-icons/bs';
import { BsBookmarkHeart } from 'react-icons/bs';
import { BsCaretUp } from 'react-icons/bs';
import { BsEye } from 'react-icons/bs';
import { HiOutlineChatAlt2 } from 'react-icons/hi';
import Topic from '../components/NewsBulletin/Topic';
import Pagination from '../components/NewsBulletin/Pagination'
import { BrowserRouter, Router, Route, Link, NavLink, Routes } from "react-router-dom";



class NewsBulletin extends React.Component {

    constructor(props) {
        super(props);
        this.state = { change: true };
    }


    render() {
        return (
            <div class="NewsBulletin">
                <div className='newstitle'>
                    <h3>Những tin tức nổi bật</h3>
                </div>

                {/**** ĐỪNG BỎ LỠ*****/}
                <div className="DoNotMiss">

                    <div className="Rectangle">
                        <div style={{ width: 101, height: 436, backgroundColor: 'white', float: 'left' }}>
                            <button className="button-28" onClick={() => {
                                this.setState({ change: !this.state.change });
                            }}>
                                <BsFillCaretLeftFill size={50} color='slategray' />
                            </button>
                        </div>

                        <div style={{ width: 1020, height: 386, backgroundColor: 'white', float: 'left', marginLeft: 46, marginTop: 25, overflow: 'hidden' }}>
                            {this.state.change ? (
                                <div>
                                    <div className="Content_1_DNM">
                                        <div>
                                            <div className="Left_DNM">
                                                <BsBookmarkHeart size={25} style={{ marginTop: 179, marginLeft: 250 }} />
                                                <br />
                                                <BsCaretUp size={30} color='slategray' style={{ marginTop: 110, marginLeft: 145 }} />
                                                <BsEye size={25} color='slategray' style={{ marginLeft: 20, marginBottom: 1 }} />
                                                <HiOutlineChatAlt2 size={25} color='slategray' style={{ marginLeft: 30, marginBottom: 1 }} />
                                            </div>
                                            <div className="Content_left_DNM">
                                                <Link className="text_1_DNM" to="/NewsBulletin/ContentNews">
                                                    long established <br />
                                                </Link>
                                                <text className="text_2_DNM">
                                                    It is a long established fact that a reader
                                                    will be distracted by the readable content
                                                    of a page when looking at its layout. The
                                                    point of using Lorem Ipsum is that....
                                                </text>
                                                <text className="text_3_DNM">
                                                    <br /> <br />
                                                    May 20th 2020 <br />
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
                                                <BsBookmarkHeart size={25} style={{ marginTop: 179, marginLeft: 250 }} />
                                                <br />
                                                <BsCaretUp size={30} color='slategray' style={{ marginTop: 110, marginLeft: 145 }} />
                                                <BsEye size={25} color='slategray' style={{ marginLeft: 20, marginBottom: 1 }} />
                                                <HiOutlineChatAlt2 size={25} color='slategray' style={{ marginLeft: 30, marginBottom: 1 }} />
                                            </div>
                                            <div className="Content_left_DNM">
                                                <Link className="text_1_DNM" to="/NewsBulletin/ContentNews">
                                                    long established <br />
                                                </Link>
                                                <text className="text_2_DNM">
                                                    It is a long established fact that a reader
                                                    will be distracted by the readable content
                                                    of a page when looking at its layout. The
                                                    point of using Lorem Ipsum is that....
                                                </text>
                                                <text className="text_3_DNM">
                                                    <br /> <br />
                                                    May 20th 2020 <br />
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
                                                <BsBookmarkHeart size={25} style={{ marginTop: 179, marginLeft: 250 }} />
                                                <br />
                                                <BsCaretUp size={30} color='slategray' style={{ marginTop: 110, marginLeft: 145 }} />
                                                <BsEye size={25} color='slategray' style={{ marginLeft: 20, marginBottom: 1 }} />
                                                <HiOutlineChatAlt2 size={25} color='slategray' style={{ marginLeft: 30, marginBottom: 1 }} />
                                            </div>
                                            <div className="Content_left_DNM">
                                                <Link className="text_1_DNM" to="/NewsBulletin/ContentNews">
                                                    long established <br />
                                                </Link>
                                                <text className="text_2_DNM">
                                                    It is a long established fact that a reader
                                                    will be distracted by the readable content
                                                    of a page when looking at its layout. The
                                                    point of using Lorem Ipsum is that....
                                                </text>
                                                <text className="text_3_DNM">
                                                    <br /> <br />
                                                    May 20th 2020 <br />
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
                                                <BsBookmarkHeart size={25} style={{ marginTop: 179, marginLeft: 250 }} />
                                                <br />
                                                <BsCaretUp size={30} color='slategray' style={{ marginTop: 110, marginLeft: 145 }} />
                                                <BsEye size={25} color='slategray' style={{ marginLeft: 20, marginBottom: 1 }} />
                                                <HiOutlineChatAlt2 size={25} color='slategray' style={{ marginLeft: 30, marginBottom: 1 }} />
                                            </div>
                                            <div className="Content_left_DNM">
                                                <Link className="text_1_DNM" to="/NewsBulletin/ContentNews">
                                                    long established <br />
                                                </Link>
                                                <text className="text_2_DNM">
                                                    It is a long established fact that a reader
                                                    will be distracted by the readable content
                                                    of a page when looking at its layout. The
                                                    point of using Lorem Ipsum is that....
                                                </text>
                                                <text className="text_3_DNM">
                                                    <br /> <br />
                                                    May 20th 2020 <br />
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
                                                <BsBookmarkHeart size={25} style={{ marginTop: 179, marginLeft: 250 }} />
                                                <br />
                                                <BsCaretUp size={30} color='slategray' style={{ marginTop: 110, marginLeft: 145 }} />
                                                <BsEye size={25} color='slategray' style={{ marginLeft: 20, marginBottom: 1 }} />
                                                <HiOutlineChatAlt2 size={25} color='slategray' style={{ marginLeft: 30, marginBottom: 1 }} />
                                            </div>
                                            <div className="Content_left_DNM">
                                                <Link className="text_1_DNM" to="/NewsBulletin/ContentNews">
                                                    long established <br />
                                                </Link>
                                                <text className="text_2_DNM">
                                                    It is a long established fact that a reader
                                                    will be distracted by the readable content
                                                    of a page when looking at its layout. The
                                                    point of using Lorem Ipsum is that....
                                                </text>
                                                <text className="text_3_DNM">
                                                    <br /> <br />
                                                    May 20th 2020 <br />
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
                                                <BsBookmarkHeart size={25} style={{ marginTop: 179, marginLeft: 250 }} />
                                                <br />
                                                <BsCaretUp size={30} color='slategray' style={{ marginTop: 110, marginLeft: 145 }} />
                                                <BsEye size={25} color='slategray' style={{ marginLeft: 20, marginBottom: 1 }} />
                                                <HiOutlineChatAlt2 size={25} color='slategray' style={{ marginLeft: 30, marginBottom: 1 }} />
                                            </div>
                                            <div className="Content_left_DNM">
                                                <Link className="text_1_DNM" to="/NewsBulletin/ContentNews">
                                                    long established <br />
                                                </Link>
                                                <text className="text_2_DNM">
                                                    It is a long established fact that a reader
                                                    will be distracted by the readable content
                                                    of a page when looking at its layout. The
                                                    point of using Lorem Ipsum is that....
                                                </text>
                                                <text className="text_3_DNM">
                                                    <br /> <br />
                                                    May 20th 2020 <br />
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

                        <div style={{ width: 101, height: 436, backgroundColor: 'white', float: 'left', marginLeft: 45 }}>
                            <button className="button-28" onClick={() => {
                                this.setState({ change: !this.state.change });
                            }}>
                                <BsFillCaretRightFill size={50} color='slategray' />
                            </button>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}



export default NewsBulletin;