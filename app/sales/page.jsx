"use client";
import React from "react";
import { motion } from "framer-motion";

import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import Statecard from "@/components/Statecard";
import SalesOverviewChart from "@/components/SalesOverviewChart";
import CategoryDistributionChart from "@/components/CategoryDistributionChart";

const SalesPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <div className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <main>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          >
            <Statecard name="Total Revenue" icon={DollarSign} value="$42,300" />
            <Statecard
              name="Avg. Order Value"
              icon={ShoppingCart}
              value="$78.50"
            />
            <Statecard name="Total Sales" icon={CreditCard} value="128,500" />
            <Statecard name="Total Growth" icon={TrendingUp} value="36.2" />
          </motion.div>
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <SalesOverviewChart/>
            <CategoryDistributionChart/>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SalesPage;