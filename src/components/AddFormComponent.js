import React from 'react';
class AddFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            todo: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({
            todo: e.target.value
        })
    }

    handleSubmit(){
        if(this.state.todo !== ''){
            this.props.addToDo({
                todo: this.state.todo, 
                status: 'unfinished',
                onUpdate: false,
                activePage: this.props.activePage
            })
        }
        this.setState({
            todo: ''
        })
    }
    render() {
        // console.log(this.props)
        return ( 
            <div className="addForm">
                <input className="form-input" autoFocus value={this.state.todo} onChange={(event) => this.handleChange(event)} placeholder="To do list..."/>
                <button className="form-submit" onClick={() => this.handleSubmit()}>add</button>
            </div>
         );
    }
}
 
export default AddFormComponent;