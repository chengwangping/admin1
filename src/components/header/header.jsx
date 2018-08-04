
import React, { Component } from 'react';
import { Menu, Layout } from 'antd';
// import screenfull from 'screenfull';
// import { gitOauthToken, gitOauthInfo } from '../../axios';
// import { queryString } from '../../utils';
// import avatar from '../../images/avatar.jpg';
// import './header.scss';

const { Header } = Layout;
const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

class HeaderCustom extends Component {
    state = {
        user: ''
    };
    componentDidMount() {
    };
    // screenFull = () => {
    //     if (screenfull.enabled) {
    //         screenfull.request();
    //     }

    // };
    menuClick = e => {
        console.log(e);
        e.key === 'logout' && this.logout();
    };
    logout = () => {
        localStorage.removeItem('user');
        this.props.router.push('/login')
    };
    render() {
        return (
            <Header className="custom-theme header" >
                {/* <Icon
                    className="trigger custom-trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.props.toggle}
                /> */}
                <Menu
                    mode="horizontal"
                    style={{ lineHeight: '64px', float: 'right' }}
                    className="header-user"
                    onClick={this.menuClick} >
                    {/* <Menu.Item key="full" onClick={this.screenFull} >
                        <Icon type="arrows-alt" onClick={this.screenFull} />
                    </Menu.Item>
                    <Menu.Item key="1">
                        <Badge count={25} overflowCount={10} style={{marginLeft: 10}}>
                            <Icon type="notification" />
                        </Badge>
                    </Menu.Item> */}
                    <SubMenu title={
                        <span className="avatar">
                            {/* <img src={avatar} alt="" /> */}
                        </span>} >
                        <Menu.Item key="setting:1">
                            你好 - {this.props.user.userName}
                        </Menu.Item>
                        <Menu.Item key="logout">
                            <span onClick={this.logout}>退出登录</span>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Header>
        )
    }
}

export default HeaderCustom;