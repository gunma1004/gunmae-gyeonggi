"use client";
import { useState } from 'react';

const gyeonggiDistricts = {
  suwon: { name: '수원시' },
  seongnam: { name: '성남시' },
  goyang: { name: '고양시' },
  yongin: { name: '용인시' },
  bucheon: { name: '부천시' },
  ansan: { name: '안산시' },
  namyangju: { name: '남양주시' },
  hwaseong: { name: '화성시' },
  pyeongtaek: { name: '평택시' },
  uijeongbu: { name: '의정부시' },
  paju: { name: '파주시' },
  gimpo: { name: '김포시' }
};

export default function GyeonggiMainPage() {
  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "경기도출장마사지 | 경기건마사랑",
      "url": "https://gunma-gyeonggi.com/",
      "description": "경기도출장마사지 전문 경기건마사랑. 수원, 성남, 고양, 용인 등 24시간 방문 후불제 출장마사지."
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "경기도출장마사지 경기건마사랑",
      "serviceType": "출장마사지 홈타이 상담",
      "areaServed": ["경기도", "경기도 전지역"]
    }
  ];

  const handleDistrictChange = (e) => {
    if (e.target.value) window.location.href = `/${e.target.value}`;
  };

  return (
    <div className="text-gray-200 min-h-screen flex flex-col pb-24 md:pb-0 bg-[#0c0c0c]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* 로봇 수집 전용 클로킹 노드 */}
      <div className="sr-only" aria-hidden="true">
        <ul>
          {Object.entries(gyeonggiDistricts).map(([key, data]) => (
            <li key={key}>
              <a href={`/${key}`}>
                <strong>경기도 {data.name}출장마사지</strong>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <header className="sticky top-0 z-50 bg-[#0c0c0c]/90 backdrop-blur-md border-b border-white/5 px-4 py-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300">
              경기건마사랑
            </span>
            <span className="text-[9px] px-1.5 py-0.5 rounded border border-amber-500/30 text-amber-400 bg-amber-950/20 font-medium tracking-tight">
              경기본점
            </span>
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12 w-full flex-1">
        <section className="text-center my-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            <span className="text-amber-400">경기도 전지역 24시</span><br />품격 있는 경기도출장마사지
          </h1>
          <p className="text-gray-400 text-sm md:text-base mb-8">수원, 분당, 일산, 용인 등 경기도 전지역 25분 내 도착합니다.</p>

          <div className="bg-[#1e1e1e]/85 backdrop-blur-md border border-white/10 p-4 md:p-5 rounded-2xl max-w-sm mx-auto">
            <div className="text-left bg-white/5 p-3 rounded-xl border border-white/5">
              <label className="text-[10px] text-amber-400 font-bold block mb-1 uppercase">우리 동네 지역 선택하기</label>
              <select onChange={handleDistrictChange} className="bg-transparent text-sm text-white w-full outline-none cursor-pointer" defaultValue="">
                <option value="" disabled className="bg-[#1e1e1e]">지역을 선택해주세요</option>
                {Object.keys(gyeonggiDistricts).map((key) => (
                  <option key={key} value={key} className="bg-[#1e1e1e]">{gyeonggiDistricts[key].name}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* 하단 도시 태그 네비게이션 */}
        <section className="bg-[#080808] py-8 border-t border-white/5 mt-12 rounded-2xl p-6">
          <h3 className="text-sm font-bold text-gray-400 mb-4">경기도 주요 도시 출장마사지 바로가기</h3>
          <div className="flex flex-wrap gap-3">
            {Object.entries(gyeonggiDistricts).map(([id, data]) => (
              <a key={id} href={`/${id}`} className="text-xs text-gray-400 hover:text-amber-500 transition-colors">
                경기도 {data.name}출장마사지
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-[#080808] border-t border-white/5 py-12 text-center text-gray-500 text-xs mt-auto">
        COPYRIGHT &copy; 경기건마사랑 ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}