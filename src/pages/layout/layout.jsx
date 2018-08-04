import React, {Component} from 'react';
import {Layout} from 'antd';
import {receiveData} from '../../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Menu from '../../components/menu';
import Header from '../../components/header';
const {Content, Footer} = Layout;


class LayoutPage extends Component {
  state = {
    collapsed: false
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    const {auth, router} = this.props;
    console.log(this.props);
    return (
      <Layout
        className="ant-layout-has-sider"
        style={{height: '100%'}}>
        {/* <Menu path={location.pathname} collapsed={this.state.collapsed}/> */}
        <Layout>
          <Header toggle={this.toggle} user={auth.data || {}} router={router}/>
          <Content className="page-view">
            {this.props.children}
          </Content>
          <Footer style={{
            textAlign: 'center'
          }}>
            React-Admin ©2017 Created
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  const {
    auth = {
      data : {}
    }
  } = state.httpData;
  return {auth};
};
const mapDispatchToProps = dispatch => ({
  receiveData: bindActionCreators(receiveData, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LayoutPage);
