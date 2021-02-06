import styles from './preloader.module.css';
// import icon from '../../assets/images/spinner.gif';
const Preloader =() =>{
    return (
        <div className={styles.spinner}>
            <img src={"https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif"} alt="Loading..."/>
        </div>
    )
}

export default Preloader;