import React from 'react';
import { NotFound } from '../../components/ui/ghost-404-page';

export default function NotFoundPage({ children }) {
  return (
    <div className="w-full bg-[#05070C]">
      <NotFound />
      {children}
    </div>
  );
}
