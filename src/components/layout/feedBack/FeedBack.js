import s from './feedBackStyle.module.scss';

import avt_1 from '@/assets/images/home/avt_1.webp';
import avt_2 from '@/assets/images/home/avt_2.webp';
import avt_3 from '@/assets/images/home/avt_3.jpg';
import avt_4 from '@/assets/images/home/avt_4.jpeg';
import avt_5 from '@/assets/images/home/avt_5.jpeg';
import Image from 'next/image';

export default function FeedBack() {
  const dataReview = [
    {
      content: 'Thợ điện nước đến rất nhanh sau khi mình gọi. Sửa rò rỉ đường ống gọn gàng, đi lại hệ thống dây điện an toàn và thẩm mỹ. Làm xong kiểm tra kỹ trước khi bàn giao.',
      name: 'Nguyễn Thị Mai Anh',
      img: avt_5,
      location: 'Phường Đông Sơn, TP Thanh Hóa',
    },
    {
      content: 'Nhà mình bị chập điện vào buổi tối, gọi là có mặt trong vòng 30 phút. Kỹ thuật xử lý nhanh, giải thích rõ nguyên nhân và hướng dẫn cách phòng tránh. Giá hợp lý, không phát sinh.',
      name: 'Lê Văn Mạnh',
      img: avt_2,
      location: 'Phường Ba Đình, TP Thanh Hóa',
    },
    {
      content: 'Ống nước âm tường bị rò rỉ mà tìm mãi không ra. Thợ dùng thiết bị kiểm tra chuyên dụng, xử lý triệt để, không phải đục phá nhiều. Rất chuyên nghiệp.',
      name: 'Trần Ngọc Diễm',
      img: avt_3,
      location: 'Phường Đông Vệ, TP Thanh Hóa',
    },
    {
      content: 'Mình sửa lại toàn bộ hệ thống điện cho nhà mới. Làm việc đúng tiến độ, dây đi gọn gàng, đảm bảo an toàn. Sau khi hoàn thiện còn kiểm tra kỹ từng ổ cắm, công tắc.',
      name: 'Phạm Thị Lan Anh',
      img: avt_1,
      location: 'Phường Quảng Thành, TP Thanh Hóa',
    },
    {
      content: 'Bồn nước và máy bơm gặp sự cố liên tục. Sau khi được kiểm tra và thay linh kiện chính hãng, hệ thống hoạt động ổn định đến giờ. Thái độ phục vụ rất nhiệt tình.',
      name: 'Hoàng Văn Tuấn',
      img: avt_4,
      location: 'Phường Đông Hải, TP Thanh Hóa',
    },
  ]

  return (
    <div className={s.wrapper}>
      <div className={`width-container ${s.customerReview}`} >
        <div className={s.head}>Đánh giá của khách hàng</div>
        <div className={s.body}>
          {dataReview.map((item, index) => (
            <div className={s.item} key={index}>
              <div className={s.avt}>
                <Image src={item.img} alt='avt' />
              </div>
              <div className={s.text}>
                <div className={s.title}>
                  {item.name}
                  <br />
                  <span>{item.location}</span>
                </div>
                <div className={s.content}>{item.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}