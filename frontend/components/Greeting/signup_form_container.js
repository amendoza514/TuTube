import { connect } from 'react-redux';
import SessionForm from './session_form';
import { sign_up } from '../../actions/session_actions';

const mapStateToProps = state => ({
    formType: 'signup',
    // errors: state.entities.errors.
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(sign_up(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)