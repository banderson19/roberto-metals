import React, {useState} from 'react';

import { useMutation } from '@apollo/client';
import { ADD_TICKET } from '../../utils/mutations';

const TicketModal = () => {

    // option to add client name in form than material later
    const [clientName, setText] = useState('');
    
    const [addTicket] = useMutation(ADD_TICKET);

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
                
                <button className="" type="submit">Add Ticket</button>
            </form> 
        </div> 
    );
};

export default TicketModal;

