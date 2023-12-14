import { useContext } from 'react';
import { Text, VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { Header } from './components/Header';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { RegisterContext } from '@contexts/RegisterProvider';

import { AuthNavigatorRoutesProps } from '@routes/app.routes';
import { usersGetAll } from '@storage/users/usersGetALL';

export const Home = () => {
  const { selectedTypeRegister } = useContext(RegisterContext);
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

  const handleUserRegister = () => {
    selectedTypeRegister('Cadastrar usuário');

    navigate('userRegister');
  }

  const handleAdvertiserRegister = () => {
    selectedTypeRegister('Cadastrar anunciante');

    navigate('userRegister');
  }

  const handleLogin = async () => {
    const users = await usersGetAll();

    console.log(users);
    navigate('classified');
  }

  return (
    <VStack>
      <Header title="Pega Job, Dev!" />

      <VStack px={6} pt={10}>
        
        <VStack space={4}>
          <Text fontFamily="heading" fontSize="md" color="gray.700">Faça seu login</Text>

          <Input placeholder="E-mail" />
          <Input placeholder="Senha" />

          <Button title="Acessar" onPress={handleLogin}/>
        </VStack>

        <VStack space={4} pt={10}>
          <Text fontFamily="heading" fontSize="md" color="gray.700">Crie uma conta</Text>

          <Button 
            title="Cadastrar usuário"
            onPress={handleUserRegister}  
          />

          <Button 
            title="Cadastrar anunciante"
            onPress={handleAdvertiserRegister}  
          />
        </VStack>

      </VStack>
    </VStack>
  )
}