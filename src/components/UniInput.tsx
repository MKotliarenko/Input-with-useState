import React, {ChangeEvent, useState} from 'react';

type massagePropsType = {
    addMassage: (sms: string) => void
}
const UniInput = (props: massagePropsType) => {
    let [title, setTitle] = useState<string>("")

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)

    }
    const onclickButton = (massage: string) => {
        props.addMassage(massage)
        setTitle('')
    }


    return (
        <>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={() => onclickButton(title)}>+</button>
        </>
    );
};

export default UniInput;