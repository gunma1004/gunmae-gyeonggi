import GyeonggiDistrictClientPage from './GyeonggiDistrictClientPage';

const gyeonggiDistricts = {
  suwon: { name: '수원시' }, seongnam: { name: '성남시' }, goyang: { name: '고양시' },
  yongin: { name: '용인시' }, bucheon: { name: '부천시' }, ansan: { name: '안산시' },
  anyang: { name: '안양시' }, namyangju: { name: '남양주시' }, hwaseong: { name: '화성시' },
  pyeongtaek: { name: '평택시' }, uijeongbu: { name: '의정부시' }, paju: { name: '파주시' },
  gimpo: { name: '김포시' }, siheung: { name: '시흥시' }, gwangmyeong: { name: '광명시' },
  gwangju: { name: '광주시' }, gunpo: { name: '군포시' }, osan: { name: '오산시' },
  icheon: { name: '이천시' }, yangju: { name: '양주시' }, guri: { name: '구리시' },
  anseong: { name: '안성시' }, pocheon: { name: '포천시' }, uiwang: { name: '의왕시' },
  hanam: { name: '하남시' }, yeoju: { name: '여주시' }, yangpyeong: { name: '양평군' },
  dongducheon: { name: '동두천시' }, gapyeong: { name: '가평군' }, gwacheon: { name: '과천시' },
  yeoncheon: { name: '연천군' }
};

const guNameMap = {
  jangan: '장안구', gwonseon: '권선구', paldal: '팔달구', yeongtong: '영통구',
  sujeong: '수정구', jungwon: '중원구', bundang: '분당구',
  deogyang: '덕양구', ilsandong: '일산동구', ilsanseo: '일산서구',
  cheoin: '처인구', giheung: '기흥구', suji: '수지구',
  wonmi: '원미구', sosa: '소사구', ojeong: '오정구',
  sangrok: '상록구', danwon: '단원구',
  manan: '만안구', dongan: '동안구'
};

export async function generateStaticParams() {
  return Object.keys(gyeonggiDistricts).map((district) => ({
    district,
  }));
}

// 🔍 지역 이름(구 또는 동)에 맞춰 메타데이터가 동적으로 바뀌도록 수정된 함수
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const districtKey = resolvedParams.district;
  const districtData = gyeonggiDistricts[districtKey];
  const cityName = districtData?.name || '경기도';

  // 만약 /seongnam/분당동 처럼 하위 경로에 무언가 더 있거나 동 이름이 들어온 경우 처리
  // (Next.js 구조에 따라 하위 파라미터가 location으로 잡힐 수 있습니다)
  const rawLocation = resolvedParams.location ? decodeURIComponent(resolvedParams.location) : '';
  const locationName = guNameMap[rawLocation] || rawLocation;

  const fullName = locationName ? `${cityName} ${locationName}` : cityName;

  return {
    title: `경기도 ${fullName}출장마사지 | 24시 홈타이·스웨디시·아로마 가격 비교`,
    description: `경기도 ${fullName} 출장마사지 전문. 25분 내 방문 24시 상담 및 후불제 서비스.`,
    openGraph: {
      title: `경기도 ${fullName}출장마사지 | 24시 홈타이`,
      description: `경기도 ${fullName} 전지역 24시 방문 후불제 출장마사지 추천.`,
      url: `https://gunmalove-gyeonggi.shop/${districtKey}${locationName ? `/${rawLocation}` : ''}`,
    },
    alternates: {
      canonical: `https://gunmalove-gyeonggi.shop/${districtKey}${locationName ? `/${rawLocation}` : ''}`,
    },
  };
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  return <GyeonggiDistrictClientPage districtKey={resolvedParams.district} />;
}