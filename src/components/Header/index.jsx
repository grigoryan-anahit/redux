import style from './header.module.css';


const Header = ({ isNav, toggleOpenNav }) => {
    const classes = ['fa'];
    if (isNav)
        classes.push('fa-times');
    else
        classes.push('fa-bars');

    return (
        <header className={style.header}>
            <div className={style.logoBlock}>
                <img src="https://www.mistral-bus.com/wp-content/uploads/2018/09/cropped-mistral-logo.png" alt="" />
            </div>
            <div className={isNav ? `${style.burger} ${style.open}` : style.burger} onClick={toggleOpenNav}>
                <i className={classes.join(' ')}></i>
            </div>
        </header>
    )
}
export default Header;