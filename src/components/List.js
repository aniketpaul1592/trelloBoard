import React from 'react'
import { Header, Footer, MidComponent, Cards, Container, MidPosition } from './__styles.js'
import { Box } from 'kilvin'
import { connect } from 'react-redux'
import ModalAdd from './ModalAdd';
import ModalMove from './ModalMove';
import Modal from 'react-modal';
import {addCardData, editCardData, deleteCardData} from '../actions/actionCreator'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
    }
};

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalAddIsOpen: false,
            modalMoveIsOpen: false,
            title:"",
            description:"",
            newListType:'',
        };
        this.addList = this.addList.bind(this);
        this.openModal = this.openModal.bind(this);
        this.afterModal = this.afterModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.editList = this.editList.bind(this);
        this.deleteList = this.deleteList.bind(this);
        this.openMoveModal = this.openMoveModal.bind(this);
        this.closeMoveModal = this.closeMoveModal.bind(this);
        this.getType = this.getType.bind(this);
    }

    openModal() {
        this.setState({ modalAddIsOpen: true });
    }

    afterModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({ modalAddIsOpen: false });
    }

    addList(e) {
        let title = document.getElementById('title').value
        let description = document.getElementById('description').value
        console.log(title, description);
        e.preventDefault();
        this.setState({ modalAddIsOpen: false });
        let payload={}
        payload = {
            name: this.props.name,
            title,
            description,
        }
        console.log(payload);
        this.props.addCardData(payload)
    }

    openMoveModal({title,description}) {
        this.setState({ modalMoveIsOpen: true, title, description });
        setTimeout(function(event) {
            document.getElementById('editTitle').value = title
            document.getElementById('editDescription').value = description
        }, 200);
    }

    closeMoveModal() {
        this.setState({ modalMoveIsOpen: false });
    }

    editList(e) {
        let title = document.getElementById('editTitle').value
        let description = document.getElementById('editDescription').value
        let type = this.state.newListType
        console.log(title, description,type);
        e.preventDefault();
        this.setState({ modalMoveIsOpen: false });
        let payload = {
            name: this.props.name,
            oldTitle:this.state.title,
            oldDescription: this.state.description,
            newType: type,
            title,
            description,
        }
        console.log(payload);
        this.props.editCardData(payload)
    }

    deleteList(e) {
        let title = document.getElementById('editTitle').value
        let description = document.getElementById('editDescription').value
        let type = this.state.newListType
        console.log(title, description,type);
        e.preventDefault();
        this.setState({ modalMoveIsOpen: false });
        let payload = {
            name: this.props.name,
            oldTitle:this.state.title,
            oldDescription: this.state.description,
        }
        console.log(payload);
        this.props.deleteCardData(payload)
    }

    getType(e){
        this.setState({ newListType: e.target.value });
    }

    render() {
        let { name } = this.props
        return (
            <Container>
                <Header><MidPosition>{name}</MidPosition></Header>
                { this.state.modalAddIsOpen ? 
                    <Modal
                        isOpen={this.state.modalAddIsOpen}
                        onAfterOpen={this.afterModal}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel="Please Enter Details To Create A Card"
                    >
                        <h3 ref={subtitle => this.subtitle = subtitle}>Hi There!!!</h3>
                        <button onClick={this.closeModal}>close</button>
                        <div>I am a modal</div>
                        <form onSubmit={this.addList}>
                            <h4>Title</h4>
                            <input type='text' name='title' id='title' required />
                            <h4>Description</h4>
                            <input type='text' name='Description' id='description' required /><br />
                            <button>Submit</button>
                        </form>
                    </Modal>: null
                }
                <Modal
                    isOpen={this.state.modalMoveIsOpen}
                    onAfterOpen={this.afterModal}
                    onRequestClose={this.closeMoveModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h2 ref={subtitle => this.subtitle = subtitle}>Edit Portal</h2>
                    <button onClick={this.closeMoveModal}>close</button>
                    <div>Edit and then Enter Edit </div>
                    <form>
                        <h4>Title</h4>
                        <input type='text' name='title' id='editTitle' required/>
                        <h4>Description</h4>
                        <input type='text' name='Description' id='editDescription' required /><br />
                        <select id="typeData" onChange={this.getType}>
                            <option value="Todo"> Todo</option>
                            <option value="In Progress"> In Progress</option>
                            <option value="Done">Done</option>
                        </select>
                        <button onClick={this.editList}>EDIT</button>
                        <button onClick={this.deleteList}>DELETE</button>
                    </form >
                </Modal>
                <MidComponent>
                    {this.props.cards.map(val=>{
                        if(name===val.name){
                        return (<Cards onClick={()=>this.openMoveModal(val)}>
                                    <div style={{ margin: '6px' }}>{val.title}</div>
                                </Cards>)
                        }
                    })}
                </MidComponent>
                <Footer onClick={this.openModal}><MidPosition>Add Card</MidPosition></Footer>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        //cards: state.cardData,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addCardData: (payload) => dispatch(addCardData(payload)),
        editCardData: (payload) => dispatch(editCardData(payload)),
        deleteCardData: (payload) => dispatch(deleteCardData(payload))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(List)