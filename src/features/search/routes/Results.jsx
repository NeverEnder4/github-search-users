import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useSearchUser } from '../hooks';

export function Results() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const [userQuery, setUserQuery] = useState('');

  const { loading, error, data } = useSearchUser(userQuery);

  console.log(loading, error, data, 'TEST');

  useEffect(() => {
    setUserQuery(query);
  }, [query]);
  return <div>{data && JSON.stringify(data)}</div>;
}
