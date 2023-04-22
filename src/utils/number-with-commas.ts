export function NumberWithCommas(input: number) {
  return new Intl.NumberFormat().format(input);
}
