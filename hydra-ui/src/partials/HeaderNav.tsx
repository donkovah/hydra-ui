import { Layout, Menu, Breadcrumb, ConfigProvider, ThemeConfig, theme, Avatar, MenuProps } from 'antd';
import React from 'react';

const { Header, Content, Footer, Sider } = Layout;

const HeaderNav: React.FC = () => {
  return (
    <>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" style={{height:"64px", display:"flex"}}>
        <img src='/logo.png' style={{width:"120px", height:"auto"}}></img>
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{display:"flex", justifyContent:"flex-end", width:"100%"}}>
        <Menu.Item key="1" className='ant-menu-item-selected-nav'>Global</Menu.Item>
        <Menu.Item key="2">Prod</Menu.Item>
        <Menu.Item key="3">UAT</Menu.Item>
        <Menu.Item key="4">DEV</Menu.Item>
        </Menu>
      </Header>

    </>
  )
};

      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" style={{height:"64px", display:"flex"}}>
        <img src='logo.png' style={{width:"120px", height:"auto"}}></img>
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{display:"flex", justifyContent:"flex-end", width:"100%"}}>
        <Menu.Item key="1" className='ant-menu-item-selected-nav'>Global</Menu.Item>
        <Menu.Item key="2">Prod</Menu.Item>
        <Menu.Item key="3">UAT</Menu.Item>
        <Menu.Item key="4">DEV</Menu.Item>
        </Menu>
      </Header>
export default HeaderNav;
