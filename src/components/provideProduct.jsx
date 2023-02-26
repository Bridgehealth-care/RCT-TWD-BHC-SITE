import React from "react";
import '../CSS/provideProduct.css';
import ProductDoc from '../components/Assets/Product_doc.png';
import { FaCheckCircle } from "react-icons/fa";

const ProvideProduct = () => {
    return (
        <div>
            <div className="product_video">

            </div>

            <div className="Product_container flex flex-row space-x-12">
                <div className="Product_left flex">
                    <img src={ProductDoc} alt="Doctor at Product" />
                </div>
                <div className="Product_right flex flex-col w-1/2">
                    <h2 className="text-3xl font-bold leading-10 w-11/12 mb-4">We Provide Essential Products For Your Health Care</h2>
                    <p className="mt-4 text-base leading-7">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap</p>
                    <div className="Product_icon_text flex flex-row mt-4 space-x-4">
                        <div className="Product_icon flex flex-col space-y-6 mt-3.5">
                            <FaCheckCircle />
                            <FaCheckCircle />
                            <FaCheckCircle />
                        </div>
                        <div className="Product_right_text">
                            <p className="leading-10 text-ls font-normal">24 Hours Emergency Assistance Call Us</p>
                            <p className="leading-10 text-ls font-normal">We are committed to providing healthcare Product</p>
                            <p className="leading-10 text-ls font-normal">Really know the true needs and expectations of patients</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProvideProduct;