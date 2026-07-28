"use client";
import { useState } from 'react';

const gyeonggiDistricts = {
  suwon: { name: '수원시', dongs: ['인계동', '영통동', '매탄동', '권선동', '조원동'] },
  seongnam: { name: '성남시', dongs: ['분당동', '야탑동', '서현동', '판교동', '모란동'] },
  goyang: { name: '고양시', dongs: ['일산동', '백석동', '주엽동', '화정동', '행신동'] },
  yongin: { name: '용인시', dongs: ['기흥동', '수지동', '처인동', '동백동', '보정동'] },
  bucheon: { name: '부천시', dongs: ['중동', '상동', '심곡동', '원미동', '괴안동'] },
  ansan: { name: '안산시', dongs: ['중앙동', '고잔동', '선부동', '상록수동', '초지도'] },
  namyangju: { name: '남양주시', dongs: ['다산동', '별내동', '진접동', '화도읍', '평내동'] },
  hwaseong: { name: '화성시', dongs: ['동탄동', '병점동', '향남읍', '봉담읍', '새솔동'] },
  pyeongtaek: { name: '평택시', dongs: ['평택동', '비전동', '서정동', '안중읍', '팽성읍'] },
  uijeongbu: { name: '의정부시', dongs: ['의정부동', '호원동', '신곡동', '민락동', '용현동'] },
  paju: { name: '파주시', dongs: ['운정동', '금촌동', '문산읍', '야당동', '교하동'] },
  gimpo: { name: '김포시', dongs: ['구래동', '장기동', '풍무동', '사우동', '운양동'] }
};

export default function GyeonggiDistrictClientPage({ districtKey }) {
  const districtInfo = gyeonggiDistricts[districtKey];

  if (!districtInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0c0c0c] text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-amber-500 mb-4">404</h1>
          <p>존재하지 않는 서비스 지역입니다.</p>
          <a href="/" className="mt-4 inline-block px-6 py-2 bg-amber-500 text-black rounded-full text-xs font-bold">메인으로 돌아가기</a>
        </div>
      </div>
    );
  }

  const currentName = districtInfo.name;

  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": `경기도 ${currentName}출장마사지 | 경기건마사랑`,
      "url": `https://gunma-gyeonggi.com/${districtKey}`,
      "description": `경기도 ${currentName}출장마사지 전문. ${districtInfo.dongs.join(', ')} 24시 후불제 출장케어.`
    }
  ];

  return (
    <div className="text-gray-200 min-h-screen flex flex-col bg-[#0c0c0c]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }} />

      <header className="sticky top-0 z-50 bg-[#0c0c0c]/90 backdrop-blur-md border-b border-white/5 px-4 py-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-amber-400">경기건마사랑 ({currentName})</a>
          <a href="/" className="text-xs text-gray-400 hover:text-amber-400">메인으로 가기 &gt;</a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12 w-full flex-1">
        <section className="text-center my-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            <span className="text-amber-400">경기도 {currentName} 24시</span><br />출장마사지 홈케어
          </h1>
          <p className="text-gray-400 text-sm md:text-base">{currentName} 내 어디든 25분 내 빠르게 도착합니다.</p>
        </section>

        <section className="bg-[#080808] p-6 rounded-2xl border border-white/5 mt-12">
          <h3 className="text-sm font-bold text-amber-400 mb-3">{currentName} 동별 바로가기</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {districtInfo.dongs.map((dong) => (
              <span key={dong} className="text-xs px-3 py-1 bg-white/5 rounded-full text-gray-400 border border-white/5">
                {currentName} {dong}출장마사지
              </span>
            ))}
          </div>

          <h3 className="text-sm font-bold text-gray-400 mb-3">경기도 다른 지역 바로가기</h3>
          <div className="flex flex-wrap gap-3">
            {Object.entries(gyeonggiDistricts).map(([key, data]) => (
              <a key={key} href={`/${key}`} className="text-xs text-gray-500 hover:text-amber-500 transition-colors">
                경기도 {data.name}출장마사지
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-[#080808] border-t border-white/5 py-12 text-center text-gray-500 text-xs mt-auto">
        COPYRIGHT &copy; 경기건마사랑 {currentName} ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}