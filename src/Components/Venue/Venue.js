import React from 'react';
import { Link } from 'react-router-dom';


function Venue(props) {
    console.log("#####")
    console.log(props)
    return (
        <div className = "container">
                <div className = "col-sm-4 sidebar">
                    {props.venues.map((venue,i) =>{
                        return(
                            <div key = {venue.venue.id} className = "row bottom__border" >
                                <div className = "col-sm-2 nopadding">
                                            <img className = "venueImage" src={venue.venue.categories[0].icon.prefix+"88"+venue.venue.categories[0].icon.suffix} style={{width: "55px",height:"55px",top:"20px"}} alt = "venue pic" />
                                </div>
                                <div className = "col-sm-6">
                                    <div className = "body-right">
                                            <p className = "venue_title">
                                            <Link to = {{pathname: `/venue/${venue.venue.id}`,state:{id : venue.venue.id}}}>{i+1}.{venue.venue.name}</Link></p>
                                            <span className = "venue_address">{venue.venue.categories[0].name}</span>
                                            <p className = "venue_address">{venue.venue.location.address}</p>
                                    </div>

                                </div>
                            </div>
                        )
                    })}
                        
                
            </div>
        </div>
    )
}

export default Venue