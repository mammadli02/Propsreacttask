import './App.css';
// import Students from './components/Students';
import { students } from './data';
import { useState } from 'react';
import { v4 as uuidv4} from 'uuid'
function App() {
  function handleDelete(){
    console.log('deleted');
}

const[studentsState, setStudentsState]=useState(students)
const[student,setStudent]=useState({name:'', age:0})
function handleAddStudent(){
  // console.log(student);
  setStudentsState([...studentsState,student])
  setStudent({name:'', age:0})
}
function handleChange(e){
  setStudent({...student,[e.target.name]: e.target.value});
// console.log(e.target.value);
student.id=uuidv4()
}
function handleSort(){
  let  sortedStudents=[...studentsState.sort((x,y)=>x.age-y.age)]
  setStudentsState(sortedStudents)
console.log(setStudentsState);
}
function handleSearch(e) {
  if (e.target.value.trim()==="") {
     setStudentsState(students);
  }
  else{
   let filteredStudents = studentsState.filter((student,idx)=>student.name.toLowerCase().trim().includes(e.target.value.toLowerCase().trim()));
   setStudentsState(filteredStudents);
  }
}
function handleDelete(id) {
  setStudentsState(studentsState.filter((stu)=>stu.id!==id));    
}


  return (
    <>


<h1>Students</h1>

<input onChange={(e)=>handleSearch(e)} placeholder='search student'/>
<button onClick={handleSort}>sort by age</button>
    <ul>
{studentsState.map((student,idx)=>{
    
    return <li key={idx}>{student.name},{student.age}{" "}
     <button onClick={()=>handleDelete(student.id)}>delete</button>
     <button >Done</button></li>
})}
    </ul>

    <h4>Add new Student</h4>
    <input name="name" value={student.name} onChange={(e)=>handleChange(e)} placeholder='name' type='text'/>
    <input name="age"  value={student.age} onChange={(e)=>handleChange(e)} placeholder='age' type='number' min="0" max="100"/>
<button onClick={handleAddStudent}>Add students</button>
  </>
  );
}

export default App;
