

// // // import Welcome from './welcome'
// // // import Student from './student'
// // // import Teacher from './teacher'

// // // function App(){
// // //     return(
// // //         <div>
// // //           <h1>Edubrige</h1>
// // //             <Welcome />
// // //             <Student 
// // //                 name="kamana"
// // //                 department="software engineering"
// // //                 school="kiyumba technical secondary school"
// // //                 year="2025"
// // //             />
// // //             <Teacher 
// // //                 name="john"
// // //                 department="computer science"
// // //                 school="kiyumba technical secondary school"
// // //                 year="2025"
// // //             />
// // //         </div>
// // //     )
// // // }

// // // export default App


// // // import { useState, useEffect } from 'react'

// // // function Student() {
// // //   const [count, setCount] = useState(0)

// // //   useEffect(() => {
// // //     console.log("Student component mounted")

// // //     return () => {
// // //       console.log("Student component unmounted")
// // //     }
// // //   }, [count])

// // //   return (
// // //     <div>
// // //       <h2>Student Life Cycle Example</h2>

// // //       <p>Button clicked: {count}</p>

// // //       <button onClick={() => setCount(count + 1)}>
// // //         Click me
// // //       </button>
// // //     </div>
// // //   )
// // // }


// // // function App() {
// // //     const [show, setShow] = useState(false)
    
// // //     return (
// // //         <div>
            
// // //             <h>edubrige student system</h>
// // //             <button onClick={()=>setShow(!show)}>{show?"remove student":"show student"}</button>
// // //             {show && <Student />}
// // //         </div>
// // //     )
// // // }

// // // function App() {
// // //     return (
// // //         <Router>
// // //             <div>
// // //                 <Routes>
// // //                     <Route path="/" element={<Home />} />
// // //                     <Route path="/about" element={<About />} />
// // //                     <Route path="/contact" element={<Contact />} />
// // //                 </Routes>
// // //             </div>
// // //         </Router>
// // //     )
// // // }
// // // import {
// // //     BrowserRouter,
// // //     Routes,
// // //     Route,
// // //     Link
// // // } from 'react-router-dom'
// // // import Home from './pages/home'
// // // import About from './pages/about'
// // // import Contact from './pages/contact'   

// // // function App(){
// // //     return(
// // //         <BrowserRouter>
// // //             <div>
// // //                 <h1>edubrige student system</h1>
// // //                 <nav>
// // //                     <Link to="/Home">Home</Link>{""}
// // //                     <Link to="/About">About</Link>
// // //                     <Link to="/Contact">Contact</Link>
// // //                 </nav>
// // //                 <hr/>
// // //                 <Routes>
// // //                     <Route path="/Home" element={<Home />} />
// // //                     <Route path="/About" element={<About />} />
// // //                     <Route path="/Contact" element={<Contact />} />
// // //                 </Routes>
// // //             </div>
// // //         </BrowserRouter>
// // //     )

// // // }

// // // export default App



// // // import {
// // //     BrowserRouter,
// // //     Routes,
// // //     Route,
// // //     Link
// // // } from 'react-router-dom'
// // // import Home from './pages/home'
// // // import About from './pages/about'
// // // import Contact from './pages/contact'   

// // // function App(){
// // //     return(
// // //         <BrowserRouter>
// // //             <div>
// // //                 <h1>edubrige student system</h1>
// // //                 <nav>
// // //                     <Link to="/Home">Home</Link>{" "}
// // //                     <Link to="/About">About</Link>{" "}
// // //                     <Link to="/Contact">Contact</Link>{" "}
// // //                 </nav>
// // //                 <hr/>
// // //                 <Routes>
// // //                     <Route path="/Home" element={<Home />} />
// // //                     <Route path="/About" element={<About />} />
// // //                     <Route path="/Contact" element={<Contact />} />
// // //                 </Routes>
// // //             </div>
// // //         </BrowserRouter>
// // //     )

// // // }

// // // export default App

// // // 

