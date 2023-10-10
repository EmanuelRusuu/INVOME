import React from 'react';
import AuthComponent from '../components/Auth';

export default function SignupScreen({navigation}) {
  const handleSignup = formData => {};

  const signupFields = [
    {name: 'firstName', placeholder: 'First Name'},
    {name: 'lastName', placeholder: 'Last Name'},
    {name: 'email', placeholder: 'Email'},
    {name: 'password', placeholder: 'Password', secureTextEntry: true},
    {name: 'familyRole', placeholder: 'Role in Family'},
    {name: 'familyCode', placeholder: 'Family Code'},
  ];

  return (
    <AuthComponent
      navigation={navigation}
      routeName="Signup"
      onSubmit={handleSignup}
      actionText="SIGN UP"
      fields={signupFields}
    />
  );
}
