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
import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';

const YEAR_OPTIONS = ['2024', '2023', '2022', '2021', 'Older'];
const TRANSMISSION_OPTIONS = ['Automatic', 'Manual'];
const FUEL_OPTIONS = ['Petrol', 'Diesel', 'Hybrid', 'Electric'];
const REG_CITIES = ['Lahore', 'Karachi', 'Islamabad', 'Unregistered'];

interface PostAdSpecsVehicleScreenProps {
    onBackPress?: () => void;
    onNextPress?: () => void;
}

export const PostAdSpecsVehicleScreen: React.FC<PostAdSpecsVehicleScreenProps> = ({
    onBackPress,
    onNextPress,
}) => {
    const [year, setYear] = useState('2023');
    const [transmission, setTransmission] = useState('Automatic');
    const [fuel, setFuel] = useState('Petrol');
    const [regCity, setRegCity] = useState('Lahore');
    const [mileage, setMileage] = useState('15,000');

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.headerRow}>
                <TouchableOpacity onPress={onBackPress} activeOpacity={0.7} style={styles.backBtn}>
                    <Ionicons name="chevron-back" size={20} color={Colors.dark} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Vehicle Specifications</Text>
                <View style={{ width: 36 }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                <SpecChipSelector
                    label="Model Year"
                    options={YEAR_OPTIONS}
                    selectedOption={year}
                    onSelect={setYear}
                    isRequired
                />

                <CustomInput
                    label="KM Driven (Mileage)"
                    placeholder="e.g. 15000"
                    value={mileage}
                    onChangeText={setMileage}
                    keyboardType="numeric"
                    isRequired
                />

                <SpecChipSelector
                    label="Transmission Type"
                    options={TRANSMISSION_OPTIONS}
                    selectedOption={transmission}
                    onSelect={setTransmission}
                    isRequired
                />

                <SpecChipSelector
                    label="Fuel Type"
                    options={FUEL_OPTIONS}
                    selectedOption={fuel}
                    onSelect={setFuel}
                    isRequired
                />

                <SpecChipSelector
                    label="Registration City"
                    options={REG_CITIES}
                    selectedOption={regCity}
                    onSelect={setRegCity}
                    isRequired
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
