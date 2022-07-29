import { SearchListSkeleton } from './SearchListSkeleton';
import { UserListItem } from './UserListItem';

import { List } from '@/components';

export const UserList = ({ users, loading }) => {
  const extractKey = (user) => user.login + user.avatarUrl;

  const renderListItem = (user) => {
    return <UserListItem user={user} />;
  };
  if (loading) return <SearchListSkeleton />;
  return <List data={users} spacing={3} extractKey={extractKey} renderListItem={renderListItem} />;
};
