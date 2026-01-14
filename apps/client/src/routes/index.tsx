import { createFileRoute } from '@tanstack/react-router';
import Header from '@/components/header/Header';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <div>
      <Header />
    </div>
  );
}
