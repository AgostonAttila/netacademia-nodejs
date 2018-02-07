//Csatlakozunk
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');


/*
var Cat = mongoose.model('Cat', {
    name: "String",
    gazdi: "String",
    age: "Number",
    address: "String"
});
*/


var User = mongoose.model('User', {
    name: "String",
    email: "String",
    age: "Number",
    address: "String"
});

/*
var tom = new User({
    name: 'Tom Sawyer',
    email: 'tom@vmi.com',
    age: 20,
    address: "US"
});

tom.save(function (err) {
    if (err) {
        console.log('Error while saving data....', err);
    }
    console.log('save done');
});
*/

User.update({
    age: {
        $gt: 40
    }
}, {
    name: 'Elder Finn'
}, function (err) {
    if (err) console.log(err);
    else console.log('updated');
});


//{multi: true}  többet is updatel 3,opció




// Drop the 'foo' collection from the current database
//mongoose.connection.db.dropCollection('foo', function(err, result) {...});

/*
Cat.find({}, '', function (err, cat) {
    if (err) return handleError(err);
    console.log(cat);
})
*/


/*
Cat.findOne({
    'name.last': 'Micike'
}, 'name occupation', function (err, cat) {
    if (err) return handleError(err);
    console.log(cat.name);
})
*/


//Új kollekció
/*
var kitty = new Cat({
    name: 'Lukrécia',
    gazdi: 'Irma néni',
    age: 4,
    address: "Kistétényi út"
});

kitty.save(function (err) {
    if (err) {
        console.log('Error while saving data....', err);
    }
    console.log('save done');
});
*/

//Törlés
/*
User.remove({
    age: {
        $gt: 40
    },function(err,resp){
       if(!err){
           console.log('Törölve');
       } 
        else{
           console.log('Hiba',err);
       } 
    }
})
*/
process.exit();