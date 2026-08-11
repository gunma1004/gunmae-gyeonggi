export default function sitemap() {
  const baseUrl = 'https://gunmalove-gyeonggi.shop';

  // 1. 경기도 31개 전체 시·군
  const gyeonggiDistricts = [
    'suwon', 'seongnam', 'goyang', 'yongin', 'bucheon', 'ansan', 'anyang',
    'namyangju', 'hwaseong', 'pyeongtaek', 'uijeongbu', 'paju', 'gimpo',
    'siheung', 'gwangmyeong', 'gwangju', 'gunpo', 'osan', 'icheon',
    'yangju', 'guri', 'anseong', 'pocheon', 'uiwang', 'hanam', 'yeoju',
    'yangpyeong', 'dongducheon', 'gapyeong', 'gwacheon', 'yeoncheon'
  ];

  // 2. 구 단위 URL
  const gus = [
    'suwon/jangan', 'suwon/gwonseon', 'suwon/paldal', 'suwon/yeongtong',
    'seongnam/sujeong', 'seongnam/jungwon', 'seongnam/bundang',
    'goyang/deogyang', 'goyang/ilsandong', 'goyang/ilsanseo',
    'yongin/cheoin', 'yongin/giheung', 'yongin/suji',
    'bucheon/wonmi', 'bucheon/sosa', 'bucheon/ojeong',
    'ansan/sangrok', 'ansan/danwon',
    'anyang/manan', 'anyang/dongan'
  ];

  // 3. 주요 핫플레이스 동 단위 URL (검색량이 높은 핵심 동)
  const dongs = [
    'suwon/인계동', 'suwon/영통동', 'seongnam/분당동', 'seongnam/판교동',
    'seongnam/야탑동', 'goyang/일산동', 'yongin/동백동', 'bucheon/중동',
    'bucheon/상동', 'hwaseong/동탄동', 'pyeongtaek/고덕동', 'namyangju/다산동'
  ];

  const mainPage = {
    url: baseUrl,
    lastModified: new Date().toISOString(),
    changeFrequency: 'always',
    priority: 1.0,
  };

  const districtPages = gyeonggiDistricts.map((d) => ({
    url: `${baseUrl}/${d}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily',
    priority: 0.8,
  }));

  const guPages = gus.map((g) => ({
    url: `${baseUrl}/${g}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily',
    priority: 0.7,
  }));

  const dongPages = dongs.map((dong) => ({
    url: `${baseUrl}/${encodeURIComponent(dong)}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  return [mainPage, ...districtPages, ...guPages, ...dongPages];
}