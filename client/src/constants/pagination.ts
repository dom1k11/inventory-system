export const LIMIT = 5;

export const countOffset = (page, limit = LIMIT): number => (page - 1) * limit;
