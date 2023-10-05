import { Card, Divider, Heading, Text } from '@chakra-ui/react';

export default function Vacancy({vacancy}) {
    console.log('vacancy',vacancy);
    
  return (
    <Card>
      <Heading as="h2" size="lg">
        {vacancy.jobName}
      </Heading>
      <Text fontSize="sm" color="gray.500">
        {vacancy.region}
      </Text>
      <Divider my={4} />
      <Text fontSize="sm" mt={4}>
        Работа: {vacancy.industry}
      </Text>
      <Text fontSize="sm">
        Заработная плата: {vacancy.salary} {vacancy.currency}
      </Text>
      <Text fontSize="sm">Занятость: {vacancy.schedule}</Text>
      <Text fontSize="sm">Образование: {vacancy.education}</Text>
      <Text fontSize="sm">Опыт: {vacancy.experience}</Text>
      <Text fontSize="sm" mt={4}>
        Локация: {vacancy.location}
      </Text>
      <Text fontSize="sm">Метро: {vacancy.metros.length ? vacancy.metros.join(', '): 'нет информации'}</Text>
      <Text pl={'30px'}>
        <div dangerouslySetInnerHTML={{ __html: vacancy.description }} />
      </Text>
    </Card>
  );
}
