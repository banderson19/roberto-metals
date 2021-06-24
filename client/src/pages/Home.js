import React from 'react';

import { useQuery } from '@apollo/client';
import { QUERY_TICKETS } from '../utils/queries';

import TicketList from '../components/TicketList';

const Home = () => {
    // use useQuery hook to make query request
    const { loading, data } = useQuery(QUERY_TICKETS);
    const tickets = data?.tickets || [];
    console.log(tickets);

    return (
        <main>
            <div className = 'flex-row justify-space-between'>
                <div className = 'col-12 mb-3'>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <TicketList tickets = {tickets} title = "Tracker Sheet" />
                    )}
                </div>
            </div>
        </main>
    );
};

export default Home;