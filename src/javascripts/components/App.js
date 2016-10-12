import React from 'react'

import Leftside from './Leftside'
import Checkgroup from './Checkgroup'

import getMockData from '../getMockData'

class App extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            data: getMockData()
        }
    }

    render() {
        return (
            <Leftside>
                <Checkgroup data={this.state.data}/>
                <button 
                    style={{position:'fixed',top:20,left:450}}
                    onClick={() => this.setState({data: getMockData()})}
                >
                    切换数据
                </button>
            </Leftside>
        )
    }
}

export default App