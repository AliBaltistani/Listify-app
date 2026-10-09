import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { Colors } from '../theme/colors';
import { SpecChipSelector } from '../components/SpecChipSelector';
import { CustomButton } from '../components/CustomButton';

const RAM_OPTIONS = ['4 GB', '6 GB', '8 GB', '12 GB+'];
const STORAGE_OPTIONS = ['64 GB', '128 GB', '256 GB', '512 GB+'];
const PTA_OPTIONS = ['Official PTA Approved', 'Non-PTA / JV', 'CPID Approved'];
const BATTERY_OPTIONS = ['100%', '90-99%', '80-89%', 'Below 80%'];

interface PostAdSpecsMobileScreenProps {
    onBackPress?: () => void;
    onNextPress?: () => void;
}

export const PostAdSpecsMobileScreen: React.FC<PostAdSpecsMobileScreenProps> = ({
    onBackPress,
    onNextPress,
}) => {
    const [ram, setRam] = useState('8 GB');
    const [storage, setStorage] = useState('256 GB');
    const [pta, setPta] = useState('Official PTA Approved');
    const [battery, setBattery] = useState('90-99%');

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.headerRow}>
                <TouchableOpacity onPress={onBackPress} activeOpacity={0.7} style={styles.backBtn}>
                    <Ionicons name="chevron-back" size={20} color={Colors.dark} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Mobile Specifications</Text>
                <View style={{ width: 36 }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                <View style={styles.infoBanner}>
                    <Feather name="info" size={16} color={Colors.primary} style={{ marginRight: 8 }} />
                    <Text style={styles.infoText}>
                        Accurate specifications help buyers find your listing faster.
                    </Text>
                </View>

                <SpecChipSelector
                    label="RAM Memory"
                    options={RAM_OPTIONS}
                    selectedOption={ram}
                    onSelect={setRam}
                    isRequired
                />

                <SpecChipSelector
                    label="Internal Storage"
                    options={STORAGE_OPTIONS}
                    selectedOption={storage}
                    onSelect={setStorage}
                    isRequired
                />

                <SpecChipSelector
                    label="PTA Approval Status"
                    options={PTA_OPTIONS}
                    selectedOption={pta}
                    onSelect={setPta}
                    isRequired
                />

                <SpecChipSelector
                    label="Battery Health Condition"
                    options={BATTERY_OPTIONS}
                    selectedOption={battery}
                    onSelect={setBattery}
                />

                <View style={styles.btnWrapper}>
                    <CustomButton title="Next: Description & Pricing" onPress={() => onNextPress && onNextPress()} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        height: 56,
        backgroundColor: Colors.white,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    backBtn: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#F3F4F6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: Colors.dark,
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        paddingBottom: 40,
    },
    infoBanner: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF4ED',
        borderRadius: 12,
        padding: 12,
        marginBottom: 14,
    },
    infoText: {
        flex: 1,
        fontSize: 12,
        color: Colors.primary,
        fontWeight: '600',
    },
    btnWrapper: {
        marginTop: 20,
    },
});
