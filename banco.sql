CREATE TABLE filme (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    nome text NOT NULL,
    genero text NOT NULL,
    ano int4 NOT NULL,
    nota numeric NOT NULL
);

ALTER TABLE filme DISABLE ROW LEVEL SECURITY;
