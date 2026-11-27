import { AvatarDropdown } from '@/components/avatar-dropdown';
import { userSession } from '@/utils/get-session';

export default async function HeaderAuth() {
  const session = await userSession();

  if (!session) return null;

  return <AvatarDropdown avatar={session?.user.image} />;
}
