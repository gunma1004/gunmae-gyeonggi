export default function robots() {
  return {
    userAgent: '*',
    allow: '/',
    // ⭐️ 이 부분을 현재 도메인(gunmalove-gyeonggi.shop)으로 변경해 주세요!
    sitemap: 'https://gunmalove-gyeonggi.shop/sitemap.xml',
  };
}