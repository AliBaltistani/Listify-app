// ============================================================
// Listify — Auth Stack Navigator
// ============================================================
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackParamList } from './types';

// Screen imports
import SplashScreen from '../screens/SplashScreen';
import SplashScreen2 from '../screens/SplashScreen2';
import SplashScreen3 from '../screens/SplashScreen3';
import SplashScreen4 from '../screens/SplashScreen4';
import LoginPage from '../screens/LoginPage';
import RegisterPage from '../screens/RegisterPage';
import EmailOTPPage from '../screens/EmailOTPPage';
import EmailOTPVerification from '../screens/EmailOTPVerification';
import PhoneOTPPage from '../screens/PhoneOTPPage';
import PhoneOTPVerification from '../screens/PhoneOTPVerification';
import ResetPasswordPage from '../screens/ResetPasswordPage';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack: React.FC = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="SplashScreen"
        >
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="SplashScreen2" component={SplashScreen2} />
            <Stack.Screen name="SplashScreen3" component={SplashScreen3} />
            <Stack.Screen name="SplashScreen4" component={SplashScreen4} />
            <Stack.Screen name="LoginPage" component={LoginPage} />
            <Stack.Screen name="RegisterPage" component={RegisterPage} />
            <Stack.Screen name="EmailOTPPage" component={EmailOTPPage} />
            <Stack.Screen name="EmailOTPVerification" component={EmailOTPVerification} />
            <Stack.Screen name="PhoneOTPPage" component={PhoneOTPPage} />
            <Stack.Screen name="PhoneOTPVerification" component={PhoneOTPVerification} />
            <Stack.Screen name="ResetPasswordPage" component={ResetPasswordPage} />
        </Stack.Navigator>
    );
};

export default AuthStack;
