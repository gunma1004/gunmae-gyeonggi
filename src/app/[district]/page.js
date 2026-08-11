import GyeonggiDistrictClientPage from './GyeonggiDistrictClientPage';

// 🏢 경기도 31개 시·군별 데이터
const gyeonggiDistricts = {
  suwon: { name: '수원시', mainLoc: '인계동', titleTag: '인계동·영통 중심 25분 안심 현장결제', descText: '수원시 전지역(인계동, 영통동, 매탄동, 권선동) 자택 및 오피스텔 24시 100% 후불제 출장 마사지 케어. 정찰제 코스표와 실시간 이용 후기.', faqCustom: '수원시 인계동, 영통구 등 주요 거점 지역에 담당 관리사가 항시 대기하여 평균 20~25분 내 빠르게 방문해 드립니다.' },
  seongnam: { name: '성남시', mainLoc: '분당', titleTag: '분당·판교·야탑 프라이빗 24시 방문 케어', descText: '성남시 분당구, 판교, 수정구, 중원구 전지역 방문. 비즈니스 및 야간 피로 회복을 위한 24시 출장 마사지 & 스웨디시 추천.', faqCustom: '분당, 판교 테크노밸리 인근 및 주거지 어디든 24시간 연중무휴 안심 후불 방문이 가능합니다.' },
  goyang: { name: '고양시', mainLoc: '일산', titleTag: '일산·화정 24시 정찰제 힐링 케어', descText: '고양시 일산 동구/서구, 덕양구 화정, 행신 전지역 25분 도착! 선입금 사기 없는 안심 후불제 출장 마사지 서비스.', faqCustom: '일산 라페스타, 킨텍스 및 화정동 주변 주거지/숙소로 빠르고 안전하게 방문해 드립니다.' },
  yongin: { name: '용인시', mainLoc: '수지', titleTag: '수지·기흥·동백 맞춤형 힐링 프로그램', descText: '용인시 수지구, 기흥구, 처인구 전지역 자택 및 오피스텔 신속 케어. 정직한 정찰제 출장 마사지, 스웨디시 전문.', faqCustom: '용인 수지구 및 기흥동백 지역은 이동 동선 최적화로 예약 후 빠르게 안내해 드립니다.' },
  bucheon: { name: '부천시', mainLoc: '중동', titleTag: '중동·상동 24시 안심 방문 홈타이', descText: '부천시 중동, 상동, 심곡동, 역곡 전지역 24시간 안심 후불제 출장 마사지 추천 코스 및 솔직 이용 리뷰.', faqCustom: '부천 중동 상동 주요 상권 및 오피스텔 단지에 최적화된 신속 방문 서비스를 제공합니다.' },
  ansan: { name: '안산시', mainLoc: '중앙동', titleTag: '중앙역·고잔동 24시 편안한 방문 테라피', descText: '안산시 단원구, 상록구 중앙동, 고잔동, 선부동 전지역 25분 도착. 지친 일상에 맞춘 프리미엄 출장 마사지 코스.', faqCustom: '안산 중앙동 및 고잔신도시 주변 오피스텔/자택 어디서나 편리하게 이용하실 수 있습니다.' },
  anyang: { name: '안양시', mainLoc: '평촌', titleTag: '평촌·범계·안양역 24시 감성 스웨디시', descText: '안양시 동안구 평촌, 범계, 만안구 안양동 전지역 방문. 정찰제 코스표 기반 100% 현장 후불 출장 마사지.', faqCustom: '안양 평촌 범계역 중심가 및 주택가 전지역으로 전문 관리사가 빠르게 방문합니다.' },
  namyangju: { name: '남양주시', mainLoc: '다산동', titleTag: '다산·별내 신도시 프라이빗 홈케어', descText: '남양주시 다산동, 별내동, 진접, 평내호평 전지역 자택 및 오피스텔 24시 연중무휴 후불제 출장 마사지.', faqCustom: '다산신도시 및 별내지구 등 남양주 전지역 25분 내외 빠르게 안내해 드립니다.' },
  hwaseong: { name: '화성시', mainLoc: '동탄', titleTag: '동탄신도시·병점 프리미엄 홈케어', descText: '화성시 동탄1·2신도시, 병점, 향남, 봉담 전지역 방문. 뭉친 피로를 풀어주는 맞춤형 24시 출장 마사지 코스.', faqCustom: '동탄 영천동, 반송동, 청계동 오피스텔 및 자택으로 예약 접수 후 신속히 출발합니다.' },
  pyeongtaek: { name: '평택시', mainLoc: '고덕', titleTag: '고덕신도시·송탄 24시간 안심 출장 케어', descText: '평택시 고덕동, 비전동, 서정동, 송탄 전지역 빠른 방문. 선입금 전혀 없는 100% 안심 후불 출장 마사지.', faqCustom: '평택 고덕 삼성 캠퍼스 인근 및 송탄 지역 고객님들을 위한 맞춤 방문 케어입니다.' },
  uijeongbu: { name: '의정부시', mainLoc: '민락동', titleTag: '민락·신곡·호원동 24시 신속도착 홈타이', descText: '의정부시 민락동, 신곡동, 호원동, 가능동 전지역 25분 신속 도착. 정성 가득한 방문 출장 마사지.', faqCustom: '의정부 전지역 자택 및 오피스텔 어디든 예약 접수 즉시 출발합니다.' },
  paju: { name: '파주시', mainLoc: '운정', titleTag: '운정신도시·야당 24시 감성 스웨디시', descText: '파주시 운정동, 야당동, 금촌, 문산 전지역 25분 내 빠른 방문. 깔끔하고 청결한 출장 마사지 전문 힐링.', faqCustom: '야당역 오피스텔 단지 및 운정신도시 전지역 24시간 빠른 방문을 약속드립니다.' },
  gimpo: { name: '김포시', mainLoc: '구래동', titleTag: '구래·장기·운양 24시 안심 방문 홈케어', descText: '김포시 구래동, 장기동, 풍무동, 운양동 전지역 100% 현장 후불제 출장 마사지. 정찰제 코스표 제공.', faqCustom: '구래동 중심상권 및 김포 한강신도시 전지역 25분 내 도착 서비스입니다.' },
  siheung: { name: '시흥시', mainLoc: '배곳', titleTag: '배곧신도시·정왕동 24시 스웨디시 힐링', descText: '시흥시 배곧동, 정왕동, 대야동, 목감동 전지역 25분 신속도착. 선입금 사기 예방 100% 후불 출장 마사지.', faqCustom: '배곧신도시 오피스텔 및 정왕동 주거지 어디서나 안심하고 현장 결제로 이용하세요.' },
  gwangmyeong: { name: '광명시', mainLoc: '철산동', titleTag: '철산·하안·일직동 24시간 쾌적한 힐링', descText: '광명시 철산동, 하안동, 소하동, KTX광명역 일직동 전지역 빠른 케어. 지친 피로 해소 출장 마사지.', faqCustom: '광명역 인근 숙소 및 철산동 주거 단지로 신속하게 방문해 드립니다.' },
  gwangju: { name: '광주시', mainLoc: '경안동', titleTag: '경안·오포·태전동 24시 편안한 방문 테라피', descText: '경기 광주시 경안동, 오포동, 태전동, 곤지암 전지역 방문. 정찰제 코스표 기반 안심 출장 마사지.', faqCustom: '광주시 주요 거점 이동 동선으로 예약 시 친절하게 도착 시간을 안내해 드립니다.' },
  gunpo: { name: '군포시', mainLoc: '산본', titleTag: '산본·금정 24시 밀착 힐링 바디 케어', descText: '군포시 산본동, 금정동, 당동 전지역 25분 도착! 100% 현장 직접 결제로 안심하는 출장 마사지.', faqCustom: '산본 중심상가 및 금정역 주변 주거공간으로 빠르게 방문합니다.' },
  osan: { name: '오산시', mainLoc: '오산동', titleTag: '오산역·세교 24시 개운한 정찰제 케어', descText: '오산시 오산동, 궐동, 원동, 세교동 전지역 방문. 야간/주말에도 동일하게 적용되는 후불 출장 마사지.', faqCustom: '오산역 주변 및 세교신도시 오피스텔/자택으로 빠른 방문이 가능합니다.' },
  icheon: { name: '이천시', mainLoc: '창전동', titleTag: '창전·증포동 24시간 맞춤 방문 케어', descText: '이천시 창전동, 증포동, 부발읍 전지역 출장 케어. 지친 실생활 피로를 풀고 가는 출장 마사지.', faqCustom: '이천 시내 중심가 및 부발읍 주변 숙소/자택으로 신속 방문해 드립니다.' },
  yangju: { name: '양주시', mainLoc: '옥정', titleTag: '옥정신도시·고읍 24시 깔끔한 홈타이', descText: '양주시 옥정동, 고읍동, 덕계동 전지역 25분 케어. 예약금 절대 요구하지 않는 후불 출장 마사지.', faqCustom: '옥정신도시 오피스텔 및 양주 전지역 자택으로 안전하게 찾아갑니다.' },
  guri: { name: '구리시', mainLoc: '인창동', titleTag: '인창·수택·갈매동 24시 빠른 방문 케어', descText: '구리시 인창동, 수택동, 갈매동, 토평동 전지역 빠른 케어. 검증된 24시 출장 마사지 정찰제.', faqCustom: '구리시 전지역 오피스텔 및 자택으로 예약 접수 후 빠른 도착 서비스를 제공합니다.' },
  anseong: { name: '안성시', mainLoc: '공도', titleTag: '공도읍·안성시내 24시 후불제 방문 테라피', descText: '안성시 공도읍, 안성동 전지역 24시간 후불제 출장 마사지. 정찰제 가격표 및 신속 방문 시스템.', faqCustom: '공도읍 및 안성 시내권으로 빠르게 관리사가 방문합니다.' },
  pocheon: { name: '포천시', mainLoc: '소흘읍', titleTag: '소흘읍·송우리 24시 편안한 피로 회복', descText: '포천시 소흘읍, 송우리, 포천동 전지역 방문 케어. 선입금 사기 없이 안심하고 받는 출장 마사지.', faqCustom: '소흘읍 송우리 상권 및 포천 주요 주거지역으로 빠르게 안내합니다.' },
  uiwang: { name: '의왕시', mainLoc: '내손동', titleTag: '내손·포일·오전동 24시 프라이빗 바디케어', descText: '의왕시 내손동, 포일동, 오전동, 부곡동 전지역 방문. 100% 현장 결제 시스템의 출장 마사지.', faqCustom: '의왕 내손동 및 포일지구 자택/오피스텔로 신속도착합니다.' },
  hanam: { name: '하남시', mainLoc: '미사', titleTag: '미사강변·위례 24시 럭셔리 방문 케어', descText: '하남시 미사동, 위례동, 풍산동, 덕풍동 전지역 25분 빠른 도착. 안심 현장결제 출장 마사지.', faqCustom: '미사강변도시 오피스텔 및 자택 어디든 24시간 신속 방문해 드립니다.' },
  yeoju: { name: '여주시', mainLoc: '여흥동', titleTag: '여주시내 24시간 100% 현장 후불 케어', descText: '여주시 여흥동, 중앙동, 오학동 전지역 방문 케어. 정찰제 가격표 준수 안심 출장 마사지.', faqCustom: '여주 시내권 및 오학동 주거 단지로 편리하게 방문해 드립니다.' },
  yangpyeong: { name: '양평군', mainLoc: '양평읍', titleTag: '양평읍·용문 24시 쾌적한 방문 힐링', descText: '양평군 양평읍, 용문면 전지역 24시간 후불제 출장 마사지. 드라이브/여행 후 피로 회복 케어.', faqCustom: '양평읍 시내 및 인근 숙소/자택으로 사전 안내 후 안전하게 방문합니다.' },
  dongducheon: { name: '동두천시', mainLoc: '지행동', titleTag: '지행역 주변 24시 신속 방문 홈케어', descText: '동두천시 지행동, 생연동, 송내동 전지역 방문. 100% 현장 결제로 안전한 출장 마사지.', faqCustom: '지행역 신도시 주거 단지 및 오피스텔로 신속히 도착해 드립니다.' },
  gapyeong: { name: '가평군', mainLoc: '가평읍', titleTag: '가평·청평 여행 후 즐기는 24시 힐링 케어', descText: '가평군 가평읍, 청평면 전지역 24시 후불 방문. 숙소 및 펜션, 자택에서 이용하는 출장 마사지.', faqCustom: '가평 여행 후 피로를 풀어드리는 100% 현장 결제 방문 케어입니다.' },
  gwacheon: { name: '과천시', mainLoc: '별양동', titleTag: '별양·중앙동 24시 품격 있는 홈케어', descText: '과천시 별양동, 중앙동, 갈현동 전지역 자택 및 오피스텔 방문. 100% 현장 결제 출장 마사지.', faqCustom: '과천 전지역 주거 단지 및 아파트/오피스텔로 정성을 다해 방문합니다.' },
  yeoncheon: { name: '연천군', mainLoc: '연천읍', titleTag: '전곡·연천 24시간 안심 방문 정찰제', descText: '연천군 전곡읍, 연천읍 전지역 100% 후불제 출장 마사지 서비스. 정찰제 코스표 준수.', faqCustom: '전곡읍 및 연천읍 시내권 어디든 안심하고 이용하실 수 있습니다.' }
};

