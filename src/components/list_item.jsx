import React from 'react';


// function ListItem(props){
//     return <li>{props.title}</li>
// }

class ListItem extends React.Component{
    render(){
        return <li>{this.props.title}</li>
    }
}

export default ListItem;