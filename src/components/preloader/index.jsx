import spinner from '../../assets/images/spinner.gif';
import style from './preloader.module.css';
 
const Preloader=()=>{
    return(
        <div>
            <img src={spinner} alt='loading' className={style.spinner} />
        </div>
    )
}
export default Preloader;