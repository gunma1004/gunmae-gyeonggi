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

// ⭐️ 경기도 시/구 매핑 객체
const gyeonggiDistricts = {
  suwon: { name: '수원시', gus: { jangan: '장안구', gwonseon: '권선구', paldal: '팔달구', yeongtong: '영통구' } },
  seongnam: { name: '성남시', gus: { sujeong: '수정구', jungwon: '중원구', bundang: '분당구' } },
  goyang: { name: '고양시', gus: { deogyang: '덕양구', ilsandong: '일산동구', ilsanseo: '일산서구' } },
  yongin: { name: '용인시', gus: { cheoin: '처인구', giheung: '기흥구', suji: '수지구' } },
  bucheon: { name: '부천시', gus: { wonmi: '원미구', sosa: '소사구', ojeong: '오정구' } },
  ansan: { name: '안산시', gus: { sangrok: '상록구', danwon: '단원구' } },
  anyang: { name: '안양시', gus: { manan: '만안구', dongan: '동안구' } }
};

// ⭐️ 1. 검색엔진(SEO) 메타데이터 생성 함수 (한글 매핑)
export async function generateMetadata({ params }) {
  const { district, gu } = await params;
  const districtInfo = gyeonggiDistricts[district];
  const cityName = districtInfo?.name || district;
  const guName = districtInfo?.gus?.[gu] || gu;

  return {
    title: `경기도 ${cityName} ${guName} 출장마사지 24시 홈케어 추천 | 경기건마사랑`,
    description: `경기도 ${cityName} ${guName} 전지역 25분 내 빠른 방문! 타이, 아로마, 스웨디시 24시 후불제 출장마사지.`,
    openGraph: {
      title: `경기도 ${cityName} ${guName} 출장마사지`,
      description: `경기도 ${cityName} ${guName} 24시 안심 출장케어.`,
    },
  };
}

// ⭐️ 2. 메인 화면 컴포넌트
export default async function GyeonggiGuPage({ params }) {
  const { district, gu } = await params;
  const districtInfo = gyeonggiDistricts[district];
  const guName = districtInfo?.gus?.[gu];

  if (!districtInfo || !guName) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0c0c0c] text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-amber-500 mb-4">404</h1>
          <p>존재하지 않는 구 구역입니다.</p>
          <a href="/" className="mt-4 inline-block px-6 py-2 bg-amber-500 text-black rounded-full text-xs font-bold">메인으로 돌아가기</a>
        </div>
      </div>
    );
  }

  const cityName = districtInfo.name;

  return (
    <div className="text-gray-200 min-h-screen flex flex-col bg-[#0c0c0c] pb-20">
      <header className="sticky top-0 z-50 bg-[#0c0c0c]/90 backdrop-blur-md border-b border-white/10 px-4 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-amber-400">경기건마사랑 ({cityName} {guName})</a>
          <a href={`/${district}`} className="text-xs text-gray-400 hover:text-amber-400">{cityName} 전체보기 &gt;</a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex-1">
        <section className="text-center my-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
            <span className="text-amber-400">경기도 {cityName} {guName} 24시</span><br />출장마사지 추천 업체
          </h1>
          <p className="text-gray-400 text-sm md:text-base">{cityName} {guName} 전지역 25분 내 빠르게 도착합니다.</p>
        </section>

        <section className="space-y-6 mt-8">
          {shops.map((shop) => (
            <article key={shop.id} className="bg-[#141414] border border-white/10 rounded-2xl p-5 md:p-6 shadow-lg hover:border-amber-500/40 transition-all">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="inline-block text-[10px] bg-amber-500/20 text-amber-300 font-bold px-2 py-0.5 rounded mr-2">{shop.badge}</span>
                  <h2 className="text-xl font-bold text-white inline-block">{shop.name}</h2>
                  <p className="text-xs text-amber-400 mt-1">{cityName} {guName} 전지역 출장 가능</p>
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
                <a href={`tel:${shop.phone}`} className="flex items-center justify-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 rounded-xl text-xs transition-colors">
                  📞 전화 문의하기
                </a>
                <a href={`sms:${shop.phone}?body=${encodeURIComponent(`[${cityName} ${guName}] ${shop.name} 문의드립니다.`)}`} className="flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded-xl text-xs border border-white/10 transition-colors">
                  💬 문자 예약하기
                </a>
              </div>
            </article>
          ))}
        </section>
      </main>

      <footer className="bg-[#080808] border-t border-white/5 py-8 text-center text-gray-500 text-xs mt-auto">
        COPYRIGHT &copy; 경기건마사랑 {cityName} {guName} ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}