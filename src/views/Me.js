import React, {Component} from 'react'
import Button from '../components/Button/Button'

export default class Me extends Component {
    render() {
        return (
            <div className="container-fluid pr-5 pl-5 pt-2 h-100 text-center justify-content-center">
                <div className="card">
                    <p className='header-text'>
                        Me
                    </p>
                    <Button/>
                </div>
            </div>
        )
    }
}