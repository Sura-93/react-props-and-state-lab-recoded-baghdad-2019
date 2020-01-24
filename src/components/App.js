import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }
onChangeType = value => {
  this.setState({
    type:value
  })
}
onFindPetsClick = () =>
{
  if (this.state.type === "all")  {
    fetch('/api/pets'). then (resp => resp.json).then(json => {
      console.log(json)
      this.setState({
        pets.json
      })
    })
  }
  else {
   fetch('/api/pets?type=' + this.state.filters.type).then(resp=> resp.json).then(json => this.setState({

     pets.json
   }))
  }
}
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick ={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser  onAdoptPet ={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
