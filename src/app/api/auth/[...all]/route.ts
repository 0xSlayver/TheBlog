import { auth } from '@/lib/auth';
import { toNextJsHandler } from 'better-auth/next-js';

/** Better Auth catch-all route handler — delegates all /api/auth/* requests. */
export const { GET, POST } = toNextJsHandler(auth);
