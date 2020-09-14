
import React, { Component } from 'react'
import './App.css';
import Form from './Components/Form/Form';
import * as moment from 'moment';
import axios from 'axios';
import Venue from './Components/Venue/Venue';
import Header from './Components/Header/Header';


const NewDate = moment(new Date()).format("YYYYMMDD");

 class App extends Component {
   constructor(props) {
     super(props)
     
     this.state = {
      venues: [],
      latlong: ' ',
      //value:" "
        
     }
     
   }
  
  // handleChangeValue = e => {
     //console.log(e.target.value)
   //this.setState({value: e.target.value});
   //console.log(this.state.value)
   //}
    componentDidMount(){
      this.getLocation();
       //const json = localStorage.getItem("venues");
       //const venue = JSON.parse(json)
     // this.setState({venues: venue}); 
    }
    
    //componentDidUpdate(){
      //const venues = JSON.stringify(this.state.venues)
      //localStorage.setItem("venues", venues)
    //}

    getLocation = () => {
      if ("geolocation" in navigator) {
        console.log("Available");
        navigator.geolocation.getCurrentPosition((response) => {
          console.log(response.coords.latitude + "," + response.coords.longitude)
          this.setState({
            latlong: `${response.coords.latitude},${response.coords.longitude}`
          },()=>{
            this.getVenue("food");
          })
          console.log(this.state.latlong)
        });
      } else {
        alert("Not Available");
      }
    }
    
    
     getVenue=(query)=>{
       console.log(query)
      const endpoint = 'https://api.foursquare.com/v2/venues/explore?'
      const params = {
        client_id: 'XXGWNF0H5YOXYM4B0NDXW5HWA1QZNFPUVQJF3VCMBUHLHQNE',
        client_secret: 'HOEFLV1HWOHMQHIGKASI10EZB2V32TRTRC1DWA1ESPMJ03HE',
        ll: this.state.latlong,
        section: query,
        v: NewDate,
        limit: 20,
      } 

      axios.get(endpoint + new URLSearchParams(params))
      .then(response =>{
        this.setState({venues: response.data.response.groups[0].items})
        console.log(response.data.response.groups[0].items)
        console.log(this.state.venues)
      })
      .catch(error => {
        console.log(error)
      })
    
    }
    

  render() {
    return (
      <React.Fragment>
      <Header></Header>
     {/* <Form  value={this.state.value} onChangeValue={this.handleChangeValue} getVenue = {this.getVenue}></Form>*/}
      <Form getVenue = {this.getVenue}></Form>
      <Venue venues = {this.state.venues}></Venue>
      </React.Fragment>
    )
  }
}

export default App;
