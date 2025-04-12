'use client'
import Lottie from "react-lottie-player";
import lottieJson from "@/public/loadingAnimation.json";

export default function Loading() {
  return (
    <div style={{
      display:'flex',
      height:'100vh',
      justifyContent:'center',
      alignItems:'flex-start',
      paddingTop:200
    }}>
      <div style={{
        width: 200,
        height:200
      }}><Lottie loop animationData={lottieJson} play /></div>
    </div>
  );
}
