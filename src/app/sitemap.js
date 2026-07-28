export default function sitemap() {
  const baseUrl = 'https://gunmalove-gyeonggi.shop';

  const gyeonggiDistricts = [
    'suwon', 'seongnam', 'goyang', 'yongin', 'bucheon', 'ansan', 'anyang',
    'namyangju', 'hwaseong', 'pyeongtaek', 'uijeongbu', 'paju', 'gimpo'
  ];

  // 구 단위 URL 추가
  const gus = [
    'suwon/jangan', 'suwon/gwonseon', 'suwon/paldal', 'suwon/yeongtong',
    'seongnam/sujeong', 'seongnam/jungwon', 'seongnam/bundang',
    'goyang/deogyang', 'goyang/ilsandong', 'goyang/ilsanseo',
    'yongin/cheoin', 'yongin/giheung', 'yongin/suji',
    'bucheon/wonmi', 'bucheon/sosa', 'bucheon/ojeong',
    'ansan/sangrok', 'ansan/danwon',
    'anyang/manan', 'anyang/dongan'
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

  return [mainPage, ...districtPages, ...guPages];
}