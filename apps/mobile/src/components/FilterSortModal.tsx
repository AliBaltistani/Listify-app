import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Modal,
    TouchableOpacity,
    ScrollView,
    TextInput,
    TouchableWithoutFeedback,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { Colors } from '../theme/colors';
import { CustomButton } from './CustomButton';

interface FilterSortModalProps {
    visible: boolean;
    onClose: () => void;
    onApplyFilters?: (filters: any) => void;
}

const SORT_OPTIONS = [
    'Newly Listed',
    'Price: Low to High',
    'Price: High to Low',
    'Distance: Nearest',
];

const PRICE_QUICK_PILLS = [
    { label: 'Under 50k', min: '0', max: '50000' },
    { label: '50k - 150k', min: '50000', max: '150000' },
    { label: '150k - 300k', min: '150000', max: '300000' },
    { label: '300k+', min: '300000', max: '1000000' },
];

const CONDITION_OPTIONS = ['New', 'Used - Like New', 'Used - Good', 'Refurbished'];
const PTA_OPTIONS = ['Official PTA Approved', 'Non-PTA / JV', 'CPID Approved'];
const RADIUS_OPTIONS = ['Within 5 km', '10 km', '25 km', 'Entire City'];

export const FilterSortModal: React.FC<FilterSortModalProps> = ({
    visible,
    onClose,
    onApplyFilters,
}) => {
    const [selectedSort, setSelectedSort] = useState('Newly Listed');
    const [minPrice, setMinPrice] = useState('10,000');
    const [maxPrice, setMaxPrice] = useState('300,000');
    const [selectedConditions, setSelectedConditions] = useState<string[]>(['Used - Like New']);
    const [selectedPta, setSelectedPta] = useState<string>('Official PTA Approved');
    const [selectedRadius, setSelectedRadius] = useState<string>('10 km');

    const toggleCondition = (cond: string) => {
        if (selectedConditions.includes(cond)) {
            setSelectedConditions(selectedConditions.filter((c) => c !== cond));
        } else {
            setSelectedConditions([...selectedConditions, cond]);
        }
    };

    const handleReset = () => {
        setSelectedSort('Newly Listed');
        setMinPrice('');
        setMaxPrice('');
        setSelectedConditions([]);
        setSelectedPta('Official PTA Approved');
        setSelectedRadius('Entire City');
    };

    const handleApply = () => {
        if (onApplyFilters) {
            onApplyFilters({
                sort: selectedSort,
                minPrice,
                maxPrice,
                conditions: selectedConditions,
                pta: selectedPta,
                radius: selectedRadius,
            });
        }
        onClose();
    };

    return (
        <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.overlay}>
                    <TouchableWithoutFeedback>
                        <View style={styles.sheetContainer}>
                            {/* Top Drag Indicator */}
                            <View style={styles.dragPill} />

                            {/* Sheet Header */}
                            <View style={styles.headerRow}>
                                <Text style={styles.headerTitle}>Filter & Sort</Text>
                                <View style={styles.headerActions}>
                                    <TouchableOpacity onPress={handleReset} activeOpacity={0.7} style={{ marginRight: 14 }}>
                                        <Text style={styles.resetText}>Reset All</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={onClose} activeOpacity={0.7} style={styles.closeBtn}>
                                        <Feather name="x" size={18} color={Colors.dark} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                                {/* 1. Sort By */}
                                <View style={styles.section}>
                                    <Text style={styles.sectionTitle}>SORT BY</Text>
                                    <View style={styles.chipsWrap}>
                                        {SORT_OPTIONS.map((opt) => {
                                            const isActive = selectedSort === opt;
                                            return (
                                                <TouchableOpacity
                                                    key={opt}
                                                    style={[styles.chip, isActive && styles.chipActive]}
                                                    onPress={() => setSelectedSort(opt)}
                                                    activeOpacity={0.8}
                                                >
                                                    <Text style={[styles.chipText, isActive && styles.chipTextActive]}>
                                                        {opt}
                                                    </Text>
                                                </TouchableOpacity>
                                            );
                                        })}
                                    </View>
                                </View>

                                {/* 2. Price Range (PKR) */}
                                <View style={styles.section}>
                                    <Text style={styles.sectionTitle}>PRICE RANGE (PKR)</Text>
                                    <View style={styles.priceInputRow}>
                                        <View style={styles.priceInputCol}>
                                            <Text style={styles.inputSublabel}>Min Price</Text>
                                            <TextInput
                                                style={styles.priceInput}
                                                placeholder="Min PKR"
                                                placeholderTextColor={Colors.gray400}
                                                keyboardType="numeric"
                                                value={minPrice}
                                                onChangeText={setMinPrice}
                                            />
                                        </View>

                                        <Text style={styles.priceDash}>-</Text>

                                        <View style={styles.priceInputCol}>
                                            <Text style={styles.inputSublabel}>Max Price</Text>
                                            <TextInput
                                                style={styles.priceInput}
                                                placeholder="Max PKR"
                                                placeholderTextColor={Colors.gray400}
                                                keyboardType="numeric"
                                                value={maxPrice}
                                                onChangeText={setMaxPrice}
                                            />
                                        </View>
                                    </View>

                                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.quickPillsRow}>
                                        {PRICE_QUICK_PILLS.map((p) => (
                                            <TouchableOpacity
                                                key={p.label}
                                                style={styles.quickPill}
                                                activeOpacity={0.8}
                                                onPress={() => {
                                                    setMinPrice(p.min);
                                                    setMaxPrice(p.max);
                                                }}
                                            >
                                                <Text style={styles.quickPillText}>{p.label}</Text>
                                            </TouchableOpacity>
                                        ))}
                                    </ScrollView>
                                </View>

                                {/* 3. Item Condition */}
                                <View style={styles.section}>
                                    <Text style={styles.sectionTitle}>ITEM CONDITION</Text>
                                    <View style={styles.chipsWrap}>
                                        {CONDITION_OPTIONS.map((cond) => {
                                            const isActive = selectedConditions.includes(cond);
                                            return (
                                                <TouchableOpacity
                                                    key={cond}
                                                    style={[styles.chip, isActive && styles.chipActive]}
                                                    onPress={() => toggleCondition(cond)}
                                                    activeOpacity={0.8}
                                                >
                                                    {isActive && <Ionicons name="checkmark" size={14} color={Colors.primary} style={{ marginRight: 4 }} />}
                                                    <Text style={[styles.chipText, isActive && styles.chipTextActive]}>
                                                        {cond}
                                                    </Text>
                                                </TouchableOpacity>
                                            );
                                        })}
                                    </View>
                                </View>

                                {/* 4. PTA Approval Status */}
                                <View style={styles.section}>
                                    <Text style={styles.sectionTitle}>PTA APPROVAL STATUS</Text>
                                    <View style={styles.chipsWrap}>
                                        {PTA_OPTIONS.map((pta) => {
                                            const isActive = selectedPta === pta;
                                            return (
                                                <TouchableOpacity
                                                    key={pta}
                                                    style={[styles.chip, isActive && styles.chipActive]}
                                                    onPress={() => setSelectedPta(pta)}
                                                    activeOpacity={0.8}
                                                >
                                                    <Text style={[styles.chipText, isActive && styles.chipTextActive]}>
                                                        {pta}
                                                    </Text>
                                                </TouchableOpacity>
                                            );
                                        })}
                                    </View>
                                </View>

                                {/* 5. Location Radius */}
                                <View style={styles.section}>
                                    <Text style={styles.sectionTitle}>LOCATION RADIUS</Text>
                                    <View style={styles.chipsWrap}>
                                        {RADIUS_OPTIONS.map((rad) => {
                                            const isActive = selectedRadius === rad;
                                            return (
                                                <TouchableOpacity
                                                    key={rad}
                                                    style={[styles.chip, isActive && styles.chipActive]}
                                                    onPress={() => setSelectedRadius(rad)}
                                                    activeOpacity={0.8}
                                                >
                                                    <Text style={[styles.chipText, isActive && styles.chipTextActive]}>
                                                        {rad}
                                                    </Text>
                                                </TouchableOpacity>
                                            );
                                        })}
                                    </View>
                                </View>
                            </ScrollView>

                            {/* Bottom Sticky Action Footer */}
                            <View style={styles.footerBar}>
                                <CustomButton title="Apply Filters (142 Ads)" onPress={handleApply} />
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end',
    },
    sheetContainer: {
        backgroundColor: Colors.white,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        maxHeight: '85%',
        paddingTop: 10,
    },
    dragPill: {
        width: 40,
        height: 4,
        borderRadius: 2,
        backgroundColor: '#E5E7EB',
        alignSelf: 'center',
        marginBottom: 10,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: Colors.dark,
    },
    headerActions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    resetText: {
        fontSize: 13,
        fontWeight: '700',
        color: Colors.primary,
    },
    closeBtn: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#F3F4F6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingVertical: 16,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 11,
        fontWeight: '800',
        color: Colors.gray400,
        letterSpacing: 0.5,
        marginBottom: 10,
    },
    chipsWrap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    chip: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
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
    priceInputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    priceInputCol: {
        flex: 1,
    },
    inputSublabel: {
        fontSize: 10,
        fontWeight: '700',
        color: Colors.gray500,
        marginBottom: 4,
    },
    priceInput: {
        height: 42,
        borderRadius: 10,
        backgroundColor: '#F9FAFB',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        paddingHorizontal: 12,
        fontSize: 13,
        color: Colors.dark,
        fontWeight: '600',
    },
    priceDash: {
        fontSize: 16,
        fontWeight: '800',
        color: Colors.gray400,
        marginHorizontal: 10,
        marginTop: 14,
    },
    quickPillsRow: {
        gap: 8,
    },
    quickPill: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 14,
        backgroundColor: '#F3F4F6',
    },
    quickPillText: {
        fontSize: 11,
        fontWeight: '600',
        color: Colors.gray600,
    },
    footerBar: {
        paddingHorizontal: 20,
        paddingVertical: 14,
        borderTopWidth: 1,
        borderTopColor: '#F3F4F6',
        backgroundColor: Colors.white,
    },
});
