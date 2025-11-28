import React, { useState } from 'react';
import Controlled from './components/Controlled form';

const TodoList = () => {
//     const [todos,setTodos] = useState([
//         { id: 1, text: 'Stock Take', createdAt: new Date() },
//     { id: 2, text: 'Process Payroll', createdAt: new Date() },
//     ]);
    

//     const reverseOrder = () => {
//         // Create a copy of the todos array and reverse it
//     const reverseTodos = [...todos].reverse();
//     setTodos(reverseTodos);
// };

    return (
      <Controlled />
    );
    // return (
    //   <div>
    //         <button onClick={reverseOrder}>Reverse Order</button>
    //         <table>
    //           <tbody>
    //             {todos.map((todo,index) => (
    //               <tr key={todo.id}>
    //                  <td>
    //                   <input type="text" defaultValue={todo.text} />
    //                 </td>
    //                 <td>{todo.createdAt.toLocaleString()}</td>
    //               </tr>
    //             ))}
    //           </tbody>
    //         </table>
    //       </div>
    //       );
};

export default TodoList;


