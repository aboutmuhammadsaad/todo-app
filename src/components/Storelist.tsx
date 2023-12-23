
"use client";
import React ,{useState} from 'react';
import {arr} from './Input-todos'

export default function Storelist(){
    const [clickedButton, setClickedButton] = useState('');
    const buttonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const button: HTMLButtonElement = e.currentTarget;
        setClickedButton(button.name);
        let n=Number(button.name);
        for(let i=0; i<arr.length; i++){
            if (arr[i].id==n){
                arr.splice(i,1);
                break;
            }
        }
        console.log("deleted", n);
    };
 
    return (
        <div className='bg-red-500 text-white  mt-4 '>
            <ul>
                {   
                    arr.map(t=>{
                        return(
                            <li key={t.id}>
                                <div className='flex'>
                                    <div className='w-5/6 py-2 px-3'>
                                        {t.dt}
                                    </div>
                                    <div className='w-1/6'>
                                        <button className='bg-blue-600 py-2 px-4' onClick={buttonHandler} name={t.id}>Del</button>
                                    </div>
                                </div>
                            </li>
                        );

                    })
                }
            </ul>    
        </div>
    )   
}

