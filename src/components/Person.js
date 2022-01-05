import React, { Component } from 'react'

export default class person extends Component {
    state={isVisible:false};

    todos= [ 
        'fullName:nizar h',
        'profession: developer ',
        'bio:mqfsdlkfjqsm'


    ]
    toggleVisibility= () => { 
     this.setState({
         isVisible : !this.state.isVisible
     })   
     }
    render() {
        return (
            <div>
                <button className='visibility btn' onClick={this.toggleVisibility}> {this.state.isVisible ? 'hide list':'show list'}  </button>
                {this.state.isVisible ?
                <ul className='list'>

                    { this.todos.map((todo, i) =>( 
                    <li key={i} > {todo}  </li> 
                    ))}
                </ul>  :( <h4> click on button to show list </h4>)
    }

            </div>
        )
    }
}

