import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../theme/colors';

interface ImageUploaderGridProps {
    images: string[];
    onAddPhoto?: () => void;
    onRemovePhoto?: (index: number) => void;
}

export const ImageUploaderGrid: React.FC<ImageUploaderGridProps> = ({
    images,
    onAddPhoto,
    onRemovePhoto,
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <Text style={styles.sectionTitle}>Add Photos</Text>
                <Text style={styles.countText}>{images.length}/10</Text>
            </View>
            <Text style={styles.subtext}>
                First photo will be the main cover image of your ad.
            </Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.photosRow}
            >
                {/* Add Photo Button Card */}
                <TouchableOpacity
                    style={styles.addCard}
                    activeOpacity={0.8}
                    onPress={onAddPhoto}
                >
                    <View style={styles.cameraCircle}>
                        <Feather name="camera" size={20} color={Colors.primary} />
                    </View>
                    <Text style={styles.addText}>+ Add Photo</Text>
                </TouchableOpacity>

                {/* Uploaded Images List */}
                {images.map((imgUri, index) => (
                    <View key={index} style={styles.photoCard}>
                        <Image source={{ uri: imgUri }} style={styles.photoImage} />

                        {/* Cover Badge on first image */}
                        {index === 0 && (
                            <View style={styles.coverBadge}>
                                <Text style={styles.coverText}>COVER</Text>
                            </View>
                        )}

                        {/* Remove X Button */}
                        <TouchableOpacity
                            style={styles.removeBtn}
                            activeOpacity={0.8}
                            onPress={() => onRemovePhoto && onRemovePhoto(index)}
                        >
                            <Feather name="x" size={12} color={Colors.white} />
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 12,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: '800',
        color: Colors.dark,
    },
    countText: {
        fontSize: 12,
        fontWeight: '700',
        color: Colors.primary,
    },
    subtext: {
        fontSize: 11,
        color: Colors.gray500,
        marginTop: 2,
        marginBottom: 10,
    },
    photosRow: {
        gap: 12,
    },
    addCard: {
        width: 90,
        height: 90,
        borderRadius: 14,
        borderWidth: 1.5,
        borderColor: Colors.primary,
        borderStyle: 'dashed',
        backgroundColor: '#FFF5F0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cameraCircle: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#FFEAD6',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 4,
    },
    addText: {
        fontSize: 10,
        fontWeight: '800',
        color: Colors.primary,
    },
    photoCard: {
        width: 90,
        height: 90,
        borderRadius: 14,
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: Colors.gray100,
    },
    photoImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    coverBadge: {
        position: 'absolute',
        bottom: 4,
        left: 4,
        backgroundColor: Colors.primary,
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
    },
    coverText: {
        fontSize: 8,
        fontWeight: '800',
        color: Colors.white,
    },
    removeBtn: {
        position: 'absolute',
        top: 4,
        right: 4,
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
