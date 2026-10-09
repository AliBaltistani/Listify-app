import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../theme/colors';

interface CounterOfferCardProps {
    productName?: string;
    amount?: string;
    status?: string;
    onAccept?: () => void;
    onCounter?: () => void;
}

export const CounterOfferCard: React.FC<CounterOfferCardProps> = ({
    productName = 'iPad 79C',
    amount = '1,850 PKR',
    status = 'Pending',
    onAccept,
    onCounter,
}) => {
    return (
        <View style={styles.card}>
            <View style={styles.headerRow}>
                <Text style={styles.offerLabel}>COUNTER OFFER</Text>
                <View style={styles.statusBadge}>
                    <Text style={styles.statusText}>{status}</Text>
                </View>
            </View>

            <Text style={styles.subtext}>Offered amount for {productName}</Text>
            <Text style={styles.amountText}>{amount}</Text>

            <View style={styles.buttonsRow}>
                <TouchableOpacity
                    style={styles.acceptButton}
                    onPress={onAccept}
                    activeOpacity={0.85}
                >
                    <Text style={styles.acceptText}>Accept Offer</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.counterButton}
                    onPress={onCounter}
                    activeOpacity={0.85}
                >
                    <Text style={styles.counterText}>Counter</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: '#FFD8BF',
        borderRadius: 20,
        padding: 16,
        marginVertical: 12,
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    offerLabel: {
        fontSize: 12,
        fontWeight: '800',
        color: Colors.primary,
        letterSpacing: 0.5,
    },
    statusBadge: {
        backgroundColor: '#FFEAD6',
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 6,
    },
    statusText: {
        fontSize: 10,
        fontWeight: '700',
        color: Colors.primary,
    },
    subtext: {
        fontSize: 12,
        color: Colors.gray500,
        textAlign: 'center',
        marginTop: 4,
    },
    amountText: {
        fontSize: 22,
        fontWeight: '900',
        color: Colors.dark,
        textAlign: 'center',
        marginVertical: 8,
    },
    buttonsRow: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 8,
    },
    acceptButton: {
        flex: 1,
        height: 42,
        backgroundColor: Colors.primary,
        borderRadius: 21,
        justifyContent: 'center',
        alignItems: 'center',
    },
    acceptText: {
        fontSize: 13,
        fontWeight: '700',
        color: Colors.white,
    },
    counterButton: {
        flex: 1,
        height: 42,
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.gray300,
        borderRadius: 21,
        justifyContent: 'center',
        alignItems: 'center',
    },
    counterText: {
        fontSize: 13,
        fontWeight: '700',
        color: Colors.dark,
    },
});
