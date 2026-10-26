import { Link, Outlet } from "react-router-dom";

function DashboardLayout(){
    return(
        <div>
            <header>

            </header>
            <nav>
                <Link to="/dashboard">Dashboard</Link>{" | "}
                <Link to="/dashboard/students">Students</Link>{" | "}
                <Link to="/dashboard/courses">Courses</Link>{" | "}
                <Link to="/dashboard/assignments">Assignments</Link>
            </nav>
            <Outlet />
        </div>
    )
}
export default DashboardLayout;