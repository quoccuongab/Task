import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon,Input,Tooltip,Dropdown,Avatar  } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



class SliderBar extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  

  render() {
    return (
     

   <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" >S D M </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1s">
              <Icon type="home" />
              <span>Activity</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="bar-chart" />
              <span>Dashboard</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="project" />
              <span>Project</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="profile" />
              <span>Task</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="user" />
              <span>Member</span>
            </Menu.Item>
            <Menu.Item key="6">
              <Icon type="calendar" />
              <span>Calendar</span>
            </Menu.Item>
            <Menu.Item key="7">
            <Icon type="issues-close" />
              <span>Help center</span>
            </Menu.Item>
            <Menu.Item key="8">
              <Icon type="setting" />
              <span>Setting</span>
            </Menu.Item>
          </Menu>
        </Sider>
               
    );
  }
}


export default  SliderBar ;
