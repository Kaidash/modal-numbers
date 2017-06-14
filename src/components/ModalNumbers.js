import React from 'react'
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Dialog, FlatButton, RaisedButton, SelectField, MenuItem, FloatingActionButton } from 'material-ui';
import HeaderModal from './HeaderModal/HeaderModal'
import RowNumber from './RowNumber/RowNumber'
import './ModalNumbers.scss'

class ModalNumbers extends React.Component {
    static propTypes = {
        isOpen: PropTypes.bool,
        actions: PropTypes.object,
        onClose: PropTypes.func,
        onSave: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.saveInner = this.saveInner.bind(this);
    }

    componentDidMount() {
        if (!!this.props.isOpen) {
            this.props.actions.initialOpenModal(this.props.isOpen)
        }
        if (!!this.props.data) {
            this.props.actions.initialSetSelect(this.props.data)
        }
    }

    saveInner() {
        if (this.props.onClose && this.props.onSave) {
            this.props.onSave(this.props.modalReducer.modalItems);
            this.props.onClose()
        } else if (this.props.onSave) {
            this.props.onSave(this.props.modalReducer.modalItems);
            this.props.actions.openModal()
        } else {
            this.props.actions.openModal()
        }
    }

    render() {
        return (
            <MuiThemeProvider>
                <Dialog
                    modal={true}
                    open={this.props.isOpen === undefined ? this.props.modalReducer.isOpen : this.props.isOpen}
                >
                    <div className="modal-ui-inner">
                        <HeaderModal close={this.props.onClose ? this.props.onClose : this.props.actions.openModal}/>
                        <div className="select-container">
                            {
                                this.props.modalReducer.modalItems.map((item, index) => {
                                    return <div key={index}>
                                        <RowNumber row={item}
                                                   index={index}
                                                   setModalSelectItem={this.props.actions.setModalSelectItem}
                                                   setModalInputItem={this.props.actions.setModalInputItem}
                                                   removeRow={this.props.actions.removeRow}
                                        />
                                    </div>
                                })
                            }
                        </div>
                        <div className="add-row">
                            <FlatButton label="Добавить" primary={true} onClick={this.props.actions.addRow}/>
                        </div>
                        <RaisedButton label="Сохранить" primary={true} onClick={this.saveInner}/>
                        <FlatButton label="Отмена"
                                    onClick={()=>this.props.onClose() || this.props.actions.openModal() }/>
                    </div>
                </Dialog>
            </MuiThemeProvider>
        )
    }
}

export default ModalNumbers;