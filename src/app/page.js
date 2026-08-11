"use client";
import Image from 'next/image'; // 👈 맨 위에 추가!
import { useState } from "react";
import { useRouter } from "next/navigation";

// --- 데이터 정의 ---
const categoryTabs = [
  { id: "services", label: "서비스" },
  { id: "prices", label: "가격안내" },
  { id: "travel", label: "경기여행" },
  { id: "food-stay", label: "맛집·숙소" },
  { id: "districts", label: "지역안내" },
  { id: "qa", label: "Q&A" },
  { id: "reviews", label: "후기" },
];

const shops = [
  {
    id: 1,
    name: "한국미인홈케어",
    location: "경기 전지역 (수원/성남/용인 중심)",
    desc: "24시 정성 가득한 타이 & 아로마 전문 힐링 케어",
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
  }
];

const gyeonggiDistricts = {
  suwon: { name: '수원시' }, seongnam: { name: '성남시' }, goyang: { name: '고양시' },
  yongin: { name: '용인시' }, bucheon: { name: '부천시' }, ansan: { name: '안산시' },
  anyang: { name: '안양시' }, namyangju: { name: '남양주시' }, hwaseong: { name: '화성시' },
  pyeongtaek: { name: '평택시' }, uijeongbu: { name: '의정부시' }, paju: { name: '파주시' },
  gimpo: { name: '김포시' }, siheung: { name: '시흥시' }, gwangmyeong: { name: '광명시' }
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
            <img 
              src="/logo.png" 
              alt="경기건마사랑 로고" 
              className="w-9 h-9 rounded-full object-cover border border-amber-500/40"
            />
            <span className="text-xl font-bold text-amber-400">경기건마사랑</span>
          </a>
          <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-medium">
            🔥 100% 후불제 안심 케어
          </span>
        </div>
      </header>

      {/* 2. 카테고리 네비게이션 탭 (CTR & UX 향상) */}
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
            <img 
              src="/banner.jpg" 
              alt="경기건마사랑 대표 배너" 
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
            검증된 정갈한 코스와 합리적인 가격, 실제 이용 고객 후기까지 한눈에 확인해보세요.
          </p>

          {/* 지역 셀렉트 박스 */}
          <div className="bg-[#161616] border border-amber-500/30 p-3.5 rounded-2xl max-w-sm mx-auto shadow-xl">
            <div className="text-left bg-black/50 p-2.5 rounded-xl border border-white/5">
              <label htmlFor="district-select" className="text-[10px] text-amber-400 font-bold block mb-1 uppercase tracking-wider">
                📍 빠른 내 주변 지역 선택
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

        {/* --- 섹션 1: 서비스 & 제휴업체 목록 --- */}
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

        {/* --- 섹션 3: 경기 여행 가이드 (SEO 강화) --- */}
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

        {/* --- 섹션 5: 지역 안내 (네비게이션 링크) --- */}
        <section id="districts" className="scroll-mt-28 bg-[#080808] p-5 rounded-2xl border border-white/5">
          <h2 className="text-sm font-bold text-amber-400 mb-1">📍 경기도 지역별 바로가기</h2>
          <p className="text-xs text-gray-500 mb-4">원하시는 지역을 클릭하시면 해당 지역 정보 페이지로 이동합니다.</p>
          <div className="flex flex-wrap gap-2">
            {Object.entries(gyeonggiDistricts).map(([key, data]) => (
              <a
                key={key}
                href={`/${key}`}
                className="text-xs px-3 py-1.5 bg-white/5 hover:bg-amber-500/20 hover:text-amber-300 rounded-lg text-gray-300 border border-white/5 transition-all"
              >
                {data.name}
              </a>
            ))}
          </div>
        </section>

        {/* --- 섹션 6: Q&A (FAQ) --- */}
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