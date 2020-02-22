import React from 'react';
import { Form, Button, Input, Icon } from 'antd';
import { useConnect } from 'nuomi';
import './style.less';

const FormItem = Form.Item;

const Content = ({ form }) => {
  const { getFieldDecorator } = form;
  const [{ loadings }, dispatch] = useConnect();

  const handleSubmit = (e) => {
    e.preventDefault();
    form.validateFields((err) => {
      if (!err) {
        dispatch({ type: '$login' });
      }
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <legend>NUOMI ADMIN</legend>
      <fieldset>
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              autoComplete="off"
              placeholder="用户名"
            />,
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }],
          })(
            <Input
              type="password"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="密码"
            />,
          )}
        </FormItem>
        <FormItem>
          <Button styleName="button" type="primary" htmlType="submit" loading={loadings.$login}>登 录</Button>
        </FormItem>
      </fieldset>
    </Form>
  );
};

export default Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      username: Form.createFormField({
        value: props.username,
      }),
      password: Form.createFormField({
        value: props.password,
      }),
    };
  },
})(Content);
