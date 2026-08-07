import { Link } from 'react-router-dom';

export default function Logo({ linked = true }: { linked?: boolean }) {
  const logoUrl = `${import.meta.env.BASE_URL}assets/logo-mente-original.png`;
  const image = <img className="logo" src={logoUrl} alt="Logo M.E.N.T.E" />;

  return linked ? (
    <Link to="/" className="logo-link" aria-label="M.E.N.T.E — página inicial">
      {image}
    </Link>
  ) : (
    image
  );
}
