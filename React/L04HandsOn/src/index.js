import React from 'react';
import ReactDOM from 'react-dom';

const App = props =>{
    return(
        <NumberOfStudents />
    );
};

class NumberOfStudents extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            enrolledStudents: 87,
            addAmountEnrolled: 1,
            waitlistedStudents: 8,
            addAmountWaitlisted: 1
        };
    }

    incrementEnrolledByOne(){
        this.setState({
            enrolledStudents: this.state.enrolledStudents + 1
        });
    }

    incrementEnrolledByInput(){
        this.setState({
            enrolledStudents: this.state.enrolledStudents + parseInt(this.state.addAmountEnrolled)
        });
    }

    incrementWaitlistedByOne(){
        this.setState({
            waitlistedStudents: this.state.waitlistedStudents + 1
        });
    }

    incrementWaitlistedByInput(){
        this.setState({
            waitlistedStudents: this.state.waitlistedStudents + parseInt(this.state.addAmountWaitlisted)
        });
    }

    render(){
        return(
            <div>
                <h1>Enrolled Students: {this.state.enrolledStudents}</h1>
                <button onClick={this.incrementEnrolledByOne.bind(this)}>Add 1 Enrolled Student</button>
                <h2>Add Multiple Enrolled Students:</h2>
                <input
                    type="number"
                    onChange={event => this.setState({ addAmountEnrolled: event.target.value })}
                    value={this.state.addAmountEnrolled}
                />
                <button onClick={this.incrementEnrolledByInput.bind(this)}>Increase Students</button>
                
                <h1>Waitlisted Students: {this.state.waitlistedStudents}</h1>
                <button onClick={this.incrementWaitlistedByOne.bind(this)}>Add 1 Waitlisted Student</button>
                <h2>Add Multiple Waitlisted Students:</h2>
                <input
                    type="number"
                    onChange={event => this.setState({ addAmountWaitlisted: event.target.value })}
                    value={this.state.addAmountWaitlisted}
                />
                <button onClick={this.incrementWaitlistedByInput.bind(this)}>Increase Students</button>
            </div>
        );
    }
}

ReactDOM.render(
    <App />, document.getElementById('root')
);
