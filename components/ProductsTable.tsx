import React, { useMemo, useState,useEffect } from "react";
import ProductData from "../public/data/data.json";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Image from "next/image";

const ProductsTable = () => {
  const [products, setProducts] = useState(ProductData.products);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
  fetch("/data/data.json")
    .then(res => res.json())
    .then(data => setProducts(data));
}, []);

const filterdProducts = useMemo(() => {
  
 return products.filter((product)=>

product.name.toLowerCase().includes(searchTerm.toLowerCase())||product.category.toLowerCase()

 )
},[]) 
  return (
    <motion.div
      className="bg-[#1e1e1e] backdrop-blur-md shadow-lg rounded-xl
        p-4 md:p-6 md:border md:border-[#1f1f1f] mx-2 md:mx-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 md:gap-0">
        <h2 className="text-lg md:text-xl font-semibold text-gray-100">
          Product List
        </h2>

        <div className="relative w-full md:w-auto">
          <input
            type="text"
            placeholder="Search Products..."
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            className="bg-[#2f2f2f] text-white placeholder-gray-400 
               rounded-lg pl-10 pr-4 py-2 w-full 
               focus:outline-none focus:ring-2 focus:ring-gray-500 
               transition duration-200 text-sm"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-600">
          <thead>
            <tr>
              {[
                "Name",
                "Product ID",
                "Category",
                "Price",
                "Stock",
                "Sales",
                "Actions",
              ].map((header) => (
                <th
                  key={header}
                  className="px-3 md:px-6 py-2 md:py-3 text-left text-xl font-medium text-gray-400 uppercase tracking-wide hidden md:table-cell"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {filterdProducts.map((product) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="flex flex-col md:table-row border-b md:border-0 border-gray-700 md:border-none p-2 md:p-0"
              >
                {/* Mobile View */}
                <td className="md:hidden px-3 py-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={36}
                        height={36}
                        className="w-9 h-9 rounded-full"
                      />
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-100">
                          {product.name}
                        </div>
                        <div className="text-sm text-gray-400">
                          ID: {product.id}
                        </div>
                        <div className="text-sm text-gray-400">
                          Category: {product.category}
                        </div>
                        <div className="text-sm text-gray-400">
                          Price: ${product.price}
                        </div>
                        <div className="text-sm text-gray-400">
                          Stock: {product.stock}
                        </div>
                        <div className="text-sm text-gray-400">
                          Sales: {product.sales}
                        </div>
                        <button
                          onClick={() => console.log("Search:", searchTerm)}
                          className="md:hidden p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg"
                        >
                          <Search size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </td>

                {/* Desktop View */}
                <td className="hidden md:table-cell px-3 md:px-6 py-2 md:py-3 text-white font-medium">
                  <div className="flex items-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={36}
                      height={36}
                      className="w-9 h-9 rounded-full mr-3"
                    />
                    {product.name}
                  </div>
                </td>
                <td className="hidden md:table-cell px-3 md:px-6 py-2 md:py-3 text-gray-300">
                  {product.id}
                </td>
                <td className="hidden md:table-cell px-3 md:px-6 py-2 md:py-3 text-gray-300">
                  {product.category}
                </td>
                <td className="hidden md:table-cell px-3 md:px-6 py-2 md:py-3 text-gray-300">
                  ${product.price}
                </td>
                <td className="hidden md:table-cell px-3 md:px-6 py-2 md:py-3 text-gray-300">
                  {product.stock}
                </td>
                <td className="hidden md:table-cell px-3 md:px-6 py-2 md:py-3 text-gray-300">
                  {product.sales}
                </td>
                <td className="hidden md:table-cell px-3 md:px-6 py-2 md:py-3">
                  <button
                    onClick={() => console.log("Search:", searchTerm)}
                    className="hidden md:inline-block px-4 py-2 text-sm text-white bg-gray-700 hover:bg-gray-600 rounded-lg"
                  >
                    Search
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ProductsTable;
