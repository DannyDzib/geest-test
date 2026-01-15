import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ModalProvider } from './src/components/modal';
import Home from './src/pages/home';

export default function App() {
  return (
    <ModalProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }} edges={['top']}>
          <Home />
        </SafeAreaView>
      </SafeAreaProvider>
    </ModalProvider>
  );
}
