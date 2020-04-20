DROP TABLE IF EXISTS study;
DROP TABLE IF EXISTS words;
DROP TABLE IF EXISTS user;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username TEXT,
  hashed_password TEXT,
  email VARCHAR(32)
);

INSERT INTO users (username, email)
VALUES
('Socrates', 'WhatIsTruth?@Athens.edu'),
('Plato', 'TheRepublic@TheCave.org'),
('Aristotle', 'PhilosophyIzKool@VirtueEthics.com')

CREATE TABLE study (
  word_id SERIAL PRIMARY KEY,
  english TEXT,
  greek TEXT
);

CREATE TABLE words (
  word_id SERIAL PRIMARY KEY,
  english TEXT,
  greek TEXT
); 

INSERT INTO words (english_word, greek_word)
VALUES
('area', 'περιοχή'),
('book', 'βίβλιο'),
('philosophy', 'φιλοσοφία'),
('ethics', 'ήθικη'),
('country', 'κράτος'),
('family', 'οικογένεια'),
('government', 'κυβέρνυση'),
('mother', 'μητέρα'),
('father', 'πατέρα'),
('child', 'παιδί'),
('I think', 'σκέφτομαι'),
('I eat', 'τρώω'),
('I go', 'πηγαίνω'),
('I try', 'προσπαθώ'),
('I speak', 'μιλάω')
('I laugh', 'γελάω')
('I leave', 'φεύγω')
('I see', 'βλέπω')
('I hear', 'ακούω')
('I smell', 'μυρίζω')