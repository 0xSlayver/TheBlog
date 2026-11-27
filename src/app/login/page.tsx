import { LoginForm } from '@/components/login-form';

type LoginPageProps = {
  searchParams: Promise<{
    error?: string;
  }>;
};

/**
 * Admin login page.
 * Reads the `?error` search param (set by Better Auth's errorCallbackURL)
 * and passes it to the client-side LoginForm for initial error display.
 */
async function LoginPage({ searchParams }: LoginPageProps) {
  const { error } = await searchParams;

  return (
    <main className='flex min-h-screen items-center justify-center'>
      <div className='w-full max-w-sm space-y-6'>
        <div className='space-y-2 text-center'>
          <h1 className='text-2xl font-bold'>Admin Login</h1>

          <p className='text-muted-foreground'>Sign in to manage your blog.</p>
        </div>

        <LoginForm hasOAuthError={Boolean(error)} />
      </div>
    </main>
  );
}

export default LoginPage;
