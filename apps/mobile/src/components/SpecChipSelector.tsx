import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Colors } from '../theme/colors';

interface SpecChipSelectorProps {
    label: string;
    options: string[];
    selectedOption: string;
    onSelect: (option: string) => void;
    isRequired?: boolean;
}

export const SpecChipSelector: React.FC<SpecChipSelectorProps> = ({
    label,
    options,
    selectedOption,
    onSelect,
    isRequired,
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                {label} {isRequired && <Text style={styles.requiredStar}>*</Text>}
            </Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.chipsRow}
            >
                {options.map((opt) => {
                    const isActive = selectedOption === opt;
                    return (
                        <TouchableOpacity
                            key={opt}
                            style={[styles.chip, isActive && styles.chipActive]}
                            onPress={() => onSelect(opt)}
                            activeOpacity={0.8}
                        >
                            <Text style={[styles.chipText, isActive && styles.chipTextActive]}>
                                {opt}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    label: {
        fontSize: 13,
        fontWeight: '700',
        color: Colors.dark,
        marginBottom: 8,
    },
    requiredStar: {
        color: Colors.primary,
    },
    chipsRow: {
        gap: 8,
    },
    chip: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: '#F3F4F6',
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },
    chipActive: {
        backgroundColor: '#FFF4ED',
        borderColor: Colors.primary,
    },
    chipText: {
        fontSize: 12,
        fontWeight: '600',
        color: Colors.gray700,
    },
    chipTextActive: {
        fontWeight: '800',
        color: Colors.primary,
    },
});
