const Money = ({
  value,
  currencySign = 'R$',
  decimalLength = 2,
  chunkDelimiter = '.',
  decimalDelimiter = ','
}) => {
  if (!value) {
    value = 0;
  }

  const result = '\\d(?=(\\d{3})+' + (decimalLength > 0 ? '\\D' : '$') + ')';
  const num = value.toFixed(Math.max(0, ~~decimalLength));

  return currencySign + ' ' + (decimalDelimiter ? num.replace('.', decimalDelimiter) : num).replace(new RegExp(result, 'g'), '$&' + chunkDelimiter);
}

export default Money;