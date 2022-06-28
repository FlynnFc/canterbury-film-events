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
        className="flex flex-col items-center justify-around space-x-0 text-xl 2xl:flex-row 2xl:items-stretch 2xl:space-x-6 "
      >
        <div>
          <Info
            title="Create Account"
            description="Do you want to create new events or rsvp for others? All you need to do is sign in"
            buttonAction="Sign in"
          ></Info>
        </div>
        <div>
          <Info
            event
            wide
            title="Featured Event"
            color="white"
            buttonAction="See More"
            description="Find every event going on in Canterbury here. Dont miss out! Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum"
          ></Info>
        </div>
      </div>
    </>
  );
};

export default Index;
