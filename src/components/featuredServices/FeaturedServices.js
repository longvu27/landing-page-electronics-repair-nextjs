import img_card_ve_sinh_may_giat from '@/assets/images/dienNuoc/ve_sinh_may_giat.jpeg';
import img_card_sua_may_loc_nuoc from '@/assets/images/dienNuoc/sua_may_loc_nuoc.jpg';
import img_card_sua_binh_nong_lanh from '@/assets/images/dienNuoc/sua_binh_nong_lanh.jpg';
import img_card_lap_dat_dieu_hoa from '@/assets/images/dienLanh/lap_dat_dieu_hoa.jpg';
import img_card_sua_chua_tu_lanh from '@/assets/images/dienLanh/sua_chua_tu_lanh.jpg';
import img_card_ve_sinh_dieu_hoa from '@/assets/images/dienLanh/ve_sinh_dieu_hoa.jpg';
import Image from 'next/image';
import Link from 'next/link';
import s from './featuredServicesStyle.module.scss';

export default function FeaturedServices() {
  const dataCardBlog = [
    {
      title: 'Vệ sinh máy giặt',
      img: img_card_ve_sinh_may_giat,
      link: '/dien-nuoc/ve-sinh-may-giat',
    },
    {
      title: 'Sửa máy lọc nước',
      img: img_card_sua_may_loc_nuoc,
      link: '/dien-nuoc/sua-may-loc-nuoc',
    },
    {
      title: 'Sửa bình nóng lạnh',
      img: img_card_sua_binh_nong_lanh,
      link: '/dien-nuoc/sua-binh-nong-lanh',
    },
    {
      title: 'Lắp đặt điều hoà',
      img: img_card_lap_dat_dieu_hoa,
      link: '/dien-lanh/lap-dat-dieu-hoa',
    },
    {
      title: 'Sửa chữa tủ lạnh',
      img: img_card_sua_chua_tu_lanh,
      link: '/dien-lanh/sua-chua-tu-lanh',
    },
    {
      title: 'Vệ sinh điều hoà',
      img: img_card_ve_sinh_dieu_hoa,
      link: '/dien-lanh/ve-sinh-dieu-hoa',
    },
  ]
  return (
    <div className={'width-container'}>
      <div className={s.titleH1} style={{ margin: '20px auto' }}>Dịch vụ nổi bật của chúng tôi</div>
      <div className={s.listCard}>
        {dataCardBlog.map((item, index) => (
          <Link href={item.link} className={s.cardItem} key={index}>
            <div className={s.image}>
              <Image src={item.img} alt='card-item' />
            </div>
            <div className={s.title}>{item.title}</div>
            <div className={s.btn}>Chi tiết</div>
          </Link>
        ))}
      </div>
    </div>
  )
}