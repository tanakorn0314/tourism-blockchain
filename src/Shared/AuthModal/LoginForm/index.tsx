import { Input, Button } from "antd";
import { useFormInput } from "../../../hook/useFormInput";
import { connect } from "react-redux";
import { AuthActions } from "../../../redux/auth/actions";

const LoginForm = props => {
    const name = useFormInput('');

    const handleSubmit = () => {
        props.login(name.value);
        props.submit && props.submit();
    }

    const handleCancel = () => {
        props.cancel && props.cancel();
    }

    return (
        <div>
            <Input placeholder='address' {...name} style={{ width: 200, margin: '0 10px 10px 0' }}></Input>
            <div style={{ display: 'flex' }}>
                <Button style={{ marginRight: 5 }} type='primary' onClick={handleSubmit}>Login</Button>
                <Button onClick={handleCancel}>Cancel</Button>
            </div>
        </div>
    )
}


export default connect(state => ({}), AuthActions)(LoginForm);