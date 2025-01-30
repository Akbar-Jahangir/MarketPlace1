import React, { useContext, useState } from "react";
import CardDefinition from "../Card/CardGalleryDefinition";
import Label from "../Label/Label";
import Input from "../Input/Input";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { CartContext } from "../../contexts/cartContext/cartContext";
import Card from "../Card/Card";
import { CrossSvg } from "../../assets/Svgs";
import SelectDropdown from "../SelectdropDown/SelectDropDown";

const Cart: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const navigate = useNavigate();
  const { cart, clearCart, removeFromCart } = useContext(CartContext);
  const formInputsData = [
    { label: "Address", type: "text", placeholder: "House" },
    { label: "Address II", type: "text", placeholder: "Street" },
  ];

  const formCitiesData = [
    { value: "", label: "City" },
    { value: "islamabad", label: "Islamabad" },
    { value: "faislabad", label: "Faislabad" },
    { value: "lahore", label: "Lahore" },
  ];

  const formCountriesData = [
    { value: "", label: "Country" },
    { value: "pakistan", label: "Pakistan" },
    { value: "india", label: "India" },
    { value: "bangladesh", label: "Bangladesh" },
  ];
  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };
console.log(selectedCountry);

  const productDeliveryData = [
    { title: "Courier", price: 20.0, profession: "JNE Express" },
    { title: "Tax", price: 20.0, profession: "Negara 20%" },
    { title: "Eid Promo", price: 20.0, profession: "10% OFF" },
  ];
  const EidPromoData = [{ title: "Eid Promo", price: 20.0 }];

  const cartItemsStyles = {
    cardInfoStyles: "w-[100%] flex flex-wrap ",
    cardTitleStyles: "w-[60%]  font-semibold",
    cardTextStyles: "text-lightblack w-[40%]",
    priceStyles: "text-green text-end",
    totalItemsstyles: "",
  };
  const cardsStyle = {
    cardAlignment: "flex space-x-4 ",
    cardInfoStyles: "flex flex-col",
    imageVariant: "plain",
    imageSize: "xs",
    cardTitleStyles: "w-[169px] font-semibold",
    cardTextStyles: "text-lightblack",
  };

  return (
    <>
      {cart.length !== 0 ? (
        <div>
          <div className="flex justify-center text-center py-6">
            <CardDefinition
              galleryTitle="Your  Cart"
              galleryText="Make sure your goods are paid for in full"
              galleryTitleStyles="text-purple "
            />
          </div>

          <div className="flex justify-center">
            <div className="w-[90%] space-y-4">
              <Breadcrumb />
              <div>
                <div>
                  <div className="flex flex-col lg:flex-row  items-center lg:justify-between flex-wrap w-[100%]">
                    <div className="w-[90%] lg:w-[45%]">
                      <p className="font-Inter text-lg pb-7">Yours Items</p>
                      {cart.map((product, index) => (
                        <div
                          key={index}
                          className="my-7 flex justify-between w-[100%]"
                        >
                          <Card
                            images={product.thumbnail}
                            title={product.title}
                            price={product.price / product.quantity}
                            cardStyles={cardsStyle}
                            currency="$"
                          />
                          <Button
                            type="button"
                            text={<CrossSvg />}
                            onClick={() => {
                              removeFromCart(product.id);
                            }}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="w-[90%] lg:w-[45%]  space-y-5 font-Montserrat">
                      <div className="w-[100%] bg-lightgray py-[30px] flex flex-col justify-center items-center ">
                        <div className="w-[90%] border-b">
                          <p>Cost Information</p>

                          {cart.map((product, index) => (
                            <div key={index} className="my-7 w-[100%]">
                              <Card
                                title={product.title}
                                totalItems={product.quantity}
                                price={product.price}
                                cardStyles={cartItemsStyles}
                                currency="$"
                              />
                            </div>
                          ))}
                        </div>
                        <div className="w-[90%] border-b">
                          {productDeliveryData.map((product, index) => (
                            <div key={index} className="my-7 w-[100%]">
                              <Card
                                title={product.title}
                                price={product.price}
                                profession={product.profession}
                                cardStyles={cartItemsStyles}
                                currency="$"
                              />
                            </div>
                          ))}
                        </div>
                        <div className="w-[90%]">
                          {EidPromoData.map((product, index) => (
                            <div key={index} className="mt-7 ">
                              <Card
                                title={product.title}
                                price={product.price}
                                cardStyles={cartItemsStyles}
                                currency="$"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="w-[100%] flex justify-between">
                        <Button
                          text="Cancel"
                          onClick={() => {
                            clearCart();
                          }}
                          customStyle="bg-lightgray text-lightblack h-[39px] font-Inter w-[45%] rounded-sm text-center text-[16px]"
                        />
                        <Button
                          text="Checkout"
                          onClick={() => {
                            clearCart();
                            navigate("/checkout");
                          }}
                          customStyle="bg-warning h-[39px] text-white font-Inter w-[45%] rounded-sm text-center text-[16px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="max-w-[400px]">
                  <p className="font-Inter text-lg pb-7">Yours Address</p>
                  {formInputsData.map((data, index) => (
                    <div key={index} className="mb-6">
                      <Label
                        text={data.label}
                        customestyles="font-Montserrat"
                      />
                      <Input
                        type={data.type}
                        placeholder={data.placeholder}
                        customStyle="cart-form"
                      />
                    </div>
                  ))}
                  <div className="mb-6">
                    <SelectDropdown
                      label="City"
                      id="city"
                      name="city"
                      options={formCitiesData}
                      onChange={handleCountryChange}
                      customStyles="cart-form"
                    />
                  </div>
                  <div className="mb-6">
                    <SelectDropdown
                      label="Country"
                      id="country"
                      name="country"
                      options={formCountriesData}
                      onChange={handleCountryChange}
                      customStyles="cart-form"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-[70vh] flex justify-center items-center text-xl font-semibold">
          <p>No Data Available In Cart</p>
        </div>
      )}
    </>
  );
};

export default Cart;
