// Write your code here

import {Component} from 'react'
import Item from '../DestinationItem/index'
import './index.css'

class DestinationSearch extends Component {
  state = {
    search: '',
  }

  update = event => {
    this.setState({search: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {search} = this.state
    const searchres = destinationsList.filter(each =>
      each.name.toLowerCase().includes(search),
    )

    const final = search.length === 0 ? destinationsList : searchres
    return (
      <>
        <h1 className="title">Destination Search</h1>
        <div className="sbox">
          <input
            type="search"
            className="sinput"
            onChange={this.update}
            value={this.search}
          />
          <img
            alt="search icon"
            className="icn"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          />
        </div>
        <div className="resbox">
          <ul>
            {final.map(each => (
              <Item name={each.name} image={each.imgUrl} key={each.id} />
            ))}
          </ul>
        </div>
      </>
    )
  }
}

export default DestinationSearch
