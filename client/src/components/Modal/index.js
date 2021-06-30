// import React, {useState} from 'react';
// import Modal from 'react-modal';

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     widht: '75%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

// Modal.setAppElement('#root');

// const Modal = ( { component }) => {
//     // let subtitle;
//     const [modalIsOpen, setIsOpen] = React.useState(false);
    

//   function openModal() {
//     setIsOpen(true);
//   }

// //   function afterOpenModal() {
// //     // references are now sync'd and can be accessed.
// //     subtitle.style.color = '#f00';
// //   }

//   function closeModal() {
//     setIsOpen(false);
//   }

//     return (
//         <div> 
//             <button onClick={openModal}>Add Ticket</button>
//             <Modal
//                 isOpen={modalIsOpen}
//                 // onAfterOpen={afterOpenModal}
//                 onRequestClose={closeModal}
//                 style={customStyles}
//                 contentLabel="Example Modal"
//             >
//                 <div>
//                 <button onClick={closeModal}>close</button>

                

//                 </div>
//             </Modal>
//         </div>
                
// }

// export default Modal;