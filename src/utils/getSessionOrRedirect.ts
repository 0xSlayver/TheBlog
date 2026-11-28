import { redirect } from 'next/navigation';

import { homePath } from '@/paths';
import { userSession } from '@/utils/get-session';

export async function getSessionOrRedirect() {
  const session = await userSession();

  if (!session?.user) redirect(homePath());

  return session;
}
