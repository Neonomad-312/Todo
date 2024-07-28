import React, { Component } from 'react'

export default class TodoSearch extends Component {
    state={
        activeButton: 'all'
    };
    btns=[
        {name: 'all', title:"All"},
        {name: 'active', title:"Active"},
        {name: 'done', title:"Done"},
    ];

    buttonClick = (name) => {
        this.setState({ activeButton: name });
        this.props.onSetStatus(name);
    }

    render() {
        const buttons=this.btns.map((el) => {
            const isActive = this.state.activeButton === el.name;
            const btnClass = isActive ? 'btn btn-info' : 'btn btn-outline-secondary';
            return (
                <button 
                    onClick={()=>this.buttonClick(el.name)}
                    key={el.title}
                    className={btnClass}>
                        {el.title}
                </button>
            )
        })
        return (
            <div className='d-flex justify-content-between'>
                <input 
                    value={this.props.searchText} 
                    onChange={this.props.onSetSearch} 
                    type="text" 
                    className='form-control flex-grow-1' />
                {buttons}

            </div>
        )
    }
}
