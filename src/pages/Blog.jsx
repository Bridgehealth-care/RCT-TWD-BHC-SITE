import React, { useState, useEffect , useRef } from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Loader from '../components/Loader';
import {useNavigate} from "react-router-dom"
import a1 from "../assets/assets2/blogs/a1.png"
import a2 from "../assets/assets2/blogs/a2.png"
import b1 from "../assets/assets2/blogs/b1.png"
import b2 from "../assets/assets2/blogs/b2.png"
import c1 from "../assets/assets2/blogs/c1.png"
import c2 from "../assets/assets2/blogs/c2.png"
import c3 from "../assets/assets2/blogs/c3.png"
import d1 from "../assets/assets2/blogs/d1.png"
import d2 from "../assets/assets2/blogs/d2.png"
import e1 from "../assets/assets2/blogs/e1.png"
import e2 from "../assets/assets2/blogs/e2.png"
import e3 from "../assets/assets2/blogs/e3.png"
import f1 from "../assets/assets2/blogs/f1.jpeg"
import f2 from "../assets/assets2/blogs/f2.jpeg"
import g1 from "../assets/assets2/blogs/g1.png"
import g2 from "../assets/assets2/blogs/g2.png"
import g3 from "../assets/assets2/blogs/g3.png"
import h1 from "../assets/assets2/blogs/h1.png"
import h2 from "../assets/assets2/blogs/h2.png"
import i1 from "../assets/assets2/blogs/i1.jpg"
import i2 from "../assets/assets2/blogs/i2.png"
import j1 from "../assets/assets2/blogs/j1.jpg"
import j2 from "../assets/assets2/blogs/j2.png"
import j3 from "../assets/assets2/blogs/j3.png"


