"use client";

import "../globals.css";
import Filter from "@/components/Filter";
import Slideshow from "@/components/Slideshow";
import CustomButton from "@/components/CustomButton";
import Image from "next/image"  
import Link from 'next/link';
import HeroBlock from "@/components/HeroBlock";
import { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const users = [
  { id: 1, title:"Open the Floodgate", name: "Okyere Kwabena", date:"24-Aug-2024", abstract:"bbciebcieubciueuibcuib", type: "external" },
  { id: 2, title:"Open the Floodgate", name: "Okyere Kwabena", date:"24-Aug-2024", abstract:"bbciebcieubciueuibcuib", type: "internal" },
  { id: 3, title:"Open the Floodgate", name: "Okyere Kwabena", date:"24-Aug-2024", abstract:"bbciebcieubciueuibcuib", type: "external" },
  { id: 4, title:"Open the Floodgate", name: "Okyere Kwabena", date:"24-Aug-2024", abstract:"bbciebcieubciueuibcuib", type: "internal" },
  { id: 5, title:"Open the Floodgate", name: "Okyere Kwabena", date:"24-Aug-2024", abstract:"bbciebcieubciueuibcuib", type: "external" },
  { id: 6, title:"Open the Floodgate", name: "Okyere Kwabena", date:"24-Aug-2024", abstract:"bbciebcieubciueuibcuib", type: "internal" },
];

export default function UsersTable() {
  
  const [selectedUsers, setSelectedUsers] = useState([]);

  const toggleSelection = (id) => {
    setSelectedUsers((prev) =>
      prev.includes(id) ? prev.filter((userId) => userId !== id) : [...prev, id]
    );
  };

  return (
    <div className="max-w-4xl mx-auto my-24 p-6">
      {/* Action Buttons */}
      <div className="flex space-x-4 mb-4">
          <CustomButton 
      			text="Approve all selected users"
      			bgColor = "bg-green-100"
      			textColor = "text-green-700"
      			onClick={() => alert("Importing!")}
      			width = "w-full"
      			height = "h-10"
      			className="px-4 py-2 border border-green-500 hover:bg-green-200"
      		/>
    		
      		<CustomButton 
      			text="Reject all selected users"
      			bgColor = "bg-red-100 "
      			textColor = "text-red-700 "
      			onClick={() => alert("Importing!")}
      			width = "w-full"
      			height = "h-10"
      			className="text-px-4 py-2 border border-red-500 hover:bg-red-200"
        		/>
      </div>

      {/* Table */}
      <div className="w-full mt-8 bg-white rounded-lg overflow-hidden">
        <table className="w-full border-collapse border-separate border-spacing-y-8">
          {/* Table Header */}
          <thead>
            <tr className="bg-gray-100 text-left text-sm text-gray-600">
              <th className="p-3">Title</th>
              <th className="p-3">Submitted By</th>
              <th className="p-3">Submission Date</th>
              <th className="p-3">...</th>
              <th className="p-3">Abstract</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="space-y-4">
            {users.map((user) => (
              <tr
                key={user.id}
                className={`border-b space-y-2 shadow-md shadow-gray-100 ${
                  selectedUsers.includes(user.id) ? "bg-red-100" : "bg-white"
                }`}
              >
                {/* User Info */}
                <td className="p-3">{user.title}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.date}</td>
                <td className="p-3"><Link href={`/admin_collections/${user.id}`} className="text-ashesi-red font-light cursor-pointer">view </Link></td>
                <td className="p-3"><Link href="" onClick={() => alert(user.abstract)} className="text-ashesi-red font-light cursor-pointer">abstract </Link></td>
                
                {/* Checkbox + Action Buttons */}
                <td className="p-3 flex items-center space-x-2">
                  <FaCheckCircle className="text-green-500 cursor-pointer" />
                  <FaTimesCircle className="text-red-500 cursor-pointer" />
				          <input
                    type="checkbox"
                    checked={selectedUsers.includes(user.id)}
                    onChange={() => toggleSelection(user.id)}
                    className="cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

