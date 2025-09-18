import React, { useEffect } from 'react';
import { Modal, Form, Input } from 'antd';

function EditUserModal({ visible, user, onSave, onCancel }) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (user && visible) {
      form.setFieldsValue({
        name: user.name,
        email: user.email,
        phone: user.phone,
        website: user.website,
        street: user.address.street,
        suite: user.address.suite,
        city: user.address.city,
        zipcode: user.address.zipcode,
        companyName: user.company.name,
      });
    }
  }, [user, visible, form]);

  const handleSave = () => {
    form.validateFields().then((values) => {
      const updatedUser = {
        ...user,
        name: values.name,
        email: values.email,
        phone: values.phone,
        website: values.website,
        address: {
          ...user.address,
          street: values.street,
          suite: values.suite,
          city: values.city,
          zipcode: values.zipcode,
        },
        company: {
          ...user.company,
          name: values.companyName,
        },
      };
      onSave(updatedUser);
      form.resetFields();
    });
  };

  const handleCancel = () => {
    form.resetFields();
    onCancel();
  };

  return (
    <Modal
      title="Edit User"
      open={visible}
      onOk={handleSave}
      onCancel={handleCancel}
      okText="Save"
      cancelText="Cancel"
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please enter the name' }]}
        >
          <Input />
        </Form.Item>
        
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Please enter the email' },
            { type: 'email', message: 'Please enter a valid email' }
          ]}
        >
          <Input />
        </Form.Item>
        
        <Form.Item
          name="phone"
          label="Phone"
          rules={[{ required: true, message: 'Please enter the phone number' }]}
        >
          <Input />
        </Form.Item>
        
        <Form.Item
          name="website"
          label="Website"
        >
          <Input />
        </Form.Item>
        
        <Form.Item
          name="street"
          label="Street"
        >
          <Input />
        </Form.Item>
        
        <Form.Item
          name="suite"
          label="Suite"
        >
          <Input />
        </Form.Item>
        
        <Form.Item
          name="city"
          label="City"
        >
          <Input />
        </Form.Item>
        
        <Form.Item
          name="zipcode"
          label="Zipcode"
        >
          <Input />
        </Form.Item>
        
        <Form.Item
          name="companyName"
          label="Company Name"
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default EditUserModal;