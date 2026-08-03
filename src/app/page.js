"use client";

// 5개 제휴 업체 데이터
const shops = [
  {
    id: 1,
    name: "한국미인홈케어",
    location: "경기 전지역",
    desc: "24시 정성 가득한 타이 & 아로마 전문 케어",
    phone: "0507-1280-3324",
    badge: "추천업체",
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
    courses: [
      { name: "타이 코스 (60분)", price: "60,000원" },
      { name: "스웨디시 코스 (60분)", price: "140,000원" },
    ]
  }
];

// 경기도 31개 전체 시·군·구·동 데이터
const gyeonggiDistricts = {
  suwon: { 
    name: '수원시', 
    gus: [
      { name: '장안구', key: 'jangan' },
      { name: '권선구', key: 'gwonseon' },
      { name: '팔달구', key: 'paldal' },
      { name: '영통구', key: 'yeongtong' }
    ] 
  },
  seongnam: { 
    name: '성남시', 
    gus: [
      { name: '수정구', key: 'sujeong' },
      { name: '중원구', key: 'jungwon' },
      { name: '분당구', key: 'bundang' }
    ] 
  },
  goyang: { 
    name: '고양시', 
    gus: [
      { name: '덕양구', key: 'deogyang' },
      { name: '일산동구', key: 'ilsandong' },
      { name: '일산서구', key: 'ilsanseo' }
    ] 
  },
  yongin: { 
    name: '용인시', 
    gus: [
      { name: '처인구', key: 'cheoin' },
      { name: '기흥구', key: 'giheung' },
      { name: '수지구', key: 'suji' }
    ] 
  },
  bucheon: { 
    name: '부천시', 
    gus: [
      { name: '원미구', key: 'wonmi' },
      { name: '소사구', key: 'sosa' },
      { name: '오정구', key: 'ojeong' }
    ] 
  },
  ansan: { 
    name: '안산시', 
    gus: [
      { name: '상록구', key: 'sangrok' },
      { name: '단원구', key: 'danwon' }
    ] 
  },
  anyang: { 
    name: '안양시', 
    gus: [
      { name: '만안구', key: 'manan' },
      { name: '동안구', key: 'dongan' }
    ] 
  },
  namyangju: { name: '남양주시', gus: [] },
  hwaseong: { name: '화성시', gus: [] },
  pyeongtaek: { name: '평택시', gus: [] },
  uijeongbu: { name: '의정부시', gus: [] },
  paju: { name: '파주시', gus: [] },
  gimpo: { name: '김포시', gus: [] },
  siheung: { name: '시흥시', gus: [] },
  gwangmyeong: { name: '광명시', gus: [] },
  gwangju: { name: '광주시', gus: [] },
  gunpo: { name: '군포시', gus: [] },
  osan: { name: '오산시', gus: [] },
  icheon: { name: '이천시', gus: [] },
  yangju: { name: '양주시', gus: [] },
  guri: { name: '구리시', gus: [] },
  anseong: { name: '안성시', gus: [] },
  pocheon: { name: '포천시', gus: [] },
  uiwang: { name: '의왕시', gus: [] },
  hanam: { name: '하남시', gus: [] },
  yeoju: { name: '여주시', gus: [] },
  yangpyeong: { name: '양평군', gus: [] },
  dongducheon: { name: '동두천시', gus: [] },
  gapyeong: { name: '가평군', gus: [] },
  gwacheon: { name: '과천시', gus: [] },
  yeoncheon: { name: '연천군', gus: [] }
};

