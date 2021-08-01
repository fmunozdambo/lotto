BEGIN;

SET client_encoding = 'LATIN1';

CREATE TABLE users (
    id integer GENERATED ALWAYS AS IDENTITY,
    name character(30) NOT NULL,
    mail character(30) NOT NULL,
    password character(200) NOT NULL
);

CREATE TABLE ballot (
    id integer GENERATED ALWAYS AS IDENTITY,
    winner boolean NOT NULL,
    fk_user integer NOT NULL,
    fk_lottery integer NOT NULL
);

CREATE TABLE lottery (
    id integer GENERATED ALWAYS AS IDENTITY,
    date date NOT NULL
);

ALTER TABLE ONLY users
    ADD CONSTRAINT pk_user PRIMARY KEY (id);
ALTER TABLE ONLY ballot
    ADD CONSTRAINT pk_ballot PRIMARY KEY (id);
ALTER TABLE ONLY lottery
    ADD CONSTRAINT pk_lottery PRIMARY KEY (id);

ALTER TABLE ONLY ballot
    ADD CONSTRAINT fk_user FOREIGN KEY (fk_user) REFERENCES users(id);
ALTER TABLE ONLY ballot
    ADD CONSTRAINT fk_lottery FOREIGN KEY (fk_lottery) REFERENCES lottery(id);


COMMIT;

ANALYZE users;
ANALYZE ballot;
ANALYZE lottery;

