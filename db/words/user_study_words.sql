SELECT s.saved_words_id, s.user_id, s.word_id, w.english_word, w.greek_word FROM saved_words s
JOIN words w ON w.word_id = s.word_id
WHERE user_id=$1;