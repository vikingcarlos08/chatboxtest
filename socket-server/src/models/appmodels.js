const conn = require('../db_connection.js');

exports.getAllMessages = (result) => {
	conn.query("SELECT * FROM messages", (err, res) => {
	        if(err) {
        	console.log("error: ", err);
        	result(null, err);
        }
        else{
        	console.log('Message : ', res);  
        	result(null, res);
                
                }
	})
};

exports.saveMessage = (task,result) => {
        try {
                conn.query("INSERT INTO messages (message, user, date) VALUES (?,?,?)",[task[0].message, task[0].user, task[0].DateSent],(err, res) => {
                        if(err) {
                        console.log("error: ", err);
                        result(null, err);
                }
                else{
                        console.log('Message : ', res);  
                        result(null, res);
                        
                        }
                })
        }
        catch(e){
                console.log(e)
                
        }
      
};