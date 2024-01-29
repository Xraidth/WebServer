import '../../config/env.js'
import connectMySqlDB from "../../config/MySqldb.js"

const mycon = connectMySqlDB(
    process.env.SQL_blog_host, 
    process.env.SQL_blog_user,
    process.env.SQL_blog_password,
    process.env.SQL_blog_databasename
);

export const getAllBlogs = () => {
    return new Promise((resolve, reject) => {
        try {
            mycon.connect();

            mycon.query('SELECT * FROM articles', function (error, results) {
                if (error) {
                    console.log("Error in getAll query", error);
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        } catch (error) {
            console.log('Error in getAllBlogs', error);
            reject(error);
        } finally {
            mycon.end();
        }
    });
};

export const getOneBlogs = (id) => {
    return new Promise((resolve, reject) => {
        try {
            mycon.connect();

            mycon.query('SELECT * FROM articles WHERE id = ? ',[id], function (error, results) {
                if (error) {
                    console.log("Error in getOne query", error);
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        } catch (error) {
            console.log('Error in getOneBlogs', error);
            reject(error);
        } finally {
            mycon.end();
        }
    });
};

export const createBlog = (title, body, email) => {
    return new Promise((resolve, reject) => {
        try {
            mycon.connect();

            mycon.query('INSERT INTO articles (`title`, `body`, `email`) VALUES (?, ?, ?); ',[title, body, email], function (error, results) {
                if (error) {
                    console.log("Error in getOne query", error);
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        } catch (error) {
            console.log('Error in getOneBlogs', error);
            reject(error);
        } finally {
            mycon.end();
        }
    });
};

export const updateBlog = (id, title, body, email) => {
        return new Promise((resolve, reject) => {
            try {
                mycon.connect();
    
                mycon.query('UPDATE articles SET `title` ?, `body` = ?, `email` = ? WHERE `id_art` = ? ;',[title, body, email, id], function (error, results) {
                    if (error) {
                        console.log("Error in getOne query", error);
                        reject(error);
                    } else {
                        resolve(results);
                    }
                });
            } catch (error) {
                console.log('Error in getOneBlogs', error);
                reject(error);
            } finally {
                mycon.end();
            }
        });
};

export const deleteOneBlog = (id) => {
    return new Promise((resolve, reject) => {
        try {
            mycon.connect();

            mycon.query('DELETE FROM articles WHERE id_art = ? ;',[id], function (error, results) {
                if (error) {
                    console.log("Error in getOne query", error);
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        } catch (error) {
            console.log('Error in getOneBlogs', error);
            reject(error);
        } finally {
            mycon.end();
        }
    });
};
