import React, { Component } from 'react'
import Table from './Table'
import './index.css'

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
        characters: [
            {
                name: 'Ayo',
                job: 'Software Engineer',
            },
            {
                name: 'Bridget',
                job: 'Nurse',
            },
            {
                name: 'Vad',
                job: 'Vetenary Doctor',
            },
            {
                name: 'Cynthia',
                job: 'Nurse',
            },
            {
                name: 'Mardochee',
                job: 'Pilot',
            },
            {
                name: 'Peace',
                job: 'Laboratory Scientist',
            },
        ],
        
    }
    render() {
        const {characters} = this.state

        return (
            <div className='container'>
                <Table charactersData={characters} removeCharacter={this.removeCharacter} />
            </div>
        )
    }
}

export default App