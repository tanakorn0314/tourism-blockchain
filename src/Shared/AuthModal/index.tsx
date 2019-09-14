import React, { useState } from 'react';
import { Modal, Input, Button, Tabs } from 'antd';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const { TabPane } = Tabs;

const AuthModal = props => {

    const [visible, setVisible] = useState(false);

    const showModal = () => { setVisible(true) };
    const hideModal = () => { setVisible(false) };

    return (
        <>
            <div style={{ cursor: 'pointer' }} onClick={showModal}>{props.children}</div>
            <Modal
                title="Authentication"
                visible={visible}
                footer={null}
                onCancel={hideModal}
            >
                {/* <Tabs defaultActiveKey="1">
                    <TabPane tab="Login" key="1">
                        <LoginForm submit={hideModal} cancel={hideModal} />
                    </TabPane>
                    <TabPane tab="Register" key="2">
                        <RegisterForm submit={hideModal} cancel={hideModal} />
                    </TabPane>
                </Tabs> */}
                <LoginForm submit={hideModal} cancel={hideModal} />
            </Modal>
        </>
    )
}

export default AuthModal;