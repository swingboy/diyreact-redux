let initState = {
    name: 'zhangsan',
    age: 20
}

const reducer = (state, actionObj) => {
    if (!state) return {
        name: 'zhangsan',
        age: 20
    }

    switch (actionObj.type) {
      case 'CHANGE_AGE':
        return { ...state, age: actionObj.age }
      case 'CHANGE_NAME':
        return { ...state, name: actionObj.name, test: '1000' }
      default:
        return state
    }
}
export default reducer