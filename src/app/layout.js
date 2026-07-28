import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://gunmalove-gyeonggi.shop"), // ⭐️ 추후 구매할 경기도 전용 도메인 주소
  title: "경기건마사랑 | 24시 경기도출장마사지 No.1",
  description: "경기도 전지역 25분 내 방문! 수원, 성남, 고양, 용인 등 24시 홈타이, 스웨디시, 아로마 전문 서비스.",
  alternates: {
    canonical: "/",
  },
  verification: {
    other: {
      'naver-site-verification': '7ddc82035572a78ce341bc1e4a6423ef5d952d4a',
    },
  },
  openGraph: {
    title: "경기건마사랑 | 24시 경기도출장마사지",
    description: "경기도 전지역 25분 방문! 프리미엄 출장마사지 홈케어 서비스.",
    url: "https://gunma-gyeonggi.com",
    siteName: "경기건마사랑",
    locale: "ko_KR",
    type: "website",
  },
  keywords: ["경기도출장마사지", "수원출장마사지", "성남출장마사지", "분당홈타이", "경기도스웨디시"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="bg-[#0c0c0c]">{children}</body>
    </html>
  );
}