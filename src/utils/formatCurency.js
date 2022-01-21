export const formatCurrency = (price) => {
  const parsedNum = new Intl.NumberFormat(
    'en-US',
    {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }
  )

  return parsedNum.format(price);
}