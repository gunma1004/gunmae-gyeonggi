import Image from 'next/image'; // 👈 맨 위 최상단에 추가됨
import Link from 'next/link';

const shops = [
  {
    id: 1,
    name: "한국미인홈케어",
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
  suwon: { name: '수원시' }, seongnam: { name: '성남시' }, goyang: { name: '고양시' },
  yongin: { name: '용인시' }, bucheon: { name: '부천시' }, ansan: { name: '안산시' }, anyang: { name: '안양시' },
  siheung: { name: '시흥시' }, hwaseong: { name: '화성시' }, pyeongtaek: { name: '평택시' },
  uijeongbu: { name: '의정부시' }, paju: { name: '파주시' }, gimpo: { name: '김포시' }
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

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const districtKey = resolvedParams?.district;
  const rawLocation = resolvedParams?.location ? decodeURIComponent(resolvedParams.location) : '';
  
  const cityName = gyeonggiDistricts[districtKey]?.name || '경기도';
  const targetLocation = guNameMap[rawLocation] || rawLocation;
  const fullName = targetLocation ? `${cityName} ${targetLocation}` : cityName;

  return {
    title: `경기도 ${fullName} 출장마사지 | 24시 홈타이·스웨디시·후불제 가격안내`,
    description: `경기도 ${fullName} 출장마사지 추천. ${fullName} 오피스텔/자택 25분 내 빠른 방문, 정찰제 코스 가격표, 맛집·여행 가이드 및 이용 후기 제공.`,
    keywords: [`${fullName}출장마사지`, `${fullName}홈타이`, `${fullName}스웨디시`, `${targetLocation}마사지`, `경기건마사랑`],
    openGraph: {
      title: `경기도 ${fullName} 출장마사지 | 24시 홈타이`,
      description: `경기도 ${fullName} 전지역 24시 방문 후불제 출장마사지 추천.`,
      url: `https://gunmalove-gyeonggi.shop/${districtKey}/${rawLocation}`,
    },
    alternates: {
      canonical: `https://gunmalove-gyeonggi.shop/${districtKey}/${rawLocation}`,
    },
  };
}

export default async function LocationPage({ params }) {
  const resolvedParams = await params;
  const districtKey = resolvedParams.district;
  const rawLocation = decodeURIComponent(resolvedParams.location);
  
  const cityName = gyeonggiDistricts[districtKey]?.name || '';
  const targetLocation = guNameMap[rawLocation] || rawLocation;
  const fullLocationName = `${cityName} ${targetLocation}`;

  return (
    <div className="bg-[#0c0c0c] text-gray-200 min-h-screen flex flex-col pb-20">
      
      {/* 1. 헤더 */}
      <header className="sticky top-0 z-50 bg-[#0c0c0c]/90 backdrop-blur-md border-b border-white/10 px-4 py-3">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href={`/${districtKey}`} className="flex items-center gap-2.5">
            {/* ⭐️ 기존 <img> 태그를 <Image /> 컴포넌트로 변경 */}
            <Image 
              src="/logo.png" 
              alt="경기건마사랑 로고" 
              width={36}
              height={36}
              className="w-9 h-9 rounded-full object-cover border border-amber-500/40"
            />
            <span className="text-lg md:text-xl font-bold text-amber-400 tracking-tight">경기건마사랑 ({fullLocationName})</span>
          </Link>
          <Link href="/" className="text-xs text-gray-400 hover:text-amber-400 transition-colors">
            메인으로 &gt;
          </Link>
        </div>
      </header>

      {/* 2. 카테고리 앵커 네비게이션 */}
      <nav className="sticky top-[61px] z-40 bg-[#121212] border-b border-white/10 px-4 py-2 overflow-x-auto no-scrollbar">
        <div className="max-w-4xl mx-auto flex gap-2 whitespace-nowrap text-xs">
          <a href="#services" className="px-3.5 py-1.5 font-semibold rounded-full bg-amber-500 text-black">서비스</a>
          <a href="#prices" className="px-3.5 py-1.5 font-semibold rounded-full bg-white/5 text-gray-400 hover:text-white">가격안내</a>
          <a href="#travel" className="px-3.5 py-1.5 font-semibold rounded-full bg-white/5 text-gray-400 hover:text-white">{targetLocation} 여행</a>
          <a href="#food" className="px-3.5 py-1.5 font-semibold rounded-full bg-white/5 text-gray-400 hover:text-white">맛집·숙소</a>
          <a href="#qa" className="px-3.5 py-1.5 font-semibold rounded-full bg-white/5 text-gray-400 hover:text-white">Q&A</a>
          <a href="#reviews" className="px-3.5 py-1.5 font-semibold rounded-full bg-white/5 text-gray-400 hover:text-white">후기</a>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex-1 space-y-16">
        
        {/* 히어로 헤더 */}
        <section className="text-center">
          <div className="mb-6 overflow-hidden rounded-2xl border border-white/10 shadow-2xl relative">
            {/* ⭐️ 기존 <img> 태그를 <Image /> 컴포넌트로 변경 (priority 추가로 로딩 최적화) */}
            <Image 
              src="/banner.jpg" 
              alt="배너" 
              width={800}
              height={300}
              priority
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center pb-6">
              <p className="text-white text-sm md:text-lg font-semibold tracking-wide drop-shadow-md">
                ✨ 경기도 {fullLocationName} 전지역 25분 내 신속 방문
              </p>
            </div>
          </div>

          <h1 className="text-2xl md:text-4xl font-bold text-white mb-3">
            <span className="text-amber-400">경기도 {fullLocationName}</span> 24시 출장마사지
          </h1>
          <p className="text-gray-400 text-xs md:text-sm mb-6">
            {fullLocationName} 전지역 오피스텔 및 자택 24시간 연중무휴 100% 후불제 안심 케어
          </p>
        </section>

        {/* --- 섹션 1: 서비스 & 제휴업체 목록 --- */}
        <section id="services" className="scroll-mt-28">
          <div className="mb-4 border-b border-white/10 pb-2">
            <h2 className="text-lg md:text-xl font-bold text-white">🛍️ {fullLocationName} 추천 업체</h2>
            <p className="text-xs text-gray-400 mt-0.5">{fullLocationName} 전지역 신속 방문 제휴업체 목록</p>
          </div>

          <div className="space-y-6">
            {shops.map((shop) => (
              <article
                key={shop.id}
                className="bg-[#141414] border border-white/10 rounded-2xl p-5 md:p-6 shadow-xl hover:border-amber-500/50 transition-all group"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] bg-amber-500/20 text-amber-300 font-bold px-2 py-0.5 rounded-full border border-amber-500/30">
                        {shop.badge}
                      </span>
                      <span className="text-xs text-amber-400 font-bold">★ {shop.rating} ({shop.reviewCount})</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-amber-400 transition-colors">{shop.name}</h3>
                    <p className="text-xs text-amber-400/90 mt-0.5 font-medium">{fullLocationName} 및 인근 전지역 25분 내 도착</p>
                  </div>
                </div>

                <p className="text-xs text-gray-400 mb-4 bg-white/5 p-2.5 rounded-lg border border-white/5">{shop.desc}</p>

                <div className="bg-black/50 rounded-xl p-3.5 mb-5 space-y-2 border border-white/5">
                  {shop.courses.map((course, idx) => (
                    <div key={idx} className="flex justify-between text-xs items-center">
                      <span className="text-gray-300">{course.name}</span>
                      <span className="font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">{course.price}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${shop.phone}`}
                    className="flex items-center justify-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-black font-bold py-3.5 rounded-xl text-xs transition-all shadow-lg"
                  >
                    📞 전화 문의하기
                  </a>
                  <a
                    href={`sms:${shop.phone}?body=${encodeURIComponent(`[${fullLocationName} 출장마사지] ${shop.name} 문의드립니다.`)}`}
                    className="flex items-center justify-center gap-1.5 bg-white/5 hover:bg-white/10 text-white font-bold py-3.5 rounded-xl text-xs border border-white/10 transition-all"
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
          <h2 className="text-lg font-bold text-white mb-1">💰 {fullLocationName} 코스별 표준 가격표</h2>
          <p className="text-xs text-gray-400 mb-4">{fullLocationName} 방문 케어 정찰제 표준 가격안내</p>
          <div className="space-y-3">
            <div className="flex justify-between items-center bg-black/40 p-3 rounded-xl border border-white/5 text-xs">
              <div>
                <span className="font-bold text-white block">건식 타이 코스 (60분)</span>
                <span className="text-[11px] text-gray-400">전신 뭉친 근육 수동 집중 관리</span>
              </div>
              <span className="text-amber-400 font-bold text-sm">60,000원 ~</span>
            </div>
            <div className="flex justify-between items-center bg-black/40 p-3 rounded-xl border border-white/5 text-xs">
              <div>
                <span className="font-bold text-white block">아로마 오일 케어 (60분)</span>
                <span className="text-[11px] text-gray-400">최상급 천연 아로마 오일 심신 힐링</span>
              </div>
              <span className="text-amber-400 font-bold text-sm">70,000원 ~</span>
            </div>
            <div className="flex justify-between items-center bg-black/40 p-3 rounded-xl border border-white/5 text-xs">
              <div>
                <span className="font-bold text-white block">한국 스웨디시 / 센슈얼 (60분)</span>
                <span className="text-[11px] text-gray-400">부드럽고 섬세한 최고급 감성케어</span>
              </div>
              <span className="text-amber-400 font-bold text-sm">140,000원 ~</span>
            </div>
          </div>
        </section>

        {/* --- 섹션 3: 지역 여행 가이드 (SEO 최적화) --- */}
        <section id="travel" className="scroll-mt-28">
          <h2 className="text-lg font-bold text-white mb-1">🌲 {fullLocationName} 주변 힐링 추천 명소</h2>
          <p className="text-xs text-gray-400 mb-4">{fullLocationName} 인근 드라이브 및 휴식 공간</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#141414] p-4 rounded-xl border border-white/5">
              <span className="text-[10px] text-amber-400 font-semibold">#{fullLocationName} #산책로</span>
              <h3 className="text-sm font-bold text-white mt-1 mb-1">{fullLocationName} 도심 공원 및 산책길</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                일상의 스트레스를 풀기 좋은 {fullLocationName} 산책 코스를 둘러보고, 피로한 몸을 자택이나 오피스텔에서 출장마사지로 가볍게 풀어보세요.
              </p>
            </div>
            <div className="bg-[#141414] p-4 rounded-xl border border-white/5">
              <span className="text-[10px] text-amber-400 font-semibold">#{fullLocationName} #힐링코스</span>
              <h3 className="text-sm font-bold text-white mt-1 mb-1">{fullLocationName} 드라이브 핫플레이스</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {fullLocationName} 인근 주요 드라이브 코스 방문 후 하루를 완벽하게 마무리하는 24시 방문 홈케어 서비스입니다.
              </p>
            </div>
          </div>
        </section>

        {/* --- 섹션 4: 맛집 & 숙소 --- */}
        <section id="food" className="scroll-mt-28">
          <h2 className="text-lg font-bold text-white mb-1">🍽️ {fullLocationName} 맛집 & 숙소 팁</h2>
          <p className="text-xs text-gray-400 mb-4">{fullLocationName} 유동인구 추천 거점 케어 정보</p>
          <div className="bg-[#141414] p-4 rounded-xl border border-white/5">
            <span className="text-[10px] bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded font-bold">{fullLocationName} 연계</span>
            <h3 className="text-sm font-bold text-white mt-2 mb-1">{fullLocationName} 주요 상권 및 호텔/오피스텔 연계</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              {fullLocationName} 내 맛집 탐방 후 편안한 숙소 및 자택에서 이동 없이 편안하게 이용할 수 있도록 25분 내 빠른 방문 시스템을 제공합니다.
            </p>
          </div>
        </section>

        {/* --- 섹션 5: Q&A --- */}
        <section id="qa" className="scroll-mt-28">
          <h2 className="text-lg font-bold text-white mb-1">❓ {fullLocationName} Q&A (자주 묻는 질문)</h2>
          <p className="text-xs text-gray-400 mb-4">{fullLocationName} 이용 고객님들이 자주 묻는 질문</p>
          <div className="space-y-3">
            <div className="bg-[#141414] p-4 rounded-xl border border-white/5">
              <h3 className="text-xs font-bold text-amber-400 mb-1">Q. {fullLocationName} 어디든 방문이 가능한가요?</h3>
              <p className="text-xs text-gray-300 leading-relaxed">A. 네, {fullLocationName} 전지역 자택, 아파트, 오피스텔, 호텔 등 방문 가능한 장소라면 어디든 25분 내 빠르게 도착합니다.</p>
            </div>
            <div className="bg-[#141414] p-4 rounded-xl border border-white/5">
              <h3 className="text-xs font-bold text-amber-400 mb-1">Q. 예약금이나 선입금이 필요한가요?</h3>
              <p className="text-xs text-gray-300 leading-relaxed">A. 절대 없습니다! 경기건마사랑은 선입금 사기를 철저히 예방하며, 관리사 도착 후 직접 결제하시는 100% 후불제로 운영됩니다.</p>
            </div>
          </div>
        </section>

        {/* --- 섹션 6: 이용 후기 --- */}
        <section id="reviews" className="scroll-mt-28">
          <h2 className="text-lg font-bold text-white mb-1">💬 {fullLocationName} 생생 이용 후기</h2>
          <p className="text-xs text-gray-400 mb-4">{fullLocationName} 실제 이용 고객들의 솔직 리뷰</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#141414] p-4 rounded-xl border border-white/5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-white">박*훈 ({fullLocationName})</span>
                <span className="text-xs text-amber-400">★★★★★</span>
              </div>
              <p className="text-xs text-gray-300 mb-2">"{fullLocationName} 근처 오피스텔인데 20분 만에 오셨어요. 실력도 엄청 좋으시고 친절하십니다."</p>
              <span className="text-[10px] text-gray-500">이용업체: 한국미인홈케어</span>
            </div>
            <div className="bg-[#141414] p-4 rounded-xl border border-white/5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-white">김*성 ({fullLocationName})</span>
                <span className="text-xs text-amber-400">★★★★★</span>
              </div>
              <p className="text-xs text-gray-300 mb-2">"야근하고 밤늦게 신청했는데 진짜 후불제라 마음 편하게 서비스 잘 받았습니다."</p>
              <span className="text-[10px] text-gray-500">이용업체: 퀸즈 홈테라피</span>
            </div>
          </div>
        </section>

        {/* 하단 전체지역 목록 돌아가기 */}
        <section className="bg-[#111111] py-8 border border-white/10 mt-16 rounded-2xl text-center">
          <Link href={`/${districtKey}`} className="text-xs px-4 py-2.5 bg-amber-500/20 text-amber-300 rounded-lg border border-amber-500/30 font-bold inline-block hover:bg-amber-500/30 transition-all">
            &lt; {cityName} 전체 지역 보기
          </Link>
        </section>
      </main>

      <footer className="bg-[#080808] border-t border-white/5 py-8 text-center text-gray-500 text-xs mt-auto">
        COPYRIGHT &copy; 경기건마사랑 {fullLocationName} ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}