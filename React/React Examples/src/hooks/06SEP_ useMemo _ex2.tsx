import { useState, useMemo } from "react";

const squareValue=(num:number):number=>{
    console.log("Calculating Square...");
    return num*num;
}

const SEP06HooksUseMemoEx2 = () => {
    const[count,setCount]=useState<number>(1);
    const[task,setTask]=useState<string[]>([]);

    // If count changes then only useMemo will be call this result function
    const result=useMemo(()=>squareValue(count),[count]);

    const taskAdd=()=>{
        console.log("Adding Task...");
        setTask([...task,"New Task Added"]);
    }

    return(
        <>
         <h3>Count : {count}</h3>
         <h3>Result Square : {result}</h3>
         <button onClick={()=>{setCount(count+1)}}>+</button>  
         <br></br>
         <button onClick={taskAdd}>ADDTASK</button> 
         <br></br>
         {
            task.length>0 && <ol>
                {
                    task.map((v)=>{ 
                        return <li>{v}</li>
                    })
                }
            </ol>
         }
        </>
    )
};

export default SEP06HooksUseMemoEx2;