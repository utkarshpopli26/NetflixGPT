import Header from "./header";
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/slices/userSlice";
import '../utils/styleSheets/browse.css';

const Browse = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const HandleLogout = () => {
        signOut(auth).then(() => {
            dispatch(removeUser());
            navigate('/');
          }).catch((error) => {
            // An error happened.
          });
    }    

    return (
        <div className="browse-container">
            <div>
            <Header/>
            </div>
            <button onClick={HandleLogout} className="sign-out-button">Sign Out</button>
        </div>
    );
}

export default Browse;