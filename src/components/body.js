
import Login from "./login";
import '../utils/styleSheets/common.css';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../utils/firebase';
import {useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/slices/userSlice";

const Body = () => {

    const Navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in
            const {uid,email,displayName} = user;

            Navigate('/browse');
            dispatch(addUser({uid: uid, email: email, displayName: displayName}));
           
          } else {
            // User is signed out
            Navigate('/');
            dispatch(removeUser());
          }
        });
      }, [Navigate, dispatch]);

    return (
        <div >
            <div>
                <Login/>
            </div>
            
        </div>
    );
}

export default Body;