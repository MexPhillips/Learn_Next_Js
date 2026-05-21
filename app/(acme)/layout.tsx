import TabNav from '@/app/ui/tab-nav';

export default function AcmeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-shell">
      <header>
        <div className="brand">
          <span className="brand-mark">ACME</span>
          <div>
            <p className="site-title">Acme Dashboard</p>
            <p className="site-subtitle">Next.js dashboard tutorial — chapters 1–5</p>
          </div>
        </div>
        <TabNav />
      </header>
      <main>{children}</main>
    </div>
  );
}
