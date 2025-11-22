import { Input } from '@/Components/Input';
import { styles } from '@/app/(auth)/styles';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Pressable, Text, View } from 'react-native';
import { stylesGlobal } from '../(onboarding)/styles';
import { PrimaryButton } from '@/Components/PrimmaryButton';

export default function SignInScreen() {
  const router = useRouter();
  const { signIn } = useAuth();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoadingSignIn, setIsLoadingSignIn] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleSignIn = async () => {
    setShowErrorMessage(false);

    if (!email.trim() || !password.trim()) {
      Alert.alert('Atenção', 'Preencha e-mail e senha.');
      return;
    }

    setIsLoadingSignIn(true);
    const ok = await signIn(email.trim(), password);
    setIsLoadingSignIn(false);

    if (ok) {
      router.replace('../(onboarding)/Goal');
    } else {
      setShowErrorMessage(true);
    }
  };

  return (
    <View style={stylesGlobal.container}>
      <View style={stylesGlobal.box}>
        <Text style={styles.title}>Entrar</Text>
        <Text style={styles.subtitle}>Bem-vindo de volta.</Text>

     
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>E-mail</Text>
          <Input
            placeholder="seuemail@exemplo.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

    
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Senha</Text>
          <View style={styles.passwordWrapper}>
            <Input
              placeholder="Digite sua senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <Pressable
              onPress={() => setShowPassword(prev => !prev)}
              style={styles.passwordToggle}
            >
              <Text style={styles.passwordToggleText}>
                {showPassword ? 'Ocultar' : 'Mostrar'}
              </Text>
            </Pressable>
          </View>
        </View>


        <PrimaryButton label={isLoadingSignIn ? 'Entrando...' : 'Entrar'} onPress={handleSignIn} disabled={isLoadingSignIn} />


        {showErrorMessage && (
          <Text style={styles.errorText}>
            Não foi possível entrar. Verifique suas credenciais.
          </Text>
        )}

        <View style={styles.divider} />
      </View>
    </View>
  );
}
