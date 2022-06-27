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
            description="When we first start University we are often overwelmed by too many events, movie viewings, parties, and even small pop-up events. Luckily you have found the right place. Every event related to Film in Canterbury can be found here. Once your account is confirmed you will be able to create your own events and publish them here as well."
          />
        }
      >
        {' '}
      </Main>
      <div
        id="info-container"
        className="m-4 mt-8 flex flex-col content-start items-center justify-evenly space-y-4 lg:flex-row lg:space-y-0"
      >
        <Info title="Create Account" description=""></Info>
        <Info title="Featured Events" color="green-200"></Info>
        <Info title="New Realeses" color="green-200"></Info>
      </div>
    </>
  );
};

export default Index;
