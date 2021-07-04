import React, {useState} from 'react';

import { useMutation } from '@apollo/client';
import { ADD_TICKET } from '../../utils/mutations';
import { QUERY_TICKETS } from '../../utils/queries'

const TicketModal = () => {

    // option to add client name in form than material later
    const [clientName, setText] = useState('');
    
    const [addTicket] = useMutation(ADD_TICKET, {
        update(cache, { data: { addTicket } }) {
        try {
          // could potentially not exist yet, so wrap in a try...catch
          const { tickets } = cache.readQuery({ query: QUERY_TICKETS });
          cache.writeQuery({
            query: QUERY_TICKETS,
            data: { tickets: [addTicket, ...tickets] }
          });
        } catch (e) {
          console.error(e);
        }        
      }
    });

    const handleChange = event => {
        setText(event.target.value);
    }
    const handleFormSubmit = async event => {
        event.preventDefault();
    
        try {
            // add ticket to database
            await addTicket ({
                variables: { clientName }  
            })
            console.log('added new ticket')
        } catch (e) {
            console.log('errrrg')
            console.error(e);
        }
    }

    return (
        <div>
        <h2>New Ticket</h2>
            <form className="flex-row justify-center justify-space-between-md align-stretch"
                onSubmit={handleFormSubmit}
            >
                <input 
                    placeholder="Client Name" 
                    value={clientName} 
                    className=""
                    onChange={handleChange}
                >
                </input> 
                
                <button className="" type="submit" >Add Ticket</button>
            </form> 
        </div> 
    );
};

export default TicketModal;

