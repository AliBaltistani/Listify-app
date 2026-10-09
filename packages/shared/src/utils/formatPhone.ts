// ============================================================
// @listify/shared — Utility: Format Phone
// ============================================================

/**
 * Formats a phone number according to country config.
 *
 * @example formatPhone('+923001234567') → "+92 300 1234567"
 * @example formatPhone('03001234567', '+92') → "+92 300 1234567"
 */
export const formatPhone = (
    phone: string,
    countryCode: string = '+92'
): string => {
    // Remove all non-digit characters
    let digits = phone.replace(/\D/g, '');

    // Handle local format (0300...)
    if (digits.startsWith('0')) {
        digits = digits.substring(1);
    }

    // Handle country code prefix (92300...)
    if (digits.startsWith('92')) {
        digits = digits.substring(2);
    }

    if (digits.length !== 10) {
        return phone; // Return as-is if format doesn't match
    }

    return `${countryCode} ${digits.substring(0, 3)} ${digits.substring(3)}`;
};
