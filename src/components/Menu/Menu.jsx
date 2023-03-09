import { Dropdown } from 'antd';
import { UserAvatar } from '../UserAvatar/UserAvatar';

const items = [
    {
      label: <a href="/admin">Admin</a>,
      key: '0',
    },
    {
        label: <a href="/admin">Admin2</a>,
        key: '2',
      }
  ];

export const Menu = () => {

    return <Dropdown menu={{ items }} trigger={['click']}>
        <UserAvatar>click</UserAvatar>
  </Dropdown>
}