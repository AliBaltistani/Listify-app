// ============================================================
// Listify — Home Stack Navigator
// ============================================================
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeStackParamList } from './types';

import Homepage from '../screens/Homepage';
import Category_DetailsPage from '../screens/Category_DetailsPage';
import ProductDetailsPage from '../screens/ProductDetailsPage';

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStack: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Homepage" component={Homepage} />
            <Stack.Screen name="Category_DetailsPage" component={Category_DetailsPage} />
            <Stack.Screen name="ProductDetailsPage" component={ProductDetailsPage} />
        </Stack.Navigator>
    );
};

export default HomeStack;
