export function formatCurrency(amount: number | string): string {
    // Ensure we're working with a number
    const numericAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
    
    // Check if it's a valid number
    if (isNaN(numericAmount)) {
        return '$0.00';
    }
    
    // Format with 2 decimal places and add dollar sign
    return `$${numericAmount.toFixed(2)}`;
}

export function formatDate(date: Date): string {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        return 'Invalid Date';
    }
    
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
}

export function formatPercentage(value: number | string, includeSymbol: boolean = true): string {
    const numericValue = typeof value === 'string' ? parseFloat(value) : value;
    if (isNaN(numericValue)) {
        return includeSymbol ? '0.00%' : '0.00';
    }
    return `${numericValue.toFixed(2)}${includeSymbol ? '%' : ''}`;
}