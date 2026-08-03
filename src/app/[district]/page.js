import GyeonggiDistrictClientPage from './GyeonggiDistrictClientPage';

// ⭐️ 메인 페이지와 동일한 경기도 31개 전체 시·군 데이터 적용
const gyeonggiDistricts = {
  suwon: { name: '수원시' },
  seongnam: { name: '성남시' },
  goyang: { name: '고양시' },
  yongin: { name: '용인시' },
  bucheon: { name: '부천시' },
  ansan: { name: '안산시' },
  anyang: { name: '안양시' },
  namyangju: { name: '남양주시' },
  hwaseong: { name: '화성시' },
  pyeongtaek: { name: '평택시' },
  uijeongbu: { name: '의정부시' },
  paju: { name: '파주시' },
  gimpo: { name: '김포시' },
  siheung: { name: '시흥시' },
  gwangmyeong: { name: '광명시' },
  gwangju: { name: '광주시' },
  gunpo: { name: '군포시' },
  osan: { name: '오산시' },
  icheon: { name: '이천시' },
  yangju: { name: '양주시' },
  guri: { name: '구리시' },
  anseong: { name: '안성시' },
  pocheon: { name: '포천시' },
  uiwang: { name: '의왕시' },
  hanam: { name: '하남시' },
  yeoju: { name: '여주시' },
  yangpyeong: { name: '양평군' },
  dongducheon: { name: '동두천시' },
  gapyeong: { name: '가평군' },
  gwacheon: { name: '과천시' },
  yeoncheon: { name: '연천군' }
};

export async function generateStaticParams() {
  return Object.keys(gyeonggiDistricts).map((district) => ({
    district,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const districtKey = resolvedParams.district;
  const districtData = gyeonggiDistricts[districtKey];
  const currentName = districtData?.name || '경기도';

  return {
    title: `경기도 ${currentName}출장마사지 | 24시 홈타이·스웨디시·아로마 가격 비교`,
    description: `경기도 ${currentName}출장마사지 전문. 25분 내 방문 24시 상담 및 후불제 서비스.`,
    openGraph: {
      url: `https://gunma-gyeonggi.com/${districtKey}`,
    },
    alternates: {
      canonical: `https://gunma-gyeonggi.com/${districtKey}`,
    },
  };
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  return <GyeonggiDistrictClientPage districtKey={resolvedParams.district} />;
}