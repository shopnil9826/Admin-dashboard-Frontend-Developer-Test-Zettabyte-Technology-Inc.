"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const UsersTable = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await fetch("/data/data.json");
        const data = await res.json();
        setClients(data.clients);
      } catch (error) {
        console.error("Failed to fetch clients:", error);
      }
    };
    fetchClients();
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="bg-[#1e1e1e] backdrop-blur-md shadow-lg rounded-xl p-4 sm:p-6 border border-[#2f2f2f]"
    >
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 sm:gap-0">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-100 text-center sm:text-left">
          Clients
        </h2>
      </div>

      <div className="relative w-full sm:w-auto">
        <input
          type="text"
          placeholder="Search Clients"
          className="bg-[#2f2f2f] text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200 text-sm"
        />
        <Search className="absolute left-3 top-2.5 text-gray-400 size={18" />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              {["Name", "Email", "Phone Number", "Country", "Actions"].map(
                (header) => (
                  <th
                    key={header}
                    className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wide hidden sm:table-cell"
                  >
                    {header}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {clients.map((client, index) => (
              <motion.tr
                key={client.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="flex flex-col sm:table-row mb-4 sm:mb-0 border-b sm:border-b-0 border-gray-200 sm:border-none p-2 sm:p-0"
              >
                {/* mobile view */}
                <td className="sm:hidden px-3 py-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={client.image}
                        width={36}
                        height={36}
                        className="w-9 h-9 rounded-full"
                        alt="client image"
                      />
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-100">
                          {client.name}
                        </div>
                        <div className="text-xs text-gray-400">
                          {client.email}
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                {/* desktop view */}
                <td className="hidden sm:table-cell px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      className="w-9 h-9 rounded-full"
                      src={client.image}
                      alt={`${client.name}'s profile picture`}
                      width={36}
                      height={36}
                    />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-100">
                        {client.name}
                      </div>
                      <div className="text-sm text-gray-400">
                        {client.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="hidden sm:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {client.phoneNumber}
                </td>
                <td className="hidden sm:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {client.country}
                </td>
                <td className="hidden sm:table-cell px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a
                    href="#"
                    className="text-indigo-400 hover:text-indigo-600 transition duration-200"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="ml-4 text-red-400 hover:text-red-600 transition duration-200"
                  >
                    Delete
                  </a>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default UsersTable;
