import { ActionButton } from '@/components/action-button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { signOut } from '@/features/auth/actions/sign-out';
import { aboutPath, dashboardPath } from '@/paths';
import Link from 'next/link';

type AvatarDropdownProps = {
  avatar?: string | null;
};

export function AvatarDropdown({ avatar }: AvatarDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant='ghost' size='icon' className='rounded-full'>
            <Avatar>
              {avatar && <AvatarImage src={avatar} alt='shadcn' />}
              <AvatarFallback>0x</AvatarFallback>
            </Avatar>
          </Button>
        }
      />
      <DropdownMenuContent className='w-32'>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href={aboutPath()}>Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={dashboardPath()}>Dashboard</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <ActionButton
            action={signOut}
            pendingText='Signing out..'
            className='block w-full bg-transparent p-0 text-left hover:bg-transparent'
          >
            <DropdownMenuItem
              variant='destructive'
              className={'cursor-pointer'}
            >
              Log out
            </DropdownMenuItem>
          </ActionButton>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
