import React, {Component} from 'react';
import { connect } from './react-redux';

class BtmContent extends Component {
    constructor(props) {
        super(props);
    }

    // 点击底部的名字
    clickBtmMyName = () => {
        this.props.onChangeName('wangwu' + Math.floor(Math.random() * 100));
    }

    clickBtmMyAge = () => {
        this.props.onChangeAge(Math.ceil(Math.random() * 100));
    }

    render() {
        return <div 
            style={{border: '1px solid red', width: '200px', height: '200px'}} >
            <h1>我是下面的</h1>
            <div>this is Btm div, </div>
            <div>my name is : <span>{this.props.name  || '空'} </span></div>
            <div>my age is : <span>{this.props.age || '0' }</span></div>

            <br/>
            <div onClick={this.clickBtmMyName}>点击切换姓名</div>
            <div onClick={this.clickBtmMyAge}>点击切换年龄</div>
        </div>
    }
}

let mapStateToProps = (prevState) => {
    return {
        name: prevState.name,
        age: prevState.age
    }
}

let mapStateToDispatch = (dispatch) => {
    return { 
        onChangeName: (name) => {
            dispatch({ type: 'CHANGE_NAME', name: name })
        },
        onChangeAge: (age) => {
            debugger;
            dispatch({type: 'CHANGE_AGE', age})
        }
    }
}
export default connect(mapStateToProps, mapStateToDispatch)(BtmContent);