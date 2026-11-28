import { Suspense } from 'react';

import { getSessionOrRedirect } from '@/utils/getSessionOrRedirect';

export const instant = false;

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await getSessionOrRedirect();

  return (
    <Suspense fallback={null}>
      <main>{children}</main>
    </Suspense>
  );
}
