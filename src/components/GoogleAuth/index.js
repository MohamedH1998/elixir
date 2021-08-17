import React, { useEffect, useRef, useCallback } from 'react';
import { connect } from 'react-redux';
import { BiLogInCircle } from 'react-icons/bi' 
import { FcGoogle } from 'react-icons/fc'
import { Link } from "react-router-dom";


import { signIn, signOut } from '../../redux/Shopping/shoppingActions';

import './GoogleAuth.css'
 
const GoogleAuth = ({signIn, signOut, isSignedIn}) => {
  const auth = useRef('');
  const onAuthChange = useCallback(
    (isSignedIn) => {
      if (isSignedIn) {
        signIn(auth.current.isSignedIn.get());
      } else {
        signOut();
      }
    },
    [signIn, signOut]
  );
  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
          '421563396582-fnjv24dpj0ftjg4f0uhnm2s7qf8ivics.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          auth.current = window.gapi.auth2.getAuthInstance();
          onAuthChange(auth.current.isSignedIn.get());
          auth.current.isSignedIn.listen(onAuthChange);
        });
    });
  }, [onAuthChange]);

  const onSignInClick = () => {
    auth.current.signIn();
  };
  const onSignOutClick = () => {
    auth.current.signOut();

  };
  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <Link to="/" onClick={onSignOutClick} className="google-sign-out">
          <FcGoogle className="nav-icon"/> Sign Out
        </Link>
      );
    } else {
      return (
        <i onClick={onSignInClick} className="google-sign-in">
          <BiLogInCircle className="nav-icon"/> Sign In
        </i>
      );
    }
  };
  return <div>{renderAuthButton()}</div>;
};


const mapDispatchToProps = dispatch => {
    return {
        signIn: (userId) => dispatch(signIn(userId)),
        signOut: () => dispatch(signOut())
    }
}


const mapStateToProps = (state) => {
  return { isSignedIn: state.shop.isSignedIn };
};
export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);