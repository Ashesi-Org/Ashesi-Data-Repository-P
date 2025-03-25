"use client";
import { useEffect, useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { AiOutlineFile } from "react-icons/ai";
import CustomButton from "@/components/CustomButton";
import { BASE_URL } from "@/utils/constants";
import Image from "next/image";


const FileTable = ({collection_id}) => {
  
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // hooks for popup
  const [showPopup, setShowPopup] = useState(false);
  const [reason, setReason] = useState("");
  
  // hook for downloadable link
  const [download, setDownload] = useState("");

  // fetching file details
  // useEffect(() => {
  //   async function fetchFile() {
  //     try {
  //       const response = await fetch(`${BASE_URL}/get_dataset/?collection_id=${collection_id}`);
  //       const data = await response.json();
        
  //       // Ensure loading is shown for at least 1.5 seconds
  //       setTimeout(() => {
  //         setFile(data);
  //         setLoading(false);
  //       }, 2000);
  //     } catch (error) {
  //       console.error("Error fetching collection:", error);
  //       setLoading(false);
  //     }
  //   }

  //   fetchFile();
  // }, [collection_id]);
  
  useEffect(() => {
    async function fetchFile() {
      try {
        const response = await fetch(`${BASE_URL}/get_dataset/?collection_id=${collection_id}`);
        const data = await response.json();
  
        // Ensure loading is shown for at least 2 seconds
        setTimeout(async () => {
          setFile(data);
          setLoading(false);
  
          // Call the second fetch using POST
          console.log(data);
          await fetchAdditionalData(data);
        }, 2000);
      } catch (error) {
        console.error("Error fetching collection:", error);
        setLoading(false);
      }
    }
  
    fetchFile();
  }, [collection_id]);
  
  // Function to handle second API call
  async function fetchAdditionalData(data) {
    try {
      const response = await fetch(`${BASE_URL}/dataset_download/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ filename: data[0].file_name, collection_id: collection_id}),
      });      
      const result = await response.json();
      setDownload(result);
    } catch (error) {
      console.error("Error in second fetch:", error);
    }
  }
  

  if (loading) return (
      <div className="flex justify-center items-center h-32">
        <Image src="/animation/loading.gif" alt="Loading..." width={100} height={100} />
      </div>
  );
  if (!file || file.length === 0) return <p>No file found.</p>;
  
  
  
  // Pop Up form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!reason.trim()) {
      alert("Please enter a reason before downloading.");
      return;
    }

    const submissionLink = download.file_url;
    
    // Open the link in a new tab
    window.open(submissionLink, "_blank");

    // Close the popup after submission
    setShowPopup(false);
    setReason("");
  };

  return (
    <div className="max-w-3xl mx-auto mt-6">
      {/* Top Section */}
      <div className="flex justify-between items-start">
        <p className="text-gray-700 max-w-lg">
          
        </p>
        <CustomButton
            text="Want to Download Files?"
            bgColor = "bg-white"
            textColor = "text-ashesi-red"
            onClick={() => setShowPopup(true)}
            width = "w-auto"
            height = "h-10"
            className="text-sm !font-medium border border-ashesi-red px-4 py-2 px-4 hover:bg-ashesi-red hover:text-white"        
        />
        
        {/* Popup Modal */}
        {showPopup && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-xl text-ashesi-red font-semibold mb-4">Submit a Reason for Downloading</h2>
  
              <form onSubmit={handleSubmit}>
                <label className="block mb-2 font-medium">Reason:</label>
                <textarea
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="3"
                  placeholder="Enter your reason here..."
                  required
                ></textarea>
  
                <div className="flex justify-end mt-4 gap-2">                  
                  <CustomButton
                      text="Cancel"
                      bgColor = "bg-gray-400"
                      textColor = "text-white"
                      onClick={() => setShowPopup(false)}
                      width = "w-auto"
                      height = "h-10"
                      className="px-4 py-2 rounded-md hover:bg-gray-500 transition"        
                  />
                  
                  <CustomButton
                      text="Submit"
                      bgColor = "bg-green-600"
                      textColor = "text-white"
                      href=""
                      width = "w-auto"
                      height = "h-10"
                      className="px-4 py-2 rounded-md hover:bg-green-700 transition"        
                  />
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      {/* <pre className="bg-gray-100 p-4 rounded-md">{JSON.stringify(file, null, 2)}</pre> */}
      {/* Table */}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse">
         
          <thead>
            <tr className="border-b">
              <th className="text-left font-semibold py-2">Filename</th>
              <th className="text-left font-semibold py-2">Uploaded On</th>
              <th className="text-left font-semibold py-2">Type</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3 flex items-center gap-2">
                <AiOutlineFile className="text-xl text-gray-500" />
                {file[0].file_name}
              </td>
          
              <td className="text-gray-600">{file[0].uploaded_at.slice(0, 10)}</td>
              <td className="text-gray-600">{file[0].file_type}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FileTable;
