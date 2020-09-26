import React from 'react';
class ToolsBar extends React.Component {
    render() {
        let paginateButtons = [];
        let optionTimer = {
            weekday: 'long', 
            year: 'numeric', 
            month: 'numeric', 
            day: 'numeric'
        };
        for(let i = 1; i <= this.props.totalPage; i++){
            paginateButtons.push(i)
        }
        console.log(this.props.totalPage)
        return ( 
            <div className="toolsBar">
                <div>
                    {
                        this.props.totalPage >= 1? 
                            paginateButtons.map((i,key) => {
                                if(this.props.activePage === i){
                                    console.log(this.props.activePage, i)
                                    return <button key={key} className="paginateButton active">{i}</button>
                                }else{
                                    return <button key={key} className="paginateButton" onClick={() => this.props.paginateLoad(i)}>{i}</button>
                                }
                            })
                        :
                            null
                    }
                </div>
                <div className="timer">
                <p>Today: {new Date().toLocaleString('VN-vn',optionTimer)}</p>
                </div>
            </div>
         );
    }
}
 
export default ToolsBar;