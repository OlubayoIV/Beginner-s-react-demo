import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
    removeCharacter = (index) => {
        const {characters} = this.state
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }

    state = {
        characters: [],

    }

    handleSubmit = (character) => {
        this.setState({ characters: [...this.state.characters, character] })
    }

    render() {
        const {characters} = this.state

        return (
            <div className='container'>
                <Table charactersData={characters} removeCharacter={this.removeCharacter} />
                <Form />

                <Form handleSubmit = {this.handleSubmit} />
            </div>
        );
    }
}

export default App