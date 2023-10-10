// AuthComponent.js
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {globalStyles} from '../assets/styles/globalStyles';

const AuthComponent = ({
  navigation,
  routeName,
  onSubmit,
  actionText,
  fields,
}) => {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => ({...acc, [field.name]: ''}), {}),
  );

  const handleAction = () => {
    onSubmit(formData);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={[globalStyles.logoTitle, styles.logoTitle]}>INVOME</Text>
        <Image
          style={styles.logoImage}
          source={require('../assets/images/invome.png')}
        />
      </View>
      <View>
        {fields.map(field => (
          <TextInput
            key={field.name}
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChangeText={text =>
              setFormData({...formData, [field.name]: text})
            }
            style={styles.input}
            placeholderTextColor={'rgba(0, 0, 0, 0.25)'}
            secureTextEntry={field.secureTextEntry || false}
          />
        ))}
        <TouchableOpacity style={styles.actionButton} onPress={handleAction}>
          <Text style={styles.actionButtonText}>{actionText}</Text>
        </TouchableOpacity>
        <Text
          onPress={() =>
            navigation.navigate(routeName === 'Login' ? 'Signup' : 'Login')
          }
          style={styles.textCenter}>
          {routeName === 'Login'
            ? "Don't have an account? Create account"
            : 'Already have an account? Log in'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 35,
    paddingTop: 70,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: Dimensions.get('window').height,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  logoTitle: {
    marginBottom: -45,
    marginLeft: 20,
  },
  logoImage: {
    width: '95%',
    marginBottom: 20,
  },
  textCenter: {
    textAlign: 'center',
  },
  actionButton: {
    backgroundColor: 'rgba(137, 152, 120, 0.25)',
    width: '100%',
    height: 42,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    marginTop: 38,
  },
  actionButtonText: {
    color: 'rgba(0, 0, 0, 0.40)',
    fontFamily: 'Arial',
    fontSize: 13,
    lineHeight: 13,
    textAlign: 'center',
  },
});

export default AuthComponent;
