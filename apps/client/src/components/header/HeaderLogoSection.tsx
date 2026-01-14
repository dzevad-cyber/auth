import { Link } from '@tanstack/react-router';

const LogoSection = () => {
  return (
    <div className="grid grid-flow-col justify-start">
      <h1 className="ml-4 text-xl font-semibold">
        <Link to="/">
          <img
            src="/tanstack-word-logo-white.svg"
            alt="TanStack Logo"
            className="h-10"
          />
        </Link>
      </h1>
    </div>
  );
};

export default LogoSection;
