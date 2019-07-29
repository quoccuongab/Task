import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon,Input,Tooltip,Dropdown,Avatar  } from 'antd';


const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;



class Footera extends Component {
   
  

  render() {
    return (   
           
       <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          
 
    );
  }
}


export default Footera;
