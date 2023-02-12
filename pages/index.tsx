import { Button, Htag, P, Tag, Rating} from '@/components';
import { withLayout } from '../layout/Layout';
import { useState } from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { MenuItem } from '@/interfaces/menu.interface';

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  /// console.log('menu is: ', menu);
  return (
    <>
      <Htag tag='h1'>1</Htag>
      <Button appearance='primary' onClick={() => console.log('1')} arrow='right'>Button</Button>
      <Button appearance='ghost' arrow='down'>Button</Button>
      <P size={'s'}>Text1</P>
      <P size={'m'}>Text1</P>
      <P size={'l'}>Text1</P>
      <Tag size={'s'}>Text</Tag>
      <Tag size={'m'}>Text</Tag>
      <Tag size={'s'} href={'/'}>Text</Tag>
      <Tag size={'m'} color={'ghost'}>Text</Tag>
      <Tag size={'m'} color={'red'}>Text</Tag>
      <Tag size={'m'} color={'grey'}>Text</Tag>
      <Tag size={'m'} color={'green'}>Text</Tag>
      <Tag size={'m'} color={'primary'}>Text</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data:menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
