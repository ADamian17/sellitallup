export function formatCurrency (num: number): string {
  const parsedNum = new Intl.NumberFormat(
    'en-US',
    {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }
  )

  return parsedNum.format(num);
}