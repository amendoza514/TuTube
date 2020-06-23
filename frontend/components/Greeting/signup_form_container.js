import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signUp } from '../../actions/session_actions';

const mapStateToProps = state => ({
    formType: 'signup',
    // errors: state.entities.errors.
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(signUp(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)