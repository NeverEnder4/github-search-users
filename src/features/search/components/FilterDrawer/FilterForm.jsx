import { Stack } from '@chakra-ui/react';

import { useSearchParams } from '../../hooks';

import { Form, SelectInput, NumberInput } from '@/components/Form';

const resultCountOptions = [
  { value: 5, label: 5 },
  { value: 10, label: 10 },
  { value: 25, label: 25 },
  { value: 50, label: 50 },
];

const sortByOptions = [
  { value: 'best_match', label: 'Best Match' },
  { value: 'followers', label: 'Most Followers' },
  { value: 'repositories', label: 'Most Repositories' },
  { value: 'joined', label: 'Most Recently Joined' },
];

export const FILTER_FORM_ID = 'filter-form';

export const FilterForm = ({ onSuccess }) => {
  const { params, filters } = useSearchParams();
  const { first } = params;

  const handleSubmit = async (values) => {
    if (onSuccess) onSuccess(values);
  };

  const formOptions = {
    defaultValues: {
      perPage: first,
      sortBy: filters?.sort || 'best_match',
      reposGreaterThan: (filters?.repos && filters?.repos.replace('>', '')) || 0,
      followersGreaterThan: (filters?.followers && filters?.followers.replace('>', '')) || 0,
    },
  };
  return (
    <Form id={FILTER_FORM_ID} onSubmit={handleSubmit} options={formOptions}>
      {({ register }) => (
        <Stack alignItems="center" spacing={10}>
          <SelectInput
            label="Results Per Page"
            options={resultCountOptions}
            registration={register('perPage')}
          />
          <SelectInput label="Sort By" options={sortByOptions} registration={register('sortBy')} />
          <NumberInput
            label="Repositories Greater Than"
            registration={register('reposGreaterThan')}
          />
          <NumberInput
            label="Followers Greater Than"
            registration={register('followersGreaterThan')}
          />
        </Stack>
      )}
    </Form>
  );
};
