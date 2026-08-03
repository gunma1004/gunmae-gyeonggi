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
  suwon: { name: '수원시', dongs: ['인계동', '영통동', '매탄동', '권선동', '조원동', '정자동', '파장동', '이의동', '원천동', '매교동'] },
  seongnam: { name: '성남시', dongs: ['분당동', '야탑동', '서현동', '판교동', '모란동', '수내동', '정자동', '이매동', '태평동', '신흥동'] },
  goyang: { name: '고양시', dongs: ['일산동', '백석동', '주엽동', '화정동', '행신동', '정발산동', '마두동', '대화동', '탄현동', '원당동'] },
  yongin: { name: '용인시', dongs: ['기흥동', '수지동', '처인동', '동백동', '보정동', '풍덕천동', '죽전동', '상갈동', '신갈동', '역북동'] },
  bucheon: { name: '부천시', dongs: ['중동', '상동', '심곡동', '원미동', '괴안동', '역곡동', '소사본동', '범박동', '오정동', '고강동'] },
  ansan: { name: '안산시', dongs: ['중앙동', '고잔동', '선부동', '상록수동', '초지도', '본오동', '사동', '월피동', '와동'] },
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
  gwacheon: { name: ' 과천시', dongs: ['별양동', '중앙동', '문원동', '갈현동', '부림동', '과천동', '원문동'] },
  yeoncheon: { name: '연천군', dongs: ['연천읍', '전곡읍', '군남면', '청산면', '미산면', '왕징면', '신서면', '중면', '장남면'] }
};

export async function generateStaticParams() {
  const paths = [];
  for (const [districtKey, data] of Object.entries(gyeonggiDistricts)) {
    if (data.dongs) {
      for (const dong of data.dongs) {
        paths.push({
          district: districtKey,
          dong: dong,
        });
      }
    }
  }
  return paths;
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const districtKey = resolvedParams.district;
  const dongName = decodeURIComponent(resolvedParams.dong);
  const districtData = gyeonggiDistricts[districtKey];
  const cityName = districtData?.name || '경기도';

  return {
    title: `경기도 ${cityName} ${dongName}출장마사지 | 24시 홈타이·스웨디시·아로마 추천`,
    description: `경기도 ${cityName} ${dongName} 출장마사지 전문. 25분 내 신속 방문, 24시 친절 상담 및 후불제 홈케어 서비스.`,
  };
}

export default async function DongPage({ params }) {
  const resolvedParams = await params;
  const districtKey = resolvedParams.district;
  const dongName = decodeURIComponent(resolvedParams.dong);
  
  const districtData = gyeonggiDistricts[districtKey];
  const cityName = districtData?.name || '경기도';

  return (
    <div className="text-gray-200 min-h-screen flex flex-col bg-[#0c0c0c] pb-20">
      <header className="sticky top-0 z-50 bg-[#0c0c0c]/90 backdrop-blur-md border-b border-white/10 px-4 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href={`/${districtKey}`} className="text-xl font-bold text-amber-400">
            경기건마사랑 ({cityName} {dongName})
          </Link>
          <Link href="/" className="text-xs text-gray-400 hover:text-amber-400">
            메인으로 가기 &gt;
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex-1">
        <section className="text-center my-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
            <span className="text-amber-400">경기도 {cityName} {dongName}</span><br />24시 출장마사지 추천
          </h1>
          <p className="text-gray-400 text-sm md:text-base mb-4">{cityName} {dongName} 전지역 오피스텔 및 자택 25분 내 신속 방문!</p>
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

        <section className="bg-[#080808] p-6 rounded-2xl border border-white/5 mt-12 text-center">
          <Link href={`/${districtKey}`} className="text-xs px-4 py-2 bg-amber-500/20 text-amber-300 rounded-lg border border-amber-500/30 font-bold inline-block">
            &lt; {cityName} 전체 지역 보기
          </Link>
        </section>
      </main>

      <footer className="bg-[#080808] border-t border-white/5 py-8 text-center text-gray-500 text-xs mt-auto">
        COPYRIGHT &copy; 경기건마사랑 {cityName} {dongName} ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}