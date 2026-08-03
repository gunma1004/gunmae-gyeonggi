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

export default function GyeonggiDongClientPage({ districtKey, dongName }) {
  const districtData = gyeonggiDistricts[districtKey];
  const cityName = districtData?.name || '경기도';

  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": `경기도 ${cityName} ${dongName} 출장마사지 | 경기건마사랑`,
      "url": `https://gunmalove-gyeonggi.shop/${districtKey}/${dongName}`,
      "description": `경기도 ${cityName} ${dongName} 출장마사지 전문. 24시 방문 힐링 케어 및 후불제 이용 안내.`
    }
  ];

  return (
    <div className="text-gray-200 min-h-screen flex flex-col bg-[#0c0c0c] pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }} />

      <header className="sticky top-0 z-50 bg-[#0c0c0c]/90 backdrop-blur-md border-b border-white/10 px-4 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <a href={`/${districtKey}`} className="text-xl font-bold text-amber-400">경기건마사랑 ({cityName} {dongName})</a>
          <a href="/" className="text-xs text-gray-400 hover:text-amber-400">메인으로 가기 &gt;</a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex-1">
        <section className="text-center my-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
            <span className="text-amber-400">경기도 {cityName} {dongName}</span><br />24시 출장마사지 추천
          </h1>
          <p className="text-gray-400 text-sm md:text-base mb-4">{cityName} {dongName} 전지역 오피스텔 및 자택 25분 내 신속 방문!</p>
        </section>

        {/* 5개 업체 카드 목록 */}
        <section className="space-y-6 mt-8">
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
                  <p className="text-xs text-amber-400 mt-1">{cityName} {dongName} 및 인근 전지역</p>
                </div>
              </div>

              <p className="text-xs text-gray-400 mb-4">{shop.desc}</p>

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
                  className="flex items-center justify-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 rounded-xl text-xs transition-colors"
                >
                  📞 전화 문의하기
                </a>
                <a
                  href={`sms:${shop.phone}?body=${encodeURIComponent(`[${cityName} ${dongName} 출장마사지] ${shop.name} 문의드립니다.`)}`}
                  className="flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded-xl text-xs border border-white/10 transition-colors"
                >
                  💬 문자 예약하기
                </a>
              </div>
            </article>
          ))}
        </section>

        <section className="bg-[#080808] p-6 rounded-2xl border border-white/5 mt-12">
          <h3 className="text-sm font-bold text-amber-400 mb-3">다른 경기도 지역 바로가기</h3>
          <div className="flex flex-wrap gap-3">
            {Object.entries(gyeonggiDistricts).map(([key, data]) => (
              <a key={key} href={`/${key}`} className="text-xs text-gray-500 hover:text-amber-500 transition-colors">
                경기도 {data.name} 출장마사지
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-[#080808] border-t border-white/5 py-8 text-center text-gray-500 text-xs mt-auto">
        COPYRIGHT &copy; 경기건마사랑 {cityName} {dongName} ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}