export async function generateStaticParams() {
  return Object.keys(gyeonggiDistricts).map((district) => ({
    district,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await Promise.resolve(params);
  const districtKey = resolvedParams?.district;
  const data = gyeonggiDistricts[districtKey] || {};
  
  const cityName = data.name || '경기도';
  const mainLoc = data.mainLoc || '';
  const titleTag = data.titleTag || '24시 안심 현장결제 홈케어';
  const descText = data.descText || `${cityName} 전지역 25분 신속 방문 100% 현장 후불제 출장 마사지.`;

  return {
    title: `${cityName} ${mainLoc} 24시 출장 마사지 | ${titleTag}`,
    description: descText,
    keywords: [
      `${cityName} 출장 마사지`, 
      `${cityName} 출장마사지`, 
      `${cityName} 홈타이`, 
      `${cityName} 스웨디시`, 
      `경기건마사랑`
    ],
    openGraph: {
      title: `${cityName} ${mainLoc} 24시 출장 마사지 | 방문 케어`,
      description: descText,
      url: `https://gg-gunmalove.shop/${districtKey}`,
    },
    alternates: {
      canonical: `https://gg-gunmalove.shop/${districtKey}`,
    },
  };
}

export default async function DistrictPage({ params }) {
  const resolvedParams = await Promise.resolve(params);
  const districtKey = resolvedParams?.district;
  const data = gyeonggiDistricts[districtKey] || {};
  const cityName = data.name || '경기도';
  const faqCustom = data.faqCustom || `${cityName} 전지역 어디든 예약 접수 후 평균 25분 내외로 신속하게 방문해 드립니다.`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `${cityName} 출장 마사지 이용 시 선입금이나 예약금이 있나요?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `경기건마사랑의 ${cityName} 모든 제휴업체는 100% 현장 후불제로 운영됩니다. 관리사 도착 후 직접 결제하시는 시스템이므로 선입금 사기 우려 없이 안심하고 이용 가능합니다.`
        }
      },
      {
        "@type": "Question",
        "name": `${cityName} 전지역 방문 도착 시간 및 이용 장소 안내`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${faqCustom}`
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <GyeonggiDistrictClientPage districtKey={districtKey} />
    </>
  );
}