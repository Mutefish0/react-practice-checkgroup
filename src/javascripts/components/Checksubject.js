import React from 'react'

const Checkbox = ({checked=false}) => (
    <i className={'fa component-checkbox ' + (checked? 'fa-check-square': 'fa-square-o')}></i>
)

class Checkitem extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            checked: props.defaultProps
        }
    }

    static defaultProps = {
        defaultChecked: false,
        name: 'Item Name',
        amount: 0 
    }

    componentWillReceiveProps(props) {
        this.setState({checked: props.defaultChecked})
    }

    render() {
        let props = this.props 
        return (
            <div className="component-checkitem">
                <span className="check-box" 
                    onClick={() => this.setState({checked: !this.state.checked})}
                >
                    <Checkbox checked={this.state.checked} />
                </span>
                <span 
                    className={'item-name ' +(this.state.checked? 'component-checkitem-active': '')}
                >
                    { props.name }
                </span>
                <span className="amount">{ props.amount }</span>
            </div>
        )
    }
}

class Checksubject extends React.Component {

    constructor(props) {
        super(props)
        this.amount = this.props.data.items.reduce((pre, cur) => pre + cur.amount, 0)
        this.state = {
            checked: this.props.defaultChecked
        }   
    }

    static defaultProps = {
        defaultChecked: false
    }

    componentWillReceiveProps(props) {
        this.amount = props.data.items.reduce((pre, cur) => pre + cur.amount, 0)
        this.setState({checked: props.defaultChecked})   
    }

    render() {
        let data = this.props.data
        return (
            <div className="component-checksubject">
                <div className="title">
                    <span 
                        className="check-box"
                        onClick={() => this.setState({checked: !this.state.checked})}
                    >
                        <Checkbox checked={this.state.checked} />
                    </span>
                    <span className="subject-name">{ data.subjectName }</span>
                    <span className="amount">{ this.amount }</span>
                </div>
                <div className='item'>
                    { 
                        data.items.map((item, index) =>
                            <Checkitem 
                                key={index} 
                                name={item.itemName} 
                                amount={item.amount} 
                                defaultChecked={this.state.checked}
                            />
                        )
                    }
                </div>
            </div>
        )
    }

}

export default Checksubject