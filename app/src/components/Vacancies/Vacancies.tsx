import { useEffect, useState } from 'react';
import {Stack} from '@chakra-ui/react';
import Vacancy from '../Vacancy/Vacancy';

const Vacancies = () => {
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const xmlUrl = 'http://127.0.0.1:5173/public/example_1.xml';

      try {
        const response = await fetch(xmlUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch XML data');
        }

        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

        const vacancyNodes = xmlDoc.querySelectorAll('vacancy');
        const vacanciesArray = Array.from(vacancyNodes).map((vacancyNode) => {
          return {
            jobName: vacancyNode.querySelector('job-name')?.textContent || '',
            description: vacancyNode.querySelector('description')?.textContent || '',
            url: vacancyNode.querySelector('url')?.textContent || '',
            industry: vacancyNode.querySelector('industry')?.textContent || '',
            salary: vacancyNode.querySelector('salary')?.textContent || '',
            currency: vacancyNode.querySelector('currency')?.textContent || '',
            schedule: vacancyNode.querySelector('schedule')?.textContent || '',
            education: vacancyNode.querySelector('requirement education')?.textContent || '',
            experience: vacancyNode.querySelector('requirement experience')?.textContent || '',
            region: vacancyNode.querySelector('region')?.textContent || '',
            location: vacancyNode.querySelector('address location')?.textContent || '',
            metros: Array.from(vacancyNode.querySelectorAll('address metro')).map(
              (metro) => metro.textContent,
            ),
            coordinates: {
              x: vacancyNode.querySelector('address coordinates x')?.textContent || '',
              y: vacancyNode.querySelector('address coordinates y')?.textContent || '',
            },
          };
        });

        setVacancies(vacanciesArray);
      } catch (error) {
        console.error('Ошибка при чтении XML:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Stack spacing={4}>
      {vacancies.map((vacancy, index) => (
        <Vacancy key={index} vacancy={vacancy}/>
      ))}
    </Stack>
  );
};

export default Vacancies;
