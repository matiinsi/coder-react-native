import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native'
import { colors } from '../constants/colors'
import React, {useState, useEffect} from 'react'
import { useRegisterMutation } from '../services/authServices'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import { registerSchema } from '../validations/registerSchema'

const Register = ({navigation}) => {

  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputRepeatPassword, setInputRepeatPassword] = useState('');

  const [triggerPost, result] = useRegisterMutation();
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {

    if (result.isSuccess) {

      dispatch(setUser({
        email: result.data.email,
        idToken: result.data.idToken,
      }))

      navigation.navigate('Login');

    } else {
      setError(result.error?.data?.error?.message);
    }
  }, [result]);

  const handleChangeInputEmail = (text) => {
    setInputEmail(text);
  }

  const handleChangeInputPassword = (text) => {
    setInputPassword(text);
  }

  const handleChangeInputRepeatPassword = (text) => {
    setInputRepeatPassword(text);
  }

  const handleSubmit = () => {

    try {
      const data = {
        email: inputEmail,
        password: inputPassword,
        confirmPassword: inputRepeatPassword,
      }
  
      registerSchema.validate(data).then(() => {
        setError("");
        triggerPost(data);
      }).catch((error) => {
        setError(error.message);
      });
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <View style={styles.loginContainer}>
      <View style={styles.loginRow}>
        <View>
          <Image source={require('../../assets/signin.png')} style={{ width: 200, height: 200 }} />
        </View>
        <View style={styles.loginContainerText}>
          <Text style={styles.loginTitle}>Bienvenid@</Text>
          <Pressable style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>¿Ya tienes cuenta?. Inicia sesión <Text style={styles.loginTextLink}>aquí</Text></Text>
          </Pressable>
          <View style={styles.formContainer}>
            {error && <Text style={styles.inputError}>{error}</Text>}
            <View style={styles.formContainerGroup}>
              <TextInput 
                style={styles.input}
                onChangeText={handleChangeInputEmail}
                value={inputEmail}
                placeholder='Email'
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </View>
            <View style={styles.formContainerGroup}>
              <TextInput 
                style={styles.input}
                onChangeText={handleChangeInputPassword}
                value={inputPassword}
                placeholder='Contraseña'
                secureTextEntry={true}
              />
            </View>
            <View style={styles.formContainerGroup}>
              <TextInput 
                style={styles.input}
                onChangeText={handleChangeInputRepeatPassword}
                value={inputRepeatPassword}
                placeholder='Repetir Contraseña'
                secureTextEntry={true}
              />
            </View>
            <View style={styles.formContainerGroup}>
              <Pressable style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Registrar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  loginContainer: {
    padding: 20,
    backgroundColor: colors.white,
    borderRadius: 10,
    margin: 20,
  },
  loginRow: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  loginContainerText: {
    marginTop: 20
  },
  loginTitle: { 
    fontSize: 30, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    color: colors.blue,
    marginBottom: 20,
  },
  loginLink: {
    marginTop: 0,
  },
  loginText: {
    color: colors.black,
    fontSize: 16,
  },
  loginTextLink: {
    color: colors.blue,
    fontSize: 16,
  },
  formContainer: {
    marginTop: 20,
  },
  formContainerGroup: {
    marginBottom: 20,
  },
  inputError: {
    backgroundColor: colors.red,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    textAlign: 'center',
    color: colors.white,
    
  },
  input: {
    borderRadius: 10,
    height: 40,
    borderColor: colors.grayDark,
    borderWidth: 1,
    width: '100%',
    padding: 10,
  },
  button: {
    backgroundColor: colors.blue,
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
  }

})