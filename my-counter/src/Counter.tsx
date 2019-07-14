import * as React from 'react';
import Year from './Year';
import Month from './Month';
import Day from './Day';

interface Props{}

// interface for state
interface State{
    year: number;
    month: number;
    day: number;
}

export default class Counter extends React.Component<Props, State>{
    state: State= {
        year: 1980,
        month: 6,
        day: 1
    }

    // function to increase year
    incrementYear = () => {
        this.setState({
            year:(this.state.year + 1)
        });
    }

     // function to decrease year
    decrementYear = () => {
        this.setState({
            year:(this.state.year - 1)
        });
    }

     // function to increase month
    incrementMonth = () => {
        this.setState({
            month:(this.state.month + 1)
        });
    }

    // function to decrease month
    decrementMonth = () => {
        this.setState({
            month:(this.state.month - 1)
        });
    }

     // function to increase day
    incrementDay = () => {
        this.setState({
            day:(this.state.day + 1)
        });
    }

    // function to decrease day
    decrementDay = () => {
        this.setState({
            day:(this.state.day - 1)
        });
    }

// rendering year, moth and day 
    render(){
        return(
            <section>
                <Year year={this.state.year} />
                <button onClick={this.incrementYear}>Increment</button>
                <button onClick={this.decrementYear}> Decrement </button>
                <Month month={this.state.month} />
                <button onClick={this.incrementMonth}>Increment</button>
                <button onClick={this.decrementMonth}> Decrement </button>
                <Day day={this.state.day} />
                <button onClick={this.incrementDay}>Increment</button>
                <button onClick={this.decrementDay}> Decrement </button>
            </section>
        )
    }
}