import { Anchor, Loader, Text } from '@mantine/core';
import Section from 'components/Layout/Section';
import PageTitle from 'components/PageTitle';
import SubSectionTitle from 'components/SubsectionTitle';
import React, { useEffect } from 'react';
import { ExternalLink } from 'tabler-icons-react';
import { HACKUSU_EMAIL } from 'utils/constants';
import Layout from '../components/Layout/Layout';

declare global {
  interface Window {
    EBWidgets: any;
  }
}

var exampleCallback = function () {
  console.log('Order complete!');
};

export default function Registration() {
  const [isWidgetLoaded, setIsWidgetLoaded] = React.useState(false);

  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://www.eventbrite.com/static/widgets/eb_widgets.js';
    script1.async = true;
    document.body.appendChild(script1);

    return () => {
      document.body.removeChild(script1);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const widgetAlreadyLoaded =
        document.querySelector('#eventbrite-widget-container-427685307267')?.childElementCount > 0;

      console.log('checking', !window.EBWidgets, widgetAlreadyLoaded);

      if (!window.EBWidgets) return;
      if (widgetAlreadyLoaded) return cancelInterval();

      window.EBWidgets?.createWidget({
        widgetType: 'checkout',
        eventId: '427685307267',
        iframeContainerId: 'eventbrite-widget-container-427685307267',
        iframeContainerHeight: 700,
        onOrderComplete: exampleCallback,
      });

      cancelInterval();
    }, 500);

    function cancelInterval() {
      setIsWidgetLoaded(true);
      clearInterval(interval);
    }

    return cancelInterval;
  }, []);

  return (
    <Layout>
      <PageTitle>Register for Free!</PageTitle>

      <Section width="sm" background="light" mt={60}>
        <SubSectionTitle>Student registration is now open!</SubSectionTitle>

        <Text component="p">
          Fill out the form below, or register directly on our{' '}
          <Anchor href="https://hackusu2023.eventbrite.com/?aff=hackususite" target="_blank">
            Eventbrite page <ExternalLink size="14" />
          </Anchor>
          .
        </Text>

        <Text mt={10}>
          If you are representing a company, would like to volunteer, or are a member of the press,
          please email us at{' '}
          <Anchor href={`mailto:${HACKUSU_EMAIL}`} target="_blank">
            {HACKUSU_EMAIL}
          </Anchor>
          .
        </Text>
      </Section>

      <Section width="md">
        <div
          id="eventbrite-widget-container-427685307267"
          style={{
            border: '1px solid #aaa',
            borderRadius: 10,
            overflow: 'hidden',
          }}
        ></div>
      </Section>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {!isWidgetLoaded && <Loader />}
      </div>

      {/* <Section width="sm" background="light" mt={60}>
        <SubSectionTitle>Registration will open soon!</SubSectionTitle>
        <SimpleGrid
          cols={2}
          spacing="lg"
          mt={30}
          breakpoints={[{ maxWidth: 'xs', cols: 1, spacing: 'sm' }]}
        >
          <Box>
            <Text component="p">We'll publish the registration form in January!</Text>
            <Text component="p">
              In the meantime, we're looking for help preparing for the event! Let us know if you
              have connections with people at any companies who are interested in partnering with
              HackUSU. We're currently looking for sponsors, workshop hosts, and judges!
            </Text>
          </Box>
          <Image
            src={require('images/illustrations/time.svg').default}
            alt="Location pin illustration"
            sx={{ maxWidth: 500, marginInline: 'auto' }}
          />
        </SimpleGrid>
      </Section> */}
    </Layout>
  );
}
