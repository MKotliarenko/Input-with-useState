import React, {useState} from 'react';
import './App.css';
import UniInput from "./components/UniInput";

type stateMessageType ={
    message:string
}[]

function App() {
    let [message, setMessage]= useState<stateMessageType>([
        {message:'Message1'},
        {message:'Message2'},
        {message:'Message3'}
    ])
    const addMassage=(sms:string)=>{
        setMessage([{message:sms},...message])
    }

    return (
        <div>
            <UniInput addMassage={addMassage}/>
            {message.map((sms,index)=>{
                return (
                    <div key={index} style={{marginLeft:"40px"}}>
                        {sms.message}
                    </div>
                )
            })}
        </div>
    );
}

export default App;
