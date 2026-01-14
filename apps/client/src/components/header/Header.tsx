import HeaderAuthSection from './HeaderAuthSection';
import LogoSection from './HeaderLogoSection';

export default function Header() {
  return (
    <div>
      <header className="p-4 grid items-center bg-gray-800 text-white shadow-lg grid-flow-col">
        <LogoSection />
        <HeaderAuthSection />
      </header>
    </div>
  );
}
