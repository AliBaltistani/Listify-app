// ============================================================
// Listify — Navigation Type Definitions
// ============================================================

export type AuthStackParamList = {
    SplashScreen: undefined;
    SplashScreen2: undefined;
    SplashScreen3: undefined;
    SplashScreen4: undefined;
    LoginPage: undefined;
    RegisterPage: undefined;
    EmailOTPPage: { email: string };
    EmailOTPVerification: { email: string; code?: string };
    PhoneOTPPage: { phone: string };
    PhoneOTPVerification: { phone: string; code?: string };
    ResetPasswordPage: undefined;
};

export type HomeStackParamList = {
    Homepage: undefined;
    Category_DetailsPage: { categoryId: string; categoryName: string };
    ProductDetailsPage: { listingId: string };
};

export type SearchStackParamList = {
    SearchPage: undefined;
    FilterSortBottomSheet: undefined;
    ProductDetailsPage: { listingId: string };
};

export type PostAdStackParamList = {
    PostAnAdSelectCategory: undefined;
    PostAnAdStep1PhotosBasicInfo: { categoryId: string };
    PostAnAdStep1PhotosBasicInfo2: { categoryId: string };
    PostAnAdStep1PhotosBasicInfo3: { categoryId: string };
    PostAnAdStep1PhotosBasicInfo4: { categoryId: string };
    PostAnAdMobilesTabletsDetailsSpecs: { categoryId: string };
    PostAnAdVehiclesCarsDetailsSpecs: { categoryId: string };
    PostAnAdPropertyForSaleRentDetailsSpecs: { categoryId: string };
    PostAnAdStep2DescriptionPricing: undefined;
    PostAnAdSetLocation: undefined;
    PostAnAdStep3ReviewPublish: undefined;
    PostAnAdSuccessScreen: undefined;
};

export type MessagesStackParamList = {
    MessagePage: undefined;
    MessageGroupPage: { conversationId: string };
};

export type ProfileStackParamList = {
    UserProfile: undefined;
    EditProfile: undefined;
    Settings: undefined;
    MyAdsSellerDashboard: undefined;
    SavedAdsFavorites: undefined;
    NotificationsActivityFeed: undefined;
    SafetyModerationReportSheet: { listingId: string };
};

export type MainTabParamList = {
    HomeTab: undefined;
    SearchTab: undefined;
    PostAdTab: undefined;
    MessagesTab: undefined;
    ProfileTab: undefined;
};

export type RootStackParamList = {
    Auth: undefined;
    Main: undefined;
};
