import React from 'react';
import emitter from './../images/aurora_emitter.png';

export type MarketplaceItemProps = {
  partName: string;
  description: string;
  price: number;
};

export const MarketplaceItem = ({
  partName,
  description,
  price,
}: MarketplaceItemProps) => {
  return (
    <div className="w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="p-8 rounded-t-lg object-cover"
        src={emitter}
        alt="product image"
      />
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Cosmic Cascade Emitter
        </h5>
        <p className="text-sm tracking-tight text-gray-900 dark:text-white">
          Description bla Description bla Description bla Description bla
          Description bla Description bla bla
        </p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            $250
          </span>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Buy
          </a>
        </div>
      </div>
    </div>
  );
};
