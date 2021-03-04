import React, { Component } from 'react';
import ApartmentListItem from '../ApartmentListItem'
import './ApartmentList.css'

class ApartmentList extends Component {
  state = {
    dataApartment: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/data.json')
      .then(response => response.json())
      .then(({ response }) => this.setState(() => ({
        dataApartment: response
      }
        ))
      )
  }
  render() {
    const { dataApartment } = this.state
    console.log("data", dataApartment);
    return (
      <div>
        {
          dataApartment.map((apartment) => {
            return (
              <ApartmentListItem 
                key={apartment.id} 
                apartment={apartment}
                
              />
            )
          })
        }
      </div>
    )
  }
}

export default ApartmentList;