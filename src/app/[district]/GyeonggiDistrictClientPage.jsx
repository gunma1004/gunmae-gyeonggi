"use client";

import Image from "next/image";
import { useState } from "react";

// 5개 제휴 업체 데이터
const shops = [
  {
    id: 1,
    name: "한국미인홈케어",
    location: "경기 전지역",
    desc: "24시 정성 가득한 타이 & 아로마 전문 케어",
    phone: "0507-1280-3324",
    badge: "추천업체",
    rating: 4.9,
    reviewCount: 128,
    courses: [
      { name: "아로디시 관리 (60분)", price: "90,000원" },
      { name: "스웨디시 케어 (60분)", price: "140,000원" },
    ]
  },
  {
    id: 2,
    name: "기쁨홈타이",
    location: "경기 전지역",
    desc: "지친 일상에 편안한 휴식을 선사하는 프리미엄 힐링샵",
    phone: "0507-1280-3325",
    badge: "인기폭발",
    rating: 4.8,
    reviewCount: 95,
    courses: [
      { name: "건식 코스 (60분)", price: "60,000원" },
      { name: "스웨디시 (60분)", price: "140,000원" },
    ]
  },
  {
    id: 3,
    name: "어린마인드홈타이",
    location: "경기 전지역",
    desc: "빠른 방문과 철저한 위생 관리를 약속드립니다",
    phone: "0507-1280-3326",
    badge: "24시상시",
    rating: 4.7,
    reviewCount: 82,
    courses: [
      { name: "타이/아로마 (60분)", price: "60,000원" },
      { name: "한국 스웨디시케어 (60분)", price: "140,000원" },
    ]
  },
  {
    id: 4,
    name: "미인클럽홈타이",
    location: "경기 전지역",
    desc: "베테랑 관리사의 맞춤형 피로 회복 케어 프로그램",
    phone: "0507-1280-3327",
    badge: "신규제휴",
    rating: 4.9,
    reviewCount: 110,
    courses: [
      { name: "타이코스 (60분)", price: "60,000원" },
      { name: "한국스웨디시 (90분)", price: "140,000원" },
    ]
  },
  {
    id: 5,
    name: "퀸즈 홈테라피",
    location: "경기 전지역",
    desc: "후불제 안심 이용, 경기 전지역 25분 내 빠른 도착",
    phone: "0507-1280-3328",
    badge: "만족도1위",
    rating: 5.0,
    reviewCount: 154,
    courses: [
      { name: "타이 코스 (60분)", price: "60,000원" },
      { name: "스웨디시 코스 (60분)", price: "140,000원" },
    ]
  }
];

