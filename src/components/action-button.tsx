'use client';

import { useFormStatus } from 'react-dom';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ActionButtonProps = {
  action: (formData: FormData) => void | Promise<void>;
  children: React.ReactNode;
  pendingText?: string;
  formClassName?: string;
} & Omit<React.ComponentProps<typeof Button>, 'type'>;

function SubmitButton({
  children,
  pendingText,
  disabled,
  ...buttonProps
}: Omit<ActionButtonProps, 'action' | 'formClassName'>) {
  const { pending } = useFormStatus();

  return (
    <Button type='submit' disabled={pending || disabled} {...buttonProps}>
      {pending && <Loader2 className='size-4 animate-spin' />}
      {pending && pendingText ? pendingText : children}
    </Button>
  );
}

export function ActionButton({
  action,
  formClassName,
  children,
  pendingText,
  ...buttonProps
}: ActionButtonProps) {
  return (
    <form action={action} className={formClassName}>
      <SubmitButton pendingText={pendingText} {...buttonProps}>
        {children}
      </SubmitButton>
    </form>
  );
}
