// ============================================================
// @listify/shared — Utility: Format Price
// ============================================================

/**
 * Formats a price with currency symbol.
 * Uses config-driven format — never hardcode currency.
 *
 * @example formatPrice(45000, 'PKR', 'Rs', 'before') → "Rs 45,000"
 * @example formatPrice(120.99, 'USD', '$', 'before') → "$120.99"
 */
export const formatPrice = (
    amount: number,
    currencyCode: string,
    symbol: string = currencyCode,
    position: 'before' | 'after' = 'before',
    decimals: number = 0
): string => {
    const formatted = new Intl.NumberFormat('en-PK', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    }).format(amount);

    return position === 'before'
        ? `${symbol} ${formatted}`
        : `${formatted} ${symbol}`;
};
