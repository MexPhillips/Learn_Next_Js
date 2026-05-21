'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const navLinks = [
  { href: '/dashboard', label: 'Home', icon: '🏠' },
  { href: '/invoices', label: 'Invoices', icon: '📄' },
  { href: '/customers', label: 'Customers', icon: '👥' },
];

export default function Sidenav() {
  const pathname = usePathname();

  return (
    <aside className="sidenav">
      <div className="sidenav-header">
        <div className="brand-logo">
          <span>🌐</span>
          <div>
            <p className="brand-title">Acme</p>
          </div>
        </div>
      </div>

      <nav className="sidenav-nav">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={clsx('sidenav-link', isActive && 'sidenav-link-active')}
            >
              <span className="sidenav-icon">{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>

      <button className="sidenav-signout">
        <span>🚪</span>
        <span>Sign Out</span>
      </button>
    </aside>
  );
}
