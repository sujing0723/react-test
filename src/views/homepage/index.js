import React, {Component} from 'react';
import { Card, Col, Row, Avatar  } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, LikeOutlined, MinusOutlined } from '@ant-design/icons';
import './index.css'

const { Meta } = Card;

const rankingList = [
  {
    icon: 'icon-1_square_solid',
    desc: '排行第一'
  },
  {
    icon: 'icon-2_square_solid',
    desc: '排行第二'
  },
  {
    icon: 'icon-3_square_solid',
    desc: '排行第三'
  },
  {
    icon: 'icon-4_square_solid',
    desc: '排行第四'
  },
  {
    icon: 'icon-5_square_solid',
    desc: '排行第五'
  },
  {
    icon: 'icon-6_square_solid',
    desc: '排行第六'
  },
  {
    icon: 'icon-7_square_solid',
    desc: '排行第七'
  }
]

export class Homepage extends Component {
  render () {
    return (
      <div className="content">
        <Row>
          <Col span={18}>
            <div>
              <Card
                title="博客推荐"
                // extra={<a href="#"></a>}
                bordered={false}
                style={{color: '#1890ff'}}
              >
                <div className="site-card-wrapper">
                  <Row gutter={16}>
                    <Col span={8}>
                      <Card
                        style={{ width: 250 }}
                        cover={
                          <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                          />
                        }
                        actions={[
                          // <SettingOutlined key="setting" />,
                          <LikeOutlined  key="fabulous" />,
                          <EllipsisOutlined key="ellipsis" />,
                        ]}
                      >
                        <Meta
                          title="Card title"
                          description="This is the description"
                        />
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Card
                        style={{ width: 250 }}
                        cover={
                          <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                          />
                        }
                        actions={[
                          // <SettingOutlined key="setting" />,
                          <LikeOutlined  key="fabulous" />,
                          <EllipsisOutlined key="ellipsis" />,
                        ]}
                      >
                        <Meta
                          title="Card title"
                          description="This is the description"
                        />
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Card
                        style={{ width: 250 }}
                        cover={
                          <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                          />
                        }
                        actions={[
                          // <SettingOutlined key="setting" />,
                          <LikeOutlined  key="fabulous" />,
                          <EllipsisOutlined key="ellipsis" />,
                        ]}
                      >
                        <Meta
                          title="Card title"
                          description="This is the description"
                        />
                      </Card>
                    </Col>
                    <Col span={8} className="recommend-blog-card">
                      <Card
                        style={{ width: 250 }}
                        cover={
                          <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                          />
                        }
                        actions={[
                          // <SettingOutlined key="setting" />,
                          <LikeOutlined  key="fabulous" />,
                          <EllipsisOutlined key="ellipsis" />,
                        ]}
                      >
                        <Meta
                          title="Card title"
                          description="This is the description"
                        />
                      </Card>
                    </Col>
                    <Col span={8} className="recommend-blog-card">
                      <Card
                        style={{ width: 250 }}
                        cover={
                          <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                          />
                        }
                        actions={[
                          // <SettingOutlined key="setting" />,
                          <LikeOutlined  key="fabulous" />,
                          <EllipsisOutlined key="ellipsis" />,
                        ]}
                      >
                        <Meta
                          title="Card title"
                          description="This is the description"
                        />
                      </Card>
                    </Col>
                    <Col span={8} className="recommend-blog-card">
                      <Card
                        style={{ width: 250 }}
                        cover={
                          <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                          />
                        }
                        actions={[
                          // <SettingOutlined key="setting" />,
                          <LikeOutlined  key="fabulous" />,
                          <EllipsisOutlined key="ellipsis" />,
                        ]}
                      >
                        <Meta
                          title="Card title"
                          description="This is the description"
                        />
                      </Card>
                    </Col>
                  </Row>
                </div>
              </Card>
            </div>
            <div style={{marginTop: '15px'}}>
              <Card
                title="热门话题"
                // extra={<a href="#"></a>}
                bordered={false}
                style={{color: '#1890ff'}}
              >
                
              </Card>
            </div>
          </Col>
          <Col span={6} style={{marginLeft: '15px'}}>
            <div>
              <Card bordered={false}>
                <span className="ranking-title">——— 排行 ———</span>
                <div>
                  {
                    rankingList.map((item, index) => {
                      let iconClassName = '';
                      iconClassName = 'iconfont ' + item.icon + ' iconfont-top-three';
                      return (
                        <div className="ranking-list" key={index}>
                          <i className={iconClassName}></i>
                          <span className="list-font">{item.desc}</span>
                        </div>
                      )
                    })
                  }
                  {/* <div className="ranking-list">
                    <i className="iconfont icon-1_square_solid iconfont-top-three"></i>
                    <span className="list-font">排行第一第一...</span>
                  </div> */}
                </div>
              </Card>
            </div>
            <div style={{marginTop: '15px'}}>
              <Card bordered={false}>
                <span className="ranking-title">——— 软件推荐 ———</span>
                <div>
                  {
                    rankingList.map((item, index) => {
                      let iconClassName = '';
                      iconClassName = 'iconfont ' + item.icon + ' iconfont-top-three';
                      return (
                        <div className="ranking-list" key={index}>
                          <i className={iconClassName}></i>
                          <span className="list-font">{item.desc}</span>
                        </div>
                      )
                    })
                  }
                  {/* <div className="ranking-list">
                    <i className="iconfont icon-1_square_solid iconfont-top-three"></i>
                    <span className="list-font">排行第一第一...</span>
                  </div> */}
                </div>
              </Card>
            </div>
          </Col>
        </Row>
        
      </div>
    )
  }
}