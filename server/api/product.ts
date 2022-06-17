export default defineEventHandler(async event => {
  const products = [
    {
      id: 1,
      name: 'Product1'
    },
    {
      id: 2,
      name: 'Product2'
    }
  ]
  const query = useQuery(event);
  const body = await useBody(event);
  if (query.productId) {
    const product = products.find(p => p.id === Number(query.productId));
    if (!product) return { message: 'Product not found' };
    return product;
  }
  if (body) {
    products.push(body);
    return products;
  }
  return {
    products,
    productId: query.productId
  }
})