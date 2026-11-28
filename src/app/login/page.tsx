import { LoginForm } from '@/features/auth/components/login-form';

/**
 * Admin login page.
 * Reads the `?error` search param (set by Better Auth's errorCallbackURL)
 * and passes it to the client-side LoginForm for initial error display.
 */
function LoginPage() {
  return (
    <main className='flex min-h-screen items-center justify-center'>
      <div className='w-full max-w-sm space-y-6'>
        <div className='space-y-2 text-center'>
          <h1 className='text-2xl font-bold'>Admin Login</h1>

          <p className='text-muted-foreground'>Sign in to manage your blog.</p>
        </div>

        <LoginForm />
      </div>
    </main>
  );
}

export default LoginPage;
