import '../utils/styleSheets/header.css';
import { onAuthStateChanged } from 'firebase/auth';
import { removeUser,addUser } from '../utils/slices/userSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth } from '../utils/firebase';
import { LOGO } from '../utils/constants';

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
            <img className="logo" src={LOGO} alt="Logo"/>
        </div>
    );
}

export default Header;