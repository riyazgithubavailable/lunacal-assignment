
import React from "react";
import { useMediaQuery } from 'react-responsive';
import RightComponent from "./RightComponent";

const MIN_WIDTH = 768;
const DASHBOARD_WIDTH = 1186;
const DASHBOARD_HEIGHT = 510;

const Dashboard = () =>{
    const isLaptop = useMediaQuery({ query: `(min-width: ${MIN_WIDTH}px)` });
    return(
       isLaptop ? (
        <div className="flex justify-center mx-auto my-4 w-[1186px] h-[510px]   rounded-[28px] opacity-100  items-center gap-8"
        style={{ background: 'linear-gradient(180deg, #373E44 -100%, #191B1F 100%)',boxShadow: '10px 10px 40px 10px #00000080',
            width: `${DASHBOARD_WIDTH}px`,
            height: `${DASHBOARD_HEIGHT}px`,
              
         }}
        >
         <div className="border-[1px] border-solid border-[#96BEE7] rounded-[27px] bg-[#616161] w-[550px] h-[400px]"></div>

         <RightComponent/>

        </div>
       ) : (<h1 style={{ backgroundColor: '#000', padding: '20px', 
                 textAlign:"center",display: 'flex', 
                 justifyContent: 'center', 
                 alignItems: 'center',
                 height: '100vh', 
                 width: '100vw',

       }} className="text-white ">Not accessible on smaller screens...</h1>)
        
    )
}

export default Dashboard;