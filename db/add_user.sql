INSERT INTO users (username, email, hashed_password)
VALUES
($1, $2, $3);

SELECT * FROM users WHERE email = $2;