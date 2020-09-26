import React from 'react';
import AddFormComponent from './AddFormComponent'
import '../style/homePage/item-todo.scss'
import ToolsBar from './ToolsBarComponent';

class HomeComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            items: []
        }
        this.handleChangeStatus = this.handleChangeStatus.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleChangeTodo = this.handleChangeTodo.bind(this)
        this.handleChangeUpdate = this.handleChangeUpdate.bind(this)
        this.submitChangeTodo = this.submitChangeTodo.bind(this)
    }
    componentDidMount() {
        //update state by recieve data from localState
        const data = JSON.parse(localStorage.getItem('myData'));
        if(data !== null && data !== undefined){
            this.setState({
                items: [...data]
            })
        }else{
            this.setState({
                item: []
            })
        }
        
    }
    componentDidUpdate(prevProps, prevState) {
        //sent data to localStorage
        localStorage.setItem('myData', JSON.stringify(this.state.items))
    }
    handleChangeStatus(item){
        if(item.status === 'unfinished' && item.onUpdate === false){
            this.props.changeStatus({
                ...item, 
                status: 'finished', 
                activePage: this.props.activePage
            })
        }else{
            this.props.changeStatus({
                ...item, 
                status: 'unfinished', 
                activePage: this.props.activePage
            })
        }
    }
    handleDelete(data,key){
        this.props.deleteToDo({id: data.id, activePage: this.props.activePage});
        const itemsUpdate = this.state.items;
        //create unique
        const uniqueKey = data.todo + '_' + key;
        // finding the index of item we wanna edit
        const indexItem = itemsUpdate.findIndex(i => i.key === uniqueKey);

        //remove this item from state
        itemsUpdate.splice(indexItem,1)
        this.setState(itemsUpdate)
    }
    handleChangeTodo(data,key){
        const uniqueKey = data.todo + '_' + key;
        this.props.statusUpdate({
            ...data,
            onUpdate: true,
            status: 'unfinished',
            activePage: this.props.activePage
        });
        this.setState({
            items:[...this.state.items,{id: data.id, todo: data.todo, key: uniqueKey}]
        })
    }
    handleChangeUpdate(event,key){
        //make a short name of syntax
        const itemsUpdate = this.state.items;
        // finding the index of item we wanna edit
        const indexItem = itemsUpdate.findIndex(i => i.key === key);
        // creating another short name of syntax (this.state.items)
        let items = [...itemsUpdate];
        //finding exact item 
        let item = {...items[indexItem]};
        //update element todo in this item
        item.todo = event.target.value;
        //update this item 
        items[indexItem] = item;
        //update new state
        this.setState({items});

    }
    submitChangeTodo(data,key){
        const uniqueKey = data.todo + '_' + key;
        let items = this.state.items;
        let indexItem = items.findIndex(i => i.key === uniqueKey);
        let item = items[indexItem];
        //sent request update to server
        this.props.itemUpdate({
            id: data.id,
            todo: item.todo,
            status: 'unfinished',
            onUpdate: false,
            activePage: this.props.activePage
        })
        //remove this item which was being send
        items.splice(indexItem,1)
        this.setState(items)
    }
    render() {
        const itemsUpdate = this.state.items;
        const bgFinish = {
            background: 'azure'
        }
        const colorToDo = {
            color: '#5C6BC0',
            fontWeight: 200
        }
        console.log(this.props.activePage)
        return (
            <div>
                {/* add form */}
                <AddFormComponent {...this.props}/>
                {/* paginate buttons */}
                <ToolsBar {...this.props}/>
                {/* display result */}
                {this.props.listToDo  !== undefined && this.props.listToDo?
                    this.props.listToDo.map((item, key) => {
                        const uniqueKey = item.todo + '_' + key;
                    return (
                        // check status
                        item.status === "unfinished"?
                            <div key={uniqueKey} className="item-todo">
                                {/* can't change status item todo if on updating */}
                                <div className="item-data" onClick={() => this.handleChangeStatus(item)}>
                                    <i className="far fa-circle"></i>
                                    <p>{item.todo}</p>
                                    <input
                                        //find item base on index of item which in state
                                        value={
                                            itemsUpdate.findIndex(item => item.key === uniqueKey) !== -1 ?
                                                itemsUpdate[itemsUpdate.findIndex(item => item.key === uniqueKey)].todo
                                            :
                                                ''
                                        } 
                                        className={item.onUpdate?
                                                'edit-form'
                                            :
                                                'edit-form-hidden'
                                        }
                                        onChange={(event) => this.handleChangeUpdate(event,uniqueKey)}
                                    />
                                </div>
                                <div className="tools">
                                    {/* 
                                    _ If item on status UPDATE, icon DELETE would be disappeared 
                                    _ Icon SUBMIT would be appeared
                                    */}
                                    {item.onUpdate?
                                        <i className="fas fa-check-double" style={{'color' : '#8BC34A'}} onClick={() => this.submitChangeTodo(item,key)}></i>
                                    :
                                    <div style={{display: 'flex'}}>
                                        <i className="fas fa-pencil-alt" onClick={() => this.handleChangeTodo(item,key)}></i>
                                        <i className="fas fa-minus-circle" onClick={() => this.handleDelete(item, key)}></i>
                                    </div>
                                    }
                                </div>
                            </div>
                        :
                        // if todo item finished, the tool edit wouldn't be appear
                            <div key={uniqueKey} className="item-todo" style={bgFinish}>
                                <div className="item-data" onClick={() => this.handleChangeStatus(item)}>
                                    <i className="fas fa-check-circle" style={colorToDo}></i>
                                    <p style={colorToDo}>{item.todo}</p>
                                </div>
                                <div className="tools">
                                    <i className="fas fa-minus-circle delete-icon" onClick={() => this.handleDelete(item, key)}></i>
                                </div>
                            </div>
                    )})
                :
                    null
                }
            </div>
         );
    }
}
export default HomeComponent;