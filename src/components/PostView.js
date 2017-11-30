import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FaArrowUp from 'react-icons/lib/fa/arrow-up';
import FaArrowDown from 'react-icons/lib/fa/arrow-down';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import Loading from '../components/Loading';
import Error from '../components/Error';
import {
  getPostErrorStatus,
  getPostLoadingStatus,
} from '../selectors/postSelectors';
import {
  POST_BACKGROUND,
  POST_BORDER,
  POST_META,
  POST_TITLE,
  VOTE_COUNT,
} from '../styles/colours';
import { slugifyPostTitle } from '../utils/utils';

const PostView = ({
  post, error, loading, homeFlag,
}) => {
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <PostWrapper>
      <StyledVoteCount>
        <FaArrowUp />
        <br />
        {post.voteScore}
        <br />
        <FaArrowDown />
      </StyledVoteCount>
      <StyledPostMetaWrapper>
        <PostTitleLink
          to={`/${post.category}/${post.id}/${slugifyPostTitle(post.title)}`}
        >
          {post.title}
        </PostTitleLink>
        <StyledPostMeta>
          Submitted {distanceInWordsToNow(post.timestamp)} ago by {post.author}
        </StyledPostMeta>
      </StyledPostMetaWrapper>
      {!homeFlag && <StyledPostBody>{post.body}</StyledPostBody>}
      <StyledCommentWrapper>
        <StyledPostMetaBold>{post.commentCount} comments</StyledPostMetaBold>
        <StyledPostMetaBold>edit</StyledPostMetaBold>
        <StyledPostMetaBold>delete</StyledPostMetaBold>
      </StyledCommentWrapper>
    </PostWrapper>
  );
};

PostView.propTypes = {
  post: PropTypes.object.isRequired,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  homeFlag: PropTypes.bool,
};

PostView.defaultProps = {
  homeFlag: false,
};

const PostWrapper = styled.div`
  display: grid;
  grid-template-columns: 50px repeat(2, [col] 1fr);
  grid-template-rows: repeat(3, [row] 1fr);
  grid-gap: 2px;
  grid-auto-rows: minmax(200px, auto);
`;

const StyledVoteCount = styled.div`
  grid-column-start: 1;
  span: 1;
  grid-row-start: 2;
  color: ${VOTE_COUNT};
  text-align: center;
`;

const StyledPostMetaWrapper = styled.div`
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row: 1;
`;

const PostTitleLink = styled(Link)`
  color: ${POST_TITLE};
`;

const StyledPostMeta = styled.div`
  color: ${POST_META};
  font-size: x-small;
`;

const StyledPostBody = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row: 2;
  background-color: ${POST_BACKGROUND};
  border: 0.5px solid ${POST_BORDER};
  padding: 0.5rem;
`;

const StyledCommentWrapper = styled.div`
  grid-column-start: 2;
  grid-row: 3;
`;

const StyledPostMetaBold = styled.span`
  color: ${POST_META};
  font-size: x-small;
  font-weight: bold;
  padding-right: 1rem;
`;

const mapStateToProps = state => ({
  error: getPostErrorStatus(state),
  loading: getPostLoadingStatus(state),
});

export default connect(mapStateToProps)(PostView);
