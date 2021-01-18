import style from './backdrop.module.css';
import {dispatch} from '../../store/store'

const BackDrop=()=>{
    return (
        <div className={style.backDrop} onClick={()=>dispatch({type:'toggleNavOpen'})}>

        </div>
    )
}
export default BackDrop;
