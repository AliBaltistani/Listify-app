import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Switch,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { Colors } from '../theme/colors';
import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';

interface PostAdStep2ScreenProps {
    onBackPress?: () => void;
    onNextPress?: () => void;
}

export const PostAdStep2Screen: React.FC<PostAdStep2ScreenProps> = ({
    onBackPress,
    onNextPress,
}) => {
    const [description, setDescription] = useState(
        'Selling my personal iPhone 14 Pro Max 256GB Space Black. PTA Official Approved, battery health 92%. Comes with original cable and box. No scratches or repairs. Serious buyers only please.'
    );
    const [price, setPrice] = useState('225,000');
    const [isNegotiable, setIsNegotiable] = useState(true);

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
                {/* Description Input */}
                <View style={styles.fieldGroup}>
                    <Text style={styles.fieldLabel}>
                        Item Description <Text style={styles.requiredStar}>*</Text>
                    </Text>
                    <Text style={styles.fieldSubtext}>
                        Describe condition, reason for selling, accessories included, and flaws if any.
                    </Text>
                    <View style={styles.textareaWrapper}>
                        <TextInput
                            style={styles.textarea}
                            multiline
                            numberOfLines={6}
                            textAlignVertical="top"
                            placeholder="Describe your item in detail..."
                            placeholderTextColor={Colors.gray400}
                            value={description}
                            onChangeText={setDescription}
                        />
                        <Text style={styles.charCount}>{description.length}/2000</Text>
                    </View>
                </View>

                {/* Pricing Input */}
                <CustomInput
                    label="Set Price (PKR)"
                    placeholder="e.g. 225,000"
                    value={price}
                    onChangeText={setPrice}
                    keyboardType="numeric"
                    iconName="tag"
                    isRequired
                />

                {/* Negotiable Price Switch Row */}
                <View style={styles.switchCard}>
                    <View style={styles.switchTextCol}>
                        <Text style={styles.switchTitle}>Negotiable Price</Text>
                        <Text style={styles.switchSubtext}>
                            Allow buyers to make counter offers in chat
                        </Text>
                    </View>
                    <Switch
                        value={isNegotiable}
                        onValueChange={setIsNegotiable}
                        trackColor={{ false: '#E5E7EB', true: '#FFD8C2' }}
                        thumbColor={isNegotiable ? Colors.primary : '#9CA3AF'}
                    />
                </View>

                {/* Market Price Guide Banner */}
                <View style={styles.priceGuideCard}>
                    <View style={styles.guideIconCircle}>
                        <Feather name="trending-up" size={16} color="#0D9488" />
                    </View>
                    <Text style={styles.guideText}>
                        Market Guide: Similar <Text style={styles.boldGuide}>iPhone 14 Pro Max 256GB</Text> ads sell between <Text style={styles.boldGuide}>215k - 235k PKR</Text> in Lahore.
                    </Text>
                </View>

                {/* Action Button */}
                <View style={styles.btnWrapper}>
                    <CustomButton title="Next: Review & Publish" onPress={() => onNextPress && onNextPress()} />
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
    fieldGroup: {
        marginBottom: 16,
    },
    fieldLabel: {
        fontSize: 13,
        fontWeight: '700',
        color: Colors.dark,
    },
    requiredStar: {
        color: Colors.primary,
    },
    fieldSubtext: {
        fontSize: 11,
        color: Colors.gray500,
        marginTop: 2,
        marginBottom: 8,
    },
    textareaWrapper: {
        backgroundColor: Colors.white,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        padding: 12,
    },
    textarea: {
        fontSize: 14,
        color: Colors.dark,
        minHeight: 110,
    },
    charCount: {
        fontSize: 10,
        color: Colors.gray400,
        textAlign: 'right',
        marginTop: 4,
    },
    switchCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.white,
        borderRadius: 16,
        padding: 14,
        marginVertical: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },
    switchTextCol: {
        flex: 1,
        marginRight: 10,
    },
    switchTitle: {
        fontSize: 13,
        fontWeight: '800',
        color: Colors.dark,
    },
    switchSubtext: {
        fontSize: 11,
        color: Colors.gray500,
        marginTop: 2,
    },
    priceGuideCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#CCFBF1',
        borderRadius: 14,
        padding: 12,
        marginBottom: 16,
    },
    guideIconCircle: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    guideText: {
        flex: 1,
        fontSize: 11,
        color: '#0F766E',
        lineHeight: 16,
    },
    boldGuide: {
        fontWeight: '800',
        color: Colors.dark,
    },
    btnWrapper: {
        marginTop: 10,
    },
});
