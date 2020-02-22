import React from 'react';

import ListItem from './list_item';



// function ToDoList(props){
//     const toDoElements = toDos.map((item) => {
//         return <ListItem key={item.id} title={item.title} />
//     });

//     return (
//         <ol>
//             {toDoElements}
//         </ol>
//     );
// }



function ToDoList(props){
        
    const toDoElements = props.list.map((item) => {
        return <ListItem key={item._id} title={item.title} />
    });
    return(
        <ol className="list-group">
        {toDoElements}
        </ol>
    )
    }
    


export default ToDoList;