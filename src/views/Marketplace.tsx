import React from 'react';
import { Sidebar } from '../components/sidebar';
import { MarketplaceItem } from '../components/marketplaceitem';

export const Marketplace = () => {
  return (
    <>
      <Sidebar></Sidebar>
      <div className="p-1 sm:ml-64">
        <div className="flex flex-wrap gap-4 items-center ">
          <MarketplaceItem></MarketplaceItem>
          <MarketplaceItem></MarketplaceItem>
          <MarketplaceItem></MarketplaceItem>
        </div>
      </div>
    </>
  );
};
