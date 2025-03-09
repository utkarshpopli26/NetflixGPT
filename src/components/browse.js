import Header from "./header";
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { removeUser } from "../utils/slices/userSlice";
import '../utils/styleSheets/browse.css';
import { useDispatch, useSelector } from "react-redux";
import useMovies from "../hooks/useMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearchPage from "./GptSearchPage";
import { toggleGptView } from "../utils/slices/gptSlice";

const Browse = () => {

    const dispatch = useDispatch();
    const IsGptPage = useSelector((store) => store.gpt?.toggleGptViewState);

    useMovies();

    const toggleView = () => {
        dispatch(toggleGptView());
    } 

    const HandleLogout = () => {
        signOut(auth).then(() => {
            dispatch(removeUser());
          }).catch((error) => {
            // An error happened.
          });
    }   

    return (
        <div className="browse-container">
            <div className="browse-header">
                <div>
                    <Header/>
                </div>
                <div className="sign-out-div">
                    <button onClick={toggleView} className="gpt-btn">GPT Search</button>
                    <button onClick={HandleLogout} className="sign-out-btn">Sign Out</button>
                </div>
            </div>
            {IsGptPage ? ( <GptSearchPage/>) : (<><MainContainer/><SecondaryContainer/></>)}
        </div>
    );
}

export default Browse;