import React from 'react';
// import ReactionList from '../components/ReactionList';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_TICKET } from '../utils/queries';


const SingleTicket = props => {
  const { id: ticketID } = useParams();
  console.log(ticketID)
  
  const { loading, data } = useQuery(QUERY_TICKET, {
    variables: { id: ticketID }
  });
  const ticket = data?.ticket || {};
  console.log(data)
  if (loading) {
    return <div>Loading...</div>;
  }
    return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {ticket.clientName}
          </span>{' '}
        </p>
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
      {/* material count  */}
      {/* {thought.reactionCount > 0 && <ReactionList reactions={thought.reactions} />} */}
    </div>
  );
};

export default SingleTicket;
