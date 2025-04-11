import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./globals.css";

export default function Card() {
  return (
    <div className="relative w-full">
			{/* <Slideshow/> */}
			<Skeleton height={450} baseColor="#dce3e8" highlightColor="#f0f4f8" className="relative w-full h-[60vh] md:h-[60vh] lg:h-[70vh]"/>
			
			{/* <HeroBlock/> */}
			<div className="absolute top-32 left-1/2 transform -translate-x-1/2 lg:translate-y-1/2 md:translate-y-1/4 bg-white shadow-lg rounded-lg p-6 lg:w-2/4 md:w-3/4 sm:w-3/4 text-center z-10">
		        <Skeleton width={550} height={30} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
		        <Skeleton width={400} height={30} baseColor="#dce3e8" highlightColor="#f0f4f8" className=""/>
		        <Skeleton width="100%" height={150} baseColor="#dce3e8" highlightColor="#f0f4f8" className="mt-6"/>
			
			  <div className="mt-10 flex justify-center gap-4">
		          <Skeleton width={150} height={50} baseColor="#dce3e8" highlightColor="#f0f4f8" className=""/>
		          <Skeleton width={150} height={50} baseColor="#dce3e8" highlightColor="#f0f4f8" className=""/>
			  </div>
			</div>

			
			{/* some collections */}
			<div className="mb-14 mt-64 mx-auto w-full max-w-4xl">
			
        {/* first */}
        <div className="py-10 px-4 border-b ">
          <Skeleton width={550} height={30} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
          <Skeleton height={100} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
          <div className="mt-4 flex flex-wrap justify-between text-sm text-ashesi-gray">
            <Skeleton width={210} height={30} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
            <Skeleton width={200} height={30} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
				  </div>
				
				  <div className="mt-1 flex flex-wrap justify-between text-sm text-ashesi-gray">
				    <Skeleton width={200} height={30} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
				    <Skeleton width={250} height={30} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
				  </div>
        </div>
			
  			{/* Second */}
  			<div className="py-10 px-4 border-b ">
          <Skeleton width={550} height={30} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
          <Skeleton height={100} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
          <div className="mt-4 flex flex-wrap justify-between text-sm text-ashesi-gray">
            <Skeleton width={210} height={30} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
            <Skeleton width={200} height={30} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
  				  </div>
  				
  				  <div className="mt-1 flex flex-wrap justify-between text-sm text-ashesi-gray">
  				    <Skeleton width={200} height={30} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
  				    <Skeleton width={250} height={30} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
  				  </div>
        </div>
  			
  			{/* Third */}
  			<div className="py-10 px-4 border-b ">
          <Skeleton width={550} height={30} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
          <Skeleton height={100} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
          <div className="mt-4 flex flex-wrap justify-between text-sm text-ashesi-gray">
            <Skeleton width={210} height={30} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
            <Skeleton width={200} height={30} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
  				  </div>
  				
  				  <div className="mt-1 flex flex-wrap justify-between text-sm text-ashesi-gray">
  				    <Skeleton width={200} height={30} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
  				    <Skeleton width={250} height={30} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
  				  </div>
        </div>
  			
  		</div>
		
		</div>
  );
}