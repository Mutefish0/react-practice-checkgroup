/**
 * 主要组件
 */

import React from 'react'

import Checksubject from './Checksubject'

class Checkgroup extends React.Component {
    
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        width: 350
    }

    render() {
        let props = this.props, data = props.data
        return (
            <div className="component-checkgroup" style={{width: props.width}} >
                <div className="title">
                    <span className="group-name">{ data.groupName }</span>
                    <span className="clear-all" onClick={() => this.forceUpdate()}>
                        清空
                    </span>
                </div>
                <div className="subject">
                    { data.subjects.map((subject, index) => <Checksubject defaultProps="false" key={index} data={subject}/>) }
                </div>
            </div>
        )
    }
}

export default Checkgroup 