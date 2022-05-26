const React = require('react');
const pokemon = require('../models/pokemon');
class Index extends React.Component {
   render () {
    return (
       
      <div>
          <h1>See all the Pokemon!</h1>
          <ul>
              {pokemon.map((pokemon, i) => {
                  return (
                      <li>
                          {pokemon.name}
                      </li>
                  )
              })}
          </ul>
      </div>
     );
    }
 }
 module.exports  = Index;