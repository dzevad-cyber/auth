import { useNavigate } from '@tanstack/react-router';
import { Button } from '../ui/button';
import { CircleUserRound, LogIn } from 'lucide-react';
import { useGetAuthenticatedUserQuery } from '@/features/auth/current-user/queries/getCurrentUser.query';

const HeaderAuthSection: React.FC<unknown> = () => {
  const navigate = useNavigate();
  // get current user
  // if current user show profile button
  // if not show login and sign up button
  const { data } = useGetAuthenticatedUserQuery();
  console.log('[ HeaderAuthSection.tsx - 12 ] - data:', data);

  console.log('[ HeaderAuthSection.tsx - 13 ] - data:', data);
  return (
    <div className="grid grid-flow-col justify-end gap-x-5">
      {data ? (
        <div>logged in successfully</div>
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
