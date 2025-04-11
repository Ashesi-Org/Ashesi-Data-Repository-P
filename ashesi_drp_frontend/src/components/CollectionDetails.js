"use client";

// import "../../globals.css";
import CustomButton from "@/components/CustomButton";
import Link from 'next/link';
import Image from 'next/image';
import Reviews from "@/components/Reviews"; 
import Files from "@/components/Files"; 
import { useState } from 'react';
import { AiOutlineDown,  AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Skeleton from "react-loading-skeleton";


export default function CollectionsDetails({ initialCollection }) {
    const [collection, setCollections] = useState(initialCollection);
    
    const [showAbstract, setShowAbstract] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [showIntro, setShowIntro] = useState(false);
    const [showFiles, setShowFiles] = useState(false);
    // const [showReview, setShowReview] = useState(false);
    
    return(
        <div>
            <div>
            
                {/* Title Section */}
                <div>
                    <hr className="my-3" />

                    <h1 className="text-2xl font-bold text-ashesi-red mt-2">
                        {collection.title}
                    </h1>
                    <p className="mt-2 text-blue-800 underline flex gap-4 flex-wrap">
                        {collection.authors.length > 0 ? (
                          collection.authors.map((author) => (
                            <a key={author.id} href={`mailto:${author.email}`} className="hover:text-blue-600">
                              {author.name}
                            </a>
                          ))
                        ) : (
                          <span className="hover:text-blue-600">No author</span>
                        )}
                    </p>

                    <div className="mt-10 flex flex-wrap justify-between text-ashesi-gray">
                        <div>
                            <span><strong>DOI:</strong> <Link href={`/${collection.doi_link}`} className="cursor-pointer hover:underline hover:text-blue-600 mt-4">{collection.doi_link}
                            </Link></span>
                        </div>
                        {/* <div>
                            <Link href="/" className="cursor-pointer mt-4 underline text-blue-800 hover:text-blue-600"> request for usage</Link>
                        </div> */}
                        <div>
                            <span><p className=""><strong>Date of publication:</strong> {collection.date_of_publication.slice(0, 10)}</p></span>
                        </div>
                    </div>

                    <div className="mt-2 flex flex-wrap justify-between text-ashesi-gray">
                        <div>
                            <span><p className=""><strong>keywords: </strong>{collection.keywords}</p></span>
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
                                className={`mx-2 transform transition-transform duration-500 ease-in-out ${showAbstract ? 'rotate-180' : 'rotate-0'}`} />
                        </h2>
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showAbstract ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
                        <p className="mt-4">
                            {collection.abstract}
                        </p>
                    </div>

                    <hr className="mt-5 mb-8" />
                </div>
                
                {/*  INSTANCE REPRESENTATION */}
                <div>
                    <hr className="my-3" />

                    <div className="cursor-pointer" onClick={() => setShowIntro(!showIntro)}>
                        <h2 className="text-ashesi-red font-semibold justify-between flex items-center">
                            INSTANCE REPRESENTATION
                            <AiOutlineDown
                                className={`mx-2 transform transition-transform duration-500 ease-in-out ${showIntro ? 'rotate-180' : 'rotate-0'}`} />
                        </h2>
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showIntro ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
                        <p className="mt-4 mb-1"><strong> What do the instances in this dataset represent?</strong></p>
                        <p className="">
                            {collection.instance_representation}
                        </p>

                        {/* <p className="mt-4 mb-1"><strong>  Has Missing Values?</strong></p>
                        { collection.missing_values ? <p className="">Yes</p> : <p className="">No</p>} */}               
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
                      
                      <Files collection_id={collection.id}/>
                    </div>
                    
                    <hr className="mt-5 mb-8" />
                </div>
                
                {/*  ADDITIONAL COMMMENT */}
                <div>
                    <hr className="my-3" />

                    <div className="cursor-pointer" onClick={() => setShowInfo(!showInfo)}>
                        <h2 className="text-ashesi-red font-semibold justify-between flex items-center">
                            ADDITIONAL COMMMENT
                            <AiOutlineDown
                                className={`mx-2 transform transition-transform duration-500 ease-in-out ${showInfo ? 'rotate-180' : 'rotate-0'}`} />
                        </h2>
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showInfo ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
                        { collection.comment ? <p className="mt-4">{collection.comment}</p> : <p className="mt-4">No comment</p>}
                    </div>

                    <hr className="mt-5 mb-8" />
                </div>
                
                {/*  REVIEWS */}
                {/* <div>
                    <hr className="my-3" />
                    
                    <div className="cursor-pointer" onClick={() => setShowReview(!showReview)}>
                      <h2 className="text-ashesi-red font-semibold justify-between flex items-center">
                        REVIEWS
                        <AiOutlineDown 
                          className={`mx-2 transform transition-transform duration-500 ease-in-out ${showReview ? 'rotate-180' : 'rotate-0'}`}
                        />
                      </h2>
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showReview ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
                      <p className="mt-4"></p>
        
                        <Reviews rating={4.5} comments={collection.comment} />
                      
                    </div>
                    
                    <hr className="mt-5 mb-8" />
                </div> */}
            </div>
        </div>
    );
}