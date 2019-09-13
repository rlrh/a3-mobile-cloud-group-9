import { Redirect } from 'react-router';
import React from 'react';

import { useAuth } from '../hooks/useAuth';

const SignOut = ({ match }) => {
  const { signOut } = useAuth();

  signOut();

  return <Redirect to={`/room/${match.params.roomId}`} />;
};
export default SignOut;
