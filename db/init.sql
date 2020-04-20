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
('area', 'περιοχή (periohEE)'),
('book', 'βιβλίο (vivlEEo)'),
('philosophy', 'φιλοσοφία (filosofEEa)'),
('ethics', 'ήθικη (EEtheekee)'),
('country', 'κράτος (krAhtos)'),
('family', 'οικογένεια (eekoyEnia)'),
('government', 'κυβέρνυση (keevErnisi)'),
('mother', 'μητέρα (meetEra)'),
('father', 'πατέρα (patEra)'),
('child', 'παιδί (pethEE)'),
('I think', 'σκέφτομαι (skEftomeh'),
('I eat', 'τρώω (tro)'),
('I go', 'πηγαίνω (peegEno)'),
('I try', 'προσπαθώ (prospathO)'),
('I speak', 'μιλάω (meelAow)'),
('I laugh', 'γελάω (yellAow)'),
('I leave', 'φεύγω (fEvgo)'),
('I see', 'βλέπω (vlEpo)'),
('I hear', 'ακούω (akOO-o)'),
('I smell', 'μυρίζω (meerEEzo)')