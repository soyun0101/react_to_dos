import React from 'react';


// function ListItem(props){
//     return <li>{props.title}</li>
// }

class ListItem extends React.Component{
    render(){
        return <li className="list-group-item">{this.props.title}</li>
    }
}

export default ListItem;