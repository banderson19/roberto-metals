import React from 'react';
// import ReactionList from '../components/ReactionList';

import Modal from 'react-modal';
import EditMaterialModal from '../components/EditMaterialModal';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_TICKET } from '../utils/queries';

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

const SingleTicket = props => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  
  const { id: ticketId } = useParams();
  console.log('id', ticketId)
  const { loading, data } = useQuery(QUERY_TICKET, {
    variables: { id: ticketId }
  });
  const ticket = data?.ticket || {};
  console.log(222, ticket)
  if (loading) {
    return <div>Loading...</div>;
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <div className="card mb-3">
        <div className=" flex-row justify-space-between card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            <h3> {ticket.clientName} </h3>
          </span>{' '}

        </div>
        <div className="card-body">
          {ticket.materials.map(material => (
            <div key={material._id} className="card mb-0">
              <p>{material.materialName}</p>
              <p>{material.quantity}</p>
              <div className="flex-row">
                <div>
                  <button onClick={openModal}>Edit</button>
                  <Modal
                    isOpen={modalIsOpen}
                    // onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                  >
                    <div>
                      <button onClick={closeModal}>close</button>

                      <EditMaterialModal />

                    </div>
                  </Modal>
                </div>
                <div className="pl-3">
                  <h6>Add Material</h6>
                </div>
              </div>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  );
};

export default SingleTicket;
