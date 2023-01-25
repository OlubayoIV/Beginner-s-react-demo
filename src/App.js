import React, { Component } from 'react'
import Table from './Table'
import './index.css'

class App extends Component {
    render() {
        const characters = [
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
        ]

        return (
            <div className='container'>
                <Table charactersData={characters}/>
            </div>
        )
    }
}

export default App