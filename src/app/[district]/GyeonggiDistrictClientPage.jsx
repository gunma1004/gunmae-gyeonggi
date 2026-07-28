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

// 경기도 주요 시/군/구 및 동 데이터
const gyeonggiDistricts = {
  suwon: { name: '수원시', gus: ['장안구', '권선구', '팔달구', '영통구'], dongs: ['인계동', '영통동', '매탄동', '권선동', '조원동'] },
  seongnam: { name: '성남시', gus: ['수정구', '중원구', '분당구'], dongs: ['분당동', '야탑동', '서현동', '판교동', '모란동'] },
  goyang: { name: '고양시', gus: ['덕양구', '일산동구', '일산서구'], dongs: ['일산동', '백석동', '주엽동', '화정동', '행신동'] },
  yongin: { name: '용인시', gus: ['처인구', '기흥구', '수지구'], dongs: ['기흥동', '수지동', '처인동', '동백동', '보정동'] },
  bucheon: { name: '부천시', gus: ['원미구', '소사구', '오정구'], dongs: ['중동', '상동', '심곡동', '원미동', '괴안동'] },
  ansan: { name: '안산시', gus: ['상록구', '단원구'], dongs: ['중앙동', '고잔동', '선부동', '상록수동', '초지도'] },
  anyang: { name: '안양시', gus: ['만안구', '동안구'], dongs: ['안양동', '평촌동', '호계동', '비산동', '관양동'] },
  namyangju: { name: '남양주시', gus: [], dongs: ['다산동', '별내동', '진접동', '화도읍', '평내동'] },
  hwaseong: { name: '화성시', gus: [], dongs: ['동탄동', '병점동', '향남읍', '봉담읍', '새솔동'] },
  pyeongtaek: { name: '평택시', gus: [], dongs: ['평택동', '비전동', '서정동', '안중읍', '팽성읍'] },
  uijeongbu: { name: '의정부시', gus: [], dongs: ['의정부동', '호원동', '신곡동', '민락동', '용현동'] },
  paju: { name: '파주시', gus: [], dongs: ['운정동', '금촌동', '문산읍', '야당동', '교하동'] },
  gimpo: { name: '김포시', gus: [], dongs: ['구래동', '장기동', '풍무동', '사우동', '운양동'] }
};

export default function GyeonggiDistrictClientPage({ districtKey }) {
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

  const currentName = districtInfo.name;
  const currentGus = districtInfo.gus || [];
  const currentDongs = districtInfo.dongs || [];

  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": `경기도 ${currentName}출장마사지 | 경기건마사랑`,
      "url": `https://gunmalove-gyeonggi.shop/${districtKey}`,
      "description": `경기도 ${currentName}출장마사지 전문. ${currentGus.join(', ')} ${currentDongs.join(', ')} 24시 후불제 출장케어.`
    }
  ];

  return (
    <div className="text-gray-200 min-h-screen flex flex-col bg-[#0c0c0c] pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }} />

      <header className="sticky top-0 z-50 bg-[#0c0c0c]/90 backdrop-blur-md border-b border-white/10 px-4 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-amber-400">경기건마사랑 ({currentName})</a>
          <a href="/" className="text-xs text-gray-400 hover:text-amber-400">메인으로 가기 &gt;</a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex-1">
        <section className="text-center my-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
            <span className="text-amber-400">경기도 {currentName} 24시</span><br />출장마사지 추천 업체
          </h1>
          <p className="text-gray-400 text-sm md:text-base mb-4">{currentName} 전지역 25분 내 빠르게 도착합니다.</p>

          {/* ⭐️ 상단 영역에도 구 배지 리스트 배치 */}
          {currentGus.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 my-4">
              {currentGus.map((gu) => (
                <span key={gu} className="text-xs px-3 py-1 bg-amber-500/20 text-amber-300 font-bold rounded-full border border-amber-500/30">
                  {currentName} {gu}
                </span>
              ))}
            </div>
          )}
        </section>

        {/* 5개 업체 카드 */}
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
                  <p className="text-xs text-amber-400 mt-1">{currentName} 및 {shop.location}</p>
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
                  href={`sms:${shop.phone}?body=${encodeURIComponent(`[${currentName}] ${shop.name} 문의드립니다.`)}`}
                  className="flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded-xl text-xs border border-white/10 transition-colors"
                >
                  💬 문자 예약하기
                </a>
              </div>
            </article>
          ))}
        </section>

        {/* 하단 키워드 섹션 (구 및 동 키워드 무조건 노출) */}
        <section className="bg-[#080808] p-6 rounded-2xl border border-white/5 mt-12">
          {currentGus.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-bold text-amber-400 mb-3">{currentName} 구별 바로가기</h3>
              <div className="flex flex-wrap gap-2">
                {currentGus.map((gu) => (
                  <span key={gu} className="text-xs px-3 py-1.5 bg-amber-500/10 text-amber-300 rounded-lg border border-amber-500/20 font-bold">
                    경기도 {currentName} {gu}출장마사지
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mb-6">
            <h3 className="text-sm font-bold text-gray-400 mb-3">{currentName} 주요 동 바로가기</h3>
            <div className="flex flex-wrap gap-2">
              {currentDongs.map((dong) => (
                <span key={dong} className="text-xs px-3 py-1.5 bg-white/5 rounded-lg text-gray-400 border border-white/5">
                  {currentName} {dong}출장마사지
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-400 mb-3">경기도 다른 지역 바로가기</h3>
            <div className="flex flex-wrap gap-3">
              {Object.entries(gyeonggiDistricts).map(([key, data]) => (
                <a key={key} href={`/${key}`} className="text-xs text-gray-500 hover:text-amber-500 transition-colors">
                  경기도 {data.name}출장마사지
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#080808] border-t border-white/5 py-8 text-center text-gray-500 text-xs mt-auto">
        COPYRIGHT &copy; 경기건마사랑 {currentName} ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}