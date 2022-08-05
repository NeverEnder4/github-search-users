import { SearchListSkeleton } from './Skeletons';
import { UserListItem } from './UserListItem';

import { List } from '@/components';

export const UserList = ({ users, loading }) => {
  const extractKey = (user, index) => user?.databaseId || index;

  const renderListItem = (user) => {
    return <UserListItem user={user} />;
  };
  if (loading) return <SearchListSkeleton />;
  return <List data={users} spacing={4} extractKey={extractKey} renderListItem={renderListItem} />;
};
