import { createAuthClient } from 'better-auth/react';

/**
 * Client-side auth instance.
 * Automatically discovers the auth API at `/api/auth` by convention.
 * Import this in client components for signIn, signOut, and useSession.
 */
export const authClient = createAuthClient();
