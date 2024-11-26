import React from 'react';
import ContentLoader, { IContentLoaderProps } from 'react-content-loader';

export const Loading: React.FC<IContentLoaderProps> = (props) => {
  return (
    <div className='container mx-auto px-4'>
      <ContentLoader viewBox="0 0 1248 900"  {...props}>
        <rect x="0" y="20" rx="8" ry="8" width="280" height="280" />
        <rect x="0" y="320" rx="4" ry="4" width="220" height="30" />
        <rect x="0" y="360" rx="4" ry="4" width="140" height="30" />

        <rect x="310" y="20" rx="8" ry="8" width="280" height="280" />
        <rect x="310" y="320" rx="4" ry="4" width="220" height="30" />
        <rect x="310" y="360" rx="4" ry="4" width="140" height="30" />

        <rect x="620" y="20" rx="8" ry="8" width="280" height="280" />
        <rect x="620" y="320" rx="4" ry="4" width="220" height="30" />
        <rect x="620" y="360" rx="4" ry="4" width="140" height="30" />

        <rect x="930" y="20" rx="8" ry="8" width="280" height="280" />
        <rect x="930" y="320" rx="4" ry="4" width="220" height="30" />
        <rect x="930" y="360" rx="4" ry="4" width="140" height="30" />


        {/* <rect x="0" y="420" rx="8" ry="8" width="280" height="280" />
        <rect x="0" y="620" rx="0" ry="0" width="220" height="30" />
        <rect x="0" y="620" rx="0" ry="0" width="120" height="30" />

        <rect x="310" y="420" rx="8" ry="8" width="280" height="280" />
        <rect x="310" y="570" rx="0" ry="0" width="220" height="30" />
        <rect x="310" y="595" rx="0" ry="0" width="120" height="30" />
{/* 
        <rect x="470" y="420" rx="8" ry="8" width="280" height="280" />
        <rect x="470" y="570" rx="0" ry="0" width="220" height="30" />
        <rect x="470" y="595" rx="0" ry="0" width="120" height="30" />

        <rect x="690" y="420" rx="8" ry="8" width="280" height="280" />
        <rect x="690" y="570" rx="0" ry="0" width="220" height="30" />
        <rect x="690" y="595" rx="0" ry="0" width="120" height="30" /> */}

      </ContentLoader>
    </div>
  );
};