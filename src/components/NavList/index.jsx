import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import MenuConfig from '../../config/menuConfig.js';
import './index.less';
const SubMenu = Menu.SubMenu;

export default class NavList extends React.Component {
  componentWillMount() {
    const menuTreeNodes = this.renderMenu(MenuConfig)
    this.setState({
      menuTreeNodes
    })
  }
  renderMenu = (data) => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            { this.renderMenu(item.children) }
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}>
        <NavLink to={'/admin' + item.key}>{item.title}</NavLink>
      </Menu.Item>
    })
  }
  render() {
    return (
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="logo"/>
          <span className="title">Manegaer</span>
        </div>
        <Menu theme="dark">
          { this.state.menuTreeNodes }
        </Menu>
      </div>
    )
  }
}