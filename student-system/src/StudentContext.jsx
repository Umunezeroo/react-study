// import {
//     createContext,
//     useContext,
//     useReducer,} from"react";

// const StudentContext=createContext(null);
// const initialState={students:[
//     {id:1,name:"alice",course:"SOD"},
//     {id:2,name:"bob",course:"SOD"},
//     {id:3,name:"Seth",course:"WOT" }
// ],
// };
// function StudentReducer(state,action){
//     switch(action.type){
//         case"ADD_STUDENT":
//         return{
//             ...state,students:[...state.students,action.payload],
//         };
//         case"DELETE_STUDENT":
//         return{
//             ...state,students:state.students.filter(
//                 (student)=>student.id!==action.payload
//             ),
//         };
//         default:
//             return state;
//     }
// }
// export function StudentProvider({children}){
//     const [state,dispatch]=useReducer(
//      StudentReducer,initialState   
//     );
//     return(
//         <StudentContext.Provider value={{state,dispatch}}>
//             {children}
//         </StudentContext.Provider>
//     );
// }
// export function useStudents(){
//     const context=useContext(StudentContext);
// if(context===null){
//     throw new Error("useStudent must be inside StudentProvider");
// }
// return context;
// }