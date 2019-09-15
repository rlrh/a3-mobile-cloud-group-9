import { Redirect } from 'react-router';
import React, { useEffect } from 'react';

import { useAuth } from '../state/useAuth';

const SignInCallback = ({ location }) => {
  const { signIn } = useAuth();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const accessToken = searchParams.get('access_token');
    console.log('Your Spotify access token is: ' + accessToken);
    signIn(accessToken);
  }, []);

  return <Redirect to="/" />;
};
export default SignInCallback;
