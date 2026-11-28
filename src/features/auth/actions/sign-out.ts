'use server';

import { auth } from '@/lib/auth/auth';
import { revalidatePath } from 'next/cache';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export async function signOut(_formData?: FormData): Promise<void> {
  try {
    await auth.api.signOut({
      headers: await headers(),
    });
  } catch (error) {
    console.error('Sign-out error:', error);
  }

  revalidatePath('/');
  redirect('/');
}
