import React from 'react'
import { Card } from 'semantic-ui-react'
import { throws } from 'assert';

class PokemonCard extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       front: true
    }
  }

  togglePokemon = () =>{
    this.setState((prevState)=>{
      return {front: !prevState.front}
    })
  }

  // frontBack = () =>{
  //   {this.state.front ? sprites.front : sprites.back}
  // }
  

  render() {
    const {name, sprites} = this.props
    const hp = this.props.stats.find(stat => stat.name === "hp").value
    return (
      <Card onClick={this.togglePokemon}>
        <div>
          <div className="image">
            <img alt={sprites.front} src={this.state.front ? sprites.front : sprites.back}/>
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
