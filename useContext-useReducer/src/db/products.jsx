export const products = Array.from({ length: 100 }, (_, i) => ({
  name: `Product ${i + 1}`,
  newprice: Math.floor(Math.random() * 90000) + 1000,
  discount: Math.floor(Math.random() * 51),
  rating: parseFloat((Math.random() * 2 + 3).toFixed(1))
}));
