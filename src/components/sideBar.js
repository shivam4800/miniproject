import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu ,SidebarFooter,SidebarContent,SidebarHeader} from 'react-pro-sidebar'; //npm install react-pro-sidebar
import 'react-pro-sidebar/dist/css/styles.css';
import './sideBar.css';


class SideBar extends React.Component{
  
  render(){
    const icon=<i className="small home icon"></i>;
    const icon1=<i className="small clone icon"></i>;
    const arrow=<i className="angle right icon"></i>;
    return(
      <div className="border" >
        <ProSidebar >
          <Menu iconShape="circle">
            <MenuItem >ABC Games</MenuItem><br/>
            <MenuItem>
            <div className="ui icon input">
              <input type="text" placeholder="Search..." className="margin" style={{width:'30%'}}/>
              <i className="search icon"></i>
            </div>
            </MenuItem>
            
           <MenuItem icon={icon} >Home</MenuItem>
            <SubMenu title="Categories" icon={icon1}>
              <MenuItem  icon={arrow}>Action</MenuItem>
              <MenuItem icon={arrow}>Action</MenuItem>
              <MenuItem icon={arrow}>Action</MenuItem>
              <MenuItem icon={arrow}>Action</MenuItem>
            </SubMenu>
            <MenuItem icon={icon} >About</MenuItem>
            <MenuItem icon={icon} >Contact Us</MenuItem>
            
          </Menu>
          <SidebarFooter style={{marginTop:'270px'}}>
            <Menu iconShape="circle">
              <MenuItem icon={icon}>Signin</MenuItem>
            </Menu>
          </SidebarFooter>
          
        </ProSidebar>
        
        
      </div>
    );
  }

}

export default SideBar;