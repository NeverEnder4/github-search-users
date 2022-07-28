import { Stack } from '@chakra-ui/react';

import { Button } from '@/components/Elements';
import { Form, SearchInput } from '@/components/Form';

export const SearchForm = ({ onSuccess }) => {
  const handleSubmit = async (values) => {
    console.log(values, 'TEST');
    if (onSuccess) onSuccess(values.query);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {({ register }) => (
        <Stack alignItems="center" spacing={10}>
          <SearchInput
            labelFontSize="3xl"
            label="Search Github Users"
            registration={register('query')}
          />
          <Button type="submit">Search Users</Button>
        </Stack>
      )}
    </Form>
  );
};
