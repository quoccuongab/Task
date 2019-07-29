import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon,Input,Tooltip,Dropdown,Avatar  } from 'antd';
import SliderBar from './component/SliderBar';
import Headera from './component/Headera';
import Contenta from './component/Contenta';
import Footera from './component/Footera';


const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;



class App extends Component {
        state = {
          collapsed: false,
        };

        onCollapse = collapsed => {
          console.log(collapsed);
          this.setState({ collapsed });
        };
  

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
               <SliderBar/>

          <Layout>

               <Headera/>

               <Contenta/>

               <Footera/>
          
          
          </Layout>

      </Layout>
    );
  }
}


export default App;
