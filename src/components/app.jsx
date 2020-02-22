import React from 'react';

import ToDoList from './to_do_list';
import AddToDoForm from './add_to_do_form';

// const toDos = [
//     {
//         _id: '01',
//         title: 'Wash car'
//     },
//     {
//         _id: '02',
//         title: 'Make bed'
//     },
//     {
//         _id: '03',
//         title: 'Brush teeth'
//     },
//     {
//         _id:'04',
//         title: 'Buy food'
//     },

// ]

class App extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                list: [],
                error: ''
            };

            this.addToDo = this.addToDo.bind(this);
        
    }

    componentDidMount(){
        this.getToDos();
    }

    async addToDo(item){
        try{

            const response = await fetch('http://api.reactprototypes.com/todos?key=12345678', {
                method: 'POST',
                body: JSON.stringify(item)
            });
            if(response.status > 299){
                const data = await response.json();
                throw new Error(data.error);
            }
            this.getToDos();

            } catch(error){
                console.log('Add Failed: ', error);
                this.setState({
                    error: error.message
                })
            }
    
    }

    // addToDo(item){
    //   fetch('http://api.reactprototypes.com/todos?key=12345678', {
    //     method: 'POST',
    //     body: JSON.stringify(item)
    //     }).then((response) => {
    //         if(response.status > 201){
    //             throw new Error('Failed to add to do item')
    //         }
    //       return response.json()
    //     }).then((data) => {
    //         this.getToDos();
    //     }).catch((error) =>
    //         console.log('Caught Error: ', error))
        
    // }

    async getToDos(){
        const response = await fetch('http://api.reactprototypes.com/todos?key=12345678');
        const data = await response.json();

        this.setState({
            list: data.todos,
            error: ''
        });
    }

    // getToDos(){
    //     fetch('http://api.reactprototypes.com/todos?key=12345678')
    //     .then((response) => {return response.json()})
    //     .then(data => {console.log('Data is: ', data.todos)
    //         this.setState({
    //             list: data.todos
    //         });
    //     });
    // }
    render(){
        const { error, list } = this.state;
        return (
            <div className="container">
                <h1 className="text-center my-4">To Do List</h1>
                <div className="row">
                <div className="col-md-8">
                    <ToDoList list={list}/>
                 </div>
                <div className="col-md-4">
                    <AddToDoForm add={this.addToDo}/>
                    <h1>{error}</h1>
                </div>

                </div>
                 
            </div>
        );
    }
}

export default App;