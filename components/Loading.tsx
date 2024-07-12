"use client";
import { useEffect, useRef } from "react";

const LoadingScreen: React.FC = () => {
  const loadingRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!loadingRef.current) return;
      loadingRef.current.style.opacity = "0";
      loadingRef.current.style.visibility = "hidden";
    }, 500)
    return () => {
      clearTimeout(timeout);
    }
  }, [])
  return (
    <div className="bg-black w-[100%] h-[100%] absolute z-[99999] transition-all duration-1000 flex justify-center items-center text-5xl" ref={loadingRef}>Now Loading...</div>
  )
}

export default LoadingScreen;
