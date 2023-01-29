import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'


class App extends Component {
    removeCharacter = (index) => {
        const {character} = this.state
        this.setState({
            character: character.filter((character, i) => {
                return i !== index
            }),
        })
    }

    state = {
        character: [],

    }

    handleSubmit = (character) => {
        this.setState({ character: [...this.state.character, character] })
    }

    render() {
        const {character} = this.state;

        return (
            <div className='container'>
                <h1>React Tutorial</h1>
                <p>Add any character with a name and a job to the table.</p>
                <Table 
                    characterData={character}
                    removeCharacter={this.removeCharacter}                       
                />
                <h3>A New</h3>
                <Form handleSubmit = {this.handleSubmit} />
            </div>
        );
    }
}

export default App