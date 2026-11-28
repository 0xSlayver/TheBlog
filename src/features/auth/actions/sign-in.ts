'use server';

import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { auth } from '@/lib/auth/auth';

export async function signIn(_formData?: FormData): Promise<void> {
  let redirectUrl: string | undefined;

  try {
    const res = await auth.api.signInSocial({
      body: {
        provider: 'github',
        callbackURL: '/',
        errorCallbackURL: '/login?error=oauth',
      },
      headers: await headers(),
    });

    if (res?.url) {
      redirectUrl = res.url;
    }
  } catch (error) {
    console.error('GitHub sign-in error:', error);
    redirect('/login?error=oauth');
  }

  if (redirectUrl) {
    redirect(redirectUrl);
  }
}
