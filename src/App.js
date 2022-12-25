import React,{useState} from "react";
import "./style.css";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {AiOutlineArrowRight} from "react-icons/ai";
import {BsCircle} from "react-icons/bs";
import {MdPlayArrow} from "react-icons/md";
import {CiTextAlignJustify} from "react-icons/ci";
import {BsPlusSquare} from "react-icons/bs";
import {BsFillPatchCheckFill} from "react-icons/bs";
import OpenOnClick1 from "./OpenOnClick1";
import OverviewButton from "./OverviewButton"
import Button2 from "./Button2"
import Button3 from "./Button3"
import {BiAddToQueue} from "react-icons/bi";
let j1=0;
   let j2=0;
   let j3=0;
  
   let r=0;
   let g1=0;
   let g2=0;
   let g3=0;
  
export default function Page2() {
   
   let i=0;
  
  let r1=1;
   let k1=false;
   let k2=false;
   let k3=false;
   
const [a, sA] = useState(true);
   const [a1, sA1] = useState(true);
   const [a2, sA2] = useState(true);
   const [a3, sA3] = useState(true);
   
   const h = () => {
      sA(!a);};
  const h1 = () => {
    sA1(!a1);};
  
  const h2 = () => {
    sA2(!a2);
   };
  const h3 = () => {
   sA3(!a3);
  };
 
  if(a1==false){k1=true; k2=false;  k3=false;  };
  if(a2==false){k2=true; k1=false;k3=false; };
  if(a3==false){k2=false; k1=false;k3=true; };
  
  
  
 if(k1==true){i=1; ;r=r+1;g1=g1+1;if(r>1){r=1;}};
 if(k2==true){i=2;j1=1; ;r=r+1;g2=g2+1; if(r>2){r=2;}} ;
 if(k3==true){i=3; j2=2; ;r=r+1 ;g3=g3+1;if(r>3){r=3;}};
 
 if(r==2 ){r1=0;}
  
  return (
    <div>
       
      <article style={{  
    width:"100%",
   height:'60px',
   boxShadow: '1px 2px 9px lightgray',
   justifyContent:'space-between',
   display:'flex',
    flex:1,
   flexdirection:'row-reverse'
  
   }}>
     <a href="https://react-gkpsee.stackblitz.io"  style={{ backgroundColor:'white',
   border:'white',height:'20px',textDecoration: 'none'}} >
       <div style={{display:'flex',
    flex:1,
   flexdirection:'row-reverse',
   justifyContent:'space-between'}}><div style={{color:'rgb(127,0,255)'}}><AiOutlineArrowLeft/></div>&nbsp; <div style={{color:'black'}}>Back</div></div></a>
  <div style={{fontWeight:'bold',fontSize:"25px"}}>Add New Internship</div>
   <a style={{height:'25px',
   color:'white',
   backgroundColor:'rgb(127,0,255)',
   border:'rgb(127,0,255)',
   borderRadius:'8px',
   padding:'2px',
   textDecoration: 'none'
  }} >
       <div style={{display:'flex',
    flex:1,
   flexdirection:'row-reverse',
   justifyContent:'space-between'}}> {i<=1?<div>Continue to Next Step</div>:<div>Publish internship</div>}&nbsp;<div><AiOutlineArrowRight/> </div></div></a>
        </article>
       
        <div style={{width:"100%",
      backgroundColor:'rgb(230,231,243)',
      border:'rgb(230,231,243)',
     height:'80px'
      }}>
 </div>
 
 <article style={{width:'100%',
 height:'50px',
 backgroundColor:'rgb(230,231,243)',
 border:'1px solid lightgray',
 justifyContent:'space-between',
   display:'flex',
    flex:1,
   flexdirection:'row-reverse',
   fontSize:"13px"
}}>
<div style={{color:'rgb(127,0,255)'}} ><BsCircle/>&nbsp;Internship Description</div>
<div style={{color:'rgb(127,0,255)'}}><BsCircle/>&nbsp;Internship Guide</div>
<div style={{color:'rgb(127,0,255)'}} ><BsCircle/>&nbsp;Surveys</div>
<div ><BsCircle/>&nbsp;Settings</div>
</article>
<div style={{width:"100%",
      backgroundColor:'rgb(230,231,243)',
      border:'rgb(230,231,243)',
     height:'85px'
      }}>
 </div>
<article style={{ float: 'left', width:'45%', backgroundColor:'rgb(230,231,243)',border:'1px solid rgb(230,231,243)',height:'660px'}}>
<div style={{width:'100%'}}>
  <div style={{width:'100%',height:'55px' ,justifyContent:'space-between',
   display:'flex',
    flex:1,
   flexdirection:'row-reverse'}}><div><div style={{width:"100%",
   backgroundColor:'rgb(230,231,243)',
   border:'rgb(230,231,243)',
  height:'20px'
   }}>
</div><CiTextAlignJustify/></div>&nbsp;&nbsp;<div style={{width:'100%'}}><div style={{width:'100%',height:'100px'}}><button 
onClick={r==0?h1:h}
style={{width:'100%',height:'55px',justifyContent:'space-between',
   display:'flex',
   padding:'18px',
   flexdirection:'row-reverse',color:'black',
   backgroundColor:'white',
   border:i==1 ?'1px solid rgb(127,0,255)':'1px solid lightgray',
   
   borderRadius:'8px',
   boxShadow: i==1?'1px 2px 9px gray':''
   }}><div style={{display:'flex'}}><div>Basic Settings</div></div><div style={{color:'gray'}}><MdPlayArrow/></div></button></div></div>
</div>

<div style={{width:"100%",
      backgroundColor:'rgb(230,231,243)',
      border:'rgb(230,231,243)',
     height:'15px'
      }}>
 </div>

 <div style={{width:'100%',height:'55px' ,justifyContent:'space-between',
   display:'flex',
    flex:1,
   flexdirection:'row-reverse'}}><div><div style={{width:"100%",
   backgroundColor:'rgb(230,231,243)',
   border:'rgb(230,231,243)',
  height:'20px'
   }}>
</div><CiTextAlignJustify/></div>&nbsp;&nbsp;<div style={{width:'100%'}}><div style={{width:'100%',height:'100px'}}><button 
onClick={r==1?h2:h}
style={{width:'100%',height:'55px',justifyContent:'space-between',
   display:'flex',
   padding:'18px',
   flexdirection:'row-reverse',color:'black',
   backgroundColor:'white',
   border:i==2 ?'1px solid rgb(127,0,255)':'1px solid lightgray',
   
   borderRadius:'8px',
   boxShadow: i==2?'1px 2px 9px gray':''
   }}><div style={{display:'flex'}}><div>Hero Image</div></div><div style={{color:'gray'}}><MdPlayArrow/></div></button></div></div>
</div>




   </div>
   
</article>
{i==1?
<div >
<article style={{ float: 'right', width:'55%', backgroundColor:'white',border:'1px solid white',height:'540px'}}>
  <div style={{width:'100%'}}>
   <div style={{width:'100%'}}>
<div style={{fontWeight:'bold',fontSize:"22px"}}>Internship URL</div>

<br/>
<OpenOnClick1/>
</div> 

   </div>
   </article>
   </div>:''
}


{i==2?
<div >
<article style={{ float: 'right', width:'55%', backgroundColor:'white',border:'1px solid white',height:'540px'}}>
  <div style={{width:'100%'}}>
   <div style={{width:'100%'}}>
<div style={{fontWeight:'bold',fontSize:"22px"}}>Internship URL</div>

<br/>
<OpenOnClick1/>
</div> 

   </div>
   </article>
   </div>:''
}
    </div>
  );

  j1=0;
    j2=0;
   j3=0;
   j4=0;
  j5=0;
 j6=0;
    j7=0;
    r=0;
}