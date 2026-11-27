import { signIn } from '@/app/actions/sign-in';

/**
 * GitHub OAuth login form.
 *
 * On success, redirects to /admin. On failure (including server-side
 * rejection from the allowlist), redirects back with ?error=oauth so
 * the server component can surface the error on initial render.
 */
export function LoginForm() {
  return (
    <div className='flex flex-col gap-4'>
      <form action={signIn}>
        <button
          type='submit'
          className='bg-primary text-primary-foreground flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg px-5 py-3'
        >
          Sign In
        </button>
      </form>

      {/* {error && (
        <p role='alert' className='text-destructive text-sm'>
          {error}
        </p>
      )} */}
    </div>
  );
}
