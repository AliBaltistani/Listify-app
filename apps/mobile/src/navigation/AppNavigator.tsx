import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ScreenPreviewSwitcher, ScreenName } from './ScreenPreviewSwitcher';

// Part 1 Screens
import { SplashScreen } from '../screens/SplashScreen';
import { OnboardingScreen } from '../screens/OnboardingScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { ForgotPasswordScreen } from '../screens/ForgotPasswordScreen';
import { OtpMethodScreen } from '../screens/OtpMethodScreen';
import { OtpVerificationScreen } from '../screens/OtpVerificationScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { ChatsScreen } from '../screens/ChatsScreen';
import { MyAdsScreen } from '../screens/MyAdsScreen';
import { AccountScreen } from '../screens/AccountScreen';

// Part 2 Screens
import { CategoryDetailsScreen } from '../screens/CategoryDetailsScreen';
import { ProductDetailsScreen } from '../screens/ProductDetailsScreen';
import { MessageGroupScreen } from '../screens/MessageGroupScreen';
import { MessageDetailScreen } from '../screens/MessageDetailScreen';
import { MyAdsDashboardScreen } from '../screens/MyAdsDashboardScreen';
import { SavedAdsScreen } from '../screens/SavedAdsScreen';
import { UserProfileScreen } from '../screens/UserProfileScreen';
import { EditProfileScreen } from '../screens/EditProfileScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

// Part 3 Screens
import { SearchScreen } from '../screens/SearchScreen';
import { PostAdCategoryScreen } from '../screens/PostAdCategoryScreen';
import { PostAdLocationScreen } from '../screens/PostAdLocationScreen';
import { PostAdStep1Screen } from '../screens/PostAdStep1Screen';
import { PostAdSpecsMobileScreen } from '../screens/PostAdSpecsMobileScreen';
import { PostAdSpecsVehicleScreen } from '../screens/PostAdSpecsVehicleScreen';
import { PostAdSpecsPropertyScreen } from '../screens/PostAdSpecsPropertyScreen';
import { PostAdStep2Screen } from '../screens/PostAdStep2Screen';
import { PostAdStep3Screen } from '../screens/PostAdStep3Screen';
import { PostAdSuccessScreen } from '../screens/PostAdSuccessScreen';

// Part 4 Screens & Modals
import { NotificationsScreen } from '../screens/NotificationsScreen';
import { FilterSortModal } from '../components/FilterSortModal';
import { ReportAdModal } from '../components/ReportAdModal';

