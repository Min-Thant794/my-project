export const normalizeToSingaporeMidnightISO = (date) => {
    const d = date instanceof Date ? new Date(date) : new Date(date);

    d.setHours(0, 0, 0, 0);

    return d.toISOString();
}