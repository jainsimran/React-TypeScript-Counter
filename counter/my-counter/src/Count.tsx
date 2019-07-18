import * as React from 'react';

// interface for props
interface Props{
    titleName: number;
    title: string;
    increment(): void;
    decrement(): void;
}

// day counter functional component
const Count: React.FunctionComponent<Props> = (props) => {
    return(
        <section>
            <h1> {props.title}: {props.titleName}</h1>
            <button onClick={props.increment}>Increment</button>
            <button onClick={props.decrement}> Decrement </button>
        </section>
        
    )
};

export default Count;