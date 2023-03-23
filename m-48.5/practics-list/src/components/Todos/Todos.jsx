import React, { useEffect, useState } from 'react';

const Todos = () => {
    const [todos, setTodos] = useState([])
    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res =>res.json())
        .then(data => setTodos(data))
    },[])
    
    return (
        
        <div>
            
            {
                todos.map(item => <Items {...item}></Items> )
              
                
            }
        </div>
    );
};

const Items = ({title, id}) => {
//    console.log(props);
    // const {title, completed} = props.name
    return (
        <div>
            <h2>Title: {title}</h2>
            <h3>ID : {id}</h3>
        </div>
    )
}
export default Todos;