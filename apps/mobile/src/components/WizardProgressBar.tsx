import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';

interface WizardProgressBarProps {
    currentStep: number;
    totalSteps?: number;
    stepLabels?: string[];
}

export const WizardProgressBar: React.FC<WizardProgressBarProps> = ({
    currentStep,
    totalSteps = 3,
    stepLabels = ['Basic Info', 'Specs & Pricing', 'Review'],
}) => {
    return (
        <View style={styles.container}>
            {/* Header step counter text */}
            <View style={styles.stepHeaderRow}>
                <Text style={styles.stepTitle}>
                    Step {currentStep} of {totalSteps}:{' '}
                    <Text style={styles.stepLabelText}>
                        {stepLabels[currentStep - 1] || 'Details'}
                    </Text>
                </Text>
                <Text style={styles.percentageText}>
                    {Math.round((currentStep / totalSteps) * 100)}%
                </Text>
            </View>

            {/* Segmented Progress Bar */}
            <View style={styles.barContainer}>
                {Array.from({ length: totalSteps }).map((_, index) => {
                    const isCompleted = index + 1 <= currentStep;
                    return (
                        <View
                            key={index}
                            style={[
                                styles.segment,
                                isCompleted ? styles.segmentActive : styles.segmentInactive,
                            ]}
                        />
                    );
                })}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: Colors.white,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    stepHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    stepTitle: {
        fontSize: 12,
        fontWeight: '800',
        color: Colors.primary,
        letterSpacing: 0.5,
    },
    stepLabelText: {
        color: Colors.dark,
        fontWeight: '700',
    },
    percentageText: {
        fontSize: 11,
        fontWeight: '800',
        color: Colors.gray500,
    },
    barContainer: {
        flexDirection: 'row',
        gap: 6,
    },
    segment: {
        flex: 1,
        height: 6,
        borderRadius: 3,
    },
    segmentActive: {
        backgroundColor: Colors.primary,
    },
    segmentInactive: {
        backgroundColor: '#E5E7EB',
    },
});
