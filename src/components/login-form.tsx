'use client';

import { useState } from 'react';
import { authClient } from '@/lib/auth-client';

type LoginFormProps = {
  hasOAuthError?: boolean;
};

/**
 * GitHub OAuth login form.
 *
 * On success, redirects to /admin. On failure (including server-side
 * rejection from the allowlist), redirects back with ?error=oauth so
 * the server component can surface the error on initial render.
 */
export function LoginForm({ hasOAuthError = false }: LoginFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(
    hasOAuthError
      ? 'GitHub authentication failed. Your account may not be authorized, or you may have cancelled the login.'
      : '',
  );

  async function handleGitHubLogin() {
    if (isLoading) return;

    setIsLoading(true);
    setError('');

    try {
      const result = await authClient.signIn.social({
        provider: 'github',
        callbackURL: '/',
        errorCallbackURL: '/login?error=oauth',
      });

      if (result.error) {
        setError(result.error.message || 'GitHub authentication failed.');
        setIsLoading(false);
      }
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : 'An unexpected authentication error occurred.',
      );

      setIsLoading(false);
    }
  }

  return (
    <div className='flex flex-col gap-4'>
      <button
        type='button'
        onClick={handleGitHubLogin}
        disabled={isLoading}
        className='bg-primary text-primary-foreground flex items-center justify-center gap-2 rounded-lg px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50'
      >
        {isLoading ? 'Connecting to GitHub...' : 'Continue with GitHub'}
      </button>

      {error && (
        <p role='alert' className='text-destructive text-sm'>
          {error}
        </p>
      )}
    </div>
  );
}
