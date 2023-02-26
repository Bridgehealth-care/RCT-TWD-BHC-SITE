import React from "react";
import '../CSS/careHealth.css';
import Care_Img from '../assets/Assets3/care_img.png';

const CareHealth = () => {
    return (
        <div className="care_container flex flex-col items-center">
            <h3 className="text-black text-3xl font-bold mb-4">We Care About Your Health</h3>
            <p className="text-base font-normal w-3/4 text-center mb-4 leading-7">We have introduced the principle of family medicine, which means that the family practitioner will handle the majority of medical requests, with a specialists involved only if necessary.</p>

            <div className="card_care_container flex flex-row space-x-8 mt-8">
                <div className="card_care flex flex-col items-center space-y-4">
                    <img src={Care_Img} alt="Care Image" />
                    <h3 className="text-2xl">Family Care</h3>
                    <p className="text-sm leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
                <div className="card_care flex flex-col items-center space-y-4">
                    <img src={Care_Img} alt="Care Image" />
                    <h3 className="text-2xl">Family Care</h3>
                    <p className="text-sm leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
                <div className="card_care flex flex-col items-center space-y-4">
                    <img src={Care_Img} alt="Care Image" />
                    <h3 className="text-2xl">Family Care</h3>
                    <p className="text-sm leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
            </div>
        </div>
    );
}

export default CareHealth;