import React from 'react';

import ListItem from './list_item';

const toDos = [
    {
        id: '01',
        title: 'Wash car'
    },
    {
        id: '02',
        title: 'Make bed'
    },
    {
        id: '03',
        title: 'Brush teeth'
    },
    {
        id:'04',
        title: 'Buy food'
    },

]

function ToDoList(props){
    const toDoElements = toDos.map((item) => {
        return <ListItem key={item.id} title={item.title} />
    });

    return (
        <ol>
            {toDoElements}
        </ol>
    );
}

export default ToDoList;