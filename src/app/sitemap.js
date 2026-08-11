export default function sitemap() {
  // ⭐️ 새 도메인 주소로 변경
  const baseUrl = 'https://gg-gunmalove.shop'; 

  const gyeonggiDistricts = [
    'suwon', 'seongnam', 'goyang', 'yongin', 'bucheon', 'ansan', 'anyang',
    'namyangju', 'hwaseong', 'pyeongtaek', 'uijeongbu', 'paju', 'gimpo',
    'siheung', 'gwangmyeong', 'gwangju', 'gunpo', 'osan', 'icheon',
    'yangju', 'guri', 'anseong', 'pocheon', 'uiwang', 'hanam', 'yeoju',
    'yangpyeong', 'dongducheon', 'gapyeong', 'gwacheon', 'yeoncheon'
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

  return [mainPage, ...districtPages];
}