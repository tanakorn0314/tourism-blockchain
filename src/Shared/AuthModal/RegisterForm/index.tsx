import React, { useState } from 'react';
import { Input, Button, Select } from 'antd';
import { useFormInput } from '../../../hook/useFormInput';

const { Option } = Select;

const RegisterForm = props => {
    const name = useFormInput('');
    const [position, setPosition] = useState('tourist');

    const handleSubmit = () => {

        props.submit && props.submit();
    }

    const handleCancel = () => {

        props.cancel && props.cancel();
    }

    return (
        <div>
            <Input placeholder='name' {...name} style={{ width: 200, margin: '0 10px 10px 0' }}></Input>
            <Select defaultValue='tourist' onChange={(value) => { setPosition(value) }} style={{ width: 100 }}>
                <Option value='guide'>Guide</Option>
                <Option value='tourist'>Tourist</Option>
            </Select>
            <div style={{ display: 'flex' }}>
                <Button type='primary' style={{ marginRight: 5 }}>Register</Button>
                <Button >Cancel</Button>
            </div>
        </div>
    )
}

export default RegisterForm;