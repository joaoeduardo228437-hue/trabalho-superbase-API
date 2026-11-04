import { createClient } from '@supabase/supabase-js';

// Configurações de acesso ao Supabase
const supabaseUrl = 'https://ebymlmkgpusqhhsiewdj.supabase.co';
const supabaseKey = 'sb_publishable_m2RRciqOWfSrY8lQ8afmjA_ydWXYlrI';

// Inicializa o cliente do Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

// Função para buscar e exibir os filmes
async function buscarFilmes() {
  const { data: filmes, error } = await supabase
    .from('filme')
    .select('*');

  if (error) {
    console.error('Erro ao buscar filmes:', error.message);
    return;
  }

  console.log('--- Lista de Filmes ---');
  console.log(filmes);
}

buscarFilmes();
