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
                <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/drink-cup-coffee-logo-design-template-801acb7d7238c767384d1283cc539be1_screen.jpg?ts=1594478075" alt="logo" />
            </div>
            <div className={isNav?`${style.burger} ${style.open}`:style.burger} onClick={toggleNavOpen}> 
             <i className={classes.join(' ')} ></i>
            </div>

        </header>
    )
}
export default Header;