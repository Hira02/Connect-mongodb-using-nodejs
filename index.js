var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://127.0.0.1/mongodb-nodejs';
MongoClient.connect(url, function(err, db){
    if(err)
        throw err;
    var myDb = db.db('myfirstdb');
    var myData = {name : 'Hira' , email : 'hirasaha02@gmail.com'};
    myDb.collection('userData').insertOne(myData, function(err, res){
        if(err)
            throw err;
        console.log('Collection inserted...');
        db.close();
    });
});