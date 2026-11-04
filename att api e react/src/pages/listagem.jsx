import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../services/supabaseClient';

export default function Listagem() {
  const [registros, setRegistros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRegistros() {
      try {
        setLoading(true);
        const { data, error } = await supabase.from('nome_da_tabela').select('*');
        
        if (error) throw error;
        setRegistros(data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRegistros();
  }, []);

  if (loading) return <p>A carregar registos...</p>;
  if (error) return <p style={{ color: 'red' }}>Erro ao carregar: {error}</p>;
  if (registros.length === 0) return <p>Nenhum registo cadastrado.</p>;

  return (
    <div>
      <h2>Lista de Registos</h2>
      <ul>
        {registros.map((item) => (
          <li key={item.id} style={{ margin: '10px 0' }}>
            <span>{item.nome || item.titulo || `Registo ID: ${item.id}`}</span>{' '}
            <Link to={`/registros/${item.id}`}>Ver Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}