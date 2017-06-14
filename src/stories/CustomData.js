/**
 * Created by nikita on 14.06.17.
 */
import React from 'react'
import ModalApp from '../containers/ModalApp';
class CustomData extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			data: [{
				selectActiveItem: 1,
				selectItems: ['Twin', 'Tripple', 'Quadro'],
				number: 22
			}, {
				selectActiveItem: 2,
				selectItems: ['Twin', 'Tripple', 'Quadro'],
				number: 12
			}, {
				selectActiveItem: 3,
				selectItems: ['Twin', 'Tripple', 'Quadro'],
				number: 4
			}]
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
					data={this.state.data}
					onClose={this.onClose}
					onSave={this.onSave}
				/>
			</div>
		)
	}
}
export default CustomData;