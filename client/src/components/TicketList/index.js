import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import TicketModal from '../TicketModal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    widht: '75%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const TicketList = ( { tickets, title }) => {
    // let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    
    if (!tickets.length) {
        return <h3> No tickets yet </h3>
    }
    console.log(1111, tickets)


  function openModal() {
    setIsOpen(true);
  }

//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     subtitle.style.color = '#f00';
//   }

  function closeModal() {
    setIsOpen(false);
  }

    return (
        <div>
            <div>
                {title}
            </div>
            <div>
                <button onClick={openModal}>Add Ticket</button>
                <Modal
                    isOpen={modalIsOpen}
                    // onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div>
                    <button onClick={closeModal}>close</button>

                    <TicketModal/>

                    </div>
                </Modal>
                </div>
            <div className="flex-row justify-center">
                {tickets && 
                    tickets.map(ticket => (
                        <div key={ticket._id} className = "card mb-3 col-4">
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
                                    
                                        <div key={material._id} className = "card mb-0 pl-2">
                                            <p>Material: {material.materialName}</p>
                                            <p>Weight: {material.quantity} lbs</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TicketList;