import React from 'react';

interface SearchProps {
    name?: string;
};

export const Search: React.FC<SearchProps> = ({name}) => {
    return (
        <div
      className="flex h-screen w-full items-center justify-center bg-gradient-to-br
        from-sky-500 via-rose-500 to-lime-500 bg-cover"
    >

    </div>
  );
};