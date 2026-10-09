// ============================================================
// Listify — Root Navigator (Auth vs Main)
// ============================================================
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types';

import AuthStack from './AuthStack';
import MainTabs from './MainTabs';

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
    // TODO: Check auth state from Zustand store to determine initial route
    const isAuthenticated = false;

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {!isAuthenticated ? (
                <Stack.Screen name="Auth" component={AuthStack} />
            ) : (
                <Stack.Screen name="Main" component={MainTabs} />
            )}
        </Stack.Navigator>
    );
};

export default RootNavigator;
