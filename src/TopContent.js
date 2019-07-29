import React, {Component} from 'react';
import { connect } from './react-redux';

class TopContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div 
            style={{border: '1px solid red', width: '200px', height: '200px'}} >
            <h1>我是上面的</h1>
            <div>this is Btm div, </div>
            <div>my name is : <span>{this.props.name  || '空'} </span></div>
            <div>my age is : <span>{this.props.age || '0' }</span></div>
        </div>
    }
}


let mapStateToProps = (prevState) => {
    return {
        name: prevState.name,
        age: prevState.age
    }
}

TopContent = connect(mapStateToProps)(TopContent);
export default TopContent;