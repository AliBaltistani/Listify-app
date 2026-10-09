import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../theme/colors';
import { SpecChipSelector } from '../components/SpecChipSelector';
import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';

const AD_TYPE_OPTIONS = ['For Sale', 'For Rent'];
const PROP_TYPES = ['House', 'Apartment', 'Commercial', 'Land Plot'];
const BEDROOMS = ['1', '2', '3', '4', '5+'];
const BATHROOMS = ['1', '2', '3', '4+'];
const FURNISHED_STATUS = ['Unfurnished', 'Semi-Furnished', 'Fully Furnished'];

interface PostAdSpecsPropertyScreenProps {
    onBackPress?: () => void;
    onNextPress?: () => void;
}

export const PostAdSpecsPropertyScreen: React.FC<PostAdSpecsPropertyScreenProps> = ({
    onBackPress,
    onNextPress,
}) => {
    const [adType, setAdType] = useState('For Sale');
    const [propType, setPropType] = useState('House');
    const [bedrooms, setBedrooms] = useState('3');
    const [bathrooms, setBathrooms] = useState('3');
    const [furnished, setFurnished] = useState('Fully Furnished');
    const [areaSize, setAreaSize] = useState('10 Marla');

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.headerRow}>
                <TouchableOpacity onPress={onBackPress} activeOpacity={0.7} style={styles.backBtn}>
                    <Ionicons name="chevron-back" size={20} color={Colors.dark} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Property Details</Text>
                <View style={{ width: 36 }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                <SpecChipSelector
                    label="Ad Type"
                    options={AD_TYPE_OPTIONS}
                    selectedOption={adType}
                    onSelect={setAdType}
                    isRequired
                />

                <SpecChipSelector
                    label="Property Type"
                    options={PROP_TYPES}
                    selectedOption={propType}
                    onSelect={setPropType}
                    isRequired
                />

                <CustomInput
                    label="Land Area / Size"
                    placeholder="e.g. 10 Marla or 1 Kanal"
                    value={areaSize}
                    onChangeText={setAreaSize}
                    isRequired
                />

                <SpecChipSelector
                    label="Bedrooms"
                    options={BEDROOMS}
                    selectedOption={bedrooms}
                    onSelect={setBedrooms}
                />

                <SpecChipSelector
                    label="Bathrooms"
                    options={BATHROOMS}
                    selectedOption={bathrooms}
                    onSelect={setBathrooms}
                />

                <SpecChipSelector
                    label="Furnishing Status"
                    options={FURNISHED_STATUS}
                    selectedOption={furnished}
                    onSelect={setFurnished}
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
    btnWrapper: {
        marginTop: 20,
    },
});
