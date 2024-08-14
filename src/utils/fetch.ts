const BASE_URL: string | undefined = process.env.NEXT_PUBLIC_BASE_URL;

export const getProducts = async (limit: string | number, skip: string | number, search: string = '') => {
  const res = await fetch(`${BASE_URL}/products/search?q=${search}&limit=${limit}&skip=${skip}`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export const getProduct = async (id: string | number) => {
  const res = await fetch(`${BASE_URL}/products/${id}`);

  // await new Promise((resolve) => setTimeout(resolve, 1000));

  return res.json();
};
