/**
 * Created by nikita on 14.06.17.
 */
import React from 'react'
import ModalApp from '../containers/ModalApp';
class Wrapper extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		};
		this.onClose = this.onClose.bind(this)
	}
	onClose () {
		console.log('SetState');
		this.setState({isOpen:!this.state.isOpen})
	}
	render() {
		return (
			<div>
				<button onClick={this.onClose}>Open modal</button>
				<ModalApp
					isOpen={this.state.isOpen}
					onClose={this.onClose}
				/>
			</div>
		)
	}
}

export default Wrapper;