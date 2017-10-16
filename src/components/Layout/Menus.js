import React, { Component } from "react";
import { Menu, Icon } from "antd";
import profil from "@/assets/images/logo.png";
import { Link } from "react-router-dom";
const SubMenu = Menu.SubMenu;

const Menus = ({ collapsed, menus }) => {
  const handleSelect = e => {
    console.log(0);
  };
  const MenuJsx = menus =>
    menus.map(m => (
      <SubMenu
        key={m.name}
        title={
          <span>
            <Icon type={m.icon} />
            <span>{m.title}</span>
          </span>
        }
      >
        {m.navs.map(n => (
          <Menu.Item key={n.href}>
            <Link to={n.href}>
              <Icon type={n.icon} />
              {n.title}
            </Link>
          </Menu.Item>
        ))}
      </SubMenu>
    ));

  return <div className="menu">
      <div className="profil">
        <div>
          <img src={profil} />
        </div>
        {!collapsed ? <span>来啦！厉害了唷！</span> : null}
      </div>
      <Menu style={{ border: "none" }} mode="inline" inlineCollapsed={collapsed} onSelect={handleSelect}>
        {MenuJsx(menus)}
      </Menu>
    </div>;
};

export default Menus;
