import React, { Component } from 'react';
import './Style.css';
import Form from '../Form/Form';
import * as moment from 'moment';
import Header from '../Header/Header';

const client_id = "XXGWNF0H5YOXYM4B0NDXW5HWA1QZNFPUVQJF3VCMBUHLHQNE"
const client_secret = "HOEFLV1HWOHMQHIGKASI10EZB2V32TRTRC1DWA1ESPMJ03HE"

class VenueDetails extends Component {
    state = {
        activeVenue: []
    }

    componentDidMount = async()=>{
        const id = this.props.location.state.id;
        const api_call = await fetch(`https://api.foursquare.com/v2/venues/${id}?client_id=${client_id}&client_secret=${client_secret}&v=20200901`)
        const result = await api_call.json();
        this.setState({activeVenue: result.response.venue})
        console.log(this.state.activeVenue)
    }
    render() {
        const venue = this.state.activeVenue;
        console.log(venue.hour)
        return (
            <div>
                <Header></Header>
                <Form></Form>
            <div id = "wrapper" className = "wrapper">
            <div className = "container wrap"  > 
                { 
                this.state.activeVenue.length !== 0 &&
                <div>
                <div className = "photoBanner">
                    <div className = "photoSection">
                        <ul className = "photos">{!venue.photos.groups[0]? null :venue.photos.groups[0].items.map((photo)=>{
                            return(
                            <li className = "photoWithContent" key = {photo.id}>
                                <img src = {photo.prefix+"200x200"+photo.suffix} alt = "pic icon" style = {{ height: "200px", width: "200px"}}></img></li>
                            )
                        })}</ul>
                    </div>
                </div>
                <div >
                     <div className = "venueInfoSection">
                         <div className = "topVenueSection">
                             <div className = "mainIconWrapper ">
                                 <img src = {venue.categories[0].icon.prefix+"88"+venue.categories[0].icon.suffix} style={{width: "88px",height:"88px"}} alt="Category icon" />
                             </div>
                             <div className = "primaryInfo">
                                 <div className = "venueNameSection">
                                    <h1 className = "venueName">{venue.name}</h1>
                                 </div>
                                 <div className = "categories">
                                    <span className = "unlinkedCategory">{venue.categories[0].name}</span>
                                 </div>
                                 <div className = "locationInfo">
                                    <span className = "venuCity">{venue.location.city}</span>
                                 </div>
                             </div>
                             <div className = "venueScore" style = {{backgroundColor: "#FFC800"}}>
                                <span className = "venueRating">{venue.rating}</span>
                             </div>

                         </div>
                     </div>
                     <div className = "mainColumn">
                         <div className = "infoAddress">
                             <div className = "infoText">Info</div>
                             <div className = "addressText">Address</div>
                             <div className = "addressInfo">
                                <p>{venue.location.address}<br/>{venue.location.city},{venue.location.postalCode} {venue.location.state} {venue.location.country}                        
                                </p>
                             </div>
                                <div className ="contactInfo">Contact: {venue.contact.phone}</div>
                         </div>  
                     </div>
                        <div className = "openHours">
                                <div className = "hourText">Hours</div>
                                <span className = "venueHours">{ !venue.hours? " Info Not Available" : venue.hours.timeframes[0].open.map((hour , index)=>{return (<li key = {index}>{hour.renderedTime}</li>)})}</span>
                        </div>
                        <div className = "venueCategory">
                            <div className = "likedCategory">Categoty</div>{venue.categories.map((category)=>{ return(<span className = "categoriesItem" key = {category.id}>{category.name}</span>)})}
                        </div>
                        <div className = "venueReview">{venue.tips.groups[0].items.map((tip)=>{return(
                                <div className= "tipSection" key = {tip.id}>
                                    <div className = "userImage">
                                        <img src={tip.user.photo.prefix+"42x42"+tip.user.photo.suffix} alt = "user icon" style = {{width:"42px", height:"42px"}}/>
                                    </div>
                                    <div className = "userInfo">
                                         <span>{tip.user.firstName+" "+ tip.user.lastName}</span>
                                    </div>
                                    <div className = "createdDate">
                                        <span>{moment(tip.createdAt).format("DD MMM YYYY")}</span>
                                    </div>
                                    <div className="reviewText">
                                        <span>{tip.text}</span>
                                    </div>
                                </div>
                            )})}
                                                   
                        </div>
                </div>
                </div>
                    }
            </div>
        </div>
        </div>

        )      
        
}
}

export default VenueDetails

