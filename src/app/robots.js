export default function robots() {
  return {
    userAgent: '*',
    allow: '/',
    // ⭐️ 이전 주소(.com)로 되어 있다면 현재 주소(.shop)로 변경해 주세요!
    sitemap: 'https://gunmalove-gyeonggi.shop/sitemap.xml',
  };
}