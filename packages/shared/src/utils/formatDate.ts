// ============================================================
// @listify/shared — Utility: Format Date
// ============================================================

/**
 * Formats a date string into relative time or locale-aware format.
 *
 * @example formatDate('2026-10-05T10:00:00Z') → "2 days ago"
 * @example formatDate('2026-09-22T10:00:00Z', 'short') → "22 Sep"
 */
export const formatDate = (
    dateString: string,
    format: 'relative' | 'short' | 'full' = 'relative'
): string => {
    const date = new Date(dateString);
    const now = new Date();

    if (format === 'relative') {
        const diffMs = now.getTime() - date.getTime();
        const diffSecs = Math.floor(diffMs / 1000);
        const diffMins = Math.floor(diffSecs / 60);
        const diffHours = Math.floor(diffMins / 60);
        const diffDays = Math.floor(diffHours / 24);
        const diffWeeks = Math.floor(diffDays / 7);
        const diffMonths = Math.floor(diffDays / 30);

        if (diffSecs < 60) return 'Just now';
        if (diffMins < 60) return `${diffMins}m ago`;
        if (diffHours < 24) return `${diffHours}h ago`;
        if (diffDays < 7) return `${diffDays}d ago`;
        if (diffWeeks < 4) return `${diffWeeks}w ago`;
        return `${diffMonths}mo ago`;
    }

    if (format === 'short') {
        return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
    }

    return date.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
};
