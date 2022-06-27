import Info from '@/components/info';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/main/Main';

const Index = () => {
  return (
    <>
      <Main
        meta={
          <Meta
            title="Canterbury Film Events"
            description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
          />
        }
      >
        {' '}
      </Main>
      <div
        id="info-container"
        className="mt-8 flex content-start items-center justify-evenly"
      >
        <Info></Info>
        <Info></Info>
      </div>
    </>
  );
};

export default Index;
