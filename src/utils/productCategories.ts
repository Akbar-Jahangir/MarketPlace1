const ProductCategories = (response: any) => {
  
  const cardsData = response.map((product: any) => {
  
    return {
      ...product,
      totalItems: product.total,
      name: product.categoryName,
      images: product.products[0].images,
      slug:product.slug
    };
  });
  return cardsData;
};
export default ProductCategories;
