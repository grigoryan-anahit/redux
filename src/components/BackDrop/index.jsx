import style from './backdrop.module.css';


const BackDrop=({toggleNavOpen})=>{
    
    return (
        <div className={style.backDrop} onClick={toggleNavOpen}>

        </div>
    )
}
export default BackDrop;
