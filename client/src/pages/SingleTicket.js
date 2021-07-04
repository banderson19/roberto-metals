import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import Modal from 'react-modal';
import EditMaterialModal from '../components/EditMaterialModal';
import AddMaterialModal from '../components/AddMaterialModal'

import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_TICKET , QUERY_TICKETS} from '../utils/queries';
import { DELETE_MATERIAL, DELETE_TICKET } from '../utils/mutations';

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

  const [materialId, setMaterialId] = useState(0);
  
  const { id: ticketId } = useParams();
  const { loading, data } = useQuery(QUERY_TICKET, {
    variables: { id: ticketId }
  });


  const [deleteTicket] = useMutation(DELETE_TICKET, {
    variables: {ticketId}
  })
  
  const [deleteMaterial] = useMutation(DELETE_MATERIAL);
  const ticket = data?.ticket || {};
  // const materialId = ticket.materials[0]._id || {};
  console.log('materialId', materialId)
  console.log('ticketId', ticketId)
  console.log(222, ticket)
  if (loading) {
    return <div>Loading...</div>;
  }

  

  // const handleChange = async event => {
  //   setMaterialId(event.target.value);
  //   console.log('new material id', materialId)
  // }

  const handleDeleteMaterial = async event => {
    event.preventDefault();
    setMaterialId(event.target.value)
    console.log(111, materialId)
    try {
      await deleteMaterial({
          variables: {ticketId, materialId}
      })
      console.log(555, materialId)
      console.log('delete ticket from client side')
    } catch (e) {
      console.log('errr')
      console.error(e)
    }
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
              <button onClick={deleteTicket}> Delete Ticket </button>
            
            <div>
              <button onClick={openModal}> Add Material </button>
              <Modal
                    isOpen={modalIsOpen}
                    // onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div>
                    <button onClick={closeModal}>close</button>

                    <AddMaterialModal/>

                    </div>
                </Modal>
            </div>
          </span>{' '}

        </div>
        <div className="card-body">
          {ticket.materials.map(material => (
            <div key={material._id} className="card mb-0">
              <p>{material._id}</p>
              <p>{material.materialName}</p>
              <p>{material.quantity}</p>
              <div className="flex-row">
                <div>
                  {/* <button onClick={openModal}>Edit</button> */}
                  {/* <Modal
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
                  </Modal> */}
                </div>
                <div className="pl-3">
                  <button value={material._id} onClick={handleDeleteMaterial} >Delete Material (double click)</button>
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