// // // import {
// // //     BrowserRouter,
// // //     Routes,
// // //     Route,
// // //     Link,
// // //     Navigate
// // // } from 'react-router-dom'

// // // import Home from './pages/home'
// // // import About from './pages/about'
// // // import Contact from './pages/contact'   

// // // function App(){
// // //     return(
// // //         <BrowserRouter>
// // //             <div>
// // //                 <h1>edubrige student system</h1>
// // //                 <nav>
// // //                     <Link to="/Home">Home</Link>
// // //                     <Link to="/About">About</Link>
// // //                     <Link to="/Contact">Contact</Link>
// // //                 </nav>
// // //                 <hr/>
// // //                 <Routes>
// // //                     <Route path="/Home" element={<Home />} />
// // //                     <Route path="/About" element={<About />} />
// // //                     <Route path="/Contact" element={<Contact />} />
// // //                 </Routes>
// // //             </div>
// // //         </BrowserRouter>
// // //     )

// // // }

// // // import DashboardLayout from './componets/dashboardlayout';
// // // import DashboardHome from './dashboardhome';
// // // import Students from './students';
// // // import Course from './courses';
// // // import Assignment from './assignments';

// // // function App(){
// // //   return (
// // //     <BrowserRouter>
// // //       <Routes>
// // //         <Route path="/" element={<Navigate to="/dashboard" replace />} />
// // //         <Route path="/dashboard" element={<DashboardLayout />}>
// // //           <Route index element={<DashboardHome />} />
// // //           <Route path="students" element={<Students />} />
// // //           <Route path="course" element={<Course />} />
// // //           <Route path="assignment" element={<Assignment />} />
// // //         </Route>
// // //       </Routes>
// // //     </BrowserRouter>
// // //   )
// // // }

// // // export default App




// // import { useState, useEffect, useRef } from 'react'
// // import "./index.css";

// // export default
// // function App(){
// //   const [students,setStudents]= useState([])
// //   const [studentName,setStudentName]= useState("")
// //   const inputRef= useRef (null)

// //   useEffect(()=>{
// //     document.title= `Student: ${students.length}`;
// //   },[students]) 

// //   function addStudent(){
// //     const name = studentName.trim();
// //     if (name === "") {
// //       alert("Please enter a name");
// //       return;
// //     }
// //     setStudents((prevStudents)=>[...prevStudents, { name, id: Date.now() }])
// //     setStudentName("")
// //     inputRef.current.focus()

// // }
// // function removeStudent(indexToRemove){
// //   setStudents((prevStudents)=>prevStudents.filter
// //   ((student)=>student.id !== indexToRemove))



// // }
// // return(
// //   <div className="container">
// //     <h1>Student Management System</h1>
// //     <h2>Add Student</h2>
// //     <input
// //       type="text"
// //       placeholder="Enter student name"
// //       value={studentName}
// //       ref={inputRef}
// //       onChange={(Event) => setStudentName(Event.target.value)}
// //     />
// //     <button onClick={addStudent}>Add Student</button>

// //     <h2>registered student:{students.length}</h2>
// //     {students.length===0 && <p>No students registered</p>}
// //     <ul>
// //       {students.map((student)=>(
// //         <li key={`${student.name}-${student.id}`}>
// //           {student.name}
// //           <button onClick={()=>removeStudent(student.id)}>Remove</button>
// //         </li>
// //       ))}
// //     </ul>

// //   </div>
// // )
// // }



// import {useState, useMemo , useCallback} from "react"
// const StudentList=(({students, onselect})=>{

//   return(
//     <div>
//       <h2>
//         students
//       </h2>
//       {students.map((student)=>(
//         <button key={student.id} onClick={()=>onselect(student)}>{student.name}</button>
//       ))}
//     </div>
//   )

// })

// const students=[
//   {id:1,name:"seth"},
//   {id:2,name:"kaka"},
//   {id:3,name:"mama"}
// ]

// function App(){
//   const [count,setCount]=useState(0)
//   const [selectedStudent,setselectedStudent]=useState(null);

// const totalStudents=useMemo(()=>{
//   console.log("calculating total student....")
//   return students.length
// },[students.length])

