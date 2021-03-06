import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 600 auto 300
  grid-gap: 5px;
  grid-auto-rows: auto;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
`;

export const PostGridWrapper = styled.div`
  justify-self: stretch;
  display: subgrid;
`;
