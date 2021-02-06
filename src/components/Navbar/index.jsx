import style from './navbar.module.css';
import { NavLink } from 'react-router-dom';


const Navbar = ({isNav , navbarItems}) => {
    const classes = [style.navbar];
    
    if (isNav)
        classes.push(style.open);

    const navLinks = navbarItems.map(item => {
        return (
            <li className={style.nav_item} key={item.path}>
                <NavLink to={item.path}
                    className={style.nav_link}
                    activeClassName={`${style.nav_link} ${style.active}`}
                    exact={item.exact}
                >
                    {item.title}
                </NavLink>
            </li>
        )
    })



    return (
        <nav className={classes.join(' ')}>
            <ul className={style.nav_list}>
                {navLinks}
            </ul>
        </nav>
    )

}



export default Navbar;