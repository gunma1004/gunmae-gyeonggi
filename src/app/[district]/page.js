import GyeonggiDistrictClientPage from './GyeonggiDistrictClientPage';

const gyeonggiDistricts = {
  suwon: { name: '수원시' }, seongnam: { name: '성남시' }, goyang: { name: '고양시' },
  yongin: { name: '용인시' }, bucheon: { name: '부천시' }, ansan: { name: '안산시' },
  namyangju: { name: '남양주시' }, hwaseong: { name: '화성시' }, pyeongtaek: { name: '평택시' },
  uijeongbu: { name: '의정부시' }, paju: { name: '파주시' }, gimpo: { name: '김포시' }
};

export async function generateStaticParams() {
  return Object.keys(gyeonggiDistricts).map((district) => ({
    district,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const districtKey = resolvedParams.district;
  const districtData = gyeonggiDistricts[districtKey];
  const currentName = districtData?.name || '경기도';

  return {
    title: `경기도 ${currentName}출장마사지 | 24시 홈타이·스웨디시·아로마 가격 비교`,
    description: `경기도 ${currentName}출장마사지 전문. 25분 내 방문 24시 상담 및 후불제 서비스.`,
    openGraph: {
      url: `https://gunma-gyeonggi.com/${districtKey}`,
    },
    alternates: {
      canonical: `https://gunma-gyeonggi.com/${districtKey}`,
    },
  };
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  return <GyeonggiDistrictClientPage districtKey={resolvedParams.district} />;
}