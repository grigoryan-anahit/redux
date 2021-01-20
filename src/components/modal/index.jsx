import React from 'react';
import style from './modal.module.css';
import {dispatch} from '../../store/store';


class Modal extends  React.Component{
    render(){
        return (
              <div className={style.modal}>
                  <i className={`fa fa-times ${style.closeModal}`} onClick={()=>dispatch({type:'closeModal'})}></i>
            <h1>Modal Page</h1>
        </div>
        )
      
    }
}
export default Modal;