import Card from '@/app/ui/card';
import RevenueChart from '@/app/ui/revenue-chart';

export const metadata = {
  title: 'Dashboard | Acme',
};

export default function DashboardPage() {
  return (
    <div className="page-content">
      <h1>Dashboard</h1>
      <div className="stats-grid">
        <Card title="Collected" value="$2,689.26" />
      </div>
      <div className="dashboard-grid">
        <RevenueChart />
      </div>
    </div>
  );
}
