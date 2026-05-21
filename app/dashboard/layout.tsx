import Sidenav from '@/app/ui/sidenav';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-layout">
      <Sidenav />
      <main className="dashboard-main">
        {children}
      </main>
    </div>
  );
}
