/* global describe, it, expect */

import deepFreeze from 'deep-freeze';
import post from './postReducer';
import {
  FAIL_FETCH_POSTS,
  SUCCESS_RECEIVE_POSTS,
} from '../actions/postActions';

describe('post reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      postStatus: {
        error: false,
        loading: true,
      },
    };
    const action = {};
    const expectedState = {
      postStatus: {
        error: false,
        loading: true,
      },
    };
    deepFreeze(initialState);
    expect(post(initialState, action)).toEqual(expectedState);
  });

  it('should add posts to the global store', () => {
    const initialState = {
      postStatus: {
        error: false,
        loading: true,
      },
    };
    const action = {
      type: 'SUCCESS_RECEIVE_POSTS',
      posts: [
        {
          id: '8xf0y6ziyjabvozdd253nd',
          timestamp: 1467166872634,
          title: 'Udacity is the best place to learn React',
          body: 'Everyone says so after all.',
          author: 'thingtwo',
          category: 'react',
          voteScore: 6,
          deleted: false,
          commentCount: 2,
        },
        {
          id: '6ni6ok3ym7mf1p33lnez',
          timestamp: 1468479767190,
          title: 'Learn Redux in 10 minutes!',
          body:
            'Just kidding. It takes more than 10 minutes to learn technology.',
          author: 'thingone',
          category: 'redux',
          voteScore: -5,
          deleted: false,
          commentCount: 0,
        },
      ],
    };
    const expectedState = {
      '8xf0y6ziyjabvozdd253nd': {
        id: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1467166872634,
        title: 'Udacity is the best place to learn React',
        body: 'Everyone says so after all.',
        author: 'thingtwo',
        category: 'react',
        voteScore: 6,
        deleted: false,
        commentCount: 2,
      },
      '6ni6ok3ym7mf1p33lnez': {
        id: '6ni6ok3ym7mf1p33lnez',
        timestamp: 1468479767190,
        title: 'Learn Redux in 10 minutes!',
        body:
          'Just kidding. It takes more than 10 minutes to learn technology.',
        author: 'thingone',
        category: 'redux',
        voteScore: -5,
        deleted: false,
        commentCount: 0,
      },
      postStatus: {
        error: false,
        loading: false,
      },
    };
    expect(post(initialState, action)).toEqual(expectedState);
  });

  it('should fail to fetch posts gracefully', () => {
    const initialState = {
      postStatus: {
        error: false,
        loading: true,
      },
    };
    const action = {
      type: FAIL_FETCH_POSTS,
    };
    const expectedState = {
      postStatus: {
        error: true,
        loading: false,
      },
    };
    deepFreeze(initialState);
    expect(post(initialState, action)).toEqual(expectedState);
  });
});
