import React, { Component } from "react";
import { Menu, Icon } from "antd";
import profil from "@/assets/images/logo.png";
import { Link } from "react-router-dom";
const SubMenu = Menu.SubMenu;

const Menus = ({ collapsed }) => {
  const handleSelect = e => {
    console.log(0);
  };

  const menuData = [
    { title: "影片", href: "/movie_home" },
    { title: "日志", href: "/movie_log" },
    { title: "爬虫", href: "/movie_crawler" }
  ];
  const menuLink = menus => {
    return menus.map(o => <Menu.Item key={o.href}><Link to={o.href} />{o.title}</Menu.Item>);
  };

  return (
    <div className="menu">
      <div className="profil">
        <div>
          <img src={profil} />
        </div>
        {!collapsed ? <span>来啦！厉害了唷！</span> : null}
      </div>
      <Menu
        style={{ border: "none" }}
        mode="inline"
        inlineCollapsed={collapsed}
        onSelect={handleSelect}
      >
        <SubMenu
          key="movie"
          title={
            <span>
              <Icon type="desktop" />
              <span>电影</span>
            </span>
          }
        >
          {menuLink(menuData)}
        </SubMenu>
      </Menu>
    </div>
  );
};

export default Menus;
