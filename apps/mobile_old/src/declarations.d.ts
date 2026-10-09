// ============================================================
// Type declarations for modules without built-in types
// ============================================================

// Global alert shim — Figma-generated screens use browser alert().
// In Phase 2, these will be replaced with RN's Alert.alert().
declare function alert(message?: string): void;

declare module '@react-navigation/native' {
    export const NavigationContainer: React.ComponentType<any>;
    export function useNavigation<T = any>(): T;
    export function useRoute<T = any>(): T;
    export function useFocusEffect(effect: () => void | (() => void)): void;
    export function useIsFocused(): boolean;
}

declare module '@react-navigation/native-stack' {
    export function createNativeStackNavigator<T = any>(): {
        Navigator: React.ComponentType<any>;
        Screen: React.ComponentType<any>;
        Group: React.ComponentType<any>;
    };
}

declare module '@react-navigation/stack' {
    export function createStackNavigator<T = any>(): {
        Navigator: React.ComponentType<any>;
        Screen: React.ComponentType<any>;
        Group: React.ComponentType<any>;
    };
}

declare module 'react-native-gesture-handler' { }

declare module '@react-navigation/bottom-tabs' {
    export function createBottomTabNavigator<T = any>(): {
        Navigator: React.ComponentType<any>;
        Screen: React.ComponentType<any>;
    };
}

declare module 'react-native-safe-area-context' {
    export const SafeAreaProvider: React.ComponentType<{ children?: React.ReactNode }>;
    export const SafeAreaView: React.ComponentType<any>;
    export function useSafeAreaInsets(): { top: number; bottom: number; left: number; right: number };
}

declare module 'expo-status-bar' {
    export const StatusBar: React.ComponentType<{
        style?: 'auto' | 'inverted' | 'light' | 'dark';
        backgroundColor?: string;
        translucent?: boolean;
        hidden?: boolean;
    }>;
}

declare module 'expo-linear-gradient' {
    export const LinearGradient: React.ComponentType<{
        colors: readonly string[];
        start?: { x: number; y: number };
        end?: { x: number; y: number };
        locations?: number[];
        style?: any;
        children?: React.ReactNode;
    }>;
}
