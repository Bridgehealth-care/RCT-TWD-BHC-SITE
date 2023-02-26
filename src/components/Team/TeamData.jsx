import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Pavan from '../../assets/Assets3/Pavan.png'
// import Rahul from '../../assets/Assets3/Rahul.png'
const TeamData = () => {
    const team_data = [
        {
            image: {Pavan},
            name: "Dr. Rebecca",
            role: "Director",
            linkedin: "https://www.linkedin.com/in/rebecca-punithavalli-0857b048/"
        },
        {
            // image: {Rahul},
            name: "Anmol Garg",
            role: "CEO & Co-founder",
            linkedin: "https://www.linkedin.com/in/anmol-garg-422849119/"
        },
        {
            image: "https://www.bridgehealth.care/assets/img/team/2.png",
            name: "Rahul Soni",
            role: "CTO & Co-founder",
            linkedin: "https://www.linkedin.com/in/rahul-soni-b8782a83/"
        },
        {
            image: "https://www.bridgehealth.care/assets/img/team/4.png",
            name: "Bhaskar",
            role: "R&D Head",
            linkedin: "https://www.linkedin.com/in/divinvolve/"
        },
        {
            image: "https://www.bridgehealth.care/assets/img/team/4.jpeg",
            name: "Maheshwari Amudha",
            role: "Technical Adviser",
            linkedin: "https://www.linkedin.com/in/maheswari-amudha-9a411863/"
        },
        {
            image: "https://www.bridgehealth.care/assets/img/team/5.jpeg",
            name: "Satendra",
            role: "Creative Head",
            linkedin: "https://www.linkedin.com/in/shubham-sharma-0144b9104/"
        },
        { image: "https://www.bridgehealth.care/assets/img/team/5.jpeg",
        name: "Dr. Mukund Sriniwas",
        role: "Social Media",
        linkedin: "https://www.linkedin.com/in/shubham-sharma-0144b9104/"
        },
        { image: "https://www.bridgehealth.care/assets/img/team/5.jpeg",
        name: "Pawan Sai",
        role: "Senior Developer",
        linkedin: "https://www.linkedin.com/in/shubham-sharma-0144b9104/"
        },

    ]
    return(
        <>
          

          <div className="w-full h-full bg-slate-100 rounded-lg mt-3 flex flex-wrap gap-20 justify-center p-8 font-lora">
                                {
                                    team_data.map((ele) => (
                                        <div className="flex flex-col items-center shadow-2xl p-7 rounded-2xl bg-white w-64 cursor-pointer">
                                            <img src={ele.image} alt="" className=" rounded-full object-cover" />
                                            <span className="text-center text-3xl font-bold text-gray-900 mt-3">{ele.name}</span>
                                            <span className="text-center text-md  text-gray-900">{ele.role}</span>
                                            <div className="flex inset-x-2.5">
                                            
                                            <a className="bg-bhc_white text-bhc_green rounded-lg p-1 cursor-pointer duration-300 hover:bg-bhc_green hover:text-white hover:border-white border-2 border-bhc_green mt-3" href={ele.linkedin}>
                                                <LinkedInIcon />
                                            </a>
                                            <a className="bg-bhc_white text-bhc_green rounded-lg p-1 cursor-pointer duration-300 hover:bg-bhc_green hover:text-white hover:border-white border-2 border-bhc_green mt-3" href={ele.linkedin}>  
                                                <FacebookIcon/>
                                            </a>
                                            <a className="bg-bhc_white text-bhc_green rounded-lg p-1 cursor-pointer duration-300 hover:bg-bhc_green hover:text-white hover:border-white border-2 border-bhc_green mt-3" href={ele.linkedin}>  
                                                <TwitterIcon/>
                                            </a>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
        </>
    )
}
export default TeamData;