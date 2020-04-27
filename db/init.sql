DROP TABLE IF EXISTS study;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS words;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username TEXT,
  hashed_password TEXT,
  email VARCHAR(48)
);

INSERT INTO users (username, email)
VALUES
('Socrates', 'WhatIsTruth?@Athens.edu'),
('Plato', 'TheRepublic@TheCave.org'),
('Aristotle', 'PhilosophyIzKool@VirtueEthics.com');

SELECT english_word AND greek_word FROM words
JOIN ON STUDY WHERE  s.word_id w.word_id 
WHERE user_id = $1

--have endpoint that runs study query 
-- insert word id(comes form front end) and user id (comes from req.session) into study table 

CREATE TABLE study (
  study_id SERIAL PRIMARY KEY,
  word_id INT REFERENCES words(word_id),
  user_id INT REFERENCES users(user_id)
);



CREATE TABLE words (
  word_id SERIAL PRIMARY KEY,
  english_word TEXT,
  greek_word TEXT
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
('father', 'πατέρα (pahtEra)'),
('child', 'παιδί (pethEE)'),
('I think', 'σκέφτομαι (skEftomeh'),
('I eat', 'τρώω (tro)'),
('I go', 'πηγαίνω (peeyEno)'),
('I try', 'προσπαθώ (prospathO)'),
('I speak', 'μιλάω (meelAow)'),
('I laugh', 'γελάω (yellAow)'),
('I leave', 'φεύγω (fEvgo)'),
('I see', 'βλέπω (vlEpo)'),
('I hear', 'ακούω (akOO-o)'),
('I smell', 'μυρίζω (meerEEzo)');