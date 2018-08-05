import React, { Component } from 'react'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Header from '../../components/header'
// import Menu from '../../components/menu'
import styles from './index.less'

import { routes } from '../../routes/router'
import { signOut } from '../../actions/authAction'

import { Layout } from 'antd'
const { Content, Footer } = Layout

class LayoutPage extends Component {
  state = {
    collapsed: false
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  };

  signout = () => {
    console.log('logout')
    this.props.signOut()
  }

  render() {
    console.log(this.props)
    const { collapsed } = this.state
    return (
      <Layout
        className="ant-layout-has-sider"
        style={{
          height: '100%'
        }}>
        <Header toggle={this.toggle} user={this.props.user} signOut={this.signout} />
        <Content className={styles.content}>
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={500}
                  classNames="fade"
                >
                  <Switch location={location}>
                    {routes.map((route, index) => (
                      <Route
                        key={index}
                        path={route.path}
                        component={route.component}
                        exact={route.exact}
                      />
                    ))}
                    <Redirect exact from="/" to="/index" />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
          <Footer style={{
            textAlign: 'center'
          }}>
            React-Admin ©2017 Created
          </Footer>
        </Content>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  user: state.authReducer.user
})

const mapDispatchToProps = dispatch => bindActionCreators({ signOut }, dispatch)

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LayoutPage)
)
