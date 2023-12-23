"use client";
import React,{useState} from 'react';
import Storelist from './Storelist';
type val={
    id:number;
    dt:string;
}
export let arr:val[]=[];
export default function inputlist(){
    const [value, setvalue] = useState(0);
    const [message, setMessage] = useState('');
    
    let addvalue=()=>{
        let val:val={
            id:value,
            dt:message
        }
        arr.push(val);
    }
    
    return (
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault();
                setvalue(value+1);
                addvalue();
                console.log(arr);
            }}>
                <input type="text" className='py-2 px-4 text-black' onChange={e=>setMessage(e.target.value)} value={message}/>
                <button type="submit" className='bg-blue-600 py-2 px-4 '>Add</button>
            </form>
            <Storelist />
        </div>
    );
}