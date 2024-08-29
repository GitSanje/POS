import React from 'react'
import InventorySummary from './_component/InventorySummary'
import SalesOverview from './_component/SalesOverview'
import PurchaseOverview from './_component/PurchaseOverview'
import TopSelling from './_component/TopSelling'
import Sidebar2 from './_component/Sidebar2'
import Navbar from './_component/Navbar'
import ProductSummary from './_component/ProductSummary'
import LowQuantity from './_component/LowQuantity'
import BG from '../../../public/bg.jpg'

const page = () => {
    return (
        <>
            <div className="flex md:flex-row bg-slate-600 p-8 bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${BG.src})` }}>
                <div>
                    <Sidebar2 />
                </div>
                <div className=" flex flex-col w-full h-full">
                    <div>
                        <Navbar />
                    </div>
                    <div className='p-5'>
                        <div className='flex gap-x-4 mb-4 w-full'>
                            <SalesOverview />
                            <InventorySummary />
                        </div>
                        <div className='flex gap-x-4 mb-4 w-full'>
                            <PurchaseOverview />
                            <ProductSummary />
                        </div>
                        <div className='flex w-full gap-4'>
                            <div className='w-7/12'>
                                <TopSelling />
                            </div>
                            <div className='w-5/12 bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100'>
                                <LowQuantity />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page