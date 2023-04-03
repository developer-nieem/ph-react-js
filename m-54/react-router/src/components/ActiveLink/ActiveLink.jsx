
import { NavLink } from 'react-router-dom';
import './ActiveLink.css'
const ActiveLink = ({id, children}) => {
    return (
        <NavLink
                    to={id}
                    className={({isActive}) =>  isActive ? "active": " "
                    }
                  >
                   {children}
                  </NavLink>
    );
};

export default ActiveLink;