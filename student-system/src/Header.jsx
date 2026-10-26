import { useStudents } from "./StudentContext";
export default function Header(){
    const{state}=useStudents();
    return(
        <header>
    <h1> Student management system</h1>
    <p>Total registered students:{state.students.length}</p>
        </header>
    );
}