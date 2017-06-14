import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actions } from '../modules';
import ModalNumbers from '../components/ModalNumbers'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const mapStateToProps = ( state ) => {
    return {...state};
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalNumbers);