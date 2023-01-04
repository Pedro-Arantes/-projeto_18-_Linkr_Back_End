import { connection } from "../database/db.js";

async function insertPost(user_id,link,caption) {
	return connection.query(`
    INSERT INTO posts (user_id,link,caption) VALUES ($1, $2, $3);`,
    [user_id,link,caption]);
}

export const postRepository = {
	insertPost
}