// const handleSelect=useCallback((student)=>{setselectedStudent(student)},[])

//  return(
//   <div>
//     <h1>Student Management System</h1>
//     <h2>Counter:{count}</h2>
//     <button onClick={()=>setCount(count+1)}>Increment</button>
//     <p>totalStudents: {totalStudents}</p>
//     <StudentList students={students} onselect={handleSelect}/>
//     {selectedStudent && 
//     <h3>Selected Student: {selectedStudent.name}</h3>}
    
//   </div>
//  )
// }


// import { useReducer,useState } from "react";
// import "./App.css";
//  const initialstate={
//   students:[

//     {id:1, name:"seth",marks:50},
//     {id:2, name:"kaka",marks:53},
//     {id:3, name:"semana",marks:90}

//   ],
// message:"",

//  }

//  function studentReducer(state,action){
//   switch(action.type){
//     case"ADD_STUDENT":
//     return{
//       ...state,
//       students:[...state.students,action.payload],
//       message:"student added successfully ",
//     }

//     case"UPDATE_STUDENT":
//     return{
//       ...state,
//       students:state.students.map((student)=>
//         student.id===action.payload.id
//         ?{...student,...action.payload}
//         :student
//       ),
//       message:"student updated successfully ",
//     }

//     case"UPDATE_MARKS":
//     return{
//       ...state,
//       students:state.students.map((student)=>
//         student.id===action.payload.id
//         ?{...student,marks:action.payload.marks}
//         :student
//       ),
//       message:"marks updated successfully ",
//     }

//     case"DELETE_STUDENT":
//     return{
//       ...state,
//       students:state.students.filter((student)=>student.id!==action.payload),
//       message:"student deleted successfully ",
//     }

//     case"CLEAR_MESSAGE":
//     return{
//       ...state,
//       message:"",
//     }

//     default:
//     return state
//   }
//  }

//  function App(){
//   const [state,dispatch]=useReducer(studentReducer,initialstate)
//   const [name,setName]=useState("")
//   const [marks,setMarks]=useState("")

//   function addStudent(){
//     if(name.trim()==="" || marks===""){
//       alert("Please enter name and marks")
//       return
//     }
//     dispatch({
//       type:"ADD_STUDENT",
//       payload:{id:Date.now(),name:name.trim(),marks:Number(marks)}
//     })
//     setName("")
//     setMarks("")
//   }

//   function updateStudent(student){
//     const newName=prompt("Enter new name:",student.name)
//     if(newName===null || newName.trim()==="") return
//     const newMarks=prompt("Enter new marks:",student.marks)
//     if(newMarks===null || newMarks==="") return
//     dispatch({
//       type:"UPDATE_STUDENT",
//       payload:{id:student.id,name:newName.trim(),marks:Number(newMarks)}
//     })
//   }

//   function updateMarks(student){
//     const newMarks=prompt("Enter new marks for "+student.name+":",student.marks)
//     if(newMarks===null || newMarks==="") return
//     dispatch({
//       type:"UPDATE_MARKS",
//       payload:{id:student.id,marks:Number(newMarks)}
//     })
//   }

//   function deleteStudent(id){
//     dispatch({type:"DELETE_STUDENT",payload:id})
//   }

//   return(
//     <div>
//       <h1>Student Management System</h1>
//       <h2>Add Student</h2>
//       <input type="text" placeholder="Enter name" value={name}
//         onChange={(e)=>setName(e.target.value)}/>
//       <input type="number" placeholder="Enter marks" value={marks}
//         onChange={(e)=>setMarks(e.target.value)}/>
//       <button onClick={addStudent}>Add</button>

//       <h2>Students ({state.students.length})</h2>
//       {state.message && <p>{state.message} <button onClick={()=>dispatch({type:"CLEAR_MESSAGE"})}>x</button></p>}
//       <ul>
//         {state.students.map((student)=>(
//           <li key={student.id}>
//             {student.name} - {student.marks}
//             <button onClick={()=>updateStudent(student)}>Update</button>
//             <button onClick={()=>updateMarks(student)}>Update Marks</button>
//             <button onClick={()=>deleteStudent(student.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
//  }


