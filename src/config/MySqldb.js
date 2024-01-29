import mysql from 'mysql'

const connectMySqlDB =(host, user, password, databaseName)=>{
   const myconec= mysql.createConnection({
   host:host ,
   user:user,
   password:password,
   database:databaseName,
});
return myconec;
}
export default connectMySqlDB;

