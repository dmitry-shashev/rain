export abstract class MoneyHelper {
  public static format(value: number, currency = 'USD'): string {
    const formatCurrency = new Intl.NumberFormat(undefined, {
      style: 'currency',
      currencyDisplay: 'narrowSymbol',
      currency,
    })
    return formatCurrency.format(value)
  }
}
