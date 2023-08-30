import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service'


export default function NavBar({ user, setUser }) {
    function handleLogOut() {
        userService.logOut();

        setUser(null);
    }

    return (
        <nav><Link to='/'>Home</Link>
        &nbsp; | &nbsp;
        <Link to='/orders/history'>Order History</Link>
        &nbsp; | &nbsp;
        <Link to='/orders/new'>New Order</Link>
        &nbsp;&nbsp; <span>Welcome, {user?user.name:''}</span>
        &nbsp;&nbsp;
        <Link to='' onClick={handleLogOut}>
            Log Out
        </Link>
        </nav>
    );
}