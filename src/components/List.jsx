import { List as ChakraList, ListItem } from '@chakra-ui/react';

export const List = ({ data, renderListItem, spacing, extractKey }) => {
  const items = data?.map((item) => (
    <ListItem key={extractKey(item)}>{renderListItem(item)}</ListItem>
  ));
  return (
    <ChakraList width="100%" spacing={spacing}>
      {items}
    </ChakraList>
  );
};
