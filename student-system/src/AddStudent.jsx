import{useState} from"react";
import{useStudents}from './StudentContext';
export default function AddStudent(){
    const {dispatch}=useStudents();
    const[name,setName]=useState("");
    const [course,setCourse]=useState("");

    function handleSubmit(event){
        event.preventDefault();
        if(!name.trim()||!course.trim()){
            alert("please enter the student");
            return;
        }
        dispatch({
            type:"ADD_STUDENT",
            payload:{
                id:crypto.randomUUID(),
                name:name.trim(),
                course:course.trim(),
            }, });
            setName("");
            setCourse("");
        }
            return(
                <form onSubmit={handleSubmit}>
                    <h2>Add Student</h2>
                <input type="text"placeholder="student name"value={name} 
                    onChange={(event)=>setName(event.target.value)}/>
            <input type="text"placeholder="Course"value={course}
            onChange={(event)=>setCourse(event.target.value)} />
            <button type="submit">Add student</button>
            </form>
            );
}