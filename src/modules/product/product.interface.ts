export type TProduct = {
  category: string;
  title: string;
  price: number;
  quantity: number;
  description: string;
  rating: number;
  image: string;
};

export type TUpdateProductPayload = {
  _id: string;
  data: Partial<TProduct>;
};
