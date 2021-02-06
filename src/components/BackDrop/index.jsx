import style from './backdrop.module.css';
const BackDrop = ({toggleOpenNav}) => {
    return (
        <div className={style.backDrop} onClick={ toggleOpenNav}>

        </div>
    )
}

export default BackDrop