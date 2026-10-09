import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Modal,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Image,
    TouchableWithoutFeedback,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { Colors } from '../theme/colors';
import { CustomButton } from './CustomButton';

interface ReportAdModalProps {
    visible: boolean;
    onClose: () => void;
    onSubmitReport?: (reason: string, details: string) => void;
    adTitle?: string;
    adPrice?: string;
    adImage?: string;
}

const REPORT_REASONS = [
    { id: 'fraud', label: 'Fraud, Scam or Counterfeit Product', icon: 'shield-off' },
    { id: 'offensive', label: 'Inappropriate or Offensive Content', icon: 'alert-triangle' },
    { id: 'incorrect', label: 'Incorrect Category, Price or Title', icon: 'tag' },
    { id: 'spam', label: 'Duplicate or Spam Listing', icon: 'copy' },
    { id: 'sold', label: 'Item Already Sold / Unavailable', icon: 'archive' },
    { id: 'other', label: 'Other Reason', icon: 'help-circle' },
];

export const ReportAdModal: React.FC<ReportAdModalProps> = ({
    visible,
    onClose,
    onSubmitReport,
    adTitle = 'iPhone 14 Pro Max 256GB Space Black',
    adPrice = '225,000 PKR',
    adImage = 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&auto=format&fit=crop',
}) => {
    const [selectedReason, setSelectedReason] = useState<string>('fraud');
    const [details, setDetails] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = () => {
        setIsSubmitted(true);
        if (onSubmitReport) {
            onSubmitReport(selectedReason, details);
        }
        setTimeout(() => {
            setIsSubmitted(false);
            onClose();
        }, 1800);
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
                                <View style={styles.titleRow}>
                                    <Feather name="shield" size={20} color={Colors.primary} style={{ marginRight: 8 }} />
                                    <Text style={styles.headerTitle}>Report Listing</Text>
                                </View>
                                <TouchableOpacity onPress={onClose} activeOpacity={0.7} style={styles.closeBtn}>
                                    <Feather name="x" size={18} color={Colors.dark} />
                                </TouchableOpacity>
                            </View>

                            {isSubmitted ? (
                                <View style={styles.successState}>
                                    <View style={styles.successCircle}>
                                        <Ionicons name="checkmark-sharp" size={36} color={Colors.white} />
                                    </View>
                                    <Text style={styles.successTitle}>Report Submitted</Text>
                                    <Text style={styles.successSubtext}>
                                        Thank you for keeping Listify safe. Our moderation team will review this listing within 24 hours.
                                    </Text>
                                </View>
                            ) : (
                                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                                    {/* Item Snippet Summary */}
                                    <View style={styles.itemSummaryBox}>
                                        <Image source={{ uri: adImage }} style={styles.itemThumb} />
                                        <View style={{ flex: 1 }}>
                                            <Text style={styles.itemTitle} numberOfLines={1}>
                                                {adTitle}
                                            </Text>
                                            <Text style={styles.itemPrice}>{adPrice}</Text>
                                        </View>
                                    </View>

                                    <Text style={styles.sectionTitle}>WHY ARE YOU REPORTING THIS AD?</Text>

                                    {/* Reasons Radio List */}
                                    <View style={styles.reasonsList}>
                                        {REPORT_REASONS.map((r) => {
                                            const isSelected = selectedReason === r.id;
                                            return (
                                                <TouchableOpacity
                                                    key={r.id}
                                                    style={[styles.reasonRow, isSelected && styles.reasonRowSelected]}
                                                    activeOpacity={0.8}
                                                    onPress={() => setSelectedReason(r.id)}
                                                >
                                                    <View style={styles.reasonIconCircle}>
                                                        <Feather name={r.icon as any} size={16} color={isSelected ? Colors.primary : Colors.gray500} />
                                                    </View>
                                                    <Text style={[styles.reasonLabel, isSelected && styles.reasonLabelSelected]}>
                                                        {r.label}
                                                    </Text>
                                                    <View style={[styles.radioCircle, isSelected && styles.radioCircleSelected]}>
                                                        {isSelected && <View style={styles.radioDot} />}
                                                    </View>
                                                </TouchableOpacity>
                                            );
                                        })}
                                    </View>

                                    {/* Additional Details */}
                                    <View style={styles.fieldGroup}>
                                        <Text style={styles.fieldLabel}>Additional Details (Optional)</Text>
                                        <TextInput
                                            style={styles.detailsInput}
                                            multiline
                                            numberOfLines={3}
                                            textAlignVertical="top"
                                            placeholder="Provide any additional info to help us investigate..."
                                            placeholderTextColor={Colors.gray400}
                                            value={details}
                                            onChangeText={setDetails}
                                        />
                                    </View>

                                    {/* Submit Button */}
                                    <View style={styles.btnWrapper}>
                                        <CustomButton title="Submit Report" onPress={handleSubmit} />
                                    </View>
                                </ScrollView>
                            )}
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
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: Colors.dark,
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
        paddingBottom: 30,
    },
    itemSummaryBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F9FAFB',
        borderRadius: 14,
        padding: 10,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },
    itemThumb: {
        width: 44,
        height: 44,
        borderRadius: 8,
        marginRight: 10,
    },
    itemTitle: {
        fontSize: 13,
        fontWeight: '700',
        color: Colors.dark,
    },
    itemPrice: {
        fontSize: 12,
        fontWeight: '800',
        color: Colors.primary,
        marginTop: 2,
    },
    sectionTitle: {
        fontSize: 11,
        fontWeight: '800',
        color: Colors.gray400,
        letterSpacing: 0.5,
        marginBottom: 10,
    },
    reasonsList: {
        gap: 8,
        marginBottom: 16,
    },
    reasonRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 14,
        padding: 12,
    },
    reasonRowSelected: {
        borderColor: Colors.primary,
        backgroundColor: '#FFF4ED',
    },
    reasonIconCircle: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#F3F4F6',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    reasonLabel: {
        flex: 1,
        fontSize: 13,
        fontWeight: '600',
        color: Colors.dark,
    },
    reasonLabelSelected: {
        fontWeight: '800',
        color: Colors.primary,
    },
    radioCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Colors.gray400,
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioCircleSelected: {
        borderColor: Colors.primary,
    },
    radioDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: Colors.primary,
    },
    fieldGroup: {
        marginBottom: 16,
    },
    fieldLabel: {
        fontSize: 12,
        fontWeight: '700',
        color: Colors.dark,
        marginBottom: 6,
    },
    detailsInput: {
        backgroundColor: '#F9FAFB',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        padding: 12,
        fontSize: 13,
        color: Colors.dark,
        minHeight: 75,
    },
    btnWrapper: {
        marginTop: 10,
    },
    successState: {
        padding: 30,
        alignItems: 'center',
    },
    successCircle: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#0D9488',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    successTitle: {
        fontSize: 20,
        fontWeight: '800',
        color: Colors.dark,
        marginBottom: 8,
    },
    successSubtext: {
        fontSize: 13,
        color: Colors.gray600,
        textAlign: 'center',
        lineHeight: 18,
    },
});
