import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { logout } from '../../store/actions/appActions';

const Logout = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(logout());
    });
    
    return <Redirect to="/" />
}

export default Logout;