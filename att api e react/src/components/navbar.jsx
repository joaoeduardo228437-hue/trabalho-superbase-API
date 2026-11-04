import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '15px', background: '#f0f0f0', marginBottom: '20px' }}>
      <Link to="/">Início</Link>
      <Link to="/registros">Listagem</Link>
    </nav>
  );
}