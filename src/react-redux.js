import React, { Component } from 'react'
import PropTypes from 'prop-types';

const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
	class Connect extends Component {
        
        // 子child 需要 contextTypes
		static contextTypes = {
			store: PropTypes.object
		}

		constructor() {
			super()
			this.state = {
				allOfTheProps: {}
			}
		}
		componentWillMount() {
			const { store } = this.context;
			this.updateProps()
			store.subscribe(() => this.updateProps());
		}

		updateProps() {
			const { store } = this.context
			let stateProps = mapStateToProps ? mapStateToProps(store.getState(), this.props) : {} 
			let dispatchProps = mapDispatchToProps ? mapDispatchToProps(store.dispatch, this.props) : {}
			this.setState({
				allOfTheProps: {
					...stateProps,
					...dispatchProps,
					...this.props
				}
			})
		}

		render() {
			return <WrappedComponent {...this.state.allOfTheProps} />
		}
	}

	return Connect;
}

class Provider extends Component {
	static propTypes = {
		store: PropTypes.object,
		children: PropTypes.any
	}

    // 这里用react 的context 来实现
	static childContextTypes = {
		store: PropTypes.object
	}

	getChildContext() {
		return {
			store: this.props.store
		}
	}

	render() {
		return (
			<div>{this.props.children}</div>
		)
	}
}

export {
    connect, Provider
}