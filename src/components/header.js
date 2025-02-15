import '../utils/styleSheets/header.css';
import { onAuthStateChanged } from 'firebase/auth';
import { removeUser,addUser } from '../utils/slices/userSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth } from '../utils/firebase';

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
            // User is signed in
            const { uid, email, displayName } = user;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
            navigate('/browse');
            } else {
            // User is signed out
            dispatch(removeUser());
            navigate('/');
            }
        });

        return () => unsubscribe();
        }, [navigate, dispatch]);

    return (
        <div className='header-container'>
            <img className="logo" src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt="Logo"/>
        </div>
    );
}

export default Header;