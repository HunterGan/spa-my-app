import { Button, Htag, P, Tag, Rating} from '@/components';
import { Layout, withLayout } from '../layout/Layout';
import { useEffect, useState } from 'react';

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  useEffect(() => {
    console.log('Counter');
    return function cleanup() {
      console.log('unmounted');
    };
  }, []);
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
