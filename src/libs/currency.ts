function formatToRupiah(price: number): string {
  return "Rp " + price.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1.");
}

export { formatToRupiah };
