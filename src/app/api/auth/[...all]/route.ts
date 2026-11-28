import { toNextJsHandler } from 'better-auth/next-js';

import { auth } from '@/lib/auth/auth';

/** Better Auth catch-all route handler — delegates all /api/auth/* requests. */
export const { GET, POST } = toNextJsHandler(auth);
