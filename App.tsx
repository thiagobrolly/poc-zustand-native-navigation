import { Text, StatusBar } from 'react-native';
import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
} from '@expo-google-fonts/roboto';
import { Routes } from '@routes/index';
import { ApolloProvider } from '@apollo/client';
import { useApolloClient } from './src/lib/apollo';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular });

  const { apolloClient } = useApolloClient()

  return (
    <ApolloProvider client={apolloClient}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Text>Carregando</Text>}
    </ApolloProvider>
  );
}
