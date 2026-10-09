// ============================================================
// Listify — Messages Stack Navigator
// ============================================================
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MessagesStackParamList } from './types';

import MessagePage from '../screens/MessagePage';
import MessageGroupPage from '../screens/MessageGroupPage';

const Stack = createStackNavigator<MessagesStackParamList>();

const MessagesStack: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MessagePage" component={MessagePage} />
            <Stack.Screen name="MessageGroupPage" component={MessageGroupPage} />
        </Stack.Navigator>
    );
};

export default MessagesStack;
