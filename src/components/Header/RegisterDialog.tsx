/**
 * Created by Yuicon on 2017/6/25.
 */
import * as React from 'react';
import {Form, Icon, Input, Button, Modal, message} from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';

const FormItem = Form.Item;

export interface RegisterProps {
  visible: boolean;
  onClose: () => void;
  registerActions: any;
  users: any;
  onRedirect: () => void;
}

type State = {
  loading: boolean,
};

class RegisterDialog extends React.Component<RegisterProps & {form: WrappedFormUtils}, State> {

  state: State = {
    loading: false,
  };

  componentWillReceiveProps(nextProps: any) {
    if (nextProps.users && nextProps.users.get('saveSuccess') && this.props.visible) {
      message.success('注册成功');
      this.props.onClose();
    } else if (nextProps.users && nextProps.users.get('error') && this.props.visible) {
      message.error('注册失败');
    }
    this.setState({loading: false});
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.registerActions(values);
        this.setState({loading: true});
      }
    });
  };

  handleLogin = () => {
    this.props.onRedirect();
  };

  render() {

    const {getFieldDecorator} = this.props.form;

    return (
      <Modal
        title="注册"
        visible={ this.props.visible }
        onCancel={ this.props.onClose }
        width={'26.5rem'}
        footer={null}
      >

        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{required: true, message: '请输入用户名'}],
            })(
              <Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="用户名"/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('account', {
              rules: [{required: true, message: '请输入格式正确的邮箱', type: 'email'}],
            })(
              <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="email" placeholder="邮箱"/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{required: true, message: '请输入密码'}],
            })(
              <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password" placeholder="密码"/>
            )}
          </FormItem>
          <Form.Item style={{marginBottom: '10px'}}>
            <Button style={{width: '100%'}} type="primary" onClick={this.handleSubmit} loading={this.state.loading}>
              注册
            </Button>
          </Form.Item>
          <Form.Item style={{marginBottom: '10px', textAlign: 'center'}}>
            <Button type="ghost" onClick={this.handleLogin}>
              已有帐号?登陆
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    )
  }
}

export default Form.create<RegisterProps>()(RegisterDialog);
