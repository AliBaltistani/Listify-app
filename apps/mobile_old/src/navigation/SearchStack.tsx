// ============================================================
// Listify — Search Stack Navigator
// ============================================================
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchStackParamList } from './types';

import SearchPage from '../screens/SearchPage';
import FilterSortBottomSheet from '../screens/FilterSortBottomSheet';
import ProductDetailsPage from '../screens/ProductDetailsPage';

const Stack = createStackNavigator<SearchStackParamList>();

const SearchStack: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SearchPage" component={SearchPage} />
            <Stack.Screen
                name="FilterSortBottomSheet"
                component={FilterSortBottomSheet}
                options={{ presentation: 'modal' }}
            />
            <Stack.Screen name="ProductDetailsPage" component={ProductDetailsPage} />
        </Stack.Navigator>
    );
};

export default SearchStack;
