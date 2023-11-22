import React from 'react';
import DishCard from '../components/Card/DishCard';

function CustomerOrderPage() {
  return (
    <div className="px-6 py-4 block box-border m-0 h-screen bg-background text-white">
      <div className="border border-customGray relative h-full p-0 flex flex-1">
        <div className="flex z-10 flex-grow">
          <div className="flex-col w-[140px]">
            <h1>POS Menu</h1>
            <h1>POS Menu</h1>
            <h1>POS Menu</h1>
            <h1>POS Menu</h1>
            <h1>POS Menu</h1>
            <h1>POS Menu</h1>
          </div>
          <div className="border-l-[1px] border-customGray overflow-y-scroll flex-1">
            <div className="p-4 touch-auto h-full flex-wrap grid grid-cols-12">
              <DishCard />
              <DishCard />
              <DishCard />
              <DishCard />
              <DishCard />
              <DishCard />
              <DishCard />
              <DishCard />
              <DishCard />
              <DishCard />
              <DishCard />
              <DishCard />
              <DishCard />
              <DishCard />
              <DishCard />
              <DishCard />
              <DishCard />
              <DishCard />
              <DishCard />
              <DishCard />
              <DishCard />
              <DishCard />
            </div>
          </div>
          <div className="p-0 flex-col border-l-customGray flex-none h-full w-[360px]">
            POS Sidebar
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerOrderPage;
