SELECT words.words_id, users.users_id, FROM words
JOIN users ON users.user_id = words.users_id
WHERE words.word_id = $1;