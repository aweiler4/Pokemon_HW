const React = require('react');
const pokemon = require('../models/pokemon');
class Show extends React.Component {
   render () {
    return (
       
      <div>
          <h1>Gotta Catch 'Em All</h1>
          <h2> {pokemon.name}</h2>
      </div>
     );
    }
 }
 module.exports  = Show;