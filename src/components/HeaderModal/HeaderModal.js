import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import './HeaderModal.scss'

export const HeaderModal = ({ close }) => {
    return (
        <div className="header-modal">
            <h3 className="title-header">Структура номеров</h3>
            <IconButton className='close-btn' onClick={()=>close()}><NavigationClose /></IconButton>
        </div>
    )
};
HeaderModal.propTypes = {
    close: PropTypes.func
};

export default HeaderModal;
