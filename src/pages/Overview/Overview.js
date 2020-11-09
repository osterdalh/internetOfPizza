import React from 'react'

import PageHeader from '../../components/PageHeader/PageHeader'
import CurrentProcess from '../../components/CurrentProcess/CurrentProcess'
import Modal from '../../components/Modal/Modal'








class OverView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        }
    }

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    };

    render() {
        const { showModal } = this.state;
        return (
            <div>
                <PageHeader title="Overview" />
                <CurrentProcess></CurrentProcess>
                <button
                    
                    onClick={this.toggleModal}
                >
                    Open
                </button>
                {
                    showModal ? (
                        <Modal toggleModal = {this.toggleModal}>
                            <div className="my-modal vw-100 vh-100 d-flex justify-content-center align-items-center">
                            <div className="modal-content2">
                                    <h1>Heading</h1>
                                    <p>Lorem ipsum </p>
                                    <button
                                        className="modal-close"
                                        onClick={this.toggleModal}
                                    >X</button>
                                </div>
                            </div>
                        </Modal>
                    ) : null
                }



            </div>
        )
    }

}

export default OverView