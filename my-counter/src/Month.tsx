import * as React from 'react';

// interface for props
interface Props{
    month: number;
}

// returning month by passing props
const month: React.FunctionComponent<Props> = (props) => {
    return(
        <h1> Month: {props.month}</h1>
    )
};

export default month;