// import React, { useState } from 'react';
// import Controlled from './components/Controlled form';

// const TodoList = () => {
//     const [todos,setTodos] = useState([
//         { id: 1, text: 'Stock Take', createdAt: new Date() },
//     { id: 2, text: 'Process Payroll', createdAt: new Date() },
//     ]);
    

//     const reverseOrder = () => {
//         // Create a copy of the todos array and reverse it
//     const reverseTodos = [...todos].reverse();
//     setTodos(reverseTodos);
// };

    // return (
    //   <Controlled />
    // );
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
// };

// export default TodoList;


/*********************************************************************************************************/

// import { useState } from "react";

// export default function App() {
//   const [giftCard, setGiftCard] = useState(
//     {
//         firstName: "Jennifer",
//         lastName: "Smith",
//         text: "Free dinner for 4 guests",
//         valid: true,
//         instructions: "To use your coupon, click the button below.",
//     }
//   );

//   function spendGiftCard() {
//     setGiftCard((prevState) => {
//       return {
//         ...prevState,
//         text: "Your coupon has been used.",
//         valid: false,
//         instructions: "Please visit our restaurant to renew your gift card..",
//       }
      
//     });
//   }

//   return (
//     <div style={{padding: '40px'}}>
//       <h1>
//         Gift Card Page
//       </h1>
//       <h2>
//         Customer: {giftCard.firstName} {giftCard.lastName}
//       </h2>
//       <h3>
//         {giftCard.text}
//       </h3>
//       <p>
//         {giftCard.instructions}
//       </p>
//       {
//         giftCard.valid && (
//           <button onClick={spendGiftCard}>
//             Spend Gift Card
//           </button>
//         )
//       }
//     </div>
//   );
// }

/*********************************************************************************************************/
