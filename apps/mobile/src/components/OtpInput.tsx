import React, { useRef, useState } from 'react';
import { View, TextInput, StyleSheet, NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';
import { Colors } from '../theme/colors';

interface OtpInputProps {
    codeLength?: number;
    onCodeComplete?: (code: string) => void;
}

export const OtpInput: React.FC<OtpInputProps> = ({
    codeLength = 4,
    onCodeComplete,
}) => {
    const [code, setCode] = useState<string[]>(Array(codeLength).fill(''));
    const inputs = useRef<TextInput[]>([]);

    const handleChangeText = (text: string, index: number) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);

        if (text.length > 0 && index < codeLength - 1) {
            inputs.current[index + 1]?.focus();
        }

        const fullCode = newCode.join('');
        if (fullCode.length === codeLength && onCodeComplete) {
            onCodeComplete(fullCode);
        }
    };

    const handleKeyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
        if (e.nativeEvent.key === 'Backspace' && index > 0 && !code[index]) {
            inputs.current[index - 1]?.focus();
        }
    };

    return (
        <View style={styles.container}>
            {Array(codeLength)
                .fill(0)
                .map((_, index) => (
                    <View key={index} style={styles.circleWrapper}>
                        <TextInput
                            ref={(ref) => {
                                if (ref) inputs.current[index] = ref;
                            }}
                            style={styles.circleInput}
                            keyboardType="number-pad"
                            maxLength={1}
                            value={code[index]}
                            onChangeText={(text) => handleChangeText(text, index)}
                            onKeyPress={(e) => handleKeyPress(e, index)}
                            selectTextOnFocus
                        />
                    </View>
                ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 16,
        marginVertical: 24,
    },
    circleWrapper: {
        width: 64,
        height: 64,
        borderRadius: 32,
        borderWidth: 1,
        borderColor: '#D1D5DB',
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 2,
    },
    circleInput: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '600',
        color: Colors.dark,
    },
});