export default function GyeonggiMainPage() {
  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "경기건마사랑 | 경기도출장마사지",
      "url": "https://gunmalove-gyeonggi.shop/",
      "description": "경기건마사랑 경기도출장마사지 추천. 수원, 성남, 분당, 일산, 용인, 화성 등 24시간 방문 후불제 출장마사지."
    }
  ];

  const handleDistrictChange = (e) => {
    if (e.target.value) window.location.href = `/${e.target.value}`;
  };

  return (
    <div className="bg-[#0c0c0c] text-gray-200 min-h-screen flex flex-col pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* 상단 헤더 */}
      <header className="sticky top-0 z-50 bg-[#0c0c0c]/90 backdrop-blur-md border-b border-white/10 px-4 py-3">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <a href="/" className="flex items-center gap-2.5">
            <img 
              src="/logo.png" 
              alt="경기건마사랑 로고" 
              className="w-9 h-9 rounded-full object-cover border border-amber-500/40"
            />
            <span className="text-xl font-bold text-amber-400 tracking-tight">경기건마사랑</span>
          </a>
          <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-medium">
            🔥 24시 연중무휴 후불제
          </span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex-1">
        {/* 메인 상단 배너 이미지 영역 */}
        <section className="text-center my-4">
          <div className="mb-6 overflow-hidden rounded-2xl border border-white/10 shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop" 
              alt="프리미엄 24시 출장마사지 힐링" 
              className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center pb-6">
              <p className="text-white text-sm md:text-lg font-semibold tracking-wide drop-shadow-md">
                ✨ 경기 전지역 25분 내 신속 방문 홈타이 서비스
              </p>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
            <span className="text-amber-400">경기건마사랑</span> 제휴 업체
          </h1>
          <p className="text-gray-400 text-sm md:text-base mb-6">
            엄선된 경기도 주요 지역 추천 업체의 코스 및 연락처를 확인하세요.
          </p>

          {/* 지역 선택 드롭다운 박스 */}
          <div className="bg-[#161616] border border-amber-500/30 p-4 rounded-2xl max-w-sm mx-auto mb-12 shadow-xl shadow-amber-500/5">
            <div className="text-left bg-black/40 p-3 rounded-xl border border-white/5">
              <label className="text-[11px] text-amber-400 font-bold block mb-1.5 uppercase tracking-wider">📍 우리 동네 지역 선택하기</label>
              <select onChange={handleDistrictChange} className="bg-transparent text-sm text-white w-full outline-none cursor-pointer font-medium" defaultValue="">
                <option value="" disabled className="bg-[#1e1e1e] text-gray-400">지역을 선택해주세요</option>
                {Object.keys(gyeonggiDistricts).map((key) => (
                  <option key={key} value={key} className="bg-[#1e1e1e] text-white">{gyeonggiDistricts[key].name}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* 제휴 업체 목록 */}
        <section className="space-y-6">
          {shops.map((shop) => (
            <article
              key={shop.id}
              className="bg-[#141414] border border-white/10 rounded-2xl p-5 md:p-6 shadow-xl hover:border-amber-500/50 transition-all group"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="inline-block text-[10px] bg-amber-500/20 text-amber-300 font-bold px-2.5 py-0.5 rounded-full mr-2 border border-amber-500/30">
                    {shop.badge}
                  </span>
                  <h2 className="text-xl font-bold text-white inline-block group-hover:text-amber-400 transition-colors">{shop.name}</h2>
                  <p className="text-xs text-amber-400/90 mt-1 font-medium">{shop.location}</p>
                </div>
              </div>

              <p className="text-xs text-gray-400 mb-4 leading-relaxed">{shop.desc}</p>

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
                  className="flex items-center justify-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-black font-bold py-3.5 rounded-xl text-xs transition-all shadow-lg shadow-amber-500/10"
                >
                  📞 전화 문의하기
                </a>
                <a
                  href={`sms:${shop.phone}?body=${encodeURIComponent(`${shop.name} 문의드립니다.`)}`}
                  className="flex items-center justify-center gap-1.5 bg-white/5 hover:bg-white/10 text-white font-bold py-3.5 rounded-xl text-xs border border-white/10 transition-all"
                >
                  💬 문자 예약하기
                </a>
              </div>
            </article>
          ))}
        </section>

        {/* 하단 전체 시·군·구 바로가기 섹션 */}
        <section className="bg-[#111111] py-8 border border-white/10 mt-16 rounded-2xl p-6 shadow-xl">
          <h3 className="text-xs font-bold text-amber-400 mb-3 uppercase tracking-wider">⚡ 경기도 주요 행정구(區) 바로가기</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {Object.entries(gyeonggiDistricts).map(([key, data]) =>
              data.gus.map((gu) => (
                <a
                  key={`${key}-${gu.key}`}
                  href={`/${key}/${gu.key}`}
                  className="text-xs px-3.5 py-2 bg-amber-500/10 text-amber-300 rounded-xl border border-amber-500/20 font-bold hover:bg-amber-500 hover:text-black transition-all"
                >
                  경기도 {data.name} {gu.name}
                </a>
              ))
            )}
          </div>

          <h3 className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">🏙️ 경기도 전체 시·군 바로가기</h3>
          <div className="flex flex-wrap gap-2.5">
            {Object.entries(gyeonggiDistricts).map(([id, data]) => (
              <a key={id} href={`/${id}`} className="text-xs text-gray-400 hover:text-amber-400 bg-black/40 px-3 py-1.5 rounded-lg border border-white/5 transition-all">
                경기도 {data.name}
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-[#080808] border-t border-white/5 py-8 text-center text-gray-500 text-xs mt-auto">
        COPYRIGHT &copy; 경기건마사랑 ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}