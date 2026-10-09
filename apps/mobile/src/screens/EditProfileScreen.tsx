import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { Colors } from '../theme/colors';
import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';

interface EditProfileScreenProps {
    onBackPress?: () => void;
    onSave?: () => void;
}

export const EditProfileScreen: React.FC<EditProfileScreenProps> = ({
    onBackPress,
    onSave,
}) => {
    return (
        <SafeAreaView style={styles.container}>
            {/* Top Orange Header */}
            <View style={styles.orangeHeader}>
                <TouchableOpacity onPress={onBackPress} activeOpacity={0.8} style={styles.backBtn}>
                    <Ionicons name="chevron-back" size={20} color={Colors.white} />
                </TouchableOpacity>

                <View style={styles.avatarSection}>
                    <View style={styles.avatarYellowCircle}>
                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop' }}
                            style={styles.avatarImage}
                        />
                        <TouchableOpacity style={styles.cameraBadge} activeOpacity={0.85}>
                            <Feather name="camera" size={12} color={Colors.white} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.userName}>Jhon Abraham</Text>
                    <Text style={styles.userHandle}>@jhonabraham</Text>
                </View>
            </View>

            {/* Form Container */}
            <View style={styles.contentCard}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                    <CustomInput
                        label="Display Name"
                        defaultValue="Jhon Abraham"
                    />

                    <CustomInput
                        label="Email Address"
                        defaultValue="jhonabraham20@gmail.com"
                        keyboardType="email-address"
                    />

                    <CustomInput
                        label="Address"
                        defaultValue="33 street west subidbazar,sylhet"
                    />

                    <CustomInput
                        label="Phone Number"
                        defaultValue="(320) 555-0104"
                        keyboardType="phone-pad"
                    />

                    <CustomButton
                        title="Save Details"
                        onPress={onSave || (() => { })}
                        variant="primary"
                        style={styles.saveButton}
                    />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    orangeHeader: {
        backgroundColor: Colors.primary,
        paddingHorizontal: 20,
        paddingTop: 12,
        paddingBottom: 24,
    },
    backBtn: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarSection: {
        alignItems: 'center',
        marginTop: 4,
    },
    avatarYellowCircle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#F59E0B',
        padding: 3,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    avatarImage: {
        width: '100%',
        height: '100%',
        borderRadius: 47,
    },
    cameraBadge: {
        position: 'absolute',
        bottom: 2,
        right: 2,
        width: 26,
        height: 26,
        borderRadius: 13,
        backgroundColor: Colors.primary,
        borderWidth: 2,
        borderColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    userName: {
        fontSize: 20,
        fontWeight: '800',
        color: Colors.white,
        marginTop: 10,
    },
    userHandle: {
        fontSize: 13,
        color: 'rgba(255, 255, 255, 0.8)',
        marginTop: 2,
    },
    contentCard: {
        flex: 1,
        backgroundColor: Colors.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 24,
        overflow: 'hidden',
    },
    scrollContent: {
        paddingHorizontal: 24,
        paddingBottom: 36,
    },
    saveButton: {
        marginTop: 16,
    },
});
