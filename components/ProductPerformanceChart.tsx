"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Bell, DollarSign, House, Info, Mail, Settings, ShoppingBag, Users, Menu,
  BarChart as BarChartIcon   // ✅ renamed to avoid conflict
} from "lucide-react";
import { usePathname } from "next/navigation";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,       
  Legend,
  ResponsiveContainer,
} from "recharts";

const ProductPerformanceChart = () => {
  const [productPerformanceData, setProductPerformanceData] = useState([]);

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => setProductPerformanceData(data.productPerformance));
  }, []);
  
  return (
    <motion.div
      className="bg-[#1e1e1e] backdrop-blur-lg shadow-lg rounded-xl p-4 md:p-6 border border-[#1f1f1f] mx-2 md:mx-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <h2 className="text-base md:text-xl font-semibold text-gray-100 mb-4 text-center md:text-left">
        Product Performance
      </h2>

      <div className="w-full h-64 md:h-72">
        <ResponsiveContainer>
          <BarChart data={productPerformanceData||[]}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis
              dataKey="name"
              stroke="#9ca3af"
              tick={{ fontSize: 12 }}
              interval="preserveStartEnd"
            />
            <YAxis
              stroke="#9ca3af"
              tick={{ fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4b5563",
                fontSize: "12px",
              }}
              itemStyle={{ color: "#e5e7eb" }}
            />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Bar dataKey="Retention" fill="#f70a1f" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default ProductPerformanceChart;