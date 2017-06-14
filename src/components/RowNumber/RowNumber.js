import React from 'react';
import PropTypes from 'prop-types';
import {SelectField, FloatingActionButton, TextField } from 'material-ui';
import MenuItem from 'material-ui/MenuItem';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import './RowNumber.scss'

export default class RowNumber extends React.Component {
    static propTypes = {
        row: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired,
        setModalSelectItem: PropTypes.func,
        setModalInputItem: PropTypes.func,
        removeRow: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.onChangeSelect = this.onChangeSelect.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
    }

    onChangeSelect (event, index, value) {
        this.props.setModalSelectItem({value: value, key: this.props.index})
    }
    onChangeInput (event) {
        this.props.setModalInputItem({value: event.target.value, key: this.props.index})
    }
    render() {
        return (
            <div className="number-row" >
                <SelectField
                    value={this.props.row.selectActiveItem}
                    className="select-type"
                    onChange={this.onChangeSelect}

                >
                    {this.props.row.selectItems.map((selectItem, selectIndex)=> {
                        return <MenuItem value={selectIndex + 1} primaryText={selectItem}/>

                    })}
                </SelectField>
                <div className="number-input-container">
                    <TextField
                        defaultValue={this.props.row.number}
                        onChange={this.onChangeInput}
                        type='number'
                    />
                </div>
                <FloatingActionButton className='delete-row-btn' secondary={true} mini={true}
                                      onClick={() => this.props.removeRow(this.props.index)}>
                    <NavigationClose style={{fill: '#e40c0c'}}/>
                </FloatingActionButton>
            </div>
        )
    }
}