import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import Header from '../components/Header';
import Teaminfo from '../components/Team/Teaminfo';
import Rahul from '../assets/Assets3/Rahul.png'
import Nurse from '../assets/Assets3/Nurse.png'
import TeamData from '../components/Team/TeamData';
const Team = () => {
    const [load, setLoad] = useState(true)
    useEffect(() => {
      setTimeout(() => {
        setLoad(false)
      }, 2000)
    }, []);
return(
    <>
        {
            load ? <Loader /> :
            <div>
                <Navbar />
                <Header
                     h1 = "Team"
                        p = "Home"
                        p1 = "Team"
                />
<Teaminfo
    imgsrc={Rahul}
    h2 = "Anmol Garg"
    span = "Founder & CEO"
    p= "am thrilled to be leading this exciting venture in the field of digital healthcare technology. We believe that by combining our expertise in health and technology, we can create a platform that will revolutionize the healthcare industry. Whether it's through developing new diagnostic tools, or improving patient communication and collaboration with healthcare providers, we're committed to delivering innovative solutions that make a real difference in people's lives.
We look forward to building a future where technology and health are seamlessly integrated, making healthcare more affordable, accessible, and effective for everyone."

/>

<Teaminfo
imgsrc = {Nurse}
h2 = "Rahul Soni"
span = "Co-Founder & CTO"
p= "As the CTO at Bridge Healthcare, I am thrilled to share the incredible advancements in technology that are transforming the way we approach healthcare. I am proud to be leading a talented and dedicated team who shares the same vision. Our team includes experts in medicine, engineering, and design, who are working tirelessly to bring our ideas to life.
However, while we are making great strides in making tele-diagnostic devices and applications of technology in healthcare, it is crucial that we approach these advancements with caution. The implementation of health tech must prioritize privacy and security, as well as ensure that these tools are accessible to all populations, regardless of socioeconomic status."
/>
    <TeamData/>
<Footer/>
            </div>
        }
    </>
)
}

export default Team;