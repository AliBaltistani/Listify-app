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
import { ImageUploaderGrid } from '../components/ImageUploaderGrid';
import { CustomInput } from '../components/CustomInput';
import { SpecChipSelector } from '../components/SpecChipSelector';
import { CustomButton } from '../components/CustomButton';

const DUMMY_INITIAL_IMAGES = [
    'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&auto=format&fit=crop',
];

const BRANDS = ['Apple', 'Samsung', 'Xiaomi', 'Vivo', 'OPPO', 'Google', 'OnePlus'];
const CONDITIONS = ['New', 'Used - Like New', 'Used - Good', 'Refurbished'];

interface PostAdStep1ScreenProps {
    onBackPress?: () => void;
    onChangeCategory?: () => void;
    onChangeLocation?: () => void;
    onNextPress?: () => void;
}

export const PostAdStep1Screen: React.FC<PostAdStep1ScreenProps> = ({
    onBackPress,
    onChangeCategory,
    onChangeLocation,
    onNextPress,
}) => {
    const [images, setImages] = useState<string[]>(DUMMY_INITIAL_IMAGES);
    const [title, setTitle] = useState('iPhone 14 Pro Max 256GB Space Black');
    const [selectedBrand, setSelectedBrand] = useState('Apple');
    const [selectedCondition, setSelectedCondition] = useState('Used - Like New');

    const handleAddPhoto = () => {
        setImages([
            ...images,
            'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&auto=format&fit=crop',
        ]);
    };

    const handleRemovePhoto = (index: number) => {
        setImages(images.filter((_, i) => i !== index));
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.headerRow}>
                <TouchableOpacity onPress={onBackPress} activeOpacity={0.7} style={styles.backBtn}>
                    <Ionicons name="chevron-back" size={20} color={Colors.dark} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Post an Ad</Text>
                <TouchableOpacity activeOpacity={0.7}>
                    <Text style={styles.draftText}>Save Draft</Text>
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Category & Location Selected Bar */}
                <View style={styles.summaryBox}>
                    <View style={styles.summaryRow}>
                        <View style={styles.summaryIconCircle}>
                            <Feather name="smartphone" size={16} color={Colors.primary} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.summaryLabel}>Category</Text>
                            <Text style={styles.summaryValue}>Mobiles & Tablets {" > "} Smartphones</Text>
                        </View>
                        <TouchableOpacity onPress={onChangeCategory} activeOpacity={0.7}>
                            <Text style={styles.changeLinkText}>Change</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.divider} />

                    <View style={styles.summaryRow}>
                        <View style={styles.summaryIconCircle}>
                            <Feather name="map-pin" size={16} color={Colors.primary} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.summaryLabel}>Location</Text>
                            <Text style={styles.summaryValue}>Gulberg III, Lahore, Punjab</Text>
                        </View>
                        <TouchableOpacity onPress={onChangeLocation} activeOpacity={0.7}>
                            <Text style={styles.changeLinkText}>Change</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Photos Upload Grid */}
                <ImageUploaderGrid
                    images={images}
                    onAddPhoto={handleAddPhoto}
                    onRemovePhoto={handleRemovePhoto}
                />

                {/* Ad Title */}
                <CustomInput
                    label="Ad Title"
                    placeholder="Mention key features (e.g. brand, model, age)"
                    value={title}
                    onChangeText={setTitle}
                    isRequired
                />

                {/* Brand Chip Selector */}
                <SpecChipSelector
                    label="Brand"
                    options={BRANDS}
                    selectedOption={selectedBrand}
                    onSelect={setSelectedBrand}
                    isRequired
                />

                {/* Condition Chip Selector */}
                <SpecChipSelector
                    label="Condition"
                    options={CONDITIONS}
                    selectedOption={selectedCondition}
                    onSelect={setSelectedCondition}
                    isRequired
                />

                {/* Action Button */}
                <View style={styles.btnWrapper}>
                    <CustomButton title="Next: Specs & Price" onPress={() => onNextPress && onNextPress()} />
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
    draftText: {
        fontSize: 13,
        fontWeight: '700',
        color: Colors.primary,
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        paddingBottom: 40,
    },
    summaryBox: {
        backgroundColor: Colors.white,
        borderRadius: 16,
        padding: 14,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },
    summaryRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    summaryIconCircle: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#FFEAD6',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    summaryLabel: {
        fontSize: 10,
        fontWeight: '700',
        color: Colors.gray400,
        textTransform: 'uppercase',
    },
    summaryValue: {
        fontSize: 12,
        fontWeight: '800',
        color: Colors.dark,
    },
    changeLinkText: {
        fontSize: 12,
        fontWeight: '800',
        color: Colors.primary,
    },
    divider: {
        height: 1,
        backgroundColor: '#F3F4F6',
        marginVertical: 10,
    },
    btnWrapper: {
        marginTop: 20,
    },
});
