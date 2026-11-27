import { prisma } from '@/lib/prisma';
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { nextCookies } from 'better-auth/next-js';

/**
 * Better Auth server-side configuration.
 *
 * Authentication is restricted to a single GitHub account (the blog owner).
 * The `validateUserInfo` hook rejects any OAuth login whose GitHub user ID
 * does not match the GITHUB_ALLOWED_USER_ID environment variable, ensuring
 * only the authorized admin can sign in.
 */
export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,

  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),

  user: {
    validateUserInfo: ({ source }) => {
      // Only enforce allowlist for GitHub OAuth logins
      if (source.oauth?.providerId !== 'github') {
        return;
      }

      const githubId = source.oauth.profile?.id;

      if (
        typeof githubId !== 'number' ||
        String(githubId) !== process.env.GITHUB_ALLOWED_USER_ID
      ) {
        return {
          error: 'unauthorized',
          errorDescription: 'This account is not authorized.',
        };
      }
    },
  },

  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  },

  plugins: [nextCookies()],
});
