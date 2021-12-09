import React from 'react'; 
import './Service.css';
import { AiFillFileAdd } from 'react-icons/ai';
import { ImLink } from 'react-icons/im';
import { FiSend } from 'react-icons/fi';


class Service extends React.Component {

    constructor(props) {
      super(props);
      this.state = { changeService: 'hello' };
      this.state={mycolor1:"white"};
      this.state={mycolor2:"white"};
      this.state={mycolor3:"white"};
      this.state={mycolor4:"white"};
      this.state={mycolor5:"white"};
      this.state={mycolor6:"white"};
    }


    Contenthandler(string){
        if (this.state.changeService !=string) {
            this.setState ({ changeService: string})
            this.SetColor(string)
        }
    }

    SetColor (string)
    {
        this.setState ({mycolor1: "white"})
        this.setState ({mycolor2: "white"})
        this.setState ({mycolor3: "white"})
        this.setState ({mycolor4: "white"})
        this.setState ({mycolor5: "white"})
        this.setState ({mycolor6: "white"})

        if (string == "btn1")
        {
            this.setState ({mycolor1: "#cbdbfd"})
        }
        else if (string == "btn2")
        {
            this.setState ({mycolor2: "#cbdbfd"})
        }
        else if (string == "btn3")
        {
            this.setState ({mycolor3: "#cbdbfd"})
        }
        else if (string == "btn4")
        {
            this.setState ({mycolor4: "#cbdbfd"})
        }
        else if (string == "btn5")
        {
            this.setState ({mycolor5: "#cbdbfd"})
        }
        else if (string == "btn6")
        {
            this.setState ({mycolor6: "#cbdbfd"})
        }
    }

