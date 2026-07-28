"use client";

// ⭐️ 1. 제휴 5개 업체 데이터 (안심번호 적용)
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

// ⭐️ 2. 경기도 시·군 및 행정구(區) 완벽 반영
const gyeonggiDistricts = {
  suwon: { name: '수원시', gus: ['장안구', '권선구', '팔달구', '영통구'] },
  seongnam: { name: '성남시', gus: ['수정구', '중원구', '분당구'] },
  goyang: { name: '고양시', gus: ['덕양구', '일산동구', '일산서구'] },
  yongin: { name: '용인시', gus: ['처인구', '기흥구', '수지구'] },
  bucheon: { name: '부천시', gus: ['원미구', '소사구', '오정구'] },
  ansan: { name: '안산시', gus: ['상록구', '단원구'] },
  anyang: { name: '안양시', gus: ['만안구', '동안구'] },
  namyangju: { name: '남양주시', gus: [] },
  hwaseong: { name: '화성시', gus: [] },
  pyeongtaek: { name: '평택시', gus: [] },
  uijeongbu: { name: '의정부시', gus: [] },
  paju: { name: '파주시', gus: [] },
  gimpo: { name: '김포시', gus: [] }
};

export default function GyeonggiMainPage() {
  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "경기건마사랑 | 경기도출장마사지",
      "url": "https://gunmalove-gyeonggi.shop/",
      "description": "경기건마사랑 경기도출장마사지 추천. 수원, 성남, 분당, 일산, 용인 등 24시간 방문 후불제 출장마사지."
    }
  ];

  const handleDistrictChange = (e) => {
    if (e.target.value) window.location.href = `/${e.target.value}`;
  };

  return (
    <div className="bg-[#0c0c0c] text-gray-200 min-h-screen flex flex-col pb-20">
      {/* SEO 구조화 데이터 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* ⭐️ 네이버 로봇 전용 숨김 영역 (시/구 키워드 우회 수집) */}
      <div className="sr-only" aria-hidden="true">
        <ul>
          {Object.entries(gyeonggiDistricts).map(([key, data]) => (
            <li key={key}>
              <a href={`/${key}`}>
                <strong>경기도 {data.name}출장마사지</strong>
              </a>
              {data.gus.length > 0 && (
                <ul>
                  {data.gus.map((gu) => (
                    <li key={gu}>
                      <a href={`/${key}`}>
                        <strong>경기도 {data.name} {gu}출장마사지</strong>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* 상단 헤더 */}
      <header className="sticky top-0 z-50 bg-[#0c0c0c]/90 backdrop-blur-md border-b border-white/10 px-4 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-amber-400 tracking-tight">
            경기건마사랑
          </a>
          <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
            경기 전지역 24시
          </span>
        </div>
      </header>

      {/* 메인 히어로 */}
      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex-1">
        <section className="text-center my-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
            <span className="text-amber-400">경기건마사랑</span> 제휴 업체
          </h1>
          <p className="text-gray-400 text-sm md:text-base mb-6">
            엄선된 경기도 주요 지역 추천 업체의 코스 및 연락처를 확인하세요.
          </p>

          {/* 동네 선택 셀렉트 박스 */}
          <div className="bg-[#1e1e1e]/85 backdrop-blur-md border border-white/10 p-4 rounded-2xl max-w-sm mx-auto mb-10">
            <div className="text-left bg-white/5 p-3 rounded-xl border border-white/5">
              <label className="text-[10px] text-amber-400 font-bold block mb-1 uppercase">우리 동네 지역 선택하기</label>
              <select onChange={handleDistrictChange} className="bg-transparent text-sm text-white w-full outline-none cursor-pointer" defaultValue="">
                <option value="" disabled className="bg-[#1e1e1e]">지역을 선택해주세요</option>
                {Object.keys(gyeonggiDistricts).map((key) => (
                  <option key={key} value={key} className="bg-[#1e1e1e]">{gyeonggiDistricts[key].name}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* 5개 업체 카드 목록 */}
        <section className="space-y-6">
          {shops.map((shop) => (
            <article
              key={shop.id}
              className="bg-[#141414] border border-white/10 rounded-2xl p-5 md:p-6 shadow-lg hover:border-amber-500/40 transition-all"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="inline-block text-[10px] bg-amber-500/20 text-amber-300 font-bold px-2 py-0.5 rounded mr-2">
                    {shop.badge}
                  </span>
                  <h2 className="text-xl font-bold text-white inline-block">{shop.name}</h2>
                  <p className="text-xs text-amber-400 mt-1">{shop.location}</p>
                </div>
              </div>

              <p className="text-xs text-gray-400 mb-4">{shop.desc}</p>

              {/* 요금표 */}
              <div className="bg-black/40 rounded-xl p-3 mb-4 space-y-1.5 border border-white/5">
                {shop.courses.map((course, idx) => (
                  <div key={idx} className="flex justify-between text-xs">
                    <span className="text-gray-300">{course.name}</span>
                    <span className="font-bold text-amber-400">{course.price}</span>
                  </div>
                ))}
              </div>

              {/* 전화하기 / 문자하기 버튼 */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${shop.phone}`}
                  className="flex items-center justify-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 rounded-xl text-xs transition-colors"
                >
                  📞 전화 문의하기
                </a>
                <a
                  href={`sms:${shop.phone}?body=${encodeURIComponent(`${shop.name} 문의드립니다.`)}`}
                  className="flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded-xl text-xs border border-white/10 transition-colors"
                >
                  💬 문자 예약하기
                </a>
              </div>
            </article>
          ))}
        </section>

        {/* 하단 도시 태그 */}
        <section className="bg-[#080808] py-8 border-t border-white/5 mt-12 rounded-2xl p-6">
          <h3 className="text-sm font-bold text-gray-400 mb-4">경기도 주요 도시 출장마사지 바로가기</h3>
          <div className="flex flex-wrap gap-3">
            {Object.entries(gyeonggiDistricts).map(([id, data]) => (
              <a key={id} href={`/${id}`} className="text-xs text-gray-400 hover:text-amber-500 transition-colors">
                경기도 {data.name}출장마사지
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