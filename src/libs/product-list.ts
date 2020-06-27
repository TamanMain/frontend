import ProductObject from "./ProductObject";

const ProductList: ProductObject[] = [
  {
    name: "Nanas Madu",
    quantity: 100,
    unit: "gram",
    price: 4800,
    isDiscount: true,
    discountPercent: 25,
    discountPrice: 3600,
    images: ["./images/nanas madu.jpg"],
    description:
      "Nanas Madu relatif berukuran lebih kecil dari jenis nanas lainnya walaupun sama-sama berwarna kuning nanas madu memiliki rasa dan aroma yang lebih manis, berserat, lebih lunak daripada nanas lainnya. Biasanya tunggu matang hingga 1-2 hari terlebih dahulu",
  },
  {
    name: "Mangga Harum Manis",
    quantity: 100,
    unit: "gram",
    price: 2900,
    images: ["./images/mangga.jpg"],
  },
  {
    name: "Kembang Kol",
    quantity: 100,
    unit: "gram",
    price: 700,
    images: ["./images/kol.jpg"],
  },
  {
    name: "Pisang",
    quantity: 100,
    unit: "gram",
    price: 1700,
    images: ["./images/pisang.jpg"],
  },
  {
    name: "Timun",
    quantity: 100,
    unit: "gram",
    price: 900,
    images: ["./images/timun.jpg"],
  },
  {
    name: "Raspberry",
    quantity: 100,
    unit: "gram",
    price: 3400,
    images: ["./images/raspberry.jpg"],
  },
];

export default ProductList;
