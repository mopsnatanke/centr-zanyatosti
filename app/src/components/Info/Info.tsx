import {
    Heading,
    Text,
    VStack,
    Divider
  } from '@chakra-ui/react'

export default function Info() {
  return (
    <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
      <Heading as="h2">What we write about</Heading>
      <Text as="p" fontSize="lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum quam arcu, eu
        tempus tortor molestie at. Vestibulum pretium condimentum dignissim. Vestibulum ultrices
        vitae nisi sed imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat sapien.
        Suspendisse placerat vulputate posuere. Curabitur neque tortor, mattis nec lacus non,
        placerat congue elit.
      </Text>
      <Divider/>
      <Text as="p" fontSize="lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum quam arcu, eu
        tempus tortor molestie at. Vestibulum pretium condimentum dignissim. Vestibulum ultrices
        vitae nisi sed imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat sapien.
        Suspendisse placerat vulputate posuere. Curabitur neque tortor, mattis nec lacus non,
        placerat congue elit.
      </Text>
      <Divider/>
      <Text as="p" fontSize="lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum quam arcu, eu
        tempus tortor molestie at. Vestibulum pretium condimentum dignissim. Vestibulum ultrices
        vitae nisi sed imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat sapien.
        Suspendisse placerat vulputate posuere. Curabitur neque tortor, mattis nec lacus non,
        placerat congue elit.
      </Text>
    </VStack>
  );
}
