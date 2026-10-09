// ============================================================
// Listify — Post Ad Stack Navigator (Multi-Step Wizard)
// ============================================================
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PostAdStackParamList } from './types';

import PostAnAdSelectCategory from '../screens/PostAnAdSelectCategory';
import PostAnAdStep1PhotosBasicInfo from '../screens/PostAnAdStep1PhotosBasicInfo';
import PostAnAdStep1PhotosBasicInfo2 from '../screens/PostAnAdStep1PhotosBasicInfo2';
import PostAnAdStep1PhotosBasicInfo3 from '../screens/PostAnAdStep1PhotosBasicInfo3';
import PostAnAdStep1PhotosBasicInfo4 from '../screens/PostAnAdStep1PhotosBasicInfo4';
import PostAnAdMobilesTabletsDetailsSpecs from '../screens/PostAnAdMobilesTabletsDetailsSpecs';
import PostAnAdVehiclesCarsDetailsSpecs from '../screens/PostAnAdVehiclesCarsDetailsSpecs';
import PostAnAdPropertyForSaleRentDetailsSpecs from '../screens/PostAnAdPropertyForSaleRentDetailsSpecs';
import PostAnAdStep2DescriptionPricing from '../screens/PostAnAdStep2DescriptionPricing';
import PostAnAdSetLocation from '../screens/PostAnAdSetLocation';
import PostAnAdStep3ReviewPublish from '../screens/PostAnAdStep3ReviewPublish';
import PostAnAdSuccessScreen from '../screens/PostAnAdSuccessScreen';

const Stack = createStackNavigator<PostAdStackParamList>();

const PostAdStack: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="PostAnAdSelectCategory" component={PostAnAdSelectCategory} />
            <Stack.Screen name="PostAnAdStep1PhotosBasicInfo" component={PostAnAdStep1PhotosBasicInfo} />
            <Stack.Screen name="PostAnAdStep1PhotosBasicInfo2" component={PostAnAdStep1PhotosBasicInfo2} />
            <Stack.Screen name="PostAnAdStep1PhotosBasicInfo3" component={PostAnAdStep1PhotosBasicInfo3} />
            <Stack.Screen name="PostAnAdStep1PhotosBasicInfo4" component={PostAnAdStep1PhotosBasicInfo4} />
            <Stack.Screen name="PostAnAdMobilesTabletsDetailsSpecs" component={PostAnAdMobilesTabletsDetailsSpecs} />
            <Stack.Screen name="PostAnAdVehiclesCarsDetailsSpecs" component={PostAnAdVehiclesCarsDetailsSpecs} />
            <Stack.Screen name="PostAnAdPropertyForSaleRentDetailsSpecs" component={PostAnAdPropertyForSaleRentDetailsSpecs} />
            <Stack.Screen name="PostAnAdStep2DescriptionPricing" component={PostAnAdStep2DescriptionPricing} />
            <Stack.Screen name="PostAnAdSetLocation" component={PostAnAdSetLocation} />
            <Stack.Screen name="PostAnAdStep3ReviewPublish" component={PostAnAdStep3ReviewPublish} />
            <Stack.Screen name="PostAnAdSuccessScreen" component={PostAnAdSuccessScreen} />
        </Stack.Navigator>
    );
};

export default PostAdStack;
