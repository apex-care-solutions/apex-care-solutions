export const localeDateOptions = {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
} as const;

export const localeTimeOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
} as const;

export const formatDate = (timestamp: number | Date | string) => new Date(timestamp).toLocaleDateString(
    "en-GB",
    localeDateOptions,
)

export const formatTime = (timestamp: number | Date | string) => new Date(timestamp).toLocaleTimeString(
    "en-GB",
    localeTimeOptions,
)

export const formatDateTime = (timestamp: number | Date | string) => `${formatDate(timestamp)} ${formatTime(timestamp)}`