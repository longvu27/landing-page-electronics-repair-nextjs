import Image from 'next/image';
import s from './dienNuocStyle.module.scss';
import imgRepair from '@/assets/images/dienNuoc/sua_chua_dien_nuoc_a_z.jpg';
import sua_chua_dien from '@/assets/images/dienNuoc/sua_chua_dien.jpg';
import thi_cong_duong_ong_nuoc from '@/assets/images/dienNuoc/thi_cong_duong_ong_nuoc.jpg';
import day_dien_am_tuong from '@/assets/images/dienNuoc/day_dien_am_tuong.webp';
import thi_cong_dien_nuoc_6 from '@/assets/images/dienNuoc/thi_cong_dien_nuoc_6.jpg';
import sua_dien_hn from '@/assets/images/dienNuoc/sua_dien_hn.png';
import FeaturedServices from '../../featuredServices/FeaturedServices';
import ic_tick from '@/assets/images/icons/ic_tick.svg';
import ic_x from '@/assets/images/icons/ic_x.svg';
import ic_point from '@/assets/images/icons/ic_point.svg';

export default function DienNuoc() {
  const service = [
    ' Sửa chữa điện',
    ' Sửa chữa nước, ống nước',
    ' Sửa máy bơm tại nhà',
    ' Sửa bình tắm, nóng lạnh',
    ' Sửa bóng đèn, quạt điện',
    ' Siêu âm rò nước trong tường',
  ]

  const customer = [
    ' 15 Phút có mặt xử lý',
    ' Bảo hành lâu dài',
    ' Trực tư vấn 24/24',
    ' Đồ đạc chính hãng, hóa đơn',
    ' Không chặt chém',
    ' Báo giá trực tiếp tận nơi',
    ' Khách không làm nhân viên đi về, không xin tiền'
  ]

  return (
    <div className={s.wrapper}>
      <section className={s.newService} style={{ marginTop: '20px' }}>
        <div className={s.container}>
          <div className={s.title}>Dịch vụ của chúng tôi:</div>
          {service.map((item, index) => (
            <h3 key={index} className={s.item}>
              <Image width={16} height={16} src={ic_tick} alt='icon' />
              {item}
            </h3>
          ))}
        </div>
        <div className={s.container}>
          <div className={s.title}>KHÁCH HÀNG CHỌN CHÚNG TÔI VÌ:</div>
          {customer.map((item, index) => (
            <div key={index} className={s.item}>
              <Image width={16} height={16} src={index + 1 === customer.length ? ic_x : ic_point} alt='icon' />
              {item}
            </div>
          ))}
        </div>
      </section>

      <h1 className={s.titleH1}>
        Dịch Vụ Sửa Chữa Điện Nước Tại Thanh Hóa Uy Tín - Thợ Điện Nước Tại Nhà Nhanh Chóng
      </h1>

      <h2 className={s.tagP}>
        Cung cấp dịch vụ sửa chữa điện nước tại Thanh Hóa chuyên nghiệp: sửa điện chập cháy, thay dây điện, sửa ống nước rò rỉ, lắp đặt thiết bị điện nước, xử lý sự cố điện nước tại nhà nhanh chóng – an toàn – giá hợp lý.
      </h2>

      <div className={s.singleImg}>
        <Image width={400} height={500} src={sua_chua_dien} alt='dịch vụ sửa chữa điện nước tại Thanh Hoá' />
        <p>Hình ảnh: Sửa chữa điện nước tại thành phố Thanh Hóa</p>
      </div>

      <div className={s.content}>
        <h1 className={s.titleH2}>Thợ sửa điện nước tại nhà Hà Nội hỗ trợ nhanh 24/7</h1>
        <p>Nếu bạn đang gặp sự cố với các thiết bị điện nước tại nhà hoặc văn phòng, đừng ngần ngại liên hệ ngay với chúng tôi. Gọi ngay để được tư vấn và nhận dịch vụ sửa chữa nhanh chóng, uy tín.</p>

        <div className={s.singleImg}>
          <Image width={400} height={500} src={imgRepair} alt="Sửa chữa điện nước tại Thanh Hoá" />
          <p>Hình ảnh: Sửa chữa, thi công điện nước tại Phường Đông Sơn, TP Thanh Hóa</p>
        </div>
        <p>Tại sao lựa chọn dịch vụ sửa chữa điện nước tại <span>Doãn Anh</span>?</p>
        <p>Giải pháp tối ưu cho mọi sự cố điện nước: Với kiến thức chuyên sâu và kinh nghiệm lâu năm, chúng tôi tự tin cung cấp các giải pháp sửa chữa nhanh chóng và hiệu quả nhất cho mọi loại thiết bị điện nước.</p>

        <p>Dịch vụ sửa chữa tại nhà tiện lợi: Bạn không cần phải lo lắng về việc mang thiết bị đi sửa chữa. Chúng tôi sẽ đến tận nơi để kiểm tra và sửa chữa nhanh chóng.</p>

        <p>Giá cả phải chăng, bảo hành dài hạn: Với mức giá hợp lý, chúng tôi cam kết không phát sinh thêm chi phí, đồng thời bảo hành dài hạn cho mọi dịch vụ.</p>
      </div>

      {/* <h2 className={s.titleH3}>Lý Do Khách Hàng Tin Chọn Chúng Tôi:</h2>
      <ul>
        <li>Phục vụ tận nơi nhanh chóng tại tất cả các khu vực Thanh Hóa</li>
        <li>Thợ tay nghề cao, kinh nghiệm lâu năm</li>
        <li>Giá thành hợp lý, báo giá trước khi sửa</li>
        <li>Bảo hành dịch vụ rõ ràng sau sửa chữa</li>
      </ul> */}

      <h2 className={s.titleH3}>Quy Trình Làm Việc:</h2>
      <ul>
        <li>Gọi điện xác nhận yêu cầu dịch vụ</li>
        <li>Khảo sát và báo giá chi tiết</li>
        <li>Tiến hành sửa chữa, thay thế nếu cần</li>
        <li>Kiểm tra lại toàn bộ hệ thống sau sửa</li>
        <li>Bàn giao và bảo hành dịch vụ</li>
      </ul>

      <div>
        <div className={s.listImg}>
          <div className={s.img}>
            <Image src={thi_cong_dien_nuoc_6} alt='thi công điện nước' />
          </div>
          <div className={s.img}>
            <Image src={thi_cong_duong_ong_nuoc} alt='thi công đường ống nước' />
          </div>
          <div className={s.img}>
            <Image src={day_dien_am_tuong} alt='thi công điện âm tường' />
          </div>
        </div>
        <p style={{ fontSize: '14px', fontStyle: 'italic', textAlign: 'center' }}>Hình ảnh: Sửa chữa, thi công điện nước tại phường Ba Đình thành phố Thanh Hoá</p>
      </div>

      <h2 className={s.titleH3}>Cách Xử Lý Ống Nước Bị Vỡ Tại Nhà - Nhanh Chóng, Hiệu Quả</h2>
      <p>Ống nước bị vỡ gây ra tình trạng rò rỉ nước, làm lãng phí tài nguyên và ảnh hưởng đến sinh hoạt hàng ngày. Khi gặp sự cố này, bạn cần xử lý nhanh để hạn chế thiệt hại. Dưới đây là những bước xử lý đơn giản từ đội ngũ <strong>sửa chữa điện nước tại Thanh Hóa</strong> chia sẻ.</p> <h2>1. Khóa Van Nước Tổng Ngay Lập Tức</h2> <p>Khi phát hiện ống nước bị vỡ, việc đầu tiên bạn cần làm là khóa van nước tổng để ngăn nước tiếp tục chảy ra, hạn chế ngập úng và thiệt hại cho tài sản.</p> <h2>2. Xác Định Vị Trí Ống Bị Vỡ</h2> <p>Xác định chính xác vị trí ống nước bị nứt hoặc vỡ giúp bạn khoanh vùng sửa chữa dễ dàng hơn. Nếu ống nước bị vỡ ngầm trong tường, bạn cần đến sự hỗ trợ của thợ chuyên nghiệp.</p> <h2>3. Sử Dụng Băng Keo Chuyên Dụng Hoặc Đai Siết</h2> <p>Trong trường hợp khẩn cấp, bạn có thể dùng băng keo chịu nước hoặc đai siết ống nước để tạm thời khắc phục vết nứt. Tuy nhiên, đây chỉ là giải pháp tạm thời.</p> <h2>4. Gọi Thợ Sửa Chữa Điện Nước Chuyên Nghiệp</h2> <p>Để xử lý triệt để, bạn nên liên hệ ngay dịch vụ <strong>sửa chữa điện nước tại Thanh Hóa</strong>. Các thợ chuyên nghiệp sẽ thay thế đoạn ống hỏng, đảm bảo hệ thống nước nhà bạn hoạt động ổn định lâu dài.</p> <h2>Liên Hệ Dịch Vụ Sửa Ống Nước Thanh Hóa</h2> <p>Chúng tôi nhận sửa chữa rò rỉ nước, vỡ ống nước, thay thế đường ống mới chuyên nghiệp, giá hợp lý. Phục vụ tận nơi nhanh chóng tại Thanh Hóa.</p>

      <div className={s.singleImg}>
        <Image width={400} height={500} src={sua_dien_hn} alt='sửa chữa điện nước tại Thanh Hóa' />
        <p>Hình ảnh: Sửa chữa điện nước tại phường Đông Sơn thành phố Thanh Hóa</p>
      </div>

      <h2 className={s.titleH3}>Liên Hệ Sửa Điện Nước Thanh Hóa Ngay:</h2>
      <p>Hotline: <span><a href="tel:0964701333">0964 701 333</a></span></p>
      <p>Chúng tôi cam kết mang đến dịch vụ sửa chữa điện nước tốt nhất tại Thanh Hóa. Hãy liên hệ ngay để được tư vấn và hỗ trợ!</p>
      <p>Đội ngũ kỹ thuật viên của chúng tôi luôn sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi. Hãy để chúng tôi giúp bạn giải quyết mọi vấn đề về điện nước một cách nhanh chóng và hiệu quả nhất!</p>
      <p>Chúng tôi cam kết mang đến cho bạn dịch vụ sửa chữa điện nước chất lượng nhất với giá cả hợp lý nhất. Hãy liên hệ ngay với chúng tôi để được tư vấn và hỗ trợ tốt nhất!</p>
      <p>Chúng tôi rất mong được phục vụ bạn và mang lại sự hài lòng tuyệt đối với dịch vụ sửa chữa điện nước của mình.</p>
      <p>Cảm ơn bạn đã tin tưởng và lựa chọn dịch vụ của chúng tôi!</p>
      <p>Chúng tôi rất mong được phục vụ bạn và mang lại sự hài lòng tuyệt đối với dịch vụ sửa chữa điện nước của mình.</p>
      <p>Chúng tôi luôn sẵn sàng phục vụ bạn 24/7, bất kể ngày hay đêm. Đừng ngần ngại, hãy gọi cho chúng tôi ngay hôm nay để được phục vụ tốt nhất!</p>
      <a href='https://dichvudiennuochanoi247.com/' style={{ with: 0, height: 0 }} />
      {/* <FeaturedServices /> */}
    </div>
  )
}