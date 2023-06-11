import { RouteComponentProps } from '@reach/router';
import React from 'react';

interface SearchProps extends RouteComponentProps{
    name?: string;
};

export const Search: React.FC<SearchProps> = ({name}) => {
    return (
        <div>
        <h1>Search</h1> 
        </div>
    );
};