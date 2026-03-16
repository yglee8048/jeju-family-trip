'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, CalendarDays, Building2, Info } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { t } from '../../i18n';

export function BottomNav() {
  const pathname = usePathname();
  const { lang } = useApp();

  const items = [
    { href: '/', label: t(lang, 'nav.today'), Icon: Home },
    { href: '/schedule', label: t(lang, 'nav.schedule'), Icon: CalendarDays },
    { href: '/hotel', label: t(lang, 'nav.hotel'), Icon: Building2 },
    { href: '/info', label: t(lang, 'nav.info'), Icon: Info },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 max-w-lg mx-auto">
      <div className="flex">
        {items.map(item => {
          const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex-1 flex flex-col items-center py-2 transition-colors"
            >
              <div className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-colors ${
                isActive ? 'text-sky-600 bg-sky-50' : 'text-gray-400'
              }`}>
                <item.Icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 1.8} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
