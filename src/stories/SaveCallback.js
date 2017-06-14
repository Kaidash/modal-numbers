/**
 * Created by nikita on 14.06.17.
 */
import React from 'react'
import ModalApp from '../containers/ModalApp';
class SaveCallback extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			data: []
		};
		this.onClose = this.onClose.bind(this);
		this.onSave = this.onSave.bind(this)
	}
	onClose () {
		this.setState({isOpen:!this.state.isOpen})
	}
	onSave(data) {
		console.log(data);
		this.setState({data: data})
	}
	render() {
		return (
			<div>
				<button onClick={this.onClose}>Open modal</button>
				<ModalApp
					isOpen={this.state.isOpen}
					onClose={this.onClose}
					onSave={this.onSave}
				/>
			</div>
		)
	}
}

export default SaveCallback;