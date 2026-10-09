// ============================================================
// @listify/shared — Utility: Slugify
// ============================================================

/**
 * Converts a string to a URL-safe slug.
 *
 * @example slugify("Mobiles & Tablets") → "mobiles-tablets"
 * @example slugify("  Apple iPhone 14 Pro  ") → "apple-iphone-14-pro"
 */
export const slugify = (text: string): string => {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '') // Remove special chars
        .replace(/[\s_]+/g, '-')   // Replace spaces/underscores with hyphens
        .replace(/-+/g, '-')       // Collapse multiple hyphens
        .replace(/^-|-$/g, '');    // Remove leading/trailing hyphens
};
