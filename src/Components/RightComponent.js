import React,{useState,useRef} from 'react'
import image from "../asset/Frame 1000002294img.svg";
import image1 from "../asset/Rectangle 5160.svg";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const RightComponent= () =>{
    const [isActive1, setIsActive1] = useState(true);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [click,setClick] = useState(true);
    const [images, setImages] = useState([]);
    const containerRef = useRef(null);
    function handleGallery(params) {
       setClick(!click)
    }
   function handleChange1() {
    setIsActive1(!isActive1);
    setIsActive2(false);
    setIsActive3(false);
   }
   function handleChange2() {
    setIsActive2(!isActive2);
    setIsActive1(false);
    setIsActive3(false);
   }
   function handleChange3() {
    setIsActive3(!isActive3);
    setIsActive1(false);
    setIsActive2(false)
   }
   function addImage(params) {
      setImages([...images, image1])
   }
   const handleScrollForward = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + 200,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollBackward = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft - 200,
        behavior: 'smooth',
      });
    }
  };
  return (
       
       <div className=" flex flex-col    w-[550px] h-[400px] gap-4"> 
           <div className=" rounded-[18.89px] h-[180px] bg-[#363C43]"
              style={{boxShadow:"5.67px 5.67px 3.78px 0px #00000066"}}
           >
            <nav className=" flex justify-between w-[450px] bg-[#171717] rounded-[18px] h-[48px] mx-auto my-4 p-2 px-4">
            <button className={`hover:bg-[rgba(40,41,47,0.9)] hover:transition duration-300 ease-in-out hover:scale-110 text-white w-[110px] rounded-[12px] text-[14px] ${isActive1 ? 'active1' : ''}`}
              onClick={handleChange1}
              
            >About Me</button>
                <button className={`hover:bg-[rgba(40,41,47,0.9)] hover:transition duration-300 ease-in-out hover:scale-110 text-white w-[110px] rounded-[12px] text-[14px] ${isActive2 ? 'active2' : ''}`}
                 onClick={handleChange2}
                >Experiences</button>
                <button className={`hover:bg-[rgba(40,41,47,0.9)] hover:transition duration-300 ease-in-out hover:scale-110 text-white w-[110px] rounded-[12px] text-[14px] ${isActive3 ? 'active3' : ''}`}
                  onClick={handleChange3}
                >Recomanded</button>
            </nav>
            <header className="flex justify-between px-2" >
             <img src={image} alt="random" className="w-[24px] h-[110.69px] absolute top-[85px]" />
            {
                isActive1 && <p className="mx-auto text-white text-[14px] px-8 ">Hello! I'm Riyaz Sheikh and i'm a highly motivated and detail-oriented full-stack developer,
                I bring a passion for creating innovative and scalable solutions to the table. With a strong foundation in  front-end.
               </p>
            }
            {
              isActive2 && <p className="mx-auto text-white text-[14px] px-8 ">As a self-motivated and enthusiastic learner, I have gained hands-on experience in developing scalable 
                and innovative solutions using React, JavaScript, and CSS.</p> 
            }
            {
              isActive3 && <p className="mx-auto text-white text-[14px] px-8 ">Highly motivated and detail-oriented full-stack developer with hands-on experience in developing scalable and innovative solutions using React, 
              JavaScript, and CSS.
              systems."</p>
            }
              
            <div className="w-[8px] h-[64px] rounded-[8px] absolute right-[62px]" style={{ background: "linear-gradient(177.32deg, #888989 5.6%, #4A4E54 93.28%)", boxShadow: "4px 4px 4.9px 0px #00000040", }} >
            </div>
             
         </header>
          </div>
          <div className="w-[412px] h-[4px] rounded-[2.46px] mx-auto"
             style={{
                background: `
                  linear-gradient(180deg, rgba(40, 40, 40, 0.1) 0%, rgba(248, 248, 248, 0.1) 100%),
                  linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))
                `,
                boxShadow:"0px 4px 4px 0px #00000054"
              }}
          >
           </div>
          <div className=" rounded-[18.89px] h-[180px] bg-[#363C43] px-2"
              style={{boxShadow:"5.67px 5.67px 3.78px 0px #00000066"}}>

           <img src={image} alt="random" className="w-[24px] h-[110.69px] absolute bottom-[180px]" />

           <div className="flex  justify-between mx-8 p-2 px-4 ">
            <button className=" bg-[#171717] text-white w-[110px] h-[38px] rounded-[12px] text-[14px] transition-transform duration-200 active:scale-110 "
              style={{boxShadow:" 0px 4px 10px 2px #00000040 inset"}}
              onClick={handleGallery}
            >Gallery</button>
            <div className="flex justify-between  gap-4"> 
              <button class="w-[105px] h-[38px] bg-[#FFFFFF08]   rounded-[20px] opacity-100  text-white text-[14px] transition-transform duration-200 active:scale-110"
                 style={{boxShadow: "0px 3.26px 3.26px 0px #FFFFFF26 inset",
                         boxShadow: "0px 0px 48.91px 0px #FFFFFF0D inset",
                         boxShadow: "9px 10px 7.1px 0px #00000066",
                         boxShadow: "-0.5px -0.5px 6.9px 0px #FFFFFF40",
                }}
                onClick={addImage}
                >+ADDIMAGE</button>
              <button className=" bg-[#171717] text-white w-[38px] h-[38pxpx] rounded-[22px] text-[14px] transition-transform duration-200 active:scale-110"
                 style={{background:" linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)",
                         boxShadow: "4px 5px 30px 5px #101213",
                        boxShadow: "-5px -3px 30px -10px #96BEE7"
                        }}
                        onClick={handleScrollBackward}
              ><ArrowBackIcon/></button>
              <button className=" bg-[#171717] text-white w-[38px] h-[38pxpx] rounded-[22px] text-[14px] transition-transform duration-200 active:scale-110"
                style={{background:" linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)",
                  boxShadow: "4px 5px 30px 5px #101213",

               boxShadow: "-5px -3px 30px -10px #96BEE7"
              
             }}
             onClick={handleScrollForward}
              ><ArrowForwardIcon/></button>
              
            </div>
           
           </div>
           {
            click &&  <div className='flex overflow-hidden overflow-x-auto mx-10 gap-[4px] img'  ref={containerRef} >
            
            {
           images.map((image,index)=>(
             <img key={index} src={image} alt='react' className='w-[115px] h-[95px] rounded-[24px] ' />
                ))
            }
         
              </div>
           }
           
          
            </div>
            <div className="w-[412px] h-[4px] rounded-[2.46px] mx-auto"
             style={{
                background: `
                  linear-gradient(180deg, rgba(40, 40, 40, 0.1) 0%, rgba(248, 248, 248, 0.1) 100%),
                  linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))
                `,
                boxShadow:"0px 4px 4px 0px #00000054"
              }}
          >
           </div>
         </div>
  )
  }

export default RightComponent;