const gyeonggiDistricts = {
  suwon: { name: '수원시', dongs: ['인계동', '영통동', '매탄동', '권선동', '조원동', '정자동', '파장동', '이의동', '원천동', '매교동'] },
  seongnam: { name: '성남시', dongs: ['분당동', '야탑동', '서현동', '판교동', '모란동', '수내동', '정자동', '이매동', '태평동', '신흥동'] },
  goyang: { name: '고양시', dongs: ['일산동', '백석동', '주엽동', '화정동', '행신동', '정발산동', '마두동', '대화동', '탄현동', '원당동'] },
  yongin: { name: '용인시', dongs: ['기흥동', '수지동', '처인동', '동백동', '보정동', '풍덕천동', '죽전동', '상갈동', '신갈동', '역북동'] },
  bucheon: { name: '부천시', dongs: ['중동', '상동', '심곡동', '원미동', '괴안동', '역곡동', '소사본동', '범박동', '오정동', '고강동'] },
  ansan: { name: '안산시', dongs: ['중앙동', '고잔동', '선부동', '상록수동', '초지도', '본오동', '사동', '월피동', '와동', '고제동'] },
  anyang: { name: '안양시', dongs: ['안양동', '평촌동', '호계동', '비산동', '관양동', '박달동', '석수동', '범계동', '귀인동', '평안동'] },
  namyangju: { name: '남양주시', dongs: ['다산동', '별내동', '진접동', '화도읍', '평내동', '호평동', '오남읍', '와부읍', '퇴계원읍', '진건읍'] },
  hwaseong: { name: '화성시', dongs: ['동탄동', '병점동', '향남읍', '봉담읍', '새솔동', '반송동', '능동', '기안동', '정남면', '우정읍'] },
  pyeongtaek: { name: '평택시', dongs: ['평택동', '비전동', '서정동', '안중읍', '팽성읍', '동삭동', '세교동', '고덕동', '포승읍', '송탄동'] },
  uijeongbu: { name: '의정부시', dongs: ['의정부동', '호원동', '신곡동', '민락동', '용현동', '가능동', '녹양동', '금오동', '낙양동', '장암동'] },
  paju: { name: '파주시', dongs: ['운정동', '금촌동', '문산읍', '야당동', '교하동', '동패동', '목동동', '탄현면', '법원읍', '파주읍'] },
  gimpo: { name: '김포시', dongs: ['구래동', '장기동', '풍무동', '사우동', '운양동', '마산동', '통진읍', '고촌읍', '양촌읍', '하성면'] },
  siheung: { name: '시흥시', dongs: ['정왕동', '대야동', '배곧동', '목감동', '은계동', '신천동', '월곶동', '장곡동', '하중동', '능곡동'] },
  gwangmyeong: { name: '광명시', dongs: ['철산동', '하안동', '소하동', '광명동', '일직동', '학온동'] },
  gwangju: { name: '광주시', dongs: ['오포동', '초월읍', '퇴촌면', '경안동', '곤지암읍', '태전동', '쌍령동', '도척면', '중부면'] },
  gunpo: { name: '군포시', dongs: ['산본동', '금정동', '당동', '부곡동', '대야미동', '재궁동', '오금동', '수리동', '송부동'] },
  osan: { name: '오산시', dongs: ['오산동', '궐동', '원동', '세교동', '남촌동', '초평동', '대원동', '누읍동', '가수동'] },
  icheon: { name: '이천시', dongs: ['창전동', '증포동', '부발읍', '마장면', '중리동', '관고동', '백사면', '호법면', '장호원읍'] },
  yangju: { name: '양주시', dongs: ['회천동', '고읍동', '옥정동', '덕계동', '백석읍', '장흥면', '남면', '은현면', '양주동'] },
  guri: { name: '구리시', dongs: ['인창동', '수택동', '토평동', '교문동', '갈매동', '동구동', '아천동'] },
  anseong: { name: '안성시', dongs: ['공도읍', '안성동', '대덕면', '고삼면', '일죽면', '죽산면', '삼죽면', '보개면', '금광면'] },
  pocheon: { name: '포천시', dongs: ['소흘읍', '포천동', '선단동', '가산면', '신북면', '창수면', '영중면', '일동면', '이동면'] },
  uiwang: { name: '의왕시', dongs: ['내손동', '부곡동', '오전동', '청계동', '고천동', '포일동', '월암동'] },
  hanam: { name: '하남시', dongs: ['미사동', '풍산동', '위례동', '신장동', '덕풍동', '감일동', '창우동', '초이동', '망월동'] },
  yeoju: { name: '여주시', dongs: ['여흥동', '중앙동', '오학동', '가남읍', '점동면', '능서면', '대신면', '북내면', '강천면'] },
  yangpyeong: { name: '양평군', dongs: ['양평읍', '용문면', '강상면', '서종면', '지평면', '옥천면', '단월면', '양서면', '강하면'] },
  dongducheon: { name: '동두천시', dongs: ['생연동', '보산동', '지행동', '상패동', '중앙동', '송내동', '불현동', '소요동'] },
  gapyeong: { name: '가평군', dongs: ['가평읍', '청평면', '설악면', '조종면', '상면', '북면'] },
  gwacheon: { name: '과천시', dongs: ['별양동', '중앙동', '문원동', '갈현동', '부림동', '과천동', '원문동'] },
  yeoncheon: { name: '연천군', dongs: ['연천읍', '전곡읍', '군남면', '청산면', '미산면', '왕징면', '신서면', '중면', '장남면'] }
};

const categoryTabs = [
  { id: "services", label: "서비스" },
  { id: "prices", label: "가격안내" },
  { id: "travel", label: "지역 여행" },
  { id: "food", label: "맛집·숙소" },
  { id: "districts", label: "타 지역" },
  { id: "qa", label: "Q&A" },
  { id: "reviews", label: "후기" },
];

