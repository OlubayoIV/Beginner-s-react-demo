import React, { Component } from 'react';

class App extends Component {
    state = {
        data: [],
    }

//code is invoked after the component is mounted/inserted into the DOM true.
componentDidMount() {
    const url =
    'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'

    fetch(url)
        .then((result) => result.json())
        .then((result => {
            this.setState({
                data: result,
            })
        }))
}

render() {
    const { data } = this.state

    const result = data.map((entry, index) => {
        console.log(entry);
        return <li key = {index}>{entry}</li>
    })
    return <div className='container'><ul>{result}</ul>
    </div>
}
}

export default App