// function App() {
//   const [state,dispatch]=useReducer(studentReducer,initialstate)
//   const [name,setName]=useState("")
//   const [marks,setMarks]=useState("")

//   function handleAddStudent(event){
//     event.preventDefault()
//     const studentName=name.trim()
//     const studentMark=Number(marks)

//     if(!studentName||marks.trim()===""){
//       dispatch({
//         type:"CLEAR_MESSAGE"
//       })
//       alert("please entr student name and marks")
//       return;
//     }

//     if(
//       !Number.isFinite(studentMark)||
//       studentMark<0||
//       studentMark>100
//     ){
//       alert("marks must be btn 0 and 100 ")
//       return ;
//     }
//     dispatch({
//       type:"ADD_STUDENT",
//       payload:{id:Date.now(),name:studentName,marks:studentMark}
//     })

//     setName("")
//     setMarks("")
//   }

//   function handleUpdateMarks(student){
//     const input=prompt(`Enter new marks for ${student.name}`,student.marks)
//     if(input===null || input.trim()==="") return
//     const newMarks=Number(input)
//     if(
//       !Number.isFinite(newMarks)||newMarks<0||newMarks>100
//     ){
//       alert("marks must be btn 0 and 100 ")
//       return
//     }
//     dispatch({
//       type:"UPDATE_MARKS",
//       payload:{id:student.id,marks:newMarks}
//     })
//   }

//   const average =
//   state.students.length===0
//   ?0
//   :state.students.reduce((acc,student)=>acc+student.marks,0)/state.students.length
// return(
//   <div className="container">
//     <h1>Student Management System</h1>
//     <p>manage student records using useReducer()  
// </p>

//       <form onSubmit={handleAddStudent}>
//         <input type="text" placeholder="Enter student name" value={name} onChange={(e)=>setName(e.target.value)} />
//         <input type="number" placeholder="Enter student marks" 
//         min="0" max="100"
//         step="any"
//         value={marks} onChange={(e)=>setMarks(e.target.value)} />
//         <button type="submit">Add Student</button>
//         </form>      
//   {state.message &&(
//     <p className="Message" role="status">{state.message}</p>
//   ) }
//   <h2>Register student</h2>
//   {state.students.length===0?(
//     <p>No students registered</p>
//   ):(
//     <table>
//       <thead>
//         <tr>
//           <th>
//             Name
//           </th>
//           <th>grade</th>
//           <th>marks</th>
//           <th>actions</th>
//         </tr>
//       </thead>

// <tbody>
//   {state.students.map((student)=>(<tr key={student.id}>
//     <td>{student.name}</td>
//     <td>{student.marks>=80?"A":
//     student.marks>=70?"B":
//     student.marks>=60?"C":
//     student.marks>=50?"D":"F"}</td>
//     <td>{student.marks}</td>
//     <td><button onClick={()=>handleUpdateMarks(student)}>Update Marks</button>
//     <button onClick={()=>dispatch({type:"DELETE_STUDENT",payload:student.id})}>Delete</button></td></tr>))}

// </tbody>
//     </table>
//   )}
//   <h3>Total student:{state.students.length}</h3>
//   <h3>average marks:{average.toFixed(2)}%</h3>
//   </div>
// )
// }

// export default App
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { StudentProvider } from "./StudentContext";
import Header from "./Header";
import AddStudent from "./AddStudent";
import StudentList from "./StudentList";
import"./App.css";


function StudentDashboard(){
    return(
        <div className="container">
            <Header/>
            <Routes>
                <Route path="/" element={
                    <>
                    <AddStudent/>
            <StudentList/>
                    </>
                }></Route>
            </Routes>
            
        </div>)}
export default function App(){
    return(
        <BrowserRouter>
        <StudentProvider>
            <StudentDashboard/>
            </StudentProvider>
        </BrowserRouter>
        
    );
}
