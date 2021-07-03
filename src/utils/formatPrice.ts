export const formatPrice = (
  value: number,
  currency: string = 'USD',
  locale: string = 'en-US'
) => {
  const priceValue = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value);

  return priceValue;
};

export default formatPrice;