export const AppNavigator: React.FC = () => {
    const [currentScreen, setCurrentScreen] = useState<ScreenName>('Home');
    const [selectedCategory, setSelectedCategory] = useState<string>('mobiles');

    // Modal Sheet States
    const [showFilterModal, setShowFilterModal] = useState(false);
    const [showReportModal, setShowReportModal] = useState(false);

    const renderScreen = () => {
        switch (currentScreen) {
            // Part 1
            case 'Splash':
                return <SplashScreen />;

            case 'Onboarding':
                return <OnboardingScreen />;

            case 'Login':
                return <LoginScreen />;

            case 'Register':
                return <RegisterScreen />;

            case 'ForgotPassword':
                return <ForgotPasswordScreen />;

            case 'OtpMethod':
                return <OtpMethodScreen />;

            case 'OtpVerification':
                return <OtpVerificationScreen />;

            case 'Home':
                return (
                    <HomeScreen
                        onSearchPress={() => setCurrentScreen('Search')}
                        onNotificationPress={() => setCurrentScreen('Notifications')}
                        onSavedAdsPress={() => setCurrentScreen('SavedAds')}
                        onFilterPress={() => setCurrentScreen('FilterSortModal')}
                        onCategoryPress={(cat) => {
                            setSelectedCategory(cat.toLowerCase());
                            setCurrentScreen('CategoryDetails');
                        }}
                        onProductPress={() => setCurrentScreen('ProductDetails')}
                        onPostAdPress={() => setCurrentScreen('PostAdCategory')}
                        onTabChange={(tab) => {
                            if (tab === 'chats') setCurrentScreen('MessageGroup');
                            if (tab === 'myads') setCurrentScreen('MyAdsDashboard');
                            if (tab === 'account') setCurrentScreen('Settings');
                        }}
                    />
                );

            // Part 2
            case 'CategoryDetails':
                return (
                    <CategoryDetailsScreen
                        onProductPress={() => setCurrentScreen('ProductDetails')}
                        onFilterPress={() => setCurrentScreen('FilterSortModal')}
                        onSearchPress={() => setCurrentScreen('Search')}
                        onNotificationPress={() => setCurrentScreen('Notifications')}
                        onTabChange={(tab) => {
                            if (tab === 'home') setCurrentScreen('Home');
                            if (tab === 'chats') setCurrentScreen('MessageGroup');
                            if (tab === 'myads') setCurrentScreen('MyAdsDashboard');
                            if (tab === 'account') setCurrentScreen('Settings');
                        }}
                    />
                );

            case 'ProductDetails':
                return (
                    <ProductDetailsScreen
                        onBackPress={() => setCurrentScreen('Home')}
                        onChatWithSeller={() => setCurrentScreen('MessageDetail')}
                        onSellerProfilePress={() => setCurrentScreen('UserProfile')}
                        onReportPress={() => setCurrentScreen('ReportAdModal')}
                    />
                );

            case 'MessageGroup':
                return (
                    <MessageGroupScreen
                        onBackPress={() => setCurrentScreen('Home')}
                        onSelectChat={() => setCurrentScreen('MessageDetail')}
                    />
                );

            case 'MessageDetail':
                return <MessageDetailScreen onBackPress={() => setCurrentScreen('MessageGroup')} />;

            case 'MyAdsDashboard':
                return (
                    <MyAdsDashboardScreen
                        onBackPress={() => setCurrentScreen('Home')}
                        onTabChange={(tab) => {
                            if (tab === 'home') setCurrentScreen('Home');
                            if (tab === 'chats') setCurrentScreen('MessageGroup');
                            if (tab === 'account') setCurrentScreen('Settings');
                        }}
                    />
                );

            case 'SavedAds':
                return (
                    <SavedAdsScreen
                        onBackPress={() => setCurrentScreen('Home')}
                        onProductPress={() => setCurrentScreen('ProductDetails')}
                    />
                );

            case 'UserProfile':
                return (
                    <UserProfileScreen
                        onBackPress={() => setCurrentScreen('Settings')}
                        onEditProfilePress={() => setCurrentScreen('EditProfile')}
                        onSignOut={() => setCurrentScreen('Login')}
                    />
                );

            case 'EditProfile':
                return (
                    <EditProfileScreen
                        onBackPress={() => setCurrentScreen('UserProfile')}
                        onSave={() => setCurrentScreen('UserProfile')}
                    />
                );

            case 'Settings':
                return (
                    <SettingsScreen
                        onBackPress={() => setCurrentScreen('Home')}
                        onNavigateToAccountProfile={() => setCurrentScreen('UserProfile')}
                        onSignOut={() => setCurrentScreen('Login')}
                    />
                );

            // Part 3
            case 'Search':
                return (
                    <SearchScreen
                        onBackPress={() => setCurrentScreen('Home')}
                        onSearchSubmit={() => setCurrentScreen('CategoryDetails')}
                    />
                );

            case 'PostAdCategory':
                return (
                    <PostAdCategoryScreen
                        onBackPress={() => setCurrentScreen('Home')}
                        onSelectCategory={(catId) => {
                            setSelectedCategory(catId);
                            setCurrentScreen('PostAdStep1');
                        }}
                    />
                );

            case 'PostAdLocation':
                return (
                    <PostAdLocationScreen
                        onBackPress={() => setCurrentScreen('PostAdStep1')}
                        onSelectLocation={() => setCurrentScreen('PostAdStep1')}
                    />
                );

            case 'PostAdStep1':
                return (
                    <PostAdStep1Screen
                        onBackPress={() => setCurrentScreen('PostAdCategory')}
                        onChangeCategory={() => setCurrentScreen('PostAdCategory')}
                        onChangeLocation={() => setCurrentScreen('PostAdLocation')}
                        onNextPress={() => {
                            if (selectedCategory === 'vehicles') setCurrentScreen('PostAdSpecsVehicle');
                            else if (selectedCategory === 'property') setCurrentScreen('PostAdSpecsProperty');
                            else setCurrentScreen('PostAdSpecsMobile');
                        }}
                    />
                );

            case 'PostAdSpecsMobile':
                return (
                    <PostAdSpecsMobileScreen
                        onBackPress={() => setCurrentScreen('PostAdStep1')}
                        onNextPress={() => setCurrentScreen('PostAdStep2')}
                    />
                );

            case 'PostAdSpecsVehicle':
                return (
                    <PostAdSpecsVehicleScreen
                        onBackPress={() => setCurrentScreen('PostAdStep1')}
                        onNextPress={() => setCurrentScreen('PostAdStep2')}
                    />
                );

            case 'PostAdSpecsProperty':
                return (
                    <PostAdSpecsPropertyScreen
                        onBackPress={() => setCurrentScreen('PostAdStep1')}
                        onNextPress={() => setCurrentScreen('PostAdStep2')}
                    />
                );

            case 'PostAdStep2':
                return (
                    <PostAdStep2Screen
                        onBackPress={() => setCurrentScreen('PostAdStep1')}
                        onNextPress={() => setCurrentScreen('PostAdStep3')}
                    />
                );

            case 'PostAdStep3':
                return (
                    <PostAdStep3Screen
                        onBackPress={() => setCurrentScreen('PostAdStep2')}
                        onEditAdDetails={() => setCurrentScreen('PostAdStep1')}
                        onPublishSuccess={() => setCurrentScreen('PostAdSuccess')}
                    />
                );

            case 'PostAdSuccess':
                return (
                    <PostAdSuccessScreen
                        onViewAdPress={() => setCurrentScreen('ProductDetails')}
                        onHomePress={() => setCurrentScreen('Home')}
                    />
                );

            // Part 4
            case 'Notifications':
                return (
                    <NotificationsScreen
                        onBackPress={() => setCurrentScreen('Home')}
                        onNotificationPress={() => setCurrentScreen('ProductDetails')}
                    />
                );

            case 'FilterSortModal':
                return (
                    <View style={{ flex: 1, backgroundColor: '#F8F9FA' }}>
                        <CategoryDetailsScreen
                            onProductPress={() => setCurrentScreen('ProductDetails')}
                        />
                        <FilterSortModal
                            visible={true}
                            onClose={() => setCurrentScreen('CategoryDetails')}
                        />
                    </View>
                );

            case 'ReportAdModal':
                return (
                    <View style={{ flex: 1, backgroundColor: '#F8F9FA' }}>
                        <ProductDetailsScreen
                            onBackPress={() => setCurrentScreen('Home')}
                            onChatWithSeller={() => setCurrentScreen('MessageDetail')}
                        />
                        <ReportAdModal
                            visible={true}
                            onClose={() => setCurrentScreen('ProductDetails')}
                        />
                    </View>
                );

            // Tabs
            case 'Chats':
                return (
                    <ChatsScreen
                        onTabChange={(tab) => {
                            if (tab === 'home') setCurrentScreen('Home');
                            if (tab === 'myads') setCurrentScreen('MyAdsDashboard');
                            if (tab === 'account') setCurrentScreen('Settings');
                        }}
                    />
                );

            case 'MyAds':
                return (
                    <MyAdsScreen
                        onTabChange={(tab) => {
                            if (tab === 'home') setCurrentScreen('Home');
                            if (tab === 'chats') setCurrentScreen('MessageGroup');
                            if (tab === 'account') setCurrentScreen('Settings');
                        }}
                    />
                );

            case 'Account':
                return (
                    <AccountScreen
                        onTabChange={(tab) => {
                            if (tab === 'home') setCurrentScreen('Home');
                            if (tab === 'chats') setCurrentScreen('MessageGroup');
                            if (tab === 'myads') setCurrentScreen('MyAdsDashboard');
                        }}
                    />
                );

            default:
                return <HomeScreen />;
        }
    };

    return (
        <View style={styles.container}>
            <ScreenPreviewSwitcher
                currentScreen={currentScreen}
                onSelectScreen={(screen) => setCurrentScreen(screen)}
            />
            {renderScreen()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
});
