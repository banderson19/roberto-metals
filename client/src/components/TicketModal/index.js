import React, {useState} from 'react';

import { useMutation } from '@apollo/client';
import { ADD_TICKET , ADD_MATERIAL, ADD_TICKET_AND_MATERIAL} from '../../utils/mutations';

const TicketModal = () => {

    // option to add client name in form than material later
    // const [clientName, setText] = useState('');
    // setText(event.target.value)

    const [formState, setFormState] = useState({clientName: '', materialName: '', quantity: ''});
    
    const [addTicket] = useMutation(ADD_TICKET);
    const [addMaterial] = useMutation(ADD_MATERIAL)

    const handleChange = event => {
        const {name, value} = event.target;

        setFormState({
            ...formState,
            [name]: value
        })
    }
    const handleFormSubmit = async event => {
        event.preventDefault();
    
        try {
            // add ticket to database
            let {data} = await addTicket ({
                variables: { ...formState }  
            }).then( {data} ,
                addMaterial({
                    
                    variables: { ...formState} 
                })
            )
            console.log(data)
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
                    value={formState.clientName} 
                    className=""
                    name="clientName"
                    type="clientName"
                    id="clientName"
                    onChange={handleChange}
                >
                </input>
                <input 
                    placeholder="Metal" 
                    value={formState.materialName} 
                    className=""
                    name="materialName"
                    type="materialName"
                    id="materialName"
                    onChange={handleChange}
                >
                </input>
                <input 
                    placeholder="Quantity" 
                    value={formState.quantity} 
                    className=""
                    name="quantity"
                    type="quantity"
                    id="quantity"
                    onChange={handleChange}
                >
                </input>
                
                
                <button className="" type="submit">Add Ticket</button>
            </form> 
        </div> 
    );
};

export default TicketModal;

{/* <datalist id="clients">
                        {tickets.map(ticket => {
                            <option value={ticket.clientName}/>
                        })}
                    </datalist> */}