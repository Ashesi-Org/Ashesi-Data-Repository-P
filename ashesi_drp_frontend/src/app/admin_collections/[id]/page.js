"use client";

import "../../globals.css";
import CustomButton from "@/components/CustomButton";
import Link from 'next/link';
import Image from 'next/image';
import Reviews from "@/components/Reviews"; 
import Files from "@/components/Files"; 
import { useState } from 'react';
import { FaRegStar, FaPython, FaQuoteRight } from 'react-icons/fa';
import { FiEye } from 'react-icons/fi';
import { MdOutlineFileDownload, MdOutlineFormatQuote } from 'react-icons/md';
import { AiOutlineDown,  AiFillStar, AiOutlineStar } from 'react-icons/ai';


export default function CollectionPage() { 

  const [showAbstract, setShowAbstract] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [showVariable, setShowVariable] = useState(false);
  const [showFiles, setShowFiles] = useState(false);

  return (
    <div className="max-w-5xl mx-auto mt-20 px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Column */}
        <div className="md:col-span-3">
                        
            {/* Title Section */}
			<div>
				<h3 className="text-gray-500 text-sm">Human Computer Interaction</h3>
				
		        <hr className="my-3" />
		        
		        <h1 className="text-2xl font-bold text-ashesi-red mt-2">
		          Improving Accessibility Across Multifaceted Web Pages
		        </h1>
		        <p className="mt-2 text-blue-800 underline">
					<a href="mailto:boakye.reynolds@example.com" className="hover:text-blue-600">Boakye Reynolds</a>,  
					<a href="mailto:stark.tony@example.com" className="hover:text-blue-600 ml-2">Stark Tony</a>,  
					<a href="mailto:omar.havertz@example.com" className="hover:text-blue-600 ml-2">Omar Havertz</a>
				</p>
				
				<div className="mt-10 flex flex-wrap justify-between text-ashesi-gray">
				    <div>
					  <span><strong>DOI:</strong> <Link href="/" className="cursor-pointer hover:underline hover:text-blue-600 mt-4"> 10.1111/j.1753-4887.2008.00114.x</Link></span>
				    </div>
				    <div>
					  <span><p className=""><strong>Date of submission:</strong> 24 - 01- 2025</p></span>
				    </div>
				</div>
				
				<div className="mt-2 flex flex-wrap justify-between text-ashesi-gray">
				    <div>
					   <span><p className=""><strong>keywords:</strong> Accessibility, Design, Flexibility</p></span>
				    </div>
				    <div>
						<span><p className=""><strong>Date of publication:</strong> 24 - 01- 2025</p></span>
				    </div>
				</div>
				
				<hr className="mt-5 mb-8" />
			</div>
	
	        {/* Abstract Section */}
	        <div>
		        <hr className="my-3" />
		        
		        <div className="cursor-pointer" onClick={() => setShowAbstract(!showAbstract)}>
		          <h2 className="text-ashesi-red font-semibold justify-between flex items-center">
		            ABSTRACT
		            <AiOutlineDown 
					  className={`mx-2 transform transition-transform duration-500 ease-in-out ${showAbstract ? 'rotate-180' : 'rotate-0'}`}
					/>
		          </h2>
		        </div>
	            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showAbstract ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
		          <p className="mt-4">
		            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
					laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto 
					beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
					aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi 
					nesciunt. Neque porro quisquam est, qui Sed ut perspiciatis unde omnis iste natus error sit 
					voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
					inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam 
					voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni 
					dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
		          </p>
		        </div>
		        
		        <hr className="mt-5 mb-8" />
	        </div>  
	        
	        {/*  INTRODUCTORY PAPER */}
	        <div>
				<hr className="my-3" />
				
				<div className="cursor-pointer" onClick={() => setShowIntro(!showIntro)}>
		          <h2 className="text-ashesi-red font-semibold justify-between flex items-center">
				  INTRODUCTORY PAPER
		            <AiOutlineDown 
					  className={`mx-2 transform transition-transform duration-500 ease-in-out ${showIntro ? 'rotate-180' : 'rotate-0'}`}
					/>
		          </h2>
		        </div>
		        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showIntro ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
				  <p className="mt-4 mb-1"><strong> What do the instances in this dataset represent?</strong></p>
		          <p className="">
						This is one of the earliest datasets used in the literature on classification methods and widely 
						used in statistics and machine learning.  The data set contains 3 classes of 50 instances each, 
						where each class refers to a type of iris plant.  One class is linearly separable from the other 2; 
						the latter are not linearly separable from each other
		          </p>
		          
				  <p className="mt-4 mb-1"><strong>  Has Missing Values?</strong></p>
		          <p className="">No</p>
		        </div>
				
				<hr className="mt-5 mb-8" />
	        </div>
	        
	        {/*  DATASET INFORMATION */}
	        <div>
				<hr className="my-3" />
				
				<div className="cursor-pointer" onClick={() => setShowInfo(!showInfo)}>
		          <h2 className="text-ashesi-red font-semibold justify-between flex items-center">
		            DATASET INFORMATION
		            <AiOutlineDown 
					  className={`mx-2 transform transition-transform duration-500 ease-in-out ${showInfo ? 'rotate-180' : 'rotate-0'}`}
					/>
		          </h2>
		        </div>
		        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showInfo ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
				  <p className="mt-4"><Link href="/" className="cursor-pointer underline text-blue-800 hover:text-blue-600 mt-4">  Improving Accessibility Across Multifaceted Web Pages</Link></p>
				  <p className="mt-2">By Boakye Reynolds, Stark Tony, Omar Havertz</p>
		          <p className="mt-2"> Published in Accra, 2023</p>
		        </div>
				
				<hr className="mt-5 mb-8" />
	        </div>
	        
	        {/*  VARIABLE */}
	        <div>
				<hr className="my-3" />
				
				<div className="cursor-pointer" onClick={() => setShowVariable(!showVariable)}>
		          <h2 className="text-ashesi-red font-semibold justify-between flex items-center">
				    VARIABLE TABLE
		            <AiOutlineDown 
					  className={`mx-2 transform transition-transform duration-500 ease-in-out ${showVariable ? 'rotate-180' : 'rotate-0'}`}
					/>
		          </h2>
		        </div>
		        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showVariable ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
		          <p className="mt-4 text-center h-32 flex items-center justify-center">
		            IF AVAILABLE
		          </p>
		        </div>
				
				<hr className="mt-5 mb-8" />
	        </div>
	        
	        {/*  FILES */}
	        <div>
				<hr className="my-3" />
				
				<div className="cursor-pointer" onClick={() => setShowFiles(!showFiles)}>
		          <h2 className="text-ashesi-red font-semibold justify-between flex items-center">
		            FILES
		            <AiOutlineDown 
					  className={`mx-2 transform transition-transform duration-500 ease-in-out ${showFiles ? 'rotate-180' : 'rotate-0'}`}
					/>
		          </h2>
		        </div>
		        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showFiles ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
				  <p className="mt-4"></p>
		          
		          <Files />
		        </div>
				
				<hr className="mt-5 mb-8" />
	        </div>
	        
	        <div className="my-16">
	            <div>
					<label htmlFor="comment" className="block text-center text-lg font-bold">
						Comment
					</label>
					<textarea
						id="comment"
						name="comment"
						className="p-2 border border-ashesi-red rounded-md w-full h-40 focus:outline-ashesi-red"
						rows="10"
						required
					></textarea>
	            </div>
				<div className="mt-10 flex justify-center gap-4">   
					<CustomButton 
						text="APPROVE"
						bgColor = "bg-green-500"
						textColor = "text-white"
						onClick={() => alert("Importing!")}
						width = "w-full"
						height = "h-10"
						className="flex items-center justify-center text-sm !font-medium mt-3 py-2 px-4"
					/>
					
					<CustomButton 
						text="DISAPPROVE"
						bgColor = "bg-ashesi-red"
						textColor = "text-white"
						onClick={() => alert("Importing!")}
						width = "w-full"
						height = "h-10"
						className="flex items-center justify-center text-sm !font-medium mt-3 py-2 px-4"
					/>
					
					<CustomButton 
						text="ON HOLD"
						bgColor = "bg-gray-500"
						textColor = "text-white"
						onClick={() => alert("Importing!")}
						width = "w-full"
						height = "h-10"
						className="flex items-center justify-center text-sm !font-medium border mt-3 py-2 px-4"
					/>
				</div>
	        </div>
	        
	    </div>
      
    
        {/* Right Column*/}
        <div className="bg-gray-50 px-4 py-8 rounded-lg shadow-md h-auto self-start">
	        
	        <p className="text-sm font-medium text-ashesi-red">SUBMITTTED BY</p>
	        <p className="text-sm text-gray-600 mt-2">
				Name: <br/> <b>Kingsley Essel</b>
			</p>
			<p className="text-sm text-gray-600 mt-2">
				Email:  <br/> <b>Kingsley.Essel@yahoo</b>
			</p>
			<p className="text-sm text-gray-600 mt-2">
				Contact:  <br/> <b>+355 868 4323</b>
			</p>
	    </div>
    
    </div>
  );
}
