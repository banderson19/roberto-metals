import React from 'react';

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
                            Client: {ticket.clientName}
                            
                        </h5>
                        {  ticket.materials.map(material => (
                            
                                <div key={material._id} className = "card mb-0">
                                    <p>{material.materialName}</p>
                                    <p>{material.quantity}</p>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default TicketList;