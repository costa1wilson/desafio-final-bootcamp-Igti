function formatNumber(value) {
  const formatter = new Intl.NumberFormat([], {
    style: "currency",
    currency: "BRL",
  });
  return formatter.format(value);
}
function formatPercent(value) {
  return value.toFixed(2) + "%";
}
export { formatNumber, formatPercent
 };
