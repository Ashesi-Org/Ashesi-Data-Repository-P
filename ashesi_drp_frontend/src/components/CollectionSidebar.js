"use client";

// import "../../globals.css";
import CustomButton from "@/components/CustomButton";
import Link from 'next/link';
import { useState } from 'react';
import { FaRegStar, FaPython, FaQuoteRight } from 'react-icons/fa';
import { FiEye } from 'react-icons/fi';
import { MdOutlineFileDownload, MdOutlineFormatQuote } from 'react-icons/md';


export default function CollectionSidebar({ initialCollection }) {
    
    const [collection, setCollections] = useState(initialCollection);
    const cite_work = collection.cite ? collection.cite : "No citation";
    
    return(
        <div className="bg-gray-50 px-4 py-8 rounded-lg shadow-md h-auto self-start">
	        {/* <CustomButton 
				text="DOWNLOAD"
				bgColor = "bg-gray-50"
				textColor = "text-ashesi-red"
				onClick={() => alert("Downloading!")}
				width = "w-full"
				height = "h-10"
				icon={MdOutlineFileDownload}
				iconPosition="right"
				iconClassName="text-xl"
				className="flex items-center justify-between text-sm !font-medium border border-ashesi-red py-2 px-4 hover:bg-ashesi-red hover:text-white"
			/> */}
	        
	        {/* <CustomButton 
				text="IMPORT CODE"
				bgColor = "bg-gray-50"
				textColor = "text-blue-800"
				onClick={() => alert("Importing!")}
				width = "w-full"
				height = "h-10"
				icon={FaPython}
				iconPosition="right"
				iconClassName="text-xl"
				className="flex items-center justify-between text-sm !font-medium border border-blue-800 mt-3 py-2 px-4 hover:bg-blue-800 hover:text-white"
			/> */}
	
			<CustomButton 
				text="CITE WORK"
				bgColor = "bg-gray-50"
				textColor = "text-ashesi-red"
				onClick={() => alert(cite_work)}
				width = "w-full"
				height = "h-10"
				icon={FaQuoteRight}
				iconPosition="right"
				iconClassName="text-md"
				className="flex items-center justify-between text-sm !font-medium border border-ashesi-red mt-3 py-2 px-4 hover:bg-ashesi-red hover:text-white"
			/>
			
			<div className="my-5">
		        {/* <div className="flex items-center gap-4">
		          <FaRegStar className="text-ashesi-red" /> <span>save</span>
		        </div> */}
		        {/* <div className="flex items-center gap-4 mt-3">
		          <MdOutlineFormatQuote  className="text-ashesi-red"/> <span> 432 citations</span>
		        </div> */}
		        <div className="flex items-center gap-4 mt-3">
		          <FiEye className="text-ashesi-red" /> <span>{collection.view_count} views</span>
		        </div>
	        </div>
	        
	        <hr className="my-6" />
	        
			<p className="text-sm font-medium text-ashesi-red">DOI</p>
	        <p className="text-sm text-gray-600 mt-2">
				<Link href={`/${collection.doi_link}`} className="cursor-pointer text-xs underline hover:text-blue-600"> {collection.doi_link}</Link>
			</p>
	
	        <hr className="my-6" />
	        
	        <p className="text-sm font-medium text-ashesi-red">LICENSE</p>
	        <p className="text-sm text-gray-600 mt-2">
				This dataset is licensed under a 
				<Link href="/" className="cursor-pointer underline text-blue-800 hover:text-blue-600"> Creative Commons Attribution 4.0 International (CC BY 4.0) license</Link>
			</p>
			
			<p className="mt-6 text-sm text-gray-600 text-justify">{collection.license ? collection.license : "No additional license"}</p>
	    </div>
    );

}
