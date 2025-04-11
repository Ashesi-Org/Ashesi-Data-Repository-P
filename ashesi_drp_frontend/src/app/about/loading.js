import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../globals.css";

export default function Card() {
  return (
		<div className="mx-auto">
			<div>
				<div className="relative w-full">
					{/* <Slideshow/> */}
            <Skeleton height={450} baseColor="#dce3e8" highlightColor="#f0f4f8" className="relative w-full h-[60vh] md:h-[60vh] lg:h-[70vh]"/>
            
            {/* <HeroBlock/> */}
            <div className="absolute top-32 left-1/2 transform -translate-x-1/2 lg:translate-y-1/2 md:translate-y-1/4 bg-white shadow-lg rounded-lg p-6 lg:w-2/4 md:w-3/4 sm:w-3/4 text-center z-10">
              <Skeleton width="80%" height={30} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
              <Skeleton width="70%" height={30} baseColor="#dce3e8" highlightColor="#f0f4f8" className=""/>
              <Skeleton width="100%" height={210} baseColor="#dce3e8" highlightColor="#f0f4f8" className="mt-6"/>
            </div>
				</div>

				<hr className="mb-10 mt-64 " />
				<div className="grid grid-cols-2 gap-32 max-w-5xl mx-auto p-6">
					{/* First Column */}
					<div className="grid grid-rows-4 gap-2">
						<div className="row-span-1">
							<div>
								<span className="block">
                                    <Skeleton width="70%" height={25} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
								</span>
								<p className="text-ashesi-red text-2xl">
				                    <Skeleton width="40%" height={35} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
				                    <Skeleton width="50%" height={35} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
								</p>
							</div>
						</div>

						<div className="row-span-3">
                            <Skeleton width="100%" height={300} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
						</div>
					</div>

          {/* Second column */}
					<div className="grid grid-rows-2">
                        <Skeleton width="100%" height={180} baseColor="#dce3e8" highlightColor="#f0f4f8"/>

						<div className="grid grid-cols-2 gap-2 mb-8">
			              <Skeleton width="100%" height={90} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
			              <Skeleton width="100%" height={90} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
			              <Skeleton width="100%" height={90} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
			              <Skeleton width="100%" height={90} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
						</div>
					</div>
				</div>
				<div className="max-w-5xl mx-auto p-6">
					<hr className="mb-20" />
					<h3 className=" mb-8">
						<Skeleton width="90%"height={30} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
					</h3>
					<ul className="list-disc mb-16">
						<li className="mb-4">
                            <Skeleton width="100%" height={50} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
						</li>
						<li className="mb-4">
                            <Skeleton width="100%" height={50} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
						</li>
						<li className="mb-4">
                            <Skeleton width="100%" height={50} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
						</li>
						<li className="mb-4">
                            <Skeleton width="100%" height={50} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
						</li>
						<li className="mb-4">
                            <Skeleton width="100%" height={50} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
						</li>
						<li className="mb-4">
                            <Skeleton width="100%" height={50} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
						</li>
					</ul>
					<hr className="mb-10" />
				</div>
			</div>
		</div>
  )
}