import React from 'react';

import { useParams } from 'react-router-dom';

import TicketList from '../components/TicketList';

import { useQuery } from '@apollo/client';
import { QUERY_CLIENT } from '../utils/queries';

const Profile = props => {
  const { clientName: clientName} = useParams();
    console.log(clientName)
  const { loading, data } = useQuery(QUERY_CLIENT, {
    variables: { clientName: clientName}
  });

  const client = data?.client || {};
  console.log('client', client)
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          Viewing {client.clientName}'s profile.
        </h2>
      </div>

      <div className="flex-row justify-space-between mb-3">
        {/* <div className="col-12 mb-3 col-lg-8">
          <TicketList thoughts={client.thoughts} title={`${user.clientName}'s thoughts...`} />
        </div> */}
        
      </div>
    </div>
  );
};

export default Profile;
