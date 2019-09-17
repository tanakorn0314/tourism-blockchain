import React from 'react';
import { Layout, Menu, Button } from 'antd';
import AuthModal from '../Shared/AuthModal';
import { connect } from 'react-redux';
import { AuthActions } from '../redux/auth/actions';

const { Header, Content, Footer } = Layout;

const MainLayout = (props) => {

    const handleLogout = () => {
        props.logout();
    }

    const unLogin = <AuthModal>Login</AuthModal>;
    const loggedin = (
        <div>
            <span style={{color: '#fff', marginRight: 5}}>{props.address}</span>
            <Button onClick={handleLogout}>Logout</Button>
        </div>
    )

    return (
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%', color: '#fff', display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ fontSize: 24, fontWeight: 600 }}>Blockchain</div>
                <div style={{ cursor: 'pointer' }}>
                    {/* {props.address === '' ? unLogin : loggedin} */}
                </div>
            </Header>
            <Content style={{ padding: '20px 50px', marginTop: 64, minHeight: 'calc(100vh - 128px)', background: '#fff' }}>
                {props.children}
            </Content>
            <Footer style={{ textAlign: 'center' }}>Tourism blockchain ©2019 Created by Tanakorn Karode</Footer>
        </Layout>
    )
}

export default connect(state => state.Auth, AuthActions)(MainLayout);