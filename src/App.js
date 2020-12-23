import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';
 import ListView  from './components/button/Button';
import 'antd/dist/antd.css';
import {
  Layout, Menu, Breadcrumb, Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  message,
  Table,
   Tag,
   Space,
   
} from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
const { TextArea } = Input;
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function App() {
  const [collapsed, setcollapsed] = useState(false)
  const onCollapse = collapsed => {
    setcollapsed(collapsed);
  };
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    console.log("size hit");
    setComponentSize(size);
  };

  const success = () => {
    message
      .loading('Action in progress..', 2.5)
      .then(() => message.success('Data submitted successfully.', 2.5))
      .then(() => message.info('Loading finished is finished', 2.5));
  };  
  return (
    <Layout style={{ minHeight: '100vh' }}>
      
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
        </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
        </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
        </Menu.Item>
        </Menu>
      </Sider>

      <Layout className="site-layout">

        <Header className="site-layout-background" style={{ padding: 0 }} />

        <Content style={{ margin: '0 16px' }}>

          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>

          <Form
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
            initialValues={{
              size: componentSize,
            }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
          >
            <Form.Item label="Form Size" name="size">
              <Radio.Group>
                <Radio.Button value="small">Small</Radio.Button>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="large">Large</Radio.Button>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="Input">
              <Input />
            </Form.Item>
            <Form.Item label="TextArea">
              <TextArea />
            </Form.Item>

            <Form.Item label="Select">
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label="TreeSelect">
              <TreeSelect
                treeData={[
                  {
                    title: 'Light',
                    value: 'light',
                    children: [
                      {
                        title: 'Bamboo',
                        value: 'bamboo',
                      },
                    ],
                  },
                ]}
              />
            </Form.Item>

            <Form.Item label="DatePicker">
              <DatePicker />
            </Form.Item>

            <Form.Item label="InputNumber">
              <InputNumber />
            </Form.Item>

            <Form.Item label="Switch">
              <Switch />
            </Form.Item>

            <Form.Item label="Button">
              <Button onClick={success}>Submit</Button>
            </Form.Item>

          </Form>
                <ListView />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Footer part</Footer>
      </Layout>

    </Layout>
  );
}

export default App;
