import '../../config/env.js'
import connectMySqlDB from "../../config/MySqldb.js"

const mycon = connectMySqlDB(
    process.env.SQL_blog_host, 
    process.env.SQL_blog_user,
    process.env.SQL_blog_password,
    process.env.SQL_blog_databasename
);
mycon.connect();

export const getAllBlogs = () => {
    return new Promise((resolve, reject) => {
        try {
            

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
            
        }
    });
};

export const getOneBlogs = (id_art) => {
    return new Promise((resolve, reject) => {
        try {
            

            mycon.query('SELECT * FROM articles WHERE id_art = ? ',[id_art], function (error, results) {
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
            
        }
    });
};

export const createBlog = (title, introduction, body, conclusion, email) => {
    return new Promise((resolve, reject) => {
        try {
            

            mycon.query('INSERT INTO articles (title, introduction, body, conclusion, email) VALUES (?, ?, ?, ?, ?); ',[title, introduction, body, conclusion, email], function (error, results) {
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
            
        }
    });
};

export const updateBlog = (id_art, title, introduction, body, conclusion, email) => {
        return new Promise((resolve, reject) => {
            try {
                
    
                mycon.query('UPDATE articles SET title = ? , introduction = ?, body = ?, conclusion = ?, email = ? WHERE id_art = ? ;',[title, introduction, body, conclusion, email, id_art], function (error, results) {
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
                
            }
        });
};

export const deleteOneBlog = (id) => {
    return new Promise((resolve, reject) => {
        try {
            

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
        
        }
    });
};

export const getProfileBlogs = (email) => {
    return new Promise((resolve, reject) => {
        try {
            

            mycon.query('SELECT * FROM articles WHERE email = ? ',[email], function (error, results) {
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
            
        }
    });
};

process.on('exit', () => {
    mycon.end();
  });