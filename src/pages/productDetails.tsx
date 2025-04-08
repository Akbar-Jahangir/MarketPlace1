import React, { useContext, useMemo, useState } from "react";
import ProfileImg from "../assets/images/profileImg.png";
import CardsGallery from "../layout/cardsGallery/CardsGallery";
import Button from "../components/Button/Button";
import CardDefinition from "../components/Card/cardGalleryDefinition";
import { MinusSvg, PlusSvg } from "../assets/svgs";
import Card from "../components/Card/Card";
import { useNavigate, useParams } from "react-router-dom";
import useProductDetails from "../hooks/useProductDetails";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import { AuthContext } from "../contexts/authContext/AuthContext";
import { CartContext } from "../contexts/cartContext/CartContext";
import { CartItemProps } from "../interfaces/cartItem.interface";
import ReviewForm from "../components/ReviewForm";

const ProductDetails: React.FC = () => {
  const [countProduct, setCountProduct] = useState<number>(1);
 
  const [isDescription, setIsDescription] = useState<boolean>(true);
  const [isReview, setIsReview] = useState<boolean>(false);
  const [showReviewForm, setShowReviewForm] = useState<boolean>(false);
  
  const { id } = useParams();
  const productDetails = useProductDetails(id);
  const singleProduct = productDetails.singleProduct;
  const [totalPrice, setTotalPrice] = useState<number>(singleProduct?.price || 0);
  
  const authContext = useContext(AuthContext);
  const { webAccessToken } = authContext;
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useMemo(() => {
    if (singleProduct?.price) {
      setTotalPrice(singleProduct.price * countProduct);
    }
  }, [singleProduct, countProduct]);
  
  const layoutDefinition = [
    {
      galleryTitle: "Similar Product",
      galleryTitleStyles: "text-3xl font-bold text-purple",
      galleryText: "Pakaian pelengkap produk di atas",
    },
  ];

  const cardsStyle = {
    customStyles: "flex flex-col flew-wrap",
    imageVariant: "plain",
    imageSize: "lg",
    cardTitleStyles: "text-black text-lg font-semibold",
    cardTextStyles: "text-lightblack",
    clickable: true,
  };

  const product: CartItemProps = {
    id: singleProduct?.id || "",
    title: singleProduct?.title || "",
    price: totalPrice,
    quantity: countProduct,
    thumbnail: singleProduct?.thumbnail
  };

  const handleReviewAdded = () => {
    // Refresh product details to show the new review
    productDetails.refetchProductDetails();
    setShowReviewForm(false);
  };

  return (
    <>
      <div className="w-full flex justify-center py-10">
        <div className="w-[90%] flex flex-col items-center space-y-4">
          <div className="w-full">
            <Breadcrumb />
          </div>
          <div className="w-full flex flex-col items-center lg:items-start lg:flex-row gap-9">
            <div
              className="w-[90%] md:w-[50%] lg:w-[410px] h-[700px] bg-no-repeat flex flex-col justify-center items-center "
              style={{
                backgroundImage:
                  "linear-gradient(to bottom,lightgray 0%,lightgray 70%,white 20%,white 100%)",
              }}
            >
              <img src={singleProduct?.thumbnail} alt="image"/>
              <div className="max-w-[90%] p-1  w-fite h-fit flex bg-white border justify-center">
                {singleProduct?.images?.map((image: string, index: number) => (
                  <div key={index} className="bg-lightblack border">
                    <img src={image} className="w-[81px] h-[81px]" alt={`Product image ${index+1}`} />
                  </div>
                ))}
              </div>
            </div>

            <div className="w-[90%] md:w-[50%] lg:w-[443px] space-y-[50px]">
              <div className="space-y-4">
                <CardDefinition
                  galleryTitle={singleProduct?.title}
                  galleryTitleStyles="text-3xl font-medium font-Montserrat"
                  galleryText={`$ ${totalPrice}`}
                  galleryTextStyles="text-lg"
                  customStyles=""
                />

                <div className="flex space-x-3 font-Montserrat font-medium items-center">
                  <Button
                    text={<PlusSvg />}
                    type="button"
                    customStyle="w-[31px] h-[31px] bg-[#28A745] rounded flex justify-center items-center"
                    onClick={() => setCountProduct(countProduct + 1)}
                  />
                  <p className="">{countProduct}</p>
                  <Button
                    text={<MinusSvg />}
                    type="button"
                    customStyle="w-[31px] h-[31px] bg-lightslate rounded flex justify-center items-center"
                    onClick={() => {
                      setCountProduct(prevCount => prevCount > 1 ? prevCount - 1 : 1);
                    }}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <Button
                  text="ADD TO CART"
                  customStyle="bg-warning w-full h-[40px] text-white font-semibold text-sm font-Montserrat font-medium rounded-md"
                  onClick={() => {
                    if (webAccessToken === "") {
                      alert("Please login first");
                      navigate("/login");
                    } else {
                      addToCart(product)
                      navigate("/cart")
                    }
                  }}
                />
                <Button
                  text="Add to Wishlist"
                  customStyle="bg-lightslate w-full h-[40px] text-lightblack font-semibold text-sm font-Montserrat font-medium rounded-md "
                />
              </div>
              {/* Bar */}
              <p className="h-[2px] mt-[35px] w-full bg-lightslate my-[35px]"></p>

              {/* Designer Info */}
              <div className="space-y-6">
                <p className="text-lg text-lightblack font-Montserrat ">
                  Designed by
                </p>
                <Card
                  images={ProfileImg}
                  title="Anne Mortgery"
                  followers="14.2K"
                  cardStyles={{
                    cardInfoStyles: "font-Montserrat",
                    imageVariant: "rounded",
                    imageSize: "xs",
                    cardTitleStyles: "text-lg",
                    cardTextStyles: "text-lightblack",
                    imageStyles: "border-2",
                    cardAlignment: "flex items-center gap-3",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Description and Reviews */}
      <div
        className="w-full py-10 h-fit flex justify-center "
        style={{
          backgroundImage:
            "linear-gradient(to bottom,lightgray 0%,lightgray 80%,white 20%,white 100%)",
        }}
      >
        <div className="w-[90%] ">
          <div className="max-w-[823px] text-lightblack">
            <div
              className="w-full flex rounded-t-md"
              style={{
                background:
                  "linear-gradient(to bottom, lightgray 0%, lightgray 100%, white 100%)",
              }}
            >
              <Button
                type="button"
                text="Product Descripton"
                customStyle={`w-[30%] ${
                  isDescription ? "tab-btn-active" : "tab-btn-inActive"
                } `}
                onClick={() => {
                  setIsDescription(true);
                  setIsReview(false);
                }}
              />
              <Button
                type="button"
                text={`Reviews (${singleProduct?.reviews?.length || 0})`}
                customStyle={`w-[30%] ${
                  isReview ? "tab-btn-active" : "tab-btn-inActive"
                } `}
                onClick={() => {
                  setIsDescription(false);
                  setIsReview(true);
                }}
              />
              <div className="w-[39.5%] border-b border-lightblack "></div>
            </div>

            <div className="min-h-[350px] bg-white w-full shadow-lg rounded-md rounded-tl-none shadow-lightblack border-x border-lightblack">
              <div className="w-full pl-[20px] pr-[29px] pt-11 pb-4">
                {isDescription && <p>{singleProduct?.description}</p>}
              </div>
              <div className="pl-[20px] pr-[29px] pb-4 border-x border-t-0">
                {isReview && (
                  <>
                    <div className="mb-6 flex justify-between items-center">
                      <h3 className="text-xl font-semibold font-Montserrat">Customer Reviews</h3>
                      {!showReviewForm && (
                        <Button
                          text="Write a Review"
                          customStyle="bg-warning text-white px-4 py-2 rounded-md text-sm font-Montserrat"
                          onClick={() => {
                            if (webAccessToken === "") {
                              alert("Please login first");
                              navigate("/login");
                            } else {
                              setShowReviewForm(true);
                            }
                          }}
                        />
                      )}
                    </div>
                    
                    {showReviewForm && (
                      <ReviewForm 
                        productId={id} 
                        onReviewAdded={handleReviewAdded} 
                      />
                    )}
                    
                    {!singleProduct?.reviews || singleProduct.reviews.length === 0 ? (
                      <p className="text-center py-6 text-lightblack">No reviews yet. Be the first to review this product!</p>
                    ) : (
                      singleProduct.reviews.map((review, index) => (
                        <div key={index} className="mb-5 border-b border-lightslate pb-4 last:border-b-0">
                          <Card
                            images={ProfileImg}
                            title={review.reviewerName}
                            comment={review.comment}
                            cardStyles={{
                              cardInfoStyles: "font-Montserrat",
                              imageVariant: "rounded",
                              imageSize: "xs",
                              cardTitleStyles: "text-lg font-semibold text-black",
                              cardTextStyles: "text-lightblack",
                              imageStyles: "border-2",
                              cardAlignment: "flex items-center gap-3",
                            }}
                          />
                          <div className="flex items-center mt-2 ml-14">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <svg 
                                  key={i}
                                  className={`w-4 h-4 ${i < review.rating ? "text-warning" : "text-gray-300"}`} 
                                  fill="currentColor" 
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                              ))}
                            </div>
                            <span className="text-xs text-lightblack ml-2">
                              {new Date(review.date).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      ))
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Products */}
      <CardsGallery
        cardsList={productDetails.similarProducts}
        cardStyles={cardsStyle}
        layoutDefinition={layoutDefinition}
        customStyles="w-full mb-8 flex flex-col items-center justify-center"
        customGap="gap-x-10"
      />
    </>
  );
};

export default ProductDetails;