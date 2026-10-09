import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Colors } from '../theme/colors';
import { CollageHeader } from '../components/CollageHeader';
import { CustomButton } from '../components/CustomButton';

interface OnboardingScreenProps {
    onComplete?: () => void;
}

const SLIDES = [
    {
        title: 'Discover Deals In\nYour Neighborhood',
        subtitle: 'Browse thousands of verified local listings with unbeatable prices near you.',
        buttonText: 'Next',
    },
    {
        title: 'Sell Fast & Earn More\nDirectly',
        subtitle: 'Snap photos, list in 60 seconds, and connect with millions of verified buyers with zero hidden fees.',
        buttonText: 'Next',
    },
    {
        title: 'Safe & Verified Direct\nTrading',
        subtitle: 'Chat securely in-app, verify profiles, and trade with complete peace of mind today.',
        buttonText: 'Sign Up Or Sign In',
    },
];

export const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onComplete }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNext = () => {
        if (currentSlide < SLIDES.length - 1) {
            setCurrentSlide(currentSlide + 1);
        } else if (onComplete) {
            onComplete();
        }
    };

    const slide = SLIDES[currentSlide];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topSection}>
                <CollageHeader slideIndex={currentSlide} />
            </View>

            <View style={styles.bottomSection}>
                <Text style={styles.title}>{slide.title}</Text>
                <Text style={styles.subtitle}>{slide.subtitle}</Text>

                <View style={styles.paginationRow}>
                    {SLIDES.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.dot,
                                index === currentSlide ? styles.activeDot : styles.inactiveDot,
                            ]}
                        />
                    ))}
                </View>

                <View style={styles.buttonWrapper}>
                    <CustomButton
                        title={slide.buttonText}
                        onPress={handleNext}
                        variant="dark"
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    topSection: {
        height: 380,
    },
    bottomSection: {
        flex: 1,
        paddingHorizontal: 28,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 24,
        paddingTop: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: '800',
        color: Colors.dark,
        textAlign: 'center',
        lineHeight: 32,
        letterSpacing: -0.3,
    },
    subtitle: {
        fontSize: 13,
        fontWeight: '400',
        color: Colors.gray500,
        textAlign: 'center',
        lineHeight: 20,
        marginTop: -8,
    },
    paginationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        marginVertical: 10,
    },
    dot: {
        height: 6,
        borderRadius: 3,
    },
    activeDot: {
        width: 24,
        backgroundColor: Colors.primary,
    },
    inactiveDot: {
        width: 6,
        backgroundColor: Colors.gray300,
    },
    buttonWrapper: {
        width: '100%',
    },
});
