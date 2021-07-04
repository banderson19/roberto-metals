import React, {useState} from 'react';
import { useParams } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_MATERIAL } from '../../utils/mutations';

const AddMaterialModal = () => {

    // option to add client name in form than material later
    // const [materialForm, setMaterialName] = useState({materialName: '', quantity: 0});
    const [materialName, setMaterialName] = useState('')
    const [quantity, setQuantity] = useState(0)
    const { id: ticketId } = useParams();
    console.log(ticketId)
    const [addMaterial] = useMutation(ADD_MATERIAL);

    const handleMaterialName = event => {
        setMaterialName(event.target.value)
    }
    const handleQuantity = event => {
        setQuantity(event.target.value)
    }
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log('form submit', ticketId, materialName, quantity )
        try {
            // add ticket to database
            await addMaterial ({
                variables: { ticketId, materialName, quantity}  
            })
            console.log(ticketId, materialName, quantity)
        } catch (e) {
            console.log('ergg')
            console.error(e);
        }
    }

    return (
        <div>
        <h2>add material</h2>
            <form className="flex-row justify-center justify-space-between-md align-stretch"
                onSubmit={handleFormSubmit}
            >
                <input 
                    placeholder="Material" 
                    name='materialName'
                    type='materialName'
                    id='materialName'
                    value={materialName} 
                    className=""
                    onChange={handleMaterialName}
                >
                </input> 
                <input 
                    placeholder="Quantity" 
                    name='quantity'
                    type='quantity'
                    id='quantity'
                    value={quantity} 
                    className=""
                    onChange={handleQuantity}
                >
                </input> 
                
                <button className="" type="submit">Add Ticket</button>
            </form> 
        </div> 
    );
};

export default AddMaterialModal ;

