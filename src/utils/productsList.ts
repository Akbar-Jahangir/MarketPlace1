
const ProductList =(response:any) => {
   
    const cardsData = response.map((product:any) => {
      return {
        ...product,
        images: product.images[0],
        title: product.title,
        cardText: product.price,
      };
    });
    return cardsData;
    
}
export default ProductList;