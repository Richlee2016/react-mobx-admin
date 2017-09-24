import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import { Icon, Menu}  from 'antd'
import "./layout.less"

const SubMenu = Menu.SubMenu;

const Header = ({logout}) => {

    const handleClickMenu = (e) => {
        // if(e.key === 'logout'){
        //     logout();
        // };
        console.log(0);
    }

    return (
            <div className="header">
                <span className="fold"><Icon type="menu-fold" /></span>
                <div className="headerMenu">
                    <Menu
                    mode="horizontal"
                    onClick={handleClickMenu}
                    >
                        <SubMenu  key="sub1" title={<span><Icon type="user" /></span>}>
                            <Menu.Item key="logout">退出</Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
            </div>
        )
}

Header.PropTypes = {
    // logout:PropTypes.func
}

export default Header