export default function GyeonggiDistrictClientPage({ districtKey }) {
  const [activeTab, setActiveTab] = useState("services");
  const districtInfo = gyeonggiDistricts[districtKey];

  if (!districtInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0c0c0c] text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-amber-500 mb-4">404</h1>
          <p>존재하지 않는 서비스 지역입니다.</p>
          <a href="/" className="mt-4 inline-block px-6 py-2 bg-amber-500 text-black rounded-full text-xs font-bold">메인으로 돌아가기</a>
        </div>
      </div>
    );
  }

  const rawName = districtInfo.name || '';
  const currentName = rawName.startsWith('경기도') ? rawName.replace('경기도', '').trim() : rawName;
  const fullRegionName = `경기도 ${currentName}`;
  const currentDongs = districtInfo.dongs || [];

  const scrollToSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="text-gray-200 min-h-screen flex flex-col bg-[#0c0c0c] pb-20">

      {/* 헤더 */}
      <header className="sticky top-0 z-50 bg-[#0c0c0c]/90 backdrop-blur-md border-b border-white/10 px-4 py-3">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <a href="/" className="text-lg md:text-xl font-bold text-amber-400">경기건마사랑 ({currentName})</a>
          <a href="/" className="text-xs text-gray-400 hover:text-amber-400">메인으로 가기 &gt;</a>
        </div>
      </header>

      {/* 카테고리 탭 네비게이션 */}
      <nav className="sticky top-[53px] z-40 bg-[#121212] border-b border-white/10 px-4 py-2 overflow-x-auto no-scrollbar">
        <div className="max-w-4xl mx-auto flex gap-2 whitespace-nowrap">
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all ${
                activeTab === tab.id
                  ? "bg-amber-500 text-black shadow-md shadow-amber-500/20"
                  : "bg-white/5 text-gray-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex-1 space-y-16">
        
        {/* 히어로 */}
        <section className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-3">
            <span className="text-amber-400">{fullRegionName} 24시</span> 출장마사지 추천
          </h1>
          <p className="text-gray-400 text-xs md:text-sm mb-4">{currentName} 전지역 오피스텔/자택 25분 내 빠른 방문 후불제 케어</p>

          {/* 주요 동(洞) 키워드 텍스트 태그 (링크 없이 SEO 수집용으로 노출) */}
          <div className="flex flex-wrap justify-center gap-1.5 my-4 max-w-2xl mx-auto">
            {currentDongs.map((dong) => (
              <span key={dong} className="text-[11px] px-2.5 py-1 bg-white/5 text-amber-400/90 rounded-md border border-white/5">
                #{currentName} {dong}
              </span>
            ))}
          </div>
        </section>

        {/* --- 섹션 1: 서비스 & 제휴업체 --- */}
        <section id="services" className="scroll-mt-28">
          <div className="mb-4 border-b border-white/10 pb-2">
            <h2 className="text-lg md:text-xl font-bold text-white">🛍️ {currentName} 추천 서비스 & 업체</h2>
            <p className="text-xs text-gray-400 mt-0.5">{fullRegionName} 전지역 방문 제휴업체 목록</p>
          </div>

          <div className="space-y-6">
            {shops.map((shop) => (
              <article
                key={shop.id}
                className="bg-[#141414] border border-white/10 rounded-2xl p-5 md:p-6 shadow-lg hover:border-amber-500/40 transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] bg-amber-500/20 text-amber-300 font-bold px-2 py-0.5 rounded border border-amber-500/30">
                        {shop.badge}
                      </span>
                      <span className="text-xs text-amber-400 font-bold">★ {shop.rating} ({shop.reviewCount})</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">{shop.name}</h3>
                    <p className="text-xs text-amber-400/90 mt-0.5 font-medium">{currentName} 전지역 25분 내 빠른 방문</p>
                  </div>
                </div>

                <p className="text-xs text-gray-400 mb-4 bg-white/5 p-2.5 rounded-lg border border-white/5">{shop.desc}</p>

                <div className="bg-black/40 rounded-xl p-3 mb-4 space-y-1.5 border border-white/5">
                  {shop.courses.map((course, idx) => (
                    <div key={idx} className="flex justify-between text-xs">
                      <span className="text-gray-300">{course.name}</span>
                      <span className="font-bold text-amber-400">{course.price}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${shop.phone}`}
                    className="flex items-center justify-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-black font-bold py-3.5 rounded-xl text-xs transition-colors"
                  >
                    📞 전화 문의하기
                  </a>
                  <a
                    href={`sms:${shop.phone}?body=${encodeURIComponent(`[${currentName} 출장마사지] ${shop.name} 문의드립니다.`)}`}
                    className="flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 rounded-xl text-xs border border-white/10 transition-colors"
                  >
                    💬 문자 예약하기
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* --- 섹션 2: 가격 안내 --- */}
        <section id="prices" className="scroll-mt-28 bg-[#121212] p-5 rounded-2xl border border-white/10">
          <h2 className="text-lg font-bold text-white mb-1">💰 {currentName} 표준 가격안내</h2>
          <p className="text-xs text-gray-400 mb-4">{fullRegionName} 정찰제 대표 케어 코스 안내</p>
          <div className="space-y-3">
            <div className="flex justify-between items-center bg-black/40 p-3 rounded-xl border border-white/5 text-xs">
              <div>
                <span className="font-bold text-white block">건식 타이 코스 (60분)</span>
                <span className="text-[11px] text-gray-400">뭉친 피로를 풀어주는 집중 건식 케어</span>
              </div>
              <span className="text-amber-400 font-bold text-sm">60,000원 ~</span>
            </div>
            <div className="flex justify-between items-center bg-black/40 p-3 rounded-xl border border-white/5 text-xs">
              <div>
                <span className="font-bold text-white block">아로마 오일 케어 (60분)</span>
                <span className="text-[11px] text-gray-400">부드러운 오일로 전신 심신 안정</span>
              </div>
              <span className="text-amber-400 font-bold text-sm">70,000원 ~</span>
            </div>
            <div className="flex justify-between items-center bg-black/40 p-3 rounded-xl border border-white/5 text-xs">
              <div>
                <span className="font-bold text-white block">한국 스웨디시 (60분)</span>
                <span className="text-[11px] text-gray-400">섬세하고 부드러운 최고급 스페셜 감성 케어</span>
              </div>
              <span className="text-amber-400 font-bold text-sm">140,000원 ~</span>
            </div>
          </div>
        </section>

        {/* --- 섹션 3: 지역 여행 가이드 --- */}
        <section id="travel" className="scroll-mt-28">
          <h2 className="text-lg font-bold text-white mb-1">🌲 {currentName} 추천 힐링 명소</h2>
          <p className="text-xs text-gray-400 mb-4">{fullRegionName} 주변 가볼 만한 곳 및 휴식 공간</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#141414] p-4 rounded-xl border border-white/5">
              <span className="text-[10px] text-amber-400 font-semibold">#{currentName} #명소</span>
              <h3 className="text-sm font-bold text-white mt-1 mb-1">{currentName} 대표 관광·휴양지</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {fullRegionName}의 대표 명소 투어 후 쌓인 피로를 자택이나 오피스텔에서 편안하게 풀 수 있는 24시 출장 케어 서비스입니다.
              </p>
            </div>
            <div className="bg-[#141414] p-4 rounded-xl border border-white/5">
              <span className="text-[10px] text-amber-400 font-semibold">#{currentName} #드라이브</span>
              <h3 className="text-sm font-bold text-white mt-1 mb-1">{currentName} 드라이브 힐링 코스</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                드라이브 후 일상의 스트레스를 날려버릴 수 있는 전문 관리사의 차별화된 맞춤 테라피를 경험해보세요.
              </p>
            </div>
          </div>
        </section>

        {/* --- 섹션 4: 맛집 & 숙소 --- */}
        <section id="food" className="scroll-mt-28">
          <h2 className="text-lg font-bold text-white mb-1">🍽️ {currentName} 맛집 & 숙소 팁</h2>
          <p className="text-xs text-gray-400 mb-4">{fullRegionName} 주요 번화가 및 거점 숙소 정보</p>
          <div className="bg-[#141414] p-4 rounded-xl border border-white/5">
            <span className="text-[10px] bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded font-bold">{currentName} 핫플레이스</span>
            <h3 className="text-sm font-bold text-white mt-2 mb-1">{currentName} 상권 및 연계 숙소 타깃 케어</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              {currentName} 주요 맛집거리 탐방이나 비즈니스 출장 후 호텔, 모텔, 오피스텔 등 원하시는 장소 어디서나 25분 이내 신속 방문 서비스를 받아보실 수 있습니다.
            </p>
          </div>
        </section>

        {/* --- 섹션 5: 경기도 다른 시·군 바로가기 --- */}
        <section id="districts" className="scroll-mt-28 bg-[#080808] p-6 rounded-2xl border border-white/5">
          <h3 className="text-sm font-bold text-amber-400 mb-3">경기도 다른 시·군 바로가기</h3>
          <div className="flex flex-wrap gap-2.5">
            {Object.entries(gyeonggiDistricts).map(([key, data]) => {
              const targetName = data.name.replace('경기도', '').trim();
              if (key === districtKey) return null; // 현재 페이지는 제외
              return (
                <a
                  key={key}
                  href={`/${key}`}
                  className="text-xs px-3 py-1.5 bg-white/5 hover:bg-amber-500/20 hover:text-amber-300 rounded-lg text-gray-400 border border-white/5 transition-all"
                >
                  경기도 {targetName} 출장마사지
                </a>
              );
            })}
          </div>
        </section>

        {/* --- 섹션 6: Q&A --- */}
        <section id="qa" className="scroll-mt-28">
          <h2 className="text-lg font-bold text-white mb-1">❓ {currentName} Q&A (자주 묻는 질문)</h2>
          <p className="text-xs text-gray-400 mb-4">{currentName} 이용 전 궁금하신 점을 확인해 보세요.</p>
          <div className="space-y-3">
            <div className="bg-[#141414] p-4 rounded-xl border border-white/5">
              <h3 className="text-xs font-bold text-amber-400 mb-1">Q. {currentName} 이용 시 결제 방식은 어떻게 되나요?</h3>
              <p className="text-xs text-gray-300 leading-relaxed">A. 경기건마사랑은 선입금을 절대 요구하지 않는 100% 현장 후불제 시스템입니다.</p>
            </div>
            <div className="bg-[#141414] p-4 rounded-xl border border-white/5">
              <h3 className="text-xs font-bold text-amber-400 mb-1">Q. 도착 시간이 얼마나 걸리나요?</h3>
              <p className="text-xs text-gray-300 leading-relaxed">A. {currentName} 전지역 예약 후 평균 25분~30분 내외로 빠르게 도착합니다.</p>
            </div>
          </div>
        </section>

        {/* --- 섹션 7: 이용 후기 --- */}
        <section id="reviews" className="scroll-mt-28">
          <h2 className="text-lg font-bold text-white mb-1">💬 {currentName} 솔직 후기</h2>
          <p className="text-xs text-gray-400 mb-4">{currentName} 고객님들의 실시간 이용 평가</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#141414] p-4 rounded-xl border border-white/5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-white">최*진 ({currentName})</span>
                <span className="text-xs text-amber-400">★★★★★</span>
              </div>
              <p className="text-xs text-gray-300 mb-2">"{currentName} 오피스텔 방문 케어 받았는데 피로가 한 번에 다 풀렸어요. 강추합니다!"</p>
              <span className="text-[10px] text-gray-500">이용업체: 기쁨홈타이</span>
            </div>
            <div className="bg-[#141414] p-4 rounded-xl border border-white/5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-white">정*민 ({currentName})</span>
                <span className="text-xs text-amber-400">★★★★★</span>
              </div>
              <p className="text-xs text-gray-300 mb-2">"후불제라 안심하고 문자 예약했는데 25분 만에 오셨네요. 관리사분 실력 최고입니다."</p>
              <span className="text-[10px] text-gray-500">이용업체: 한국미인홈케어</span>
            </div>
          </div>
        </section>

      </main>

      {/* 푸터 */}
      <footer className="bg-[#080808] border-t border-white/5 py-8 text-center text-gray-500 text-xs mt-auto">
        COPYRIGHT &copy; 경기건마사랑 {currentName} ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}