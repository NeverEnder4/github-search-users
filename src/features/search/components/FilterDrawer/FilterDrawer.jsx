import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
} from '@chakra-ui/react';

import { useFilters } from '../../hooks';

import { FilterForm, FILTER_FORM_ID } from './FilterForm';

import { Button } from '@/components/Elements';

const MIN_WIDTH = '120px';

export const FilterDrawer = ({ isOpen, onClose }) => {
  const { setFilters } = useFilters();

  const onSuccess = (values) => {
    setFilters(values);
    onClose();
  };
  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Filter search results</DrawerHeader>

        <DrawerBody>
          <FilterForm onSuccess={onSuccess} />
        </DrawerBody>

        <DrawerFooter>
          <Stack width="100%" justifyContent="center" spacing={3} direction="row">
            <Button minWidth={MIN_WIDTH} variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button minWidth={MIN_WIDTH} type="submit" form={FILTER_FORM_ID}>
              Submit
            </Button>
          </Stack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
