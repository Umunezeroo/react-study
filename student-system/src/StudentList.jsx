import{useStudents}from"./StudentContext";
export default function StudentList(){
    const {state,dispatch}=useStudents();
    if(state.students.length===0){
        return<p>No students registered.</p>;
    };
    return(
        <div>
            <h2>Registered students</h2>
            <ul>
                {state.students.map((students)=>
               <li key ={students.id}>
                <strong>
                    {students.name}</strong>{" - "}
                    {students.course}
                    <button onClick={()=>
                        dispatch({
                            type:"DELETE_STUDENT",
                            payload:students.id,
                        })
                    }>delete</button>

               </li> )}
            </ul>
        </div>
    )
}