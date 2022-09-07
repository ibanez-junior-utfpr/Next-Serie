---DDL DAS TABELAS 

ALTER TABLE USUARIO_GENERO DROP CONSTRAINT FK_IDGENERO_USUARIO_GENERO ;
ALTER TABLE USUARIO_GENERO DROP CONSTRAINT FK_IDUSUARIO_USUARIO_GENERO ;
ALTER TABLE SERIE DROP CONSTRAINT FK_IDPRODUTORA_SERIE;
ALTER TABLE SERIE DROP CONSTRAINT FK_IDGENERO_SERIE;
ALTER TABLE FILME DROP CONSTRAINT FK_IDPRODUTORA_FILME;
ALTER TABLE FILME DROP CONSTRAINT FK_IDGENERO_FILME;
   
DROP TABLE USUARIO;
DROP TABLE GENERO;
DROP TABLE PRODUTORA;
DROP TABLE USUARIO_GENERO;
DROP TABLE FILME;
DROP TABLE SERIE;

CREATE TABLE USUARIO (
    IDUSUARIO SERIAL PRIMARY KEY,
    NOME VARCHAR(300),
    EMAIL VARCHAR(150),
    LOGIN VARCHAR(50),
    SENHA VARCHAR(50)
);

CREATE TABLE GENERO (
    IDGENERO SERIAL PRIMARY KEY,
    GENERO VARCHAR(50),
    DESCRICAO VARCHAR(500)
);

CREATE TABLE PRODUTORA (
    IDPRODUTORA SERIAL PRIMARY KEY,
    RAZAOSOCIAL VARCHAR(150),
    SEDE VARCHAR(150)
);

CREATE TABLE USUARIO_GENERO (
    CODIGO SERIAL PRIMARY KEY,
    DATA_INCLUSAO DATE,
    FLAGIMPORTADO CHAR(1),
    FK_IDGENERO INTEGER,
    FK_IDUSUARIO INTEGER
);

CREATE TABLE FILME (
    IDFILME SERIAL PRIMARY KEY,
    TITULO VARCHAR(150),
    DIRETOR VARCHAR(300),
    DTLANCAMENTO DATE,
    DESCRICAO VARCHAR(500),
    FK_IDPRODUTORA INTEGER,
    FK_IDGENERO INTEGER
);

CREATE TABLE SERIE (
    IDSERIE SERIAL PRIMARY KEY,
    TITULO VARCHAR(150),
    DIRETOR VARCHAR(300),
    DTLANCAMENTO DATE,
    DESCRICAO VARCHAR(500),
    FK_IDPRODUTORA INTEGER,
    FK_IDGENERO INTEGER
);


ALTER TABLE USUARIO_GENERO ADD CONSTRAINT FK_IDGENERO_USUARIO_GENERO
    FOREIGN KEY (FK_IDGENERO)
    REFERENCES GENERO (IDGENERO)
    ON DELETE CASCADE;

ALTER TABLE USUARIO_GENERO ADD CONSTRAINT FK_IDUSUARIO_USUARIO_GENERO
    FOREIGN KEY (FK_IDUSUARIO)
    REFERENCES USUARIO (IDUSUARIO)
    ON DELETE CASCADE;

ALTER TABLE SERIE ADD CONSTRAINT FK_IDPRODUTORA_SERIE
    FOREIGN KEY (FK_IDPRODUTORA)
    REFERENCES PRODUTORA (IDPRODUTORA)
    ON DELETE CASCADE;
 
ALTER TABLE SERIE ADD CONSTRAINT FK_IDGENERO_SERIE
    FOREIGN KEY (FK_IDGENERO)
    REFERENCES GENERO (IDGENERO)
    ON DELETE CASCADE;
   
ALTER TABLE FILME ADD CONSTRAINT FK_IDPRODUTORA_FILME
    FOREIGN KEY (FK_IDPRODUTORA)
    REFERENCES PRODUTORA (IDPRODUTORA)
    ON DELETE CASCADE;
 
ALTER TABLE FILME ADD CONSTRAINT FK_IDGENERO_FILME
    FOREIGN KEY (FK_IDGENERO)
    REFERENCES GENERO (IDGENERO)
    ON DELETE CASCADE;
   