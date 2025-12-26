import { createFileRoute } from '@tanstack/react-router';

const App = () => {
  return <div>hello world</div>;
};

export const Route = createFileRoute('/')({
  component: App,
});
