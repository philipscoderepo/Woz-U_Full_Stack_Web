import React from 'react';
import { render } from "react-dom";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

//API to pull images from
let APIurl = 'https://jsonplaceholder.typicode.com/photos';

class App extends React.Component {
    //Store pictures and errors
    state = {
        pictures: [],
        errors: null
    };

    componentDidMount(){
        fetch(APIurl)
            .then(rep => rep.json())
            .then(payload => {
                let first50Pictures = payload.filter((i, index) => index < 50);
                console.log(first50Pictures);
                this.setState({pictures: first50Pictures})
            })
            .catch(err => this.setState({error: err}));
    }

    render(){
        return(
            <div style={styles}>
                {this.state.pictures.map(pic => (
                    <img key={pic.id} src={pic.thumbnailUrl} alt={pic.title}/>
                ))}
            </div>
        );
    }
}

render(<App />, document.getElementById("root"));