'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import Collapse from '@/components/Collapse/Collapse';
import Container from '@/components/container/Container';
import ThreeLayersCircle from './ThreeLayersCircle';
import { media } from '@/utils/media';
import Semantic from '@/assets/semantic.png';
import Peer from '@/assets/peer.png';
import Environment from '@/assets/environment.png'

const TABS = [
  {
    title: 'Semantic Search Intelligence:',
    description:
      "<p>Unleash the power of knowledge with our advanced vector search. BookMate's semantic search understands the context behind user queries, providing precise and relevant results. Say goodbye to tedious searches and discover academic materials tailored to your needs effortlessly.      </p>",
    imageUrl: Semantic,
    baseColor: '249,82,120',
    secondColor: '221,9,57',
  },
  {
    title: 'Exclusive Peer Community:',
    description:
      '<p>BookXchange goes beyond transactions, fostering an invite-only community of learners. Connect with peers who share your passion for knowledge. Experience peer-to-peer learning, support, and collaboration in a safe, respectful, and academically rich environment.</p>',
    imageUrl: Peer,
    baseColor: '57,148,224',
    secondColor: '99,172,232',
  },
  {
    title: 'Environmental Consciousness:',
    description:
      '<p>Contribute to a greener planet. BookXchange champions sustainability by promoting the reuse of educational materials. Minimize waste, reduce your environmental footprint, and extend the lifecycle of academic books, all while saving costs and supporting a brighter future for education.</p>',
    imageUrl: Environment,
    baseColor: '88,193,132',
    secondColor: '124,207,158',
  },
];

export default function FeaturesGallery() {
  const [currentTab, setCurrentTab] = useState(TABS[0]);

  const imagesMarkup = TABS.map((singleTab, idx) => {
    const isActive = singleTab.title === currentTab.title;
    const isFirst = idx === 0;

    return (
      <ImageContainer key={singleTab.title} $isactive={isActive}>
        <Image src={singleTab.imageUrl} alt={singleTab.title}  priority={isFirst} fill objectFit='contain' style={{maxHeight:'500px',alignItems:'center',justifyContent:'center', marginTop:'40px'}}/>
      </ImageContainer>
    );
  });

  const tabsMarkup = TABS.map((singleTab, idx) => {
    const isActive = singleTab.title === currentTab.title;

    return (
      <Tab $isactive={isActive} key={idx} onClick={() => handleTabClick(idx)}>
        <TabTitleContainer>
          <CircleContainer>
            <ThreeLayersCircle $basecolor={isActive ? 'transparent' : singleTab.baseColor} $secondcolor={singleTab.secondColor} />
          </CircleContainer>
          <h4>{singleTab.title}</h4>
        </TabTitleContainer>
        <Collapse isOpen={isActive} duration={300}>
          <TabContent>
            <div dangerouslySetInnerHTML={{ __html: singleTab.description }}></div>
          </TabContent>
        </Collapse>
      </Tab>
    );
  });

  function handleTabClick(idx: number) {
    setCurrentTab(TABS[idx]);
  }

  return (
    <FeaturesGalleryWrapper >
      <Content>
        <p className='text-base'>features</p>
        <h1 className='font-bold text-3xl'>What are you signing in for?</h1>
      </Content>
      <GalleryWrapper>
        <TabsContainer>{tabsMarkup}</TabsContainer>
        {imagesMarkup}
      </GalleryWrapper>
    </FeaturesGalleryWrapper>
  );
}

const FeaturesGalleryWrapper = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  z-index:99;
`;

const GalleryWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;

  ${media('<=desktop')} {
    flex-direction: column;
  }
`;

const Content = styled.div`
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
  text-align: center;
`;

const TabsContainer = styled.div`
  flex: 1;
  margin-right: 1rem;

  & > *:not(:first-child) {
    margin-top: 2rem;
  }

  ${media('<=desktop')} {
    margin-right: 0;
    margin-bottom: 2rem;
    width: 100%;
  }
`;
const ImageContainer = styled.div<{ $isactive: boolean }>`
  position: relative;
  overflow: hidden;
  border-radius: 0.8rem;
  flex: ${(p) => (p.$isactive ? '2' : '0')};
  box-shadow: var(--shadow-md);

  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: calc((9 / 16) * 100%);
  }

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  ${media('<=desktop')} {
    width: ${(p) => (p.$isactive ? '100%' : '0')};
  }
`;

const Tab = styled.div<{ $isactive: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 1rem 0.8rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  opacity: ${(p) => (p.$isactive ? 1 : 0.6)};
  cursor: pointer;
  border-radius: 0.6rem;
  transition: opacity 0.2s;

  font-size: 1.4rem;
  font-weight: bold;

  ${media('<=desktop')} {
    width: 100%;
  }
`;

const TabTitleContainer = styled.div`
  display: flex;
  align-items: center;

  h4 {
    flex: 1;
  }
`;

const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: normal;
  font-size: 1.2rem;
  padding-left: calc(5rem + 1.5rem);

  ${media('<=tablet')} {
    padding-left: calc(4rem + 1.25rem);
  }

  p {
    font-weight: normal;
  }
`;

const CircleContainer = styled.div`
  flex: 0 calc(5rem + 1.5rem);

  ${media('<=tablet')} {
    flex: 0 calc(4rem + 1.25rem);
  }
`;
