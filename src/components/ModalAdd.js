import React from 'react'
import Modal from 'react-modal';

const ModalAdd = ({isOpen,onAfterOpen,onRequestClose,style,contentLabel,closeModal,addList}) => (
    <Modal
        isOpen
        onAfterOpen
        onRequestClose
        style
        contentLabel
    >
        <h2 ref={subtitle => this.subtitle = subtitle}>Hi Please</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form onSubmit={addList}>
            <h4>Title</h4>
            <input type='text' name='title' id='title' required />
            <h4>Description</h4>
            <input type='text' name='Description' id='description' required /><br />
            <button>Submit</button>
        </form>
    </Modal>
)

export default ModalAdd