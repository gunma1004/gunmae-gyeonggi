import GyeonggiDistrictClientPage from './GyeonggiDistrictClientPage';

// 경기도 31개 전체 시·군 데이터
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

// 빌드 시 정적으로 생성할 경로 미리 설정 (SSG 최적화)
export async function generateStaticParams() {
  return Object.keys(gyeonggiDistricts).map((district) => ({
    district,
  }));
}

// 🔍 지역 이름에 맞춰 SEO 메타데이터가 동적으로 바뀌도록 최적화
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const districtKey = resolvedParams.district;
  const districtData = gyeonggiDistricts[districtKey];
  
  const cityName = districtData?.name || '경기도';
  const fullName = cityName.startsWith('경기도') ? cityName : `경기도 ${cityName}`;

  return {
    title: `${fullName} 출장마사지 | 24시 홈타이·스웨디시·후불제 추천`,
    description: `${fullName} 출장마사지 1위 추천 업체. 25분 내 신속 방문, 정찰제 가격표, 지역 맛집·숙소 연계 정보 및 생생한 리얼 후기 제공.`,
    keywords: [`${fullName}출장마사지`, `${fullName}홈타이`, `${fullName}스웨디시`, `${cityName}마사지`, `경기건마사랑`],
    openGraph: {
      title: `${fullName} 출장마사지 | 24시 홈타이 추천`,
      description: `${fullName} 전지역 24시 방문 100% 후불제 출장마사지 및 스웨디시 추천.`,
      url: `https://gunmalove-gyeonggi.shop/${districtKey}`,
    },
    alternates: {
      canonical: `https://gunmalove-gyeonggi.shop/${districtKey}`,
    },
  };
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const districtKey = resolvedParams.district;
  const districtData = gyeonggiDistricts[districtKey];
  const cityName = districtData?.name || '경기도';
  const fullName = cityName.startsWith('경기도') ? cityName : `경기도 ${cityName}`;

  // ⭐️ 검색엔진이 좋아하는 FAQ 스키마 마크업 (SEO 노출 강화)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `${fullName} 출장마사지 이용 시 선입금이 있나요?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `경기건마사랑의 ${fullName} 모든 제휴업체는 100% 현장 후불제로 운영되며, 선입금이나 예약금을 절대 요구하지 않아 안심하고 이용하실 수 있습니다.`
        }
      },
      {
        "@type": "Question",
        "name": `${fullName} 전지역 예약 후 방문 도착 시간은 얼마나 걸리나요?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${fullName} 전지역 어디든 예약 접수 후 평균 25분 내외로 신속하게 방문해 드립니다.`
        }
      }
    ]
  };

  return (
    <>
      {/* 🤖 검색엔진 수집용 스키마 구조화 데이터 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <GyeonggiDistrictClientPage districtKey={districtKey} />
    </>
  );
}