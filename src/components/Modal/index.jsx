import React from 'react';
import ReactDOM from 'react-dom'
import style from './modal.module.css';

class Modal extends React.Component {
    state = {
        newPortal: document.createElement('div')
    }
    componentDidMount() {
        document.body.appendChild(this.state.newPortal);
    }
    componentWillUnmount() {
        document.body.removeChild(this.state.newPortal);
    }
    render() {
        const { closeModal } = this.props;
        return ReactDOM.createPortal(
            <div className={style.modal}>
                <i className={`fa fa-times ${style.closeModal}`} onClick={() => closeModal()}></i>
                <div className={style.showInfo}>
                    {this.props.children}
                </div>

            </div>,
            this.state.newPortal

        )
    }
}

export default Modal;