// ============================================================
// Listify — Profile Stack Navigator
// ============================================================
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileStackParamList } from './types';

import UserProfile from '../screens/UserProfile';
import EditProfile from '../screens/EditProfile';
import Settings from '../screens/Settings';
import MyAdsSellerDashboard from '../screens/MyAdsSellerDashboard';
import SavedAdsFavorites from '../screens/SavedAdsFavorites';
import NotificationsActivityFeed from '../screens/NotificationsActivityFeed';
import SafetyModerationReportSheet from '../screens/SafetyModerationReportSheet';

const Stack = createStackNavigator<ProfileStackParamList>();

const ProfileStack: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="UserProfile" component={UserProfile} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="MyAdsSellerDashboard" component={MyAdsSellerDashboard} />
            <Stack.Screen name="SavedAdsFavorites" component={SavedAdsFavorites} />
            <Stack.Screen name="NotificationsActivityFeed" component={NotificationsActivityFeed} />
            <Stack.Screen
                name="SafetyModerationReportSheet"
                component={SafetyModerationReportSheet}
                options={{ presentation: 'modal' }}
            />
        </Stack.Navigator>
    );
};

export default ProfileStack;
