export default function sitemap() {
  const baseUrl = 'https://gunma-gyeonggi.com';

  const gyeonggiDistricts = [
    'suwon', 'seongnam', 'goyang', 'yongin', 'bucheon', 'ansan',
    'namyangju', 'hwaseong', 'pyeongtaek', 'uijeongbu', 'paju', 'gimpo'
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