import Link from 'next/link';

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
  suwon: { name: '수원시' }, seongnam: { name: '성남시' }, goyang: { name: '고양시' },
  yongin: { name: '용인시' }, bucheon: { name: '부천시' }, ansan: { name: '안산시' }, anyang: { name: '안양시' }
};

// 영문 구 key를 한글 구 이름으로 변환해 주는 사전
const guNameMap = {
  jangan: '장안구', gwonseon: '권선구', paldal: '팔달구', yeongtong: '영통구',
  sujeong: '수정구', jungwon: '중원구', bundang: '분당구',
  deogyang: '덕양구', ilsandong: '일산동구', ilsanseo: '일산서구',
  cheoin: '처인구', giheung: '기흥구', suji: '수지구',
  wonmi: '원미구', sosa: '소사구', ojeong: '오정구',
  sangrok: '상록구', danwon: '단원구',
  manan: '만안구', dongan: '동안구'
};

export default async function LocationPage({ params }) {
  const resolvedParams = await params;
  const districtKey = resolvedParams.district;
  const rawLocation = decodeURIComponent(resolvedParams.location);
  
  const cityName = gyeonggiDistricts[districtKey]?.name || '경기도';
  const locationName = guNameMap[rawLocation] ? `${guNameMap[rawLocation]}` : rawLocation;

  return (
    <div className="text-gray-200 min-h-screen flex flex-col bg-[#0c0c0c] pb-20">
      {/* 상단 헤더 (로고 이미지 추가) */}
      <header className="sticky top-0 z-50 bg-[#0c0c0c]/90 backdrop-blur-md border-b border-white/10 px-4 py-3">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href={`/${districtKey}`} className="flex items-center gap-2.5">
            <img 
              src="/logo.png" 
              alt="경기건마사랑 로고" 
              className="w-9 h-9 rounded-full object-cover border border-amber-500/40"
            />
            <span className="text-lg font-bold text-amber-400">경기건마사랑 ({cityName} {locationName})</span>
          </Link>
          <Link href="/" className="text-xs text-gray-400 hover:text-amber-400">
            메인으로 가기 &gt;
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex-1">
        <section className="text-center my-6">
          {/* 타이틀 위 마사지 힐링 배너 이미지 추가 */}
          <div className="mb-6 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <img 
              src="/massage-banner.jpg" 
              alt="프리미엄 24시 출장마사지 힐링" 
              className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
            <span className="text-amber-400">경기도 {cityName} {locationName}</span><br />24시 출장마사지 추천
          </h1>
          <p className="text-gray-400 text-sm md:text-base mb-4">{cityName} {locationName} 전지역 오피스텔 및 자택 25분 내 신속 방문!</p>
        </section>

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
                  <p className="text-xs text-amber-400 mt-1">{cityName} {locationName} 및 인근 전지역</p>
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
                  href={`sms:${shop.phone}?body=${encodeURIComponent(`[${cityName} ${locationName} 출장마사지] ${shop.name} 문의드립니다.`)}`}
                  className="flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded-xl text-xs border border-white/10 transition-colors"
                >
                  💬 문자 예약하기
                </a>
              </div>
            </article>
          ))}
        </section>

        <section className="bg-[#080808] p-6 rounded-2xl border border-white/5 mt-12 text-center">
          <Link href={`/${districtKey}`} className="text-xs px-4 py-2 bg-amber-500/20 text-amber-300 rounded-lg border border-amber-500/30 font-bold inline-block">
            &lt; {cityName} 전체 지역 보기
          </Link>
        </section>
      </main>

      <footer className="bg-[#080808] border-t border-white/5 py-8 text-center text-gray-500 text-xs mt-auto">
        COPYRIGHT &copy; 경기건마사랑 {cityName} {locationName} ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}