const Blog = () => {
    const ref = useRef()
    const [load, setLoad] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoad(false)
        }, 1000)
    }, []);
    const Blogs_Data = [
        {
            image : a1,
            title : "Is Google trying to acquire digital healthcare space?",
            description : "Google health is a branch of Google that was established in 2006 by the information technology giant Google. Originally it was designed as an attempt to create a repository of health records and data in order to connect doctors hospitals and pharmacies directly.",
            author : ["Sravani Rani Mishra" , "Monica Sivaprakash"],
            when : "Jan 27, 2022",
            data : {
                image : a1, 
                title : "Is Google trying to acquire digital healthcare space?",
                author : ["Sravani Rani Mishra" , "Monica Sivaprakash"] , 
                when : "Jan 27, 2022",
                description : "Google health is a branch of Google that was established in 2006 by the information technology giant Google. Originally it was designed as an attempt to create a repository of health records and data in order to connect doctors hospitals and pharmacies directly. But later on in the year 2018 it was announced that they were in a look out for medical data in order to improve the quality of health focused search results across Google and YouTube. This announcement has certainly risen eyebrows amongst the public as it was seen as a major privacy concern for personal data. Google health has undergone a series of ups and downs from the year 2008 to 2021. Currently Google health is reorganized and dissolved back into Google.",
                subdescriptions : [
                    {
                        title : "Journey from 2008-2012",
                        body : "Google health was initially a version of a service that allowed Google uses to volunteer the health records either manually or by logging into their accounts at a partnered health service provider into their Google health system thereby merging separate health records into one centralised Google health profile.Google health was initially a version of a service that allowed Google uses to volunteer the health records either manually or by logging into their accounts at a partnered health service provider into their Google health system thereby merging separate health records into one centralised Google health profile.",
                        highlight : "Our mission is to organise the world’s information and make it universally accessible and useful- Google"
                    },
                    {
                        title : "Journey from 2018-2021",
                        body : "Google health was initially a version of a service that allowed Google uses to volunteer the health records either manually or by logging into their accounts at a partnered health service provider into their Google health system thereby merging separate health records into one centralised Google health profile.Google health was initially a version of a service that allowed Google uses to volunteer the health records either manually or by logging into their accounts at a partnered health service provider into their Google health system thereby merging separate health records into one centralised Google health profile."
                    },
                    {
                        title : "Journey from 2018-2021",
                        body : "In 2018 when the project restarted, Google health was the name given to a team working within Google rather than a service or an application. During this tenure Google reorganized their Healthcare efforts and as a result Deepmind Health became a part of Google health. Deepika and non disclosed project called project nightingale. this project oversaw Google set health oriented features in Google search, G suite for Healthcare businesses, AI-based health Research offerings and alphabet subsidiaries Deepmind health, verily and calico.",
                        image : a2,
                        body2 : "In 2019 Google announced plans to acquire Fitbit which is an American consumer electronics and fitness company that produces wireless wearable technology fitness monitors and activity trackers like smart watches, pedometers,etc. Reacting to this the European data protection board voiced privacy concerns against this major step by Google in February 2020. Google in reply had promised that the Fitbit health and wellness data will not be used for Google ads which is unsupported by any evidence. In all Google health has currently been dissolved due to lack of widespread usage. Health experts say that the products that fell under the Google health umbrella had very little in common with one another with products ranging from consumer facing solutions to AI-enabled clinical solutions. Many products had different goals and different end users which has finally led to Google health decentralizing and fragmenting. The breakdown of Google health is not a sign that Google's healthcare initiatives are failing nor a sign that Google plans to eventually exit the Healthcare space. Rather it signals that the Healthcare projects should allow the company to focus more on its AI-enabled health care initiatives to clinical projects for a more targeted and widespread reach.",
                    }
                ]
            }
        },
        {
            image : b1,
            title : "Is IoT the next big thing in Digital Healthcare?",
            description : "IoT is an infrastructure that links everyone, whenever, wherever to all facilities, flexibly, through connectivity and networking. It is seen as a ground breaking development with several improvements over the years. ",
            author : ["Monica Sivaprakash"],
            when : "Jan 30, 2022",
            data : {
                image : b1, 
                title : "Is IoT the next big thing in Digital Healthcare?",
                author : ["Monica Sivaprakash"] , 
                when : "Jan 30, 2022",
                highlight : "IoT has become a major focus of health, energy, the environment, public protection, food and water access, connectivity, manufacturing and so on, and much more in different areas of social use. Currently, 20.35 billion connected devices will hit 75.44 billion in 2025 globally.",
                description : "IoT is an infrastructure that links everyone, whenever, wherever to all facilities, flexibly, through connectivity and networking. It is seen as a ground breaking development with several improvements over the years. The biggest benefit of the 'IoT in healthcare' is to reduce maintenance burden, followed by an increase in the chance of healthcare. The era of mobile information and general technology has further enhanced the widespread usage of IoT in all aspects of development. In digital healthcare service, cloud health has become a sought-after domain in recent times.",
                subdescriptions : [
                    {
                        title : "Few of the major latest technological advancements include:",
                        image : b2,
                        features : [
                            {
                                title : "Mobile health services",
                                desc : "Remotely accessible diagnostic parameters such as Pulse Oximetry, ECG, Sphygmomanometer, EMG, EEG, Glucose Monitoring and Implantable Neural Stimulators, etc can be assessed."
                            },
                            {
                                title : "Rehabilitation System",
                                desc : "EThe process of regenerating population growth issues and a lack of life skills can be improved by IoT. The capabilities of physically disabled people can be strengthened. In order to strengthen the recovery mechanism, the Body Sensor Network was introduced."
                            },
                            {
                                title : "Healthcare Solutions Using Smartphone",
                                desc : "The electronic device control system with sensors have so far been seen on the Smartphone. Specific mobile applications are offered in the healthcare sector to support patients, provide medical training and provide initial training. A range of software and hardware products that portray the Smartphone as a useful tool in healthcare are being developed.\n Internet of Things (IoT) based biomedical applications are deployed in biomedical systems such as healthcare/telecare, diagnosis, prevention, treatment, monitoring. Wireless body area networks (WBANs) and Radio frequency identification (RFID) systems , also called as enabling technologies, are key components of the IoT concept. \n With a lot of rapidly growing scope for IoT based Healthcare services, is it really going to become the next big deal?"
                            }
                        ]
                    }
                ]
            }
        },
        {
            image : c1,
            title : "Telemedicine: Can the future bring hospitals to your doorstep?",
            description : "Telemedicine (also referred to as telehealth or e- health) literally means “Healing from a distance”. It is the remote delivery of healthcare services like consultations and lab tests. It allows doctors to examine, diagnose and treat patients without the need for an in-person visit. ",
            author : ["Sravani Rani Mishra" ],
            when : "Jan 30, 2022",
            data : {
                image : c1, 
                title : "Telemedicine: Can the future bring hospitals to your doorstep?",
                author : ["Sravani Rani Mishra"] , 
                when : "Jan 30, 2022" ,
                subdescriptions : [
                    {
                        title : "What is telemedicine?",
                        body : "This is a concept of real time interactions between the patient and doctor such as video meeting, calling or texting software that complies with HIPAA regulations. It is widely used in the mental health sector these days as therapists can conduct live-sessions with their patients from the comfort of their homes. It was noted that many patients feel more comfortable to open-up while sitting in a familiar space.Most of the time patients have to stay at the hospital longer than the treatment due to the mandatory monitoring period. This can now be avoided with the use of special monitoring devices that can monitor your required medical data like temperature, blood sugar levels, blood pressure or other vital signs from anywhere. This not only saves a lot of money and time for the patient but also frees up the space for other needy patients.",
                        body2: "A lot of healthcare companies have now enabled the at- home testing feature where you can book a test and a trained physician would visit your house with all the necessary equipment, conduct the necessary tests and you can get your results within 24 hours on your phone. This was widely used during the Covid spread as this ensured proper sanitation and avoided visits to the crowded hospitals and diagnostic labs. You can then show this online report to your designated doctor and get further consultations all while sitting on your sofa. This not only assure utter convenience but also your safety during outburst of contagious diseases. Being a regular user of this feature, I can vouch for it to be the best medical experience of all time. For a long time during the pandemic, my mother complained of certain symptoms of thyroid. But being wary of the widespread pandemic, my father was hesitant to visit the hospital. After searching a solution for a while, I finally stumbled upon this telemedicine app called 1mg. The whole process was so easy. I searched for a whole-body check-up and found some different options; I chose one according to our budget and booked a date from the available slots. A physician arrived on the booked date with all the required equipment for the given tests. He sanitized all the equipment in front of us and conducted all the tests with utmost precision. We got the reports within 24 from the tests and forwarded it to our doctor. He then prescribed the required medicines which we could also order from the same app. The whole process was not only convenient but also safe and sanitary.",
                        body3: "Patients do not have to take leaves for a consultation or travel to the hospital while sick. This is a great help to people who live alone as they don’t have someone to drive them up to the hospital and take care of the paperwork. People in rural areas can now get access to all the services, such a mental health treatment or post-surgery follow up, that they otherwise might not get without traveling a large distance for an in-person visit. Similarly, patients who live in federally jails can get access to primary, dental and mental healthcare. It is not only convenient for the patents but also for the doctors as they can now examine patients from anywhere and do not have to cancel appointments due to personal issues. Due to the easy monitoring 24/7 doctors can now keep an eye on their patients all the time and to encourage their patients' healthy lifestyle choices, such as smoking cessation and proper sleeping habits. But every rose has its thorns. As with any technology that involves online transmission of data, telemedicine systems are vulnerable to hackers and breaches. Health being the most basic mortal need attracts a lot of crimes and criminals. Certain drugstores and chemists do not consider online prescriptions valid and refuse to provide medicines. A physical examination or diagnosis is mandatory before a physician can write a prescription, but there are certain loopholes in state laws as to what can be considered as a physical examination. People need to be trained on how to use telemedicine equipment. Most of the people in the rural areas are not even aware of the existence of all the facilities provided for them, this leads to counter- productiveness of the system. Costs of the equipment, such as integrated telemedicine carts and encounter management software requires some solid budget plans and investments. The startup cost of implementing telemedicine is especially prohibitive to rural facilities. Certain states may require providers who practice telemedicine across state lines have a valid license in the state where the patient is located.Although like every other technological innovation, telemedicine also has its pros and cons. But given an honest chance this could be a beginning of a revolution that can change healthcare as we know it. So, all the single people, senior citizens and disabled people can now bid farewell to the nightmares of being sick. No long lines for appointment, no looking for people to accompany you to hospital and no looking for wheelchair compliant paths as the telemedicine sector can now bring hospitals to your doorstep. Healthcare at your service." ,
                        image2 : c2,
                        image : c3,
                        highlight : "Telemedicine (also referred to as telehealth or e- health) literally means “Healing from a distance”. It is the remote delivery of healthcare services like consultations and lab tests. It allows doctors to examine, diagnose and treat patients without the need for an in-person visit. Patients can consult their physicians from the comfort of their homes by using their own personal technology like mobile phones or laptop."
                    }
                ]
            }
        },
        {
            image : d1,
            title : "AI monitoring devices Now carry a doctor with you 24-7.",
            description : "At today’s date, everybody knows about AI. Its present everywhere, from the automated electric cars to our next song to be played on phone. Weather it’s about predicting, comprehending, learning or acting, AI is increasingly sophisticated and efficient at almost everything humans do. Due to this the general population put their trust on AI in a heartbeat when it was introduced to the market in the early 2000s.",
            author : ["Sravani Rani Mishra"],
            when : "Jan 20, 2022",
            data : {
                image : d1 , 
                title : "AI monitoring devices: Now carry a doctor with you 24/7.Is Google trying to acquire digital healthcare space?",
                author : ["Sravani Rani Mishra"] , 
                when : "Jan 30, 2022",
                subdescriptions : [
                    {
                        title : "Journey from 2008-2012",
                        body : "At today’s date, everybody knows about AI. Its present everywhere, from the automated electric cars to our next song to be played on phone. Weather it’s about predicting, comprehending, learning or acting, AI is increasingly sophisticated and efficient at almost everything humans do. Due to this the general population put their trust on AI in a heartbeat when it was introduced to the market in the early 2000s. Since then, there has been no breaks to inventions of cutting-edge devices for monitoring your health. Few examples of which are the smart watches with bio sensors and ECG monitors. It is now possible to get regular reports of your heartrate, blood pressure and other vitals. They not only help in tracking your health but also helps in things like early diagnosis of fatal diseases and suggestion of appropriate medical procedures. In today’s date its widely used to detect cancers more accurately and in its earliest stages. The American cancer society stated that the mammograms often yield false results. Consequently, 50 % of healthy women who undergo the test are told they have cancer. The AI device is doing the work of a mammogram 30 times faster and with 99% accuracy resulting in less chaos and false reports. Consumer wearables and other medical devices, combined with AI, are being used to monitor and detect potentially life-threatening episodes in early-stage heart disease, allowing doctors and other caregivers to better monitor and detect potentially life-threatening episodes at an earlier, more treatable stage. This saves a lot of lives every year.Google health is a branch of Google that was established in 2006 by the information technology giant Google. Originally it was designed as an attempt to create a repository of health records and data in order to connect doctors hospitals and pharmacies directly. But later on in the year 2018 it was announced that they were in a look out for medical data in order to improve the quality of health focused search results across Google and YouTube. This announcement has certainly risen eyebrows amongst the public as it was seen as a major privacy concern for personal data. Google health has undergone a series of ups and downs from the year 2008 to 2021. Currently Google health is reorganized and dissolved back into Google.",
                        highlight : "Our mission is to organise the world’s information and make it universally accessible and useful- Google",
                        image : d2,
                        body2: "The AI devices can detect any irregularities in vitals and suggest various ways to get back in health. They also help in encouraging healthy habits like walking certain steps daily or drinking adequate amount of water. They can also suggest appropriate diet plans according to your current health conditions. People undergoing serious body transformation journeys often use these to keep a count of calorie intake and changes in their vitals. More often than not when people get too involved, they forget about taking care of their body. They get into a cardiac arrest from over exhaustion or get unconscious from starving. The AI devices prevents this and stops the user from taking extreme measures. It is also great for people with acute allergy issues as they can now just scan the ingredient list of any eatable and know within seconds if its safe for them to consume it. 186 to 226 people die every year due to anaphylactic reactions which can be drastically reduced with the use of AI devices. With so much information from around the globe an AI device is more likely to make much better decisions for the patients than any human. A KLAS Research report surveying 25 healthcare organizations found 38% of healthcare organizations running RPM programs focused on chronic care management reported reduced admissions, while 17% cited cost reductions. The global market for Remote Patient Monitoring systems is anticipated to be worth over $ 1.7 billion by 2027 up nearly 128% from the $745.7 million the market currently represents, according to Research and Markets. Some of the top companies in this field are Philip Healthcare, Dexcom, Medtronic and Senseonics. It is estimated that around one fourth of the world will be using AI health monitoring devices by the end of this decade." ,
                        highlight : "With every passing day, companies are working towards making their devices more accurate and smaller in size so that we can make it a part of our daily lives without feeling any inconvenience.",
                        body3 :"20 years back, if you listened to someone talking about AI you would think “they must be talking about some science fiction movie” and 20 years back if you listened someone say that you could carry a doctor with you 24/7 you wouldn’t hesitate to call the mental health department. But today AI and remote access to doctors are one of the hottest topics in the healthcare industry. Yes, Technology grows faster than we could possibly fathom, but not faster than the human imagination. As a kid when I heard people talk about 2020, it was mostly about how technology would rule the world and we would have flying cars. My friends would say AI robots would take over the world and make us their slaves. As embarrassed as I am about it, I was scared of AI robots too. But today, in the year 2022, when I see my father check my grandmother’s blood pressure from miles apart and feel at ease, I am more relived to be living in an era of advancing AI, than scared."
                    }
                ]
            }
        }
        ,
        {
            image : e1,
            title : "AR in healthcare: Reality is a matter of perception.",
            description : "Albert Einstein once said,“Reality is merely an illusion, albeit a persistent one.” All reality is perceptual. We never experience a thing because we detect energy, DEFINE what we are witnessing, then respond to our definitions, not the REAL thing at all. We experience what we can comprehend—nothing else. We can feel things that aren’t there even without cutting–edge technology. We have been doing it since the beginning of time.",
            author : ["Sravani Rani Mishra"],
            when : "Feb 04, 2022",
            data : {
                image : e1 , 
                title : "AR in healthcare: Reality is a matter of perception.",
                when : "Feb 04 , 2022",
                subdescriptions : [
                    {
                        body : "Albert Einstein once said,“Reality is merely an illusion, albeit a persistent one.” All reality is perceptual. We never experience a thing because we detect energy, DEFINE what we are witnessing, then respond to our definitions, not the REAL thing at all. We experience what we can comprehend—nothing else. We can feel things that aren’t there even without cutting–edge technology. We have been doing it since the beginning of time. There’s a famous story of a man freezing himself to death in an unplugged freezer. In 1988, a man named Nick Sitzman, a strong and healthy man got locked in the refrigerator of the train he worked on. He banged his fists and shouted until his hands were bloody and his voice hoarse. He kept thinking that he would freeze to death if someone didn’t save him soon. Soon he started accepting his death and wanted to leave a will for his wife and children. He found a knife and etched the words,“It’s so cold, my body is getting numb. If I could just go to sleep. These may be my last words”. The next day, he was found dead in the freezer. When the crew checked around, they discovered that the freezer was unplugged, and the temperature never dropped below 50 degrees. The autopsy showed the physical signs of dying due to hypothermia. The mind is powerful, so powerful it can save lives and take them. And this power led to the invention of “virtual reality.” Scientists soon realized this power of the mind, followed by many books written, experiments done, and innovations. So it was only a matter of time before it also set foot in the healthcare industry. The Healthcare industry is the most basic mortal need, and every innovation is first thought to be applied here.",
                        image :e2,
                        body2:"Today augmented reality is used in several places in the healthcare industry. One of the most popular uses is headsets like Microsoft HoloLens 2 by surgeons. It provides information to the surgeon while allowing them to use both of their hands during complicated surgeries. In addition, they can view 3-D models of challenging surgical cases. This not only helps to make the surgery more efficient and convenient, but it can also be collaborative. Experts worldwide can observe the live procedure and offer assistance and advice. The holographic nature can also make the training process more interactive and practical without using real corpses.",
                        highlight : "The medical education sector will take a giant leap with virtual reality, making the learning process way more efficient and knowledgeable.",
                        body3 : "AR is not only restricted to surgeons and doctors, but it also helps the nurses in finding the right veins to draw blood from. It also explains complicated disorders and medical procedures to the patients to validate their consent. It is used to engage patients in healthy interactive activities. It is observed that the patients understand their problem better and are more actively involved in the treatment procedure by this method. This is even more efficient in the pediatrics department as this fun way helps children be more cooperative with the process.The development of AR is highly dependent on AI. VR and AR-based apps’ self-guided treatments help people in isolation treat their injuries like addressing chronic pains, having meditation sessions to overcome anxiety, or planning recovering joint dysfunctions exercises remotely. People undergoing rehabilitation can now go through more fun and gamification, resulting in early and efficient recoveries.",
                        image2 : e3
                        ,
                        body4 : "Some of the healthcare-focused AR apps in the current market are Eye Decide — Which uses your camera to simulate the impact of various disorders on a person’s vision to educate patients with cataracts and age-related macular degeneration. Doctor Mole — Helps doctors analyze suspicious moles on the body and give instant feedback to detect malignant lesions. Healthcare App by pixel bug helps physicians easily understand the working of a new medical device or its functions. Anatomy 4D — Gives medical experts, professionals, students, and teachers an interactive 4D understanding of the human anatomy concerning spatial relationships of organs, skeletons, and muscles. MEVIS Surgery App —offers a virtual 3D reconstruction of real organs. Surgeons use it to perform liver resections using overlaid images displayed on an iPad that help locate blood vessels or tumours. MedicAR — A Google Glass app for surgeons to properly align incision points for minor patient trauma. It is anticipated to be used in complex surgeries and MRI exams. Augmented and Virtual Reality in Healthcare Market was valued at USD 504.5 Million in 2016. USD 885.7 million in 2020 is expected to reach USD 4,997.9 Million by 2023, at a CAGR of 36.6% during the forecast period. The base year considered for this study is 2016, and the forecast period considered is between 2017 and 2023. During the pandemic, the growth was 36% only for the year 2020. the market is anticipated to grow to USD 11,657.8 million by 2028 at a CAGR of 38.3% in the 2021-2028 period. The AR market is in its early stages and is growing exponentially, especially in the last two years. Many big companies are trying to create more valuable and affordable AR devices. Google marked its beginning with google glass, and many companies followed it. The market is ripe and ready for some innovations. The world of ideas is the only reality, and this physical world is a mere shadow."
                    }
                ]
            }
        }
        ,
        {
            image : f1 ,
            title : "Healthcare data security: one single vulnerability is all an attacker needs",
            description : "More than forty million people were affected by data breaches in over 550 organizations last year. With technology advancing so fast, the threats that come with it have also increased tremendously. And healthcare industry has always been one of the primary targets for cybercrimes.Imagine someone you care about is on the verge of death(god forbid!). At that point, you would give almost every information. We seldom check the papers we sign or the terms we agree. Unfortunately, we often tend to lose sight of rational thinking at hospitals.",
            author : ["Sravani Rani Mishra"],
            when : "Feb 10, 2022",
            data : {
                image : f1 , 
                title : "Is Google trying to acquire digital healthcare space?",
                author : ["Sravani Rani Mishra" , "Monica Sivaprakash"] , 
                when : "Jan 27, 2022",
                heading : "Is Google trying to acquire digital healthcare space?",
                description : "Google health is a branch of Google that was established in 2006 by the information technology giant Google. Originally it was designed as an attempt to create a repository of health records and data in order to connect doctors hospitals and pharmacies directly. But later on in the year 2018 it was announced that they were in a look out for medical data in order to improve the quality of health focused search results across Google and YouTube. This announcement has certainly risen eyebrows amongst the public as it was seen as a major privacy concern for personal data. Google health has undergone a series of ups and downs from the year 2008 to 2021. Currently Google health is reorganized and dissolved back into Google.",
                subdescriptions : [
                    {
                        title : "Journey from 2008-2012",
                        body : "Imagine someone you care about is on the verge of death(god forbid!). At that point, you would give almost every information. We seldom check the papers we sign or the terms we agree. Unfortunately, we often tend to lose sight of rational thinking at hospitals. More often than not, hospitals are on the news as a victim of data breaches and millions of people affected. These are for different reasons, including credential-stealing malware, an insider who intentionally or unintentionally discloses patient data, or losing laptops or other devices. Today, Personal Health Information has higher value in the black market than credit card credentials, bank details, or regular Personally Identifiable Information. Hence, a higher incentive for cybercriminals to target medical databases. Generally, the cost of a data breach sustained by a non-healthcare agency is $158 per record. However, for healthcare-related agencies, the price is $355 on average. In addition, reports found that months can lapse before a healthcare organization uncovers and recovers from a breach. To be exact, healthcare organizations take 96 days to discover a data breach and 236 days to recover. According to the Infosec Institute, bank details or other Personally Identifiable Information sells for $1-$2 on the black market, but health details can sell for as much as $363 as the personal health history, like ailments, illnesses, surgeries, etc., can't be altered, unlike credit card information or Social Security Numbers.",
                        highlight : "More than forty million people were affected by data breaches in over 550 organizations last year. With technology advancing so fast, the threats that come with it have also increased tremendously. And healthcare industry has always been one of the primary targets for cybercrimes.",
                        body2 : "Health details are valuable because criminals can use them to target victims with frauds and scams that use victims' medical conditions or victim settlements-- also used to create counterfeit insurances, allowing for the purchase and resale of medical equipment. In addition, some criminals use medical files to access prescriptions for their use or resale illegally. Some of the most critical healthcare data breaches are Excellus BlueCross BlueShield happened in September 2015 affected over 10 million people. The healthcare industry got a powerful wake-up call in 2015. The first six months saw 62 percent of the most significant healthcare security breaches. The Premera Blue Cross in January 2015 affected over 11 million people. Premera's announcement of the second-largest healthcare breach came just six weeks after disclosing the largest healthcare data breach, which brings us to the Anthem Blue Cross. In January 2015, the Anthem Blue Cross data breach affected 78.8 million people resulting in the most critical data breach history. The cyberattack consumed highly sensitive data, including names, Social Security numbers, home addresses, and dates of birth. Even though some were non-members, the victims were predominantly Anthem health plan members, as Anthem also handled the paperwork for several independent insurance companies. California saw the highest number of breaches, reporting 49. But Michigan had the most affected people. An IBM study released in December 2016 found that 70 percent of business executives with experience of cyberattacks had paid to get data back, with more than half paying over $10,000 and one-fifth paying more than $40,000. Ransom demands are anticipated to increase over time. It takes years to build a reputation and a few minutes of cyber-incident to burn it to ashes. Ransomware or the cost of breaches aren't the only menaces. Another critical concern is the inception of risks from the Internet of Things (IoT), cloud, and mobile health apps. As the healthcare industry continues to expedite the evolution of its IT infrastructure, the need for sufficient security increases swiftly. And the pace is substantial. In just two years, the number of US hospitals allowing patients to view digitally, download, and transfer their health information jumped from just 10 percent in 2013 to 69 percent in 2015.4The HIPAA Privacy Rule protects the victims of healthcare cybercrimes and prevents data breaches to a maximum extent. It established national standards to protect individuals' medical records and other individually identifiable health information (collectively defined as protected health information). In addition, encryption is enacted both at rest and in transit, and third parties and vendors that have access to healthcare systems or databases are also handling patient data carefully. Finally, it is also advised to the general public to take extra care of where you are providing your information. Better safe than sorry.For every lock, there is someone out there trying to pick it or break it.- David Bernstein" , 
                        image : f2
                    }
                ]
            }
        }
        ,
        {
            image : g1,
            title : "Mental health Recovery models: A Scientific guide to a healthy mind",
            description : "Mental health or Mental well-being refers to our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also determines how we exactly handle stress, relate to others, and make choices. Mental health is a crucial aspect at every stage of life, from childhood and adolescence through adulthood. Over the course of your life, if you experience mental health problems, you’re thinking, mood, and behaviour could be affected.",
            author : ["Monica Sivaprakash"],
            when : "Feb 04, 2022",
            data : {
                image : g1 , 
                title : "Is Google trying to acquire digital healthcare space?",
                author : ["Sravani Rani Mishra" , "Monica Sivaprakash"] , 
                when : "Jan 27, 2022",
                heading : "Is Google trying to acquire digital healthcare space?",
                description : "Google health is a branch of Google that was established in 2006 by the information technology giant Google. Originally it was designed as an attempt to create a repository of health records and data in order to connect doctors hospitals and pharmacies directly. But later on in the year 2018 it was announced that they were in a look out for medical data in order to improve the quality of health focused search results across Google and YouTube. This announcement has certainly risen eyebrows amongst the public as it was seen as a major privacy concern for personal data. Google health has undergone a series of ups and downs from the year 2008 to 2021. Currently Google health is reorganized and dissolved back into Google.",
                subdescriptions : [
                    {
                        title : "Journey from 2008-2012",
                        body : "Imagine someone you care about is on the verge of death(god forbid!). At that point, you would give almost every information. We seldom check the papers we sign or the terms we agree. Unfortunately, we often tend to lose sight of rational thinking at hospitals. More often than not, hospitals are on the news as a victim of data breaches and millions of people affected. These are for different reasons, including credential-stealing malware, an insider who intentionally or unintentionally discloses patient data, or losing laptops or other devices. Today, Personal Health Information has higher value in the black market than credit card credentials, bank details, or regular Personally Identifiable Information. Hence, a higher incentive for cybercriminals to target medical databases. Generally, the cost of a data breach sustained by a non-healthcare agency is $158 per record. However, for healthcare-related agencies, the price is $355 on average. In addition, reports found that months can lapse before a healthcare organization uncovers and recovers from a breach. To be exact, healthcare organizations take 96 days to discover a data breach and 236 days to recover. According to the Infosec Institute, bank details or other Personally Identifiable Information sells for $1-$2 on the black market, but health details can sell for as much as $363 as the personal health history, like ailments, illnesses, surgeries, etc., can't be altered, unlike credit card information or Social Security Numbers.",
                        highlight : "More than forty million people were affected by data breaches in over 550 organizations last year. With technology advancing so fast, the threats that come with it have also increased tremendously. And healthcare industry has always been one of the primary targets for cybercrimes.",
                        body2 : "Health details are valuable because criminals can use them to target victims with frauds and scams that use victims' medical conditions or victim settlements-- also used to create counterfeit insurances, allowing for the purchase and resale of medical equipment. In addition, some criminals use medical files to access prescriptions for their use or resale illegally. Some of the most critical healthcare data breaches are Excellus BlueCross BlueShield happened in September 2015 affected over 10 million people. The healthcare industry got a powerful wake-up call in 2015. The first six months saw 62 percent of the most significant healthcare security breaches. The Premera Blue Cross in January 2015 affected over 11 million people. Premera's announcement of the second-largest healthcare breach came just six weeks after disclosing the largest healthcare data breach, which brings us to the Anthem Blue Cross. In January 2015, the Anthem Blue Cross data breach affected 78.8 million people resulting in the most critical data breach history. The cyberattack consumed highly sensitive data, including names, Social Security numbers, home addresses, and dates of birth. Even though some were non-members, the victims were predominantly Anthem health plan members, as Anthem also handled the paperwork for several independent insurance companies. California saw the highest number of breaches, reporting 49. But Michigan had the most affected people. An IBM study released in December 2016 found that 70 percent of business executives with experience of cyberattacks had paid to get data back, with more than half paying over $10,000 and one-fifth paying more than $40,000. Ransom demands are anticipated to increase over time. It takes years to build a reputation and a few minutes of cyber-incident to burn it to ashes. Ransomware or the cost of breaches aren't the only menaces. Another critical concern is the inception of risks from the Internet of Things (IoT), cloud, and mobile health apps. As the healthcare industry continues to expedite the evolution of its IT infrastructure, the need for sufficient security increases swiftly. And the pace is substantial. In just two years, the number of US hospitals allowing patients to view digitally, download, and transfer their health information jumped from just 10 percent in 2013 to 69 percent in 2015.4The HIPAA Privacy Rule protects the victims of healthcare cybercrimes and prevents data breaches to a maximum extent. It established national standards to protect individuals' medical records and other individually identifiable health information (collectively defined as protected health information). In addition, encryption is enacted both at rest and in transit, and third parties and vendors that have access to healthcare systems or databases are also handling patient data carefully. Finally, it is also advised to the general public to take extra care of where you are providing your information. Better safe than sorry.For every lock, there is someone out there trying to pick it or break it.- David Bernstein" , 
                        image : g2
                    }
                ]
            }
        },
        {
            image : h1,
            title : "Budget 2022: Is Digital healthcare the new normal?",
            description : "Recently India’s Finance Minister Nirmala Sitharaman had announced the country’s Budget for the financial 2022-2023. The Budget is seen to emphasize less on the healthcare domain compared to last year’s budget where health was majorly focused upon with the introduction of six new schemes. However, in the budget for this year, importance seems to be given to digital healthcare and this was welcomed by the healthcare industry.",
            author : ["Sravani Rani Mishra"],
            when : "Feb 11, 2022",
            data : {
                image : h1 , 
                title : "Is Google trying to acquire digital healthcare space?",
                author : ["Sravani Rani Mishra" , "Monica Sivaprakash"] , 
                when : "Jan 27, 2022",
                heading : "Is Google trying to acquire digital healthcare space?",
                description : "Google health is a branch of Google that was established in 2006 by the information technology giant Google. Originally it was designed as an attempt to create a repository of health records and data in order to connect doctors hospitals and pharmacies directly. But later on in the year 2018 it was announced that they were in a look out for medical data in order to improve the quality of health focused search results across Google and YouTube. This announcement has certainly risen eyebrows amongst the public as it was seen as a major privacy concern for personal data. Google health has undergone a series of ups and downs from the year 2008 to 2021. Currently Google health is reorganized and dissolved back into Google.",
                subdescriptions : [
                    {
                        title : "Journey from 2008-2012",
                        body : "Google health was initially a version of a service that allowed Google uses to volunteer the health records either manually or by logging into their accounts at a partnered health service provider into their Google health system thereby merging separate health records into one centralised Google health profile.Google health was initially a version of a service that allowed Google uses to volunteer the health records either manually or by logging into their accounts at a partnered health service provider into their Google health system thereby merging separate health records into one centralised Google health profile.",
                        highlight : "Our mission is to organise the world’s information and make it universally accessible and useful- Google"
                    },
                    {
                        title : "Journey from 2018-2021",
                        body : "Google health was initially a version of a service that allowed Google uses to volunteer the health records either manually or by logging into their accounts at a partnered health service provider into their Google health system thereby merging separate health records into one centralised Google health profile.Google health was initially a version of a service that allowed Google uses to volunteer the health records either manually or by logging into their accounts at a partnered health service provider into their Google health system thereby merging separate health records into one centralised Google health profile."
                    },
                    {
                        title : "Journey from 2018-2021",
                        body : "In 2018 when the project restarted, Google health was the name given to a team working within Google rather than a service or an application. During this tenure Google reorganized their Healthcare efforts and as a result Deepmind Health became a part of Google health. Deepika and non disclosed project called project nightingale. this project oversaw Google set health oriented features in Google search, G suite for Healthcare businesses, AI-based health Research offerings and alphabet subsidiaries Deepmind health, verily and calico.",
                        image : h2,
                        body2 : "In 2019 Google announced plans to acquire Fitbit which is an American consumer electronics and fitness company that produces wireless wearable technology fitness monitors and activity trackers like smart watches, pedometers,etc. Reacting to this the European data protection board voiced privacy concerns against this major step by Google in February 2020. Google in reply had promised that the Fitbit health and wellness data will not be used for Google ads which is unsupported by any evidence. In all Google health has currently been dissolved due to lack of widespread usage. Health experts say that the products that fell under the Google health umbrella had very little in common with one another with products ranging from consumer facing solutions to AI-enabled clinical solutions. Many products had different goals and different end users which has finally led to Google health decentralizing and fragmenting. The breakdown of Google health is not a sign that Google's healthcare initiatives are failing nor a sign that Google plans to eventually exit the Healthcare space. Rather it signals that the Healthcare projects should allow the company to focus more on its AI-enabled health care initiatives to clinical projects for a more targeted and widespread reach.",
                    }
                ]
            }
        }
        ,
        {
            image : i1,
            title : "Another Pandemic: Can India handle it?",
            description : "The quality of the Indian healthcare system and its infrastructure has always been a crucial debatable topic as there is always a question of whether the government is doing enough to suffice the need of its large population, whether there is proportionate allocation of funds to improvise the infrastructure, etc. ",
            author : ["Monica Sivaprakash"],
            when : "Mar 1, 2022",
            data : {
                image : i1 , 
                title : "Is Google trying to acquire digital healthcare space?",
                author : ["Sravani Rani Mishra" , "Monica Sivaprakash"] , 
                when : "Jan 27, 2022",
                heading : "Is Google trying to acquire digital healthcare space?",
                description : "Google health is a branch of Google that was established in 2006 by the information technology giant Google. Originally it was designed as an attempt to create a repository of health records and data in order to connect doctors hospitals and pharmacies directly. But later on in the year 2018 it was announced that they were in a look out for medical data in order to improve the quality of health focused search results across Google and YouTube. This announcement has certainly risen eyebrows amongst the public as it was seen as a major privacy concern for personal data. Google health has undergone a series of ups and downs from the year 2008 to 2021. Currently Google health is reorganized and dissolved back into Google.",
                subdescriptions : [
                    {
                        title : "Journey from 2008-2012",
                        body : "Google health was initially a version of a service that allowed Google uses to volunteer the health records either manually or by logging into their accounts at a partnered health service provider into their Google health system thereby merging separate health records into one centralised Google health profile.Google health was initially a version of a service that allowed Google uses to volunteer the health records either manually or by logging into their accounts at a partnered health service provider into their Google health system thereby merging separate health records into one centralised Google health profile.",
                        highlight : "Our mission is to organise the world’s information and make it universally accessible and useful- Google"
                    },
                    {
                        title : "Journey from 2018-2021",
                        body : "Google health was initially a version of a service that allowed Google uses to volunteer the health records either manually or by logging into their accounts at a partnered health service provider into their Google health system thereby merging separate health records into one centralised Google health profile.Google health was initially a version of a service that allowed Google uses to volunteer the health records either manually or by logging into their accounts at a partnered health service provider into their Google health system thereby merging separate health records into one centralised Google health profile."
                    },
                    {
                        title : "Journey from 2018-2021",
                        body : "In 2018 when the project restarted, Google health was the name given to a team working within Google rather than a service or an application. During this tenure Google reorganized their Healthcare efforts and as a result Deepmind Health became a part of Google health. Deepika and non disclosed project called project nightingale. this project oversaw Google set health oriented features in Google search, G suite for Healthcare businesses, AI-based health Research offerings and alphabet subsidiaries Deepmind health, verily and calico.",
                        image : i2,
                        body2 : "In 2019 Google announced plans to acquire Fitbit which is an American consumer electronics and fitness company that produces wireless wearable technology fitness monitors and activity trackers like smart watches, pedometers,etc. Reacting to this the European data protection board voiced privacy concerns against this major step by Google in February 2020. Google in reply had promised that the Fitbit health and wellness data will not be used for Google ads which is unsupported by any evidence. In all Google health has currently been dissolved due to lack of widespread usage. Health experts say that the products that fell under the Google health umbrella had very little in common with one another with products ranging from consumer facing solutions to AI-enabled clinical solutions. Many products had different goals and different end users which has finally led to Google health decentralizing and fragmenting. The breakdown of Google health is not a sign that Google's healthcare initiatives are failing nor a sign that Google plans to eventually exit the Healthcare space. Rather it signals that the Healthcare projects should allow the company to focus more on its AI-enabled health care initiatives to clinical projects for a more targeted and widespread reach.",
                    }
                ]
            }
        }
        ,
        {
            image : j1,
            title : "Blockchain in Health Care: Hope or Hype?",
            description : "A blockchain may be a distributed system that generates and stores data records. It maintains a digital tally of connected “ blocks” of data that represent how data is participated, changed, or penetrated on its peer-to-peer network.All devices on an original blockchain system will induce identical blocks when a connected device is involved in any relative t transaction. However, changed, partook, or else manipulated in any way, If one computer’s data is penetrated.",
            author : ["Gagan Reddy"],
            when : "Mar 10, 2022",
            data : {
                image : j1,
                title : "Blockchain in Health Care: Hope or Hype?",
                author : ["Gagan Reddy"] , 
                when : "Mar 10, 2022",
                subdescriptions : [
                    {
                        title : "What Is Blockchain?",
                        body : "All devices on an original blockchain system will induce identical blocks when a connected device is involved in any relative t transaction. However, changed, partook, or else manipulated in any way, If one computer’s data is penetrated. This way, changes to data are frequently fluently linked. It’s a decentralized approach that permits data equality to be achieved by comparing every connected device’s blocks.",
                        highlight : "A blockchain may be a distributed system that generates and stores data records. It maintains a digital tally of connected “ blocks” of data that represent how data is participated, changed, or penetrated on its peer-to-peer network.",
                        features : [
                            {
                                title : "Supply Chains",
                                desc : "The pharmaceutical industry has one of the highest standards for product safety, security, and stability, it’s ripe for disruption. supply chain management with blockchain can be monitored securely and transparently. This can greatly reduce time delays and human mistakes. It can also be used to monitor costs, labor, and even waste in emissions at every point in the supply chain. It can also be used to verify the authenticity of products by tracking them from their origin, combating the counterfeit drug market that costs 200 billion dollars in losses to the market annually. Companies like Chronicled, Blockpharma, and Modum are already working towards more efficient blockchain logistic solutions . Modum in particular works in compliance with EU laws that require proof that medicinal products have not been exposed to particular conditions, especially certain temperatures which may comprise their quality. Modum’s solution was to develop a sensor that records environmental conditions while physical products are in transit and permanently records them on the blockchain",
                                image : j2
                            },
                            {
                                title : "Health Records",
                                desc : "Electronic medical records are the backbone of every modern healthcare system. But your medical records grow longer and become more complex with each visit to your doctor. And since every hospital and every doctor’s office has a different way of storing them, it’s not always easy for healthcare providers to obtain them. There are already some companies out there, like Patientory, Medibloc or Medicalchainthat aim to solve this problem. The goal is to give patients authority over their entire medical history and provide one-stop access to it for patients and physicians as well blockchain would simplify and make access more efficient and inherently bring data security to the field.Security of knowledge may be a very significant issue within the healthcare industry. With the increasing number of knowledge breaches per annum, data security has become a huge concern for patients worldwide. Luckily, ensuring data security may be a general application of blockchain healthcare today.Blockchain technology may be a decentralized, distributed, and immutable ledger of records. Whatever information is stored on the blockchain becomes nearly impossible to hack or change due to the technology’s high-security features. The transparency it offers ensures that any changes to the knowledge are visible, and there's no scope of tampering with the info. Hence, blockchain technology allows providers and patients to quickly and safely exchange sensitive healthcare information, by providing privacy and transparency through encryptions and complex protection codes.Blockchain technology also eliminates risks linked to data centralization, hence making it very useful to manage patient data efficiently and securely. Today, patient information is majorly stored in a centralized manner, making it susceptible to data hacks, breaches, and theft. Blockchain technology is a superb solution to tackle this problem because it distributes the knowledge among various nodes, making it impossible to hack or tamper. But how? Let’s see:The healthcare institutions or providers save the patient’s health records on the blockchain with the assistance of smart contracts. A public key or a singular ID is generated, which can be required to access the info.If a doctor wants to access the knowledge, he must have the patient’s public key. The data is visible to the healthcare provider on just one occasion the key or unique ID matches. Without the general public key, no blockchain healthcare solution can reveal the knowledge saved thereon. Hence, patients can share their public keys with the healthcare organizations whenever required. This key will provide institutions access to data but will keep the patient’s identity private because the data will remain non-identifiable without the private key. Let’s check out a couple of real-world examples of how blockchain technology is used for patient data management and security",
                            },
                            {
                                title : "Medical staff credential verification",
                                desc : "Similar to tracking the provenance of medical goods, blockchain technology can be used to track the experience of medical professionals, where trusted medical institutions and healthcare organizations can log the credentials of their staff, in turn helping to streamline the hiring process for healthcare organizations. The key benefits of the blockchain system are:<br/>Faster credentialing for healthcare organizations during the hiring process.<br/>An opportunity for medical institutions, insurers, and healthcare providers to monetize their existing credentials data on past ad existing staff.<br/>Transparency and reassurance for partners, e.g. Organizations sub-contracting locum tenens, or in emerging virtual health delivery models to inform patients on medical staff experience.<br/>Blockchain is a new and rapidly changing technology. As with any new and reasonable technology, Gartner’s hype cycle follows. It starts at Innovation trigger (Blockchain 1.0)technology passes Peak of inflated expectations(Blockchain 2.0). Then it falls into the pit of Trough of disillusionment and then begins to climb up the Slope of enlightenment (Blockchain 3.0) to the Plateau of productivity - Blockchain 4.0, we hope. Blockchain is the hope of health care.<br/>It seems that current days are optimal to start serious implementation of blockchain in healthcare.",
                                image : j3
                            },
                        ]
                    }
                ]
            }
        }
    ]
    const navigate = useNavigate()
    return (
        <>
            {
                load ? <Loader /> : <div className="w-screen h-screen scrollbar-thin scrollbar-thumb-bhc_green scrollbar-track-emerald-50 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full  font-lora">
                    <Navbar navClr={true} />
                    <div className="w-full min-h-screen ">
                        <div className="pl-20  bg-slate-100 h-full">
                            <div className="flex flex-col  w-24 py-4 h-full justify-between">
                                <span className="text-4xl font-lora tracking-wider">Blogs</span>
                                <span className="w-full h-1 bg-bhc_green mt-2"></span>
                            </div>
                        </div>
                        <div className="w-full grid grid-cols-3 gap-x-20 p-10 gap-y-20 bg-card_bg">
                            {
                                Blogs_Data.map((ele)=>(
                                    <div className="flex flex-col font-lora space-y-2 shadow-2xl rounded-2xl overflow-hidden pb-4 group cursor-pointer" key={ele.title}>
                                        <div className="h-[200px] overflow-hidden">
                                            <img src={ele.image} alt="" className='h-full w-full object-cover group-hover:scale-110 duration-300'/>
                                        </div>
                                        <div className="flex flex-col space-y-2 p-4">
                                            <div className="flex flex-col space-y-3">
                                                <div className="flex space-x-4 mr-2">
                                                    {
                                                        ele.author.map((ele2)=>(
                                                            <span className="text-sm text-bhc_green tracking-wider underline" key={ele2}>{ele2}</span>
                                                        ))
                                                    }
                                                </div>
                                                <span className="font-bold text-bhc_green tracking-wider">{ele.when}</span>
                                            </div>
                                            <span className="text-xl font-semibold">{ele.title}</span>
                                            <p className="font-xs">{ele.description}</p>
                                        </div>
                                        <button className='bg-bhc_green text-bhc_white  w-32 py-2 mx-auto cursor-pointer hover:bg-bhc_white hover:text-bhc_green duration-300 hover:border-bhc_green border-2 ' onClick={()=>navigate(`/blog/${ele.title.split(" ").join("-")}` , { state :  ele.data})}>Read More</button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <Footer />
                </div>
            }
        </>
    )
}
export default Blog