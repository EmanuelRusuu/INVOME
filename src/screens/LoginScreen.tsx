import React from 'react';
import AuthComponent from '../components/Auth';

export default function LoginScreen({navigation}) {
  const handleLogin = formData => {
  };

  const loginFields = [
    {name: 'email', placeholder: 'Email'},
    {name: 'password', placeholder: 'Password', secureTextEntry: true},
  ];

  return (
    <AuthComponent
      navigation={navigation}
      routeName="Login"
      onSubmit={handleLogin}
      actionText="LOG IN"
      fields={loginFields}
    />
  );
}
