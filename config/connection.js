// Set up database connection
var mysql = require('mysql');

var connection;
if(process.env.JAWSDB_URL) {
  //Heroku deployment
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //local host
    connection = mysql.createConnection({
        root: 3306,
        host: "localhost",
        user: "root",
        password: "Qcpmr_019$$$",
//        database: "burgers_db",
        database: "oq9gsx8vy3fay4jv",
    });
};
// not strictly required, but best practice to establish connection
// it's possible query establishes the connection
connection.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

// export the connection back to orm
module.exports = connection;