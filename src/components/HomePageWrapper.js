import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import NavbarContainer from '../containers/NavBarContainer';
import CategoryPostViewContainer from '../containers/CategoryPostViewContainer';
import Footer from './Footer';
import SideBar from './SideBar';
import PageWrapper from '../styles/pagewrapper';

const HomePageWrapper = () => (
  <StyledWrapper>
    <Header />
    <NavbarContainer />
    <CategoryPostViewContainer />
    <SideBar />
    <Footer />
  </StyledWrapper>
);

const StyledWrapper = styled(PageWrapper)``;

export default HomePageWrapper;
