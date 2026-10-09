// ============================================================
// Listify — App Entry Point
// ============================================================
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from './src/theme/ThemeContext';
import RootNavigator from './src/navigation';

const App: React.FC = () => {
    return (
        <SafeAreaProvider>
            <ThemeProvider>
                <NavigationContainer>
                    <StatusBar style="auto" />
                    <RootNavigator />
                </NavigationContainer>
            </ThemeProvider>
        </SafeAreaProvider>
    );
};

export default App;
