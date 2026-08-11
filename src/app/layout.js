import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://gg-gunmalove.shop"),
  title: "경기건마사랑 | 24시 경기도 출장 마사지·스웨디시·홈타이 추천 No.1",
  description: "경기도 전지역 25분 내 빠른 방문! 수원, 성남, 고양, 용인 등 경기도 31개 시·군 24시 정찰제 후불제 안심 출장 마사지 서비스.",
  alternates: {
    canonical: "/",
  },
  verification: {
    other: {
      'naver-site-verification': '7ddc82035572a78ce341bc1e4a6423ef5d952d4a',
    },
  },
  openGraph: {
    title: "경기건마사랑 | 24시 경기도 출장 마사지",
    description: "경기도 전지역 25분 방문! 프리미엄 100% 후불제 출장 마사지 서비스.",
    url: "https://gg-gunmalove.shop",
    siteName: "경기건마사랑",
    locale: "ko_KR",
    type: "website",
  },
  keywords: ["경기도 출장 마사지", "수원 출장 마사지", "성남 출장 마사지", "분당 홈타이", "경기도 스웨디시", "경기건마사랑"],
};

// ⭐️ 가장 핵심: export default RootLayout 컴포넌트 형태가 정상이어야 합니다.
export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="bg-[#0c0c0c] text-gray-200">
        {children}
      </body>
    </html>
  );
}