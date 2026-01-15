import { createFileRoute } from '@tanstack/react-router';

const Profile: React.FC<unknown> = () => {
  return <>Profile</>;
};

export default Profile;

export const Route = createFileRoute('/(protected)/_protected/profile')({
  component: Profile,
});
