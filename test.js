"use strict";

var DO = require( 'deepobject' );


// Make sure uncaught errors are displayed
process.on('uncaughtException', function(err) {
  console.error(err.stack);
});

/*
var d = new DO( { a: { b: { c1: 10, c2: 20 } } } );

l( d );
l( d, 'a' );
l( d, 'a.b' );
l( d, 'a.b.c1' );
l( d, 'a.b.c3' );
l( d, 'z', "hello" );

d.set( 'a.b.c3', 100 );
l( d );
d.set( 'a1', 110 );
l( d );

d.set( 'z.z.z.z.z.z.z.z.z.z', 120 );
l( d );

d.set( 'z.z.z', null );
l( d );

d.set( 'z.z.z.z.z', 150 );
l( d );
*/

var tests = {

  "create and set an object": function( test ){

    var o1 = { a: { b: { c1: 10, c2: 20 } } };
    var d = new DO( o1 );
    test.equal( o1, d.get() );

    var o2 = { a: { b: { c1: 10, c2: 20 } } };
    d.set( o2 );
    test.equal( o2, d.get() );

    test.done();
  },

  "assign and get a deep value": function( test ){

    var o = { a: { b: { c1: 10, c2: 20 } } };
    var d = new DO( o );

    test.done();
  },

  "assign and get a deep value of null": function( test ){

    var o = { a: { b: { c1: 10, c2: 20 } } };
    var d = new DO( o );

    test.done();
  },

  "assign and get a deep value of undefined": function( test ){

    var o = { a: { b: { c1: 10, c2: 20 } } };
    var d = new DO( o );

    test.done();
  },

  "getting non-existing values": function( test ){

    var o = { a: { b: { c1: 10, c2: 20 } } };
    var d = new DO( o );

    test.done();
  },


  "setting very deep values and getting them": function( test ){
    var o = { a: { b: { c1: 10, c2: 20 } } };
    var d = new DO( o );

    test.done();
  },

  "using it with a function": function( test ){
    var o = { a: { b: { c1: 10, c2: 20 } } };
    var d = new DO( o );

    test.done();
  },

}
  
// Copy tests over to exports
for( var i in tests ){
  exports[ i ] = tests[ i ];
}



console.log( DO.get( { a: { b: 10, c: 20 }, d: 30 }, 'a.e', 100 ) );

function l( d, p ){
  console.log('Getting ' + p );
  console.log( require('util').inspect( d.get( p ), { depth: 20 }  )  );
  console.log( '' );
}


