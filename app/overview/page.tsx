"use client"
import Statecard from '@/components/Statecard'
import { DollarSign, ShoppingBag, SquareActivity, Users } from 'lucide-react'
import React from 'react'
import { motion } from "framer-motion";
import SalesOverviewChart from '@/components/SalesOverviewChart';
import CategoryDistributionChart from '@/components/CategoryDistributionChart';
import OrderDistributionChart from '@/components/OrderDistributionChart';
import ProductPerformanceChart from '@/components/ProductPerformanceChart';


const Overviewpage = () => {
  return (
    <div className='flex-1 relative z-10'>
      <main className='max-w-7xl mx-auto py-4 px-4 lg:px-8'>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
           className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
           >
          <Statecard name='Total-Sales' icon={DollarSign} value="$182,450" />
          <Statecard name='Total-clients' icon={Users} value='$1,473'/>
          <Statecard name="Total-products" icon={ShoppingBag} value="674"/>
          <Statecard name="Stock" icon={SquareActivity} value="12,874"/>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
       <SalesOverviewChart/>
       <CategoryDistributionChart/>
       <OrderDistributionChart/>  
        <ProductPerformanceChart/>
       
        </div>

      </main>
    </div>
  )
}

export default Overviewpage


