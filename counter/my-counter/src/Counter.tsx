import * as React from 'react';
import Count from './Count';

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
                <Count 
                 titleName={this.state.year} 
                 title="Year"
                 increment={this.incrementYear} 
                 decrement={this.decrementYear}
                />

                <Count
                 titleName={this.state.month} 
                 title="Month"
                 increment={this.incrementMonth} 
                 decrement={this.decrementMonth}
                />

                <Count titleName={this.state.day} 
                 title="Day"
                 increment={this.incrementDay}
                 decrement={this.decrementDay}
                />
                
            </section>
        )
    }
}