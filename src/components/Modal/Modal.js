import React from 'react'
import './Modal.scss'
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal');
class Modal extends React.Component {
    constructor(props) {
        super(props);
        // We create an element div for this modal
        this.element = document.createElement('div');
    }
    // We append the created div to the div#modal
    componentDidMount() {
        modalRoot.appendChild(this.element);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.element);
    }

    
    content = () => {
        return (
            <div className="my-modal vw-100 vh-100 d-flex justify-content-center align-items-center">
                <div className="modal-content2">
                    <h1>Heading</h1>
                    <p>Lorem ipsum </p>
                    <i className="exitIcon fas fa-times"
                        onClick={this.props.toggleModal}></i>

                </div>
            </div>
        )
    }
    render() {
        return createPortal(this.content(), this.element);
    }
}
export default Modal;