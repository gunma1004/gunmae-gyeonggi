"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

// --- 카테고리 탭 정의 ---
const categoryTabs = [
  { id: "services", label: "서비스" },
  { id: "prices", label: "가격안내" },
  { id: "travel", label: "경기여행" },
  { id: "food-stay", label: "맛집·숙소" },
  { id: "districts", label: "지역안내" },
  { id: "qa", label: "Q&A" },
  { id: "reviews", label: "후기" },
];

// --- 5개 제휴 업체 데이터 ---
const shops = [
  {
    id: 1,
    name: "한국미인홈케어",
    location: "경기 전지역 (수원/성남/용인 중심)",
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
    location: "경기 전지역 (고양/부천/안산 중심)",
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
    location: "경기 전지역 (화성/평택/시흥 중심)",
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
    location: "경기 전지역 (남양주/파주/김포 중심)",
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
    location: "경기 전지역 (의정부/하남/광주 중심)",
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

// --- 경기도 31개 전체 시·군 및 주요 동(洞) 텍스트 데이터 ---
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

const travelSpots = [
  { title: "수원 화성 행리단길", desc: "고즈넉한 성곽길 산책 후 즐기는 카페거리 & 힐링 케어", tag: "#수원 #데이트코스" },
  { title: "가평 아침고요수목원", desc: "자연 속 힐링 여행, 수목원 탐방 후 편안한 방문 서비스", tag: "#가평 #힐링여행" },
  { title: "파주 헤이리 예술마을", desc: "이색 전시와 맛집 투어 후 하루의 피로를 푸는 완벽 코스", tag: "#파주 #드라이브" }
];

const foodAndStays = [
  { title: "수원 통닭거리 & 신풍동 인근 숙소", desc: "맛집 탐방 후 편안하게 출장 서비스를 이용하기 좋은 핫플레이스", type: "수원 맛집·숙소" },
  { title: "분당 정자동 카페거리 & 호텔존", desc: "비즈니스 및 출장 고객을 위한 최고급 맞춤 케어 연계존", type: "성남 맛집·숙소" }
];

const faqs = [
  { q: "Q. 결제는 언제 진행하나요?", a: "A. 저희 제휴 업체는 100% 예약 후 현장에서 관리사 방문 시 결제하는 후불제로 안전하게 운영됩니다." },
  { q: "Q. 예약 후 도착까지 얼마나 걸리나요?", a: "A. 경기도 전지역 평균 25분~30분 내외로 빠르게 방문합니다. (교통 상황에 따라 차이가 있을 수 있습니다)" },
  { q: "Q. 이용 시 주의사항이 있나요?", a: "A. 만취자, 비매너 이용자, 불법적 요구를 하시는 분은 이용이 제한될 수 있습니다." }
];

const reviews = [
  { name: "김*우 (수원 영통)", content: "퇴근하고 너무 피곤했는데 30분 만에 오셔서 깔끔하게 관리해주셨어요. 대만족입니다!", rating: "★★★★★", shop: "한국미인홈케어" },
  { name: "이*진 (성남 분당)", content: "후불제라 안심하고 이용했습니다. 관리사분 너무 친절하시고 실력도 좋네요.", rating: "★★★★★", shop: "기쁨홈타이" }
];

export default function GyeonggiMainPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("services");

  const handleDistrictChange = (e) => {
    if (e.target.value) {
      router.push(`/${e.target.value}`);
    }
  };

  const scrollToSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#0c0c0c] text-gray-200 min-h-screen flex flex-col pb-20">
      
      {/* 1. 헤더 */}
      <header className="sticky top-0 z-50 bg-[#0c0c0c]/90 backdrop-blur-md border-b border-white/10 px-4 py-3">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <a href="/" className="flex items-center gap-2.5">
            <Image 
              src="/logo.png" 
              alt="경기건마사랑 로고" 
              width={36}
              height={36}
              className="w-9 h-9 rounded-full object-cover border border-amber-500/40"
            />
            <span className="text-xl font-bold text-amber-400">경기건마사랑</span>
          </a>
          <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-medium">
            🔥 100% 후불제 안심 케어
          </span>
        </div>
      </header>

      {/* 2. 카테고리 네비게이션 탭 */}
      <nav className="sticky top-[61px] z-40 bg-[#121212] border-b border-white/10 px-4 py-2 overflow-x-auto no-scrollbar">
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

      <main className="max-w-4xl mx-auto px-4 py-6 w-full flex-1 space-y-16">
        
        {/* 메인 히어로 & 검색 */}
        <section className="text-center">
          <div className="mb-6 overflow-hidden rounded-2xl border border-white/10 shadow-2xl relative">
            <Image 
              src="/banner.jpg" 
              alt="경기건마사랑 대표 배너" 
              width={800}
              height={300}
              priority
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end justify-center pb-6 px-4">
              <p className="text-white text-sm md:text-lg font-semibold tracking-wide drop-shadow-md">
                ✨ 경기 전지역 25분 내 빠르고 완벽한 힐링 케어
              </p>
            </div>
          </div>

          <h1 className="text-2xl md:text-4xl font-bold text-white mb-3">
            경기도 추천 <span className="text-amber-400">건마·홈케어·스웨디시</span> 정보
          </h1>
          <p className="text-gray-400 text-xs md:text-sm mb-6 leading-relaxed">
            경기도 31개 시·군 검증된 정갈한 코스와 합리적인 가격, 실제 이용 고객 후기까지 한눈에 확인해보세요.
          </p>

          {/* 지역 셀렉트 박스 (31개 전체 시·군) */}
          <div className="bg-[#161616] border border-amber-500/30 p-3.5 rounded-2xl max-w-sm mx-auto shadow-xl">
            <div className="text-left bg-black/50 p-2.5 rounded-xl border border-white/5">
              <label htmlFor="district-select" className="text-[10px] text-amber-400 font-bold block mb-1 uppercase tracking-wider">
                📍 빠른 내 주변 시/군 선택
              </label>
              <select 
                id="district-select"
                onChange={handleDistrictChange} 
                className="bg-transparent text-sm text-white w-full outline-none cursor-pointer font-medium" 
                defaultValue=""
              >
                <option value="" disabled className="bg-[#1e1e1e] text-gray-400">시/군을 선택해주세요</option>
                {Object.keys(gyeonggiDistricts).map((key) => (
                  <option key={key} value={key} className="bg-[#1e1e1e] text-white">
                    {gyeonggiDistricts[key].name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* --- 섹션 1: 서비스 & 제휴업체 목록 (5개 전체) --- */}
        <section id="services" className="scroll-mt-28">
          <div className="flex justify-between items-end mb-4 border-b border-white/10 pb-2">
            <div>
              <h2 className="text-xl font-bold text-white">🛍️ 추천 서비스 & 업체</h2>
              <p className="text-xs text-gray-400 mt-1">엄선된 경기 대표 프리미엄 제휴업체</p>
            </div>
          </div>

          <div className="space-y-6">
            {shops.map((shop) => (
              <article key={shop.id} className="bg-[#141414] border border-white/10 rounded-2xl p-5 shadow-xl">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] bg-amber-500/20 text-amber-300 font-bold px-2 py-0.5 rounded-full">
                        {shop.badge}
                      </span>
                      <span className="text-xs text-amber-400 font-bold">★ {shop.rating} ({shop.reviewCount})</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">{shop.name}</h3>
                    <p className="text-xs text-gray-400 mt-0.5">{shop.location}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-300 mb-4 bg-white/5 p-2.5 rounded-lg border border-white/5">{shop.desc}</p>
                
                {/* 코스 안내 */}
                <div className="bg-black/50 rounded-xl p-3 mb-4 space-y-2 border border-white/5">
                  {shop.courses.map((course, idx) => (
                    <div key={idx} className="flex justify-between text-xs items-center">
                      <span className="text-gray-300">{course.name}</span>
                      <span className="font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">{course.price}</span>
                    </div>
                  ))}
                </div>

                {/* 콜투액션 (CTA) 버튼 */}
                <div className="grid grid-cols-2 gap-2.5">
                  <a href={`tel:${shop.phone}`} className="flex items-center justify-center gap-1 bg-amber-500 text-black font-bold py-3 rounded-xl text-xs hover:bg-amber-400 transition-colors">
                    📞 바로 전화 문의
                  </a>
                  <a href={`sms:${shop.phone}?body=${encodeURIComponent(`${shop.name} 예약 문의드립니다.`)}`} className="flex items-center justify-center gap-1 bg-white/10 text-white font-bold py-3 rounded-xl text-xs border border-white/10 hover:bg-white/15 transition-colors">
                    💬 문자 예약
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* --- 섹션 2: 가격 안내 --- */}
        <section id="prices" className="scroll-mt-28 bg-[#121212] p-5 rounded-2xl border border-white/10">
          <h2 className="text-lg font-bold text-white mb-2">💰 대표 서비스 가격안내</h2>
          <p className="text-xs text-gray-400 mb-4">경기도 평균 정밀 표준 가격표 (업체별 상이할 수 있습니다)</p>
          <div className="space-y-3">
            <div className="flex justify-between items-center bg-black/40 p-3 rounded-xl border border-white/5 text-xs">
              <div>
                <span className="font-bold text-white block">타이 / 건식 케어 (60분)</span>
                <span className="text-[11px] text-gray-400">피로 회복 및 뭉친 근육 케어</span>
              </div>
              <span className="text-amber-400 font-bold text-sm">60,000원 ~</span>
            </div>
            <div className="flex justify-between items-center bg-black/40 p-3 rounded-xl border border-white/5 text-xs">
              <div>
                <span className="font-bold text-white block">아로마 / 오일 케어 (60분)</span>
                <span className="text-[11px] text-gray-400">부드러운 아로마 향과 전신 힐링</span>
              </div>
              <span className="text-amber-400 font-bold text-sm">70,000원 ~</span>
            </div>
            <div className="flex justify-between items-center bg-black/40 p-3 rounded-xl border border-white/5 text-xs">
              <div>
                <span className="font-bold text-white block">스웨디시 / 센슈얼 케어 (60분)</span>
                <span className="text-[11px] text-gray-400">감성적이고 섬세한 프리미엄 스페셜 관리</span>
              </div>
              <span className="text-amber-400 font-bold text-sm">140,000원 ~</span>
            </div>
          </div>
        </section>

        {/* --- 섹션 3: 경기 여행 가이드 --- */}
        <section id="travel" className="scroll-mt-28">
          <h2 className="text-lg font-bold text-white mb-1">🌲 경기 힐링 여행 명소</h2>
          <p className="text-xs text-gray-400 mb-4">경기도 추천 명소 둘러보고 피로 완벽 해소하기</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {travelSpots.map((spot, idx) => (
              <div key={idx} className="bg-[#141414] p-4 rounded-xl border border-white/5">
                <span className="text-[10px] text-amber-400 font-semibold">{spot.tag}</span>
                <h3 className="text-sm font-bold text-white mt-1 mb-1.5">{spot.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{spot.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- 섹션 4: 맛집 & 숙소 팁 --- */}
        <section id="food-stay" className="scroll-mt-28">
          <h2 className="text-lg font-bold text-white mb-1">🍽️ 경기 핫플레이스 맛집·숙소</h2>
          <p className="text-xs text-gray-400 mb-4">주요 거점 주변 맛집과 편안한 숙소 연계 정보</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {foodAndStays.map((item, idx) => (
              <div key={idx} className="bg-[#141414] p-4 rounded-xl border border-white/5 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded font-bold">{item.type}</span>
                  <h3 className="text-sm font-bold text-white mt-2 mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- 섹션 5: 지역 안내 (31개 시·군 바로가기 + 주요 동 텍스트 포함) --- */}
        <section id="districts" className="scroll-mt-28 bg-[#080808] p-5 rounded-2xl border border-white/5 space-y-5">
          <div>
            <h2 className="text-base font-bold text-amber-400 mb-1">📍 경기도 31개 시·군 지역안내</h2>
            <p className="text-xs text-gray-400">원하시는 시/군을 선택하시면 해당 지역 전용 케어 페이지로 이동합니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {Object.entries(gyeonggiDistricts).map(([key, data]) => (
              <div key={key} className="bg-[#121212] p-3.5 rounded-xl border border-white/5 hover:border-amber-500/30 transition-all">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-white">경기도 {data.name}</span>
                  <a
                    href={`/${key}`}
                    className="text-[11px] px-2.5 py-1 bg-amber-500/20 text-amber-300 hover:bg-amber-500 hover:text-black rounded-lg border border-amber-500/30 transition-all font-semibold"
                  >
                    {data.name} 전체보기 &gt;
                  </a>
                </div>
                {/* ⭐️ 동(洞) 이름은 클릭 링크가 아닌 텍스트/태그로 노출하여 SEO 수집 효과 유지 */}
                <div className="flex flex-wrap gap-1">
                  {data.dongs.map((dong) => (
                    <span key={dong} className="text-[10px] text-gray-500 bg-white/5 px-1.5 py-0.5 rounded">
                      {dong}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- 섹션 6: Q&A --- */}
        <section id="qa" className="scroll-mt-28">
          <h2 className="text-lg font-bold text-white mb-1">❓ 자주 묻는 질문 (Q&A)</h2>
          <p className="text-xs text-gray-400 mb-4">고객님들이 가장 자주 물어보시는 질문들을 모았습니다.</p>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#141414] p-4 rounded-xl border border-white/5">
                <h3 className="text-xs font-bold text-amber-400 mb-1.5">{faq.q}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- 섹션 7: 이용 후기 --- */}
        <section id="reviews" className="scroll-mt-28">
          <h2 className="text-lg font-bold text-white mb-1">💬 생생 이용 후기</h2>
          <p className="text-xs text-gray-400 mb-4">실제 서비스를 경험하신 고객님들의 100% 솔직한 리뷰</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reviews.map((rev, idx) => (
              <div key={idx} className="bg-[#141414] p-4 rounded-xl border border-white/5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-white">{rev.name}</span>
                  <span className="text-xs text-amber-400">{rev.rating}</span>
                </div>
                <p className="text-xs text-gray-300 mb-2">"{rev.content}"</p>
                <span className="text-[10px] text-gray-500">이용업체: {rev.shop}</span>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* 푸터 */}
      <footer className="bg-[#080808] border-t border-white/5 py-8 text-center text-gray-500 text-xs mt-auto">
        <p className="mb-2">경기건마사랑은 건전한 마사지/홈케어 문화를 지향합니다.</p>
        COPYRIGHT &copy; 경기건마사랑 ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}