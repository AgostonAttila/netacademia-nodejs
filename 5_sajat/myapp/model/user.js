// Beemeljük a mongoose modult.
var mongoose = require('mongoose');

// Csatlakozunk az adatbázishoz.
try {
  mongoose.connect('mongodb://localhost/test');  
} catch ( e ) {
  console.log( "Error establishing connect to database: ", e );
}

// Új model beállítása az adatbázis dokumentumokhoz.
var userTemplate = {
        name: "String",
        email: "String",
        gender: "String",
        address: "String",
        password: "String",
        meta: "Object"
    };
var User = mongoose.model( 'User', userTemplate );

/*
// Teszt user létrehozása.
var testUser = new User( {
        name: "John Doe",
        email: "john.doe@gmail.com",
        gender: "male",
        address: "42514 New York, Manhattan Boulevard 14.",
        password: "johnd",
        meta: {
          role: 1,
          lastLogin: new Date()
        }
} );
testUser.save();
*/

// Egy dokumentum lekérése.
var getOne = function( where, callBack ) {

  User.findOne( where, function( err, docs ) {
    callBack( docs );
  } );

};

// Összes dokumentum lekérése.
var getAll = function( where, callBack ) {

  User.find( where, function( err, docs ) {
    callBack( docs );
  } );

};


// Dokumentum frissítése.
var update = function( where, data, callBack ) {

  console.log( 'args', arguments );

  User.update( where, data, function(err) {
    if (err) {
      callBack( {"error": err} );
    } else {
      callBack( data );      
    }
  });

};

// Új dokumentmum létrehozása.
var insert = function( data, callBack ) {

  var user = new User( data );
  user.save(function (err) {
    if (err) {
        callBack( {"error": err} );
    } else {
      callBack( data );      
    }
  });

};

// Dokumentum törlése.
var remove = function( where, callBack ) {
  // {age: {$gt:40}
  User.remove( where, function(err, resp) {
     if ( !err ) {
         callBack();
     } else {
         console.log( "Hiba: ", err );
     }
  });

};

module.exports = {
  "getOne": getOne,
  "getAll": getAll,
  "update": update,
  "insert": insert,
  "remove": remove,
  "template": userTemplate
};












