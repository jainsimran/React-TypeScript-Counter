import * as React from 'react';

// interface for props
interface Props{
    day: number;
}

// returning days by passing props
const day: React.FunctionComponent<Props> = (props) => {
    return(
        <h1> Day: {props.day}</h1>
    )
};

export default day;