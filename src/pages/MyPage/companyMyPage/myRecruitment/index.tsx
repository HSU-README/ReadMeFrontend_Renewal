import React from 'react';
import { Container } from 'pages/MyPage/companyMyPage/myRecruitment/styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import DeleteCompanySelectCard from 'components/deleteCompanySelectCard';
import { userRecruitmentState } from 'recoil/atoms';
import { useRecoilState } from 'recoil';

function MyPosting() {
  const [userRecruitment] = useRecoilState(userRecruitmentState);

  if (userRecruitment.length === 0) {
    return (
      <div style={{ fontSize: '40px', margin: '10% auto' }}>
        <img
          src={require('assets/icons/not_found_icon.png')}
          style={{ width: '500px', height: '300px' }}
          alt="not_found"
        />
        <br />
        <strong>작성하신 채용공고가 없어요!</strong>
      </div>
    );
  }

  return (
    <Container>
      <Swiper
        slidesPerView={4}
        grid={{
          rows: 2,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
      >
        {userRecruitment.map((data) => (
          <SwiperSlide>
            <DeleteCompanySelectCard key={data} data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default MyPosting;
