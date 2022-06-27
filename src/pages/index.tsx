import Info from '@/components/info';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <>
      <Main
        meta={
          <Meta
            title="Next.js Boilerplate Presentation"
            description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
          />
        }
      >
        {' '}
      </Main>
      <div
        id="info-container"
        className="mt-8 flex items-center justify-around"
      >
        <Info></Info>
        <Info></Info>
      </div>
    </>
  );
};

export default Index;
