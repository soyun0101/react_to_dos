import React from 'react';

export const ListContext = React.createContext({
    list: [],
    addItem: () => {}
});