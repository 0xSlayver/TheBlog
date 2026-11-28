import { headers } from 'next/headers';

import { auth } from '@/lib/auth/auth';

export async function userSession() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return session;
}
