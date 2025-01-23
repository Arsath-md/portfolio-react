import { useState } from "react"

function Todos() { 
          
            const [todo , setTodo] = useState([]);
            const [count, setCount] = useState(0);
            const [add , setAdd] =useState('');
          

         const handleinput =(e)=>{
              setAdd(e.target.value);
         }
       const handleform =(e)=>{
         e.preventDefault();
            setTodo([...todo,{
               id:count,
               todos:add,
               checked:false
            }])
            console.log(todo);
            setCount(count => count+1)
            console.log(count)
            setAdd('')
       }
      const check =(id)=>{
            setTodo((prev)=>
               prev.map((todo)=>
                  todo.id === id ? {...todo,checked:!todo.checked}:todo
               
             )
            )
      }

    
       return (
          <> 
               <form onSubmit={handleform}>
                   <input type="text" value={add} onChange={handleinput}/>
                   <button type="submit">submit</button>
               </form>
               <div>
                  {todo.map((keys)=> 
                    (
                     <>
                           <input  type="checkbox" id={`check-${count}`} value={keys.checked} checked={keys.checked} onChange={()=>check(keys.id)} />
                           <label key={keys.id} style={{textDecoration:keys.checked?'line-through':'none'}} htmlFor={`check-${keys.id}`}>{keys.todos}</label>
                     </>
                    )
                  )}
             
               </div>
          </>
       )
     }
     
     export default Todos;