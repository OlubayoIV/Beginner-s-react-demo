import React, { Component } from 'react'
import Table from './Table'
import './index.css'
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

    render() {
        const {characters} = this.state

        return (
            <div className='container'>
                <Table charactersData={characters} removeCharacter={this.removeCharacter} />
                <Form />
            </div>
        )
    }
}

export default App