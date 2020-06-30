import ProductObject from "./ProductObject";

const ProductsData: ProductObject[] = [
  {
    _id: "0",
    name: "Nanas Madu",
    quantity: 1,
    unit: "buah",
    price: 4800,
    isDiscount: true,
    discountPercent: 25,
    discountPrice: 3600,
    images: ["./images/nanas madu.jpg"],
    description:
      "Nanas Madu relatif berukuran lebih kecil dari jenis nanas lainnya walaupun sama-sama berwarna kuning nanas madu memiliki rasa dan aroma yang lebih manis, berserat, lebih lunak daripada nanas lainnya. Biasanya tunggu matang hingga 1-2 hari terlebih dahulu",
  },
  {
    _id: "1",
    name: "Mangga Harum Manis",
    quantity: 500,
    unit: "gram",
    price: 14300,
    images: ["./images/mangga.jpg"],
  },
  {
    _id: "2",
    name: "Kembang Kol",
    quantity: 250,
    unit: "gram",
    price: 4700,
    images: ["./images/kol.jpg"],
  },
  {
    _id: "3",
    name:
      "Pisang Fresh Mulus Warna Kuning Cerah Dipetik Dari Perkebunan Pribadi",
    quantity: 1,
    unit: "buah",
    price: 10000,
    isDiscount: true,
    discountPercent: 53,
    discountPrice: 4700,
    images: ["./images/pisang.jpg"],
  },
  {
    _id: "4",
    name: "Timun",
    quantity: 250,
    unit: "gram",
    price: 9700,
    images: ["./images/timun.jpg"],
  },
  {
    _id: "5",
    name: "Raspberry",
    quantity: 500,
    unit: "gram",
    price: 37900,
    images: ["./images/raspberry.jpg"],
  },
];

export default ProductsData;
