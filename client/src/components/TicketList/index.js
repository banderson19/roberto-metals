import React from 'react';
import { Link } from 'react-router-dom';


const TicketList = ( { tickets, title }) => {
    if (!tickets.length) {
        return <h3> No tickets yet </h3>
    }
    console.log(1111, tickets)
    return (
        <div>
            <div>{title} </div>
            {tickets && 
                tickets.map(ticket => (
                    <div key={ticket._id} className = "card mb-3">
                        <h5 className="card-header">
                            <Link to={`/profile/${ticket.clientName}`} style= {{ fontWeight: 700 }} className="text-light">
                                Client: {ticket.clientName}
                            </Link>
                            <br></br>
                            <Link to={`/ticket/${ticket._id}`}style= {{ fontWeight: 700 }} className="text-light">
                                Ticket Number: {ticket._id}
                            </Link>
                        </h5>
                        <div className="card-body">
                            {  ticket.materials.map(material => (
                                
                                    <div key={material._id} className = "card mb-0">
                                        <p>{material.materialName}</p>
                                        <p>{material.quantity}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TicketList;