import GyeonggiGuClientPage from './GyeonggiGuClientPage';

export async function generateMetadata({ params }) {
  const { district, gu } = await params;
  
  return {
    title: `경기도 ${district} ${gu} 24시 출장마사지 | 경기건마사랑`,
    description: `경기도 ${district} ${gu} 전지역 25분 방문! 타이, 아로마, 스웨디시 24시 후불제 출장케어.`,
    alternates: {
      canonical: `https://gunmalove-gyeonggi.shop/${district}/${gu}`,
    },
  };
}

export default async function GuPage({ params }) {
  const { district, gu } = await params;
  return <GyeonggiGuClientPage districtKey={district} guKey={gu} />;
}