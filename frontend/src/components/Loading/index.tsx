import { Spinner, Center } from 'native-base';

export const Loading = () => {
  return (
    <Center flex={1} >
      <Spinner color="green.500" size="lg" testID="loading-spinner"/>
    </Center>
  );
}