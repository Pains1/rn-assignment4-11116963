import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home', { name, email });
  };

  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>Jobizz</Text>
      <Text style={styles.welcome}>Welcome Back 👋</Text>
      <Text style={styles.subtitle}>Let's log in. Apply to jobs!</Text>
      </View>

      <TextInput 
        style={styles.input} 
        placeholder="Name" 
        value={name}
        onChangeText={setName}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>

      <Text style={styles.orContinue}>----Or continue with----</Text>

      <View style={styles.socialLoginContainer}>
        <Image source={require('../../assets/apple.png')} style={styles.socialIcon} />
        <Image source={require('../../assets/Google.png')} style={styles.socialIcon} />
        <Image source={require('../../assets/facebook.jpg')} style={styles.socialIcon} />
      </View>

      <Text style={styles.register}>Haven’t an account? <Text style={styles.registerLink}>Register</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexdirection:'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center' ,
    padding: 20,
    backgroundColor: '#F5F5F5'
  },
  header:{
    flexdirection: 'column',
    textAlign: 'left',
    paddingVertical: 10,
    

  },
  title: {
    flexDirection: 'row',
    alignItems: 'left' ,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#483d8b',
    
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3A3A3A',
    marginTop: 10,
    marginBottom:10,
  },
  subtitle: {
    fontSize: 16,
    color: '#7A7A7A',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,

  },
  orContinue: {
    marginTop: 20,
    marginBottom: 10,
    color: '#7A7A7A',
  },
  socialLoginContainer: {
    paddingHorizontal:1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 250,
    marginBottom: 30,
    marginTop:20,
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
  register: {
    color: '#7A7A7A',
  },
  registerLink: {
    color: '#007BFF',
  },
});

export default LoginScreen;