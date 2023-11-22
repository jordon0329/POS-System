import React from 'react';
import Dish01 from '../../assets/imgs/Dish01.jpg';

function DishCard() {
  return (
    <div className="col-span-3 px-3 pb-6">
      <div className="text-white flex flex-col p-1 border border-customGray">
        <img
          className="bg-no-repeat object-cover min-h-[180px] max-h-[180px]"
          src={Dish01}
          alt=""
        />
        <div className="flex flex-1 flex-col p-4">
          <div className="text-base text-white font-semibold mb-0.5">
            Dish Title
          </div>
          <div className="text-white flex flex-1 leading-[1.4] mb-4 text-sm">
            chicken, egg, mushroom, salad
          </div>
          <div className="text-white text-base font-semibold m-0">$10.99</div>
        </div>
      </div>
    </div>
  );
}

export default DishCard;
