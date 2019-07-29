import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon,Input,Tooltip,Dropdown,Avatar  } from 'antd';


const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" >
      Profile
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
        Setting
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
       Log out
      </a>
    </Menu.Item>
  </Menu>
);


class Headera extends Component {
      

  render() {
    return (
     
          <Header style={{ background: '#fff', padding: 0 }} >
            
            <Input 
              style={{marginLeft:1000,width:300}}        
                placeholder="Enter your username"             
                suffix={
                  <Tooltip title="Extra information">
                    <Icon type="search" style={{ color: 'rgba(0,0,0,.45)' }} />
                  </Tooltip>
                  }
                /> &nbsp;  &nbsp;
                <span>   &nbsp; &nbsp; &nbsp;
                    <Icon type="play-circle" />

                </span>  
                <span>   &nbsp;  &nbsp;
                      <Icon type="message" />
                </span>
              
                <span>   &nbsp;  &nbsp;
                <Icon type="notification" />
                </span>   
                <span>   &nbsp;  &nbsp;
                | &nbsp;  &nbsp;  
                </span>  

                <Dropdown overlay={menu}>
                  <a className="ant-dropdown-link"  >
                    Demo User <Icon type="down" />
                  </a>
                </Dropdown>

                <Avatar>USER</Avatar>
  
            </Header>
            
 
    );
  }
}


export default Headera;
