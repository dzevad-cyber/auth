import { createFileRoute } from '@tanstack/react-router';

const Dashboard: React.FC<unknown> = () => {
  return <>Dashboard</>;
};

export default Dashboard;

export const Route = createFileRoute('/(protected)/_protected/dashboard')({
  component: Dashboard,
});
