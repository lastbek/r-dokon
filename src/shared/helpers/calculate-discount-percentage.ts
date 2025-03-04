export const calculateDiscountPercentage = (originalPrice:number, discountedPrice:number) => {
    if (originalPrice <= 0) {
      throw new Error("Original price must be greater than zero.");
    }
    const discountAmount = originalPrice - discountedPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;
    return Math.round(discountPercentage); // Rounds to the nearest whole number
}