    render() {
        return (
            <div className="Service">
               <div className="sidebar-Service">
                    <div style={{width: '80%', height: 56, marginLeft: 57, marginTop: 11, backgroundColor: 'white'}}>
                        <svg width="10" height="30">
                            <rect width="10" height="30" style={{fill: 'blue '}} />
                        </svg>
                        <text className="text1-Service">
                        Danh Sách Dịch Vụ
                        </text>
                    </div>
                    <div className="text2-Service">
                        DV Miễn Phí
                    </div>

                    <button className="button-69 " style={{  backgroundColor: this.state.mycolor1}}  onClick={()=>{
                        this.Contenthandler("btn1")
                         }}>
                        Đọc sách tại chỗ
                    </button>
                    <button className="button-69" style={{  backgroundColor: this.state.mycolor2,}}  onClick={()=>{
                        this.Contenthandler("btn2")
                         }}>
                        Mượn sách
                    </button>
                    <button className="button-69" style={{  backgroundColor: this.state.mycolor3,}}  onClick={()=>{
                        this.Contenthandler("btn3")
                         }}>
                        Ký gửi sách
                    </button>
                    <button className="button-69" style={{  backgroundColor: this.state.mycolor4,}}  onClick={()=>{
                        this.Contenthandler("btn4")
                         }}>
                        Khuyên góp sách
                    </button>

                    <div className="text2-Service">
                        DV Tốn Phí
                    </div>
                    <button className="button-69" style={{  backgroundColor: this.state.mycolor5,}}  onClick={()=>{
                        this.Contenthandler("btn5")
                         }}>
                        Photo tài liệu
                    </button>
                    <button className="button-69" style={{  backgroundColor: this.state.mycolor6,}}  onClick={()=>{
                        this.Contenthandler("btn6")
                         }}>
                        Lớp kỹ năng
                    </button>
               </div>
               <div className="content-Service">
                   {this.state.changeService =="btn1" ?  (
                       <p className="textarea1-Service">
                          <p style={{fontWeight: 'bold'}}>Lịch phục vụ:</p> 
Từ 7h30 đến 16h30 hằng ngày từ thứ 2 đến thứ 6. Thứ 7: Từ 8h đến 16h. Chủ nhật đóng cửa. <br/> <br/>

Thư Viên luôn tìm kiếm và cập nhật thêm nhiều tài liệu mới cho sinh viên, nhằm đáp ứng nhu cầu học tập và tìm hiểu kiến thức.  

                       </p>
                   ) : this.state.changeService == "btn2" ? (
                    <p className="textarea1-Service" >
                    * Mượn trả tài liệu (Áp dụng từ tháng 06/2016) <br/> <br/>
                        1. Tài liệu được mượn về: Sách kho mượn, giáo trình. <br/> <br/>

2.Tài liệu không được mượn về: <br/> <br/>

  + Luận văn, luận án, khóa luận. 
  <br/> <br/>
  + Báo-tạp chí
  <br/> <br/>
  + Băng đĩa
  <br/> <br/>
  + Tài liệu tra cứu (từ điển, bách khoa toàn thư,…)
  <br/> <br/>
3.Chính sách cho mượn:
<br/> <br/>
3.1. Mượn tài liệu đọc tại chỗ:  tối đa được mang ra 2 tài liệu
<br/> <br/>
3.2. Mượn sách mang về:
<br/> <br/>
 Loại tài liệu	Số lượng tài liệu​	Số ngày mượn​	​Gia hạn​ <br/>
​ Số l​ần	Ngày/lần<br/>
Giáo trình	5	90	2	 14 ngày<br/>
Tài liệu tham khảo	3	21	2	7 ngày<br/>
Tài liệu Hệ thống TV ĐHQG	3	21	2	7 ngày<br/>
Khóa luận, luận văn	2	Đọc tại chỗ		<br/>
    
<br/><br/>
   Lưu ý:
   <br/><br/>
  - Số lượng tài liệu: là những con số tối đa được phép mượn về.
  <br/><br/>
   - Không được mượn quá 1 bản/ 1 nhan đề sách, giáo trình.<br/><br/>
4. Xử lý vi phạm: bạn đọc sẽ bị xử phạt bằng tiền nếu mượn tài liệu vượt quá thời gian theo quy đinh.
<br/><br/>
Mức phạt cụ thể như sau:
<br/><br/>
- Mất khóa tủ: phạt 50.000đ / khóa tủ
<br/><br/>
- Phạt quá hạn tài liệu: phạt 2.000 đồng/1 tài liệu/1 ngày.
<br/><br/>
- Tài liệu hệ thống Thư viện: phạt 5.000đồng/1 tài liệu/1 ngày.<br/><br/>
- Làm hư hỏng( rách, làm ướt,viết, tẩy xóa,..), mất sách:
<br/><br/>
+ Đối với sách: đền tiền phạt gấp 3 lần giá trị tài liệu.​
<br/><br/>
+ Đối với giáo trình: xử phạt tiền gấp 2 lần giá trị tài liệu đó.
<br/><br/>
Sau 30 ngày kể từ ngày quá hạn tài liệu mà người mượn chưa trả hoặc nộp phạt tài liệu bị quá hạn thì Thư viện sẽ gửi danh sách đến các Khoa/Bộ môn/Phòng có liên quanhỗ trợ thông báo về danh sách người mượn nợ này (Các Khoa/Bộ môn và Phòng Tổ chức hành chính, Phòng Đào tạo Sau đại học, Phòng Đào tạo đại học, Phòng Công tác sinh viên). Nếu sau thời hạn 03 tháng kể từ ngày Thư viện và các Khoa/Bộ môn/Phòng có liên quan đã thông báo mà người mượn là sinh viên vẫn chưa trả hoặc đóng phạt tài liệu bị quá hạn thì sẽ bị xử lý bằng hình thức ngăn chặn đăng ký học phần trong học kì kế tiếp hoặc không xét tốt nghiệp (nếu là sinh viên/học viên cao học năm cuối).

                    </p>
                   ) : this.state.changeService == "btn3" ? (
                    <p className="textarea1-Service" >
- Bạn có thể gửi sách tại tủ sách của thư viện, sách bạn gửi sẽ được thư viện gắn mã và cho sinh viên mượn. Quy trình mượn và quy định khi mượn sẽ giống như tài liệu của thư viện.
<br/><br/>
- Nếu sách có hư hỏng thì bạn sinh viên mượn sẽ đền sách theo quy định của thư viện.
<br/><br/>
- Thời gian kí gửi: Tối thiểu 2 tháng.
<br/><br/>
- Nếu bạn muốn lấy lại sách vui lòng liên hệ thư viện trước 1 tuần để hoàn thành thủ tục nhận lại sách.
<br/><br/>
Chi tiết được ghi rõ trong <a style={{color: 'blue', fontWeight: 450}}>Cam kết</a>
                    </p>
                    ) : this.state.changeService == "btn4" ? (
                        <p className="textarea1-Service" >
    Nếu bạn muốn khuyên góp sách cho Thư Viện vui lòng liên hệ bàn phục vụ. <br/>
Cảm ơn bạn đã lan tỏa tri thức.
                        </p>
                        ) : this.state.changeService == "btn5" ? (
                            <div className="textarea1-Service" >
                                Bạn có thể in tài liệu trực tiếp lại thư viện hoặc gửi Tài Liệu qua form và đến nhận. <br/>
                                Đăng nhập tài khoản để sử dụng chức năng này.

                                <form className="form-Service">
                                    <input className="input1-Service" placeholder="Tên - MSSV"></input>
                                    <input className="input2-Service" placeholder="Thời gian lấy tài liệu"></input>
                                    <textarea className="input3-Service" placeholder="Mô tả kiểu và số bản Photo" ></textarea>
                                    <p className="input4-Service">* Nếu dung lượng lớn thì bạn gửi link drive.</p>
                                    <div className="input5-Service">
                                    <AiFillFileAdd size={30} color='#1682FD' />
                                    <ImLink size={25} color='#1682FD' style={{marginLeft: 20}} />
                                    <div style={{marginTop: 50}}>
                                    <button className="button-66">
                                    <FiSend size={20} color='white' />
                                    &nbsp; Gửi yêu cầu
                                    </button>
                                    </div>
                                    </div>
                                </form>
                            </div>
                            ) : this.state.changeService == "btn6" ? (
                                <p className="textarea1-Service" >
            Hiện tại Thư Viện chưa mở lớp kỹ năng nào.
                                </p>
                                ) : (
                    <p className="textarea1-Service" >
                       Thư viên mong muốn đem lại cho bạn đọc những trải nghiệm, tiện ích tuyệt vời nhất khi sử dụng.
                    </p>
                    )
                   }
               </div>
            </div>
        );
    }
}

export default Service;