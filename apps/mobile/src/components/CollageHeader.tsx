import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../theme/colors';

const { width } = Dimensions.get('window');

interface CollageHeaderProps {
    slideIndex: number;
}

const SAMPLE_IMAGES = {
    slide0: [
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop', // Watch
        'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=500&auto=format&fit=crop', // Keys
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop', // Macbook
        'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=500&auto=format&fit=crop', // Phone
    ],
    slide1: [
        'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop', // Books
        'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=500&auto=format&fit=crop', // Red sports car
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&auto=format&fit=crop', // White SUV car
        'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=500&auto=format&fit=crop', // Luxury sedan
    ],
    slide2: [
        'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500&auto=format&fit=crop', // Toyota Prado car
        'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500&auto=format&fit=crop', // Bicycle
        'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop', // Cosmetics & Serums
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop', // Headphones
    ],
};

export const CollageHeader: React.FC<CollageHeaderProps> = ({ slideIndex }) => {
    const images =
        slideIndex === 0
            ? SAMPLE_IMAGES.slide0
            : slideIndex === 1
                ? SAMPLE_IMAGES.slide1
                : SAMPLE_IMAGES.slide2;

    return (
        <View style={styles.container}>
            <View style={styles.tiltedWrapper}>
                <View style={styles.gridRow}>
                    <View style={[styles.card, styles.cardTopLeft]}>
                        <Image source={{ uri: images[0] }} style={styles.image} />
                    </View>
                    <View style={[styles.card, styles.cardTopRight]}>
                        <Image source={{ uri: images[1] }} style={styles.image} />
                    </View>
                </View>

                <View style={[styles.gridRow, styles.rowBottomOffset]}>
                    <View style={[styles.card, styles.cardBottomLeft]}>
                        <Image source={{ uri: images[2] }} style={styles.image} />
                    </View>
                    <View style={[styles.card, styles.cardBottomRight]}>
                        <Image source={{ uri: images[3] }} style={styles.image} />
                    </View>
                </View>
            </View>
            <View style={styles.bottomGradientFade} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 380,
        width: width,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F9FAFB',
    },
    tiltedWrapper: {
        width: width * 1.3,
        transform: [{ rotate: '-12deg' }],
        alignItems: 'center',
        marginTop: -20,
    },
    gridRow: {
        flexDirection: 'row',
        gap: 16,
        marginVertical: 8,
    },
    rowBottomOffset: {
        marginLeft: 30,
    },
    card: {
        width: 170,
        height: 190,
        borderRadius: 22,
        overflow: 'hidden',
        backgroundColor: Colors.white,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.12,
        shadowRadius: 8,
        elevation: 4,
        borderWidth: 3,
        borderColor: Colors.white,
    },
    cardTopLeft: {},
    cardTopRight: {},
    cardBottomLeft: {},
    cardBottomRight: {},
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    bottomGradientFade: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 90,
        backgroundColor: Colors.white,
        opacity: 0.95,
    },
});
