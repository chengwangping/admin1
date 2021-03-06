import React from 'react'
import {Form, Icon, Input, Button} from 'antd'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchData, receiveData} from '../../actions'
import formValiidator from './validator.js'
import styles from './login.less'
const FormItem = Form.Item

class Login extends React.Component {
  // componentDidMount() { } getDerivedStateFromProps(nextProps) { }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      console.log(err, values)
      if (!err) {
        alert('表单验证通过！')
        // const { fetchData } = this.props; if (values.userName === 'admin' &&
        // values.password === 'admin') {     fetchData({funcName: 'admin', stateName:
        // 'auth'}); } if (values.userName === 'guest' && values.password === 'guest'){
        //    fetchData({funcName: 'guest', stateName: 'auth'}); }
      }
    })
  }
  render() {
    const {getFieldDecorator} = this.props.form
    return (
      <div className={styles.warp}>
        <div className={styles.form}>
          <div className={styles.logo}>
            {/* <img alt="logo" src={logo} /> */}
            <span>运营平台</span>
          </div>
          <Form onSubmit={this.handleSubmit}>
            <FormItem>
              {getFieldDecorator('userName', formValiidator.userName)(
                <Input prefix={< Icon type = "user" />} placeholder="admin-guest"/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', formValiidator.password)(
                <Input
                  prefix={< Icon type = "lock" />}
                  type="password"
                  placeholder="admin , guest"/>
              )}
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className={styles.btn}>
                登录
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}

const mapStateToPorps = state => {
  return {}
}

const mapDispatchToProps = dispatch => ({
  fetchData: bindActionCreators(fetchData, dispatch),
  receiveData: bindActionCreators(receiveData, dispatch)
})

export default connect(mapStateToPorps, mapDispatchToProps)(Form.create()(Login))
