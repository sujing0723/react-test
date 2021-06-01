import React, {Component} from 'react';
import { Menu, Row, Col } from 'antd';
import { 
  MailOutlined,
  PlusSquareOutlined,
  AlignLeftOutlined,
  BookOutlined,
  BellOutlined,
  CommentOutlined,
  UserOutlined,
  HomeOutlined,
  SettingFilled,
  SoundOutlined
} from '@ant-design/icons';

export class HeaderComponent extends Component {
  state = {
    current: 'home',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Row className="header">
        <Col span={8} className="title">
          <span className="title-content">这是title</span>
        </Col>
        <Col span={16}>
          <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="home" icon={<MailOutlined />}>
              博客首页
            </Menu.Item>
            <Menu.Item key="add" icon={<PlusSquareOutlined />}>
              新建博客
            </Menu.Item>
            <Menu.Item key="list" icon={<AlignLeftOutlined />}>
              博客一览
            </Menu.Item>
            <Menu.Item key="recommend" icon={<BookOutlined />}>
              博客推荐
            </Menu.Item>
            <Menu.Item key="news" icon={<SoundOutlined />}>
              资讯
            </Menu.Item>
            {/* <Menu.Item key="contact" icon={<IdcardOutlined />}>
              联系我
            </Menu.Item> */}
            <Menu.Item key="message" icon={<CommentOutlined />}>
              留言
            </Menu.Item>
            <Menu.Item key="message2" icon={<UserOutlined />} style={{float: 'right'}}>
            </Menu.Item>
            <Menu.Item key="message1" icon={<BellOutlined />} style={{float: 'right'}}>
            </Menu.Item>
          </Menu>
          {/* <HomeOutlined />
          <SettingFilled /> */}
        </Col>
      </Row>
    );
  }
}