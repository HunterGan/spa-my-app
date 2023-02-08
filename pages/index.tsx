import { Button, Htag, P } from '@/components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Text</Htag>
      <Button appearance='primary' arrow='right'>Button</Button>
      <Button appearance='ghost' arrow='down'>Button</Button>
      <P size={'s'}>Text1</P>
      <P size={'m'}>Text1</P>
      <P size={'l'}>Text1</P>
    </>
  );
}
