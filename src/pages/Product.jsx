import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProduct from "../components/RelatedProduct";

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 placeholder-opacity-100">
      {/* ------------Product Data----------- */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row ">
        {/* -------------Product Images----------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row ">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                src={item}
                key={index}
                alt=""
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                onClick={() => setImage(item)}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="" className="w-full h-auto" />
          </div>
        </div>
        {/* ------------Product Info----------- */}
        <div className="flex-1 ">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2 ">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency} {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8 ">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  key={index}
                  className={`border py-2 px-4 bg-gray-100 ${
                    size === item ? "border-orange-500" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
            Add To Cart
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Products</p>
            <p>Cash On Delivery is available on this product</p>
            <p>Easy 30 Days Returns and Exchange</p>
          </div>
        </div>
      </div>
      {/* ------------Description & Review Section----------- */}
      <div className="mt-20 ">
        <div className="flex ">
          <b className="border px-5 py-3 text-sm ">Description</b>
          <p className="border px-5 py-3 text-sm">Review(122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            dolorem velit eligendi nulla voluptatibus voluptatem, libero neque
            soluta. Porro, id! Officiis itaque ipsa explicabo perferendis et
            voluptate blanditiis minima iusto atque magni ex autem quidem culpa
            ullam asperiores nobis aperiam, quas labore officia sit maxime
            temporibus voluptatem? Temporibus praesentium quos accusamus
            repellendus voluptatibus eligendi velit tenetur commodi neque porro
            vero quo laudantium a iusto nobis inventore, corrupti aspernatur
            tempore? Aspernatur magnam ea odio sed maiores molestiae adipisci
            quibusdam voluptate commodi neque nemo officiis repellendus voluptas
            non, reprehenderit, mollitia possimus nihil iste? Temporibus alias
            iste, illum quis molestias dolores id! Voluptate?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ratione
            debitis quam adipisci perspiciatis ducimus, qui quas non voluptas.
            Nesciunt libero atque obcaecati perferendis mollitia tempore minima
            eveniet officia porro unde fugit quod soluta alias, esse labore
            omnis. Velit, voluptate maiores. Nostrum, doloremque nam commodi
            itaque sapiente sunt explicabo quis.
          </p>
        </div>
      </div>
      {/* -----Display Related Product--------- */}
      <RelatedProduct
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
