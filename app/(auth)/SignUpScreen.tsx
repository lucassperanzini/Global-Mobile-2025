import { Input } from '@/Components/Input';
import { styles } from '@/app/(auth)/styles';
import { useAuth } from '@/context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Pressable, Text, View } from 'react-native';
import { stylesGlobal } from '../(onboarding)/styles';
import { PrimaryButton } from '@/Components/PrimmaryButton';

export default function SignUpScreen() {

const navigation = useNavigation<any>();
  const { signUp } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const [isLoadingSignUp, setIsLoadingSignUp] = useState<boolean>(false);



const handleSignUp = async () => {



  setShowErrorMessage(false);

  if (!name.trim() || !email.trim() || !password.trim()) {
    Alert.alert('Atenção', 'Preencha nome, email e senha.');
    return;
  }

  if (password.length < 6) {
    Alert.alert('Senha fraca', 'A senha deve ter pelo menos 6 caracteres.');
    return;
  }

  setIsLoadingSignUp(true);

  try {

    const isSignUpSuccessful = await signUp(name.trim(), email.trim(), password);

    if (isSignUpSuccessful) {
      setShowErrorMessage(false);

      setName('');
      setEmail('');
      setPassword('');

      Alert.alert("Sucesso", "Cadastrado com sucesso!!");

      navigation.replace('SignInScreen'); 
    } else {
      setShowErrorMessage(true);
    }
  } catch (error: any) {
    setShowErrorMessage(true);
    Alert.alert('Erro', 'Não foi possível criar sua conta. Tente novamente.');
  } finally {
    setIsLoadingSignUp(false);
  
  }
};


  return (
    <View style={stylesGlobal.container}>
      <View style={stylesGlobal.box}>
        <Text style={styles.title}>Crie sua conta</Text>
        <Text style={styles.subtitle}>Leva só 1 minuto.</Text>

        <Input
          placeholder="Digite seu nome"
          value={name}
          onChangeText={setName}
        />

        <Input
          placeholder="seuemail@exemplo.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Input
          placeholder="Criar senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

   

        <PrimaryButton disabled={isLoadingSignUp} onPress={handleSignUp} label={isLoadingSignUp ? 'Cadastrando...' : 'Criar conta'}/>

        {showErrorMessage && (
          <Text style={styles.errorText}>
            Não foi possível criar sua conta. Verifique os dados e tente novamente.
          </Text>
        )}

          <Pressable style={styles.bottomLink} onPress={() => navigation.replace('SignInScreen')}>
            <Text style={styles.bottomLinkText}>Já tem uma conta?</Text>
        </Pressable>

        <View style={styles.divider} />
      </View>
    </View>
  );
}
