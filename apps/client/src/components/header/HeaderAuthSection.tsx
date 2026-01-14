import { useNavigate } from '@tanstack/react-router';
import { Button } from '../ui/button';
import { CircleUserRound, LogIn } from 'lucide-react';
import { useGetAuthenticatedUserQuery } from '@/features/auth/auth-user/queries/getAuthUser.query';

const HeaderAuthSection: React.FC<unknown> = () => {
  const navigate = useNavigate();
  const { data, isPending } = useGetAuthenticatedUserQuery();

  if (isPending) return null;

  return (
    <div className="grid grid-flow-col justify-end gap-x-5">
      {data ? (
        <div>
          Hello, {data.user.firstName} {data.user.lastName}
        </div>
      ) : (
        <>
          <Button
            onClick={() =>
              navigate({
                to: '/sign-up',
              })
            }
            className="hover:cursor-pointer"
          >
            <CircleUserRound size={20} />
            <span className="font-medium">Sign up</span>
          </Button>
          <Button
            onClick={() =>
              navigate({
                to: '/login',
              })
            }
            className="hover:cursor-pointer"
          >
            <LogIn size={20} />
            <span className="font-medium">Login</span>
          </Button>
        </>
      )}
    </div>
  );
};

export default HeaderAuthSection;
