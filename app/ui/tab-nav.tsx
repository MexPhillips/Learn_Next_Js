'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { href: '/overview', label: 'Overview' },
  { href: '/team', label: 'Team' },
  { href: '/benefits', label: 'Benefits' },
  { href: '/careers', label: 'Careers' },
  { href: '/locations', label: 'Locations' },
];

export default function TabNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Dashboard navigation" className="tab-list">
      {tabs.map((tab) => {
        const isActive =
          pathname === tab.href || (pathname === '/' && tab.href === '/overview');

        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={clsx('tab', isActive && 'tab-active')}
            aria-current={isActive ? 'page' : undefined}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
