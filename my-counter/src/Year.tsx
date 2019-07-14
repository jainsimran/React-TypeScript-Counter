import * as React from 'react';

// interface for year
interface Props{
    year: number;
}

// returing year by passing props
const year: React.FunctionComponent<Props> = (props) => {
    return(
        <h1> Year: {props.year}</h1>
    )
};

export default year;