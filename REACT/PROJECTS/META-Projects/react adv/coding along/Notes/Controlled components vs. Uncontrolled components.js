const { useState } = require("react");
const { useRef } = require("react");

// const JobApplicationForm = () => {
//     const nameRef = useRef(null);
//     const emailRef = useRef(null);

//     const handleSubmit = (e)=>{
//         e.preventDefault();
//         const name = nameRef.current.value;
//         const email = emailRef.current.value;
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//         <input ref={nameRef} type="text" placeholder="Name" />
//         <input ref={emailRef} type="email" placeholder="Email" />
//         <button type="submit">Submit</button>
//         </form>
//     );

// };


const JobApplicationForm = () => {
    const [file,setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

    };

    return (
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleFileChange} />
          <button type="submit">Submit</button>
        </form>
    );

};