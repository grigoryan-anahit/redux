import style from './header.module.css';

const Header=({isNav,toggleNavOpen})=>{
    const classes=['fa'];
    if(isNav){
        classes.push('fa-times');
    }
    else {
        classes.push('fa-bars');
    }
    return (
        <header className={style.header}>
            <div className={style.logoBlock}>
                <img src="https://img2.freepng.ru/20180212/kkq/kisspng-cafe-logo-restaurant-coffee-house-logo-vector-5a81718b398aa2.2858583815184326512357.jpg" alt="logo" />
            </div>
            <div className={isNav?`${style.burger} ${style.open}`:style.burger} onClick={toggleNavOpen}> 
             <i className={classes.join(' ')} ></i>
            </div>

        </header>
    )
}
export default Header;