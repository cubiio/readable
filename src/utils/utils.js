import slugify from 'slugify';
import _ from 'lodash';

/**
 *
 * @param {string} postTitle
 */
export const slugifyPostTitle = postTitle =>
  slugify(postTitle, { lower: true, remove: /[$*_+~.()'"!\-:@?]/g });

const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
export const createRandomID = number => _.sampleSize(char, number).join('');

// /**
//  *
//  * @param {string} fieldInputType
//  * @param {string} fieldInput
//  */
export const userInputIsValid = (fieldInputType, fieldInput) => {
  const formMaxLengths = {
    title: 100,
    author: 20,
    body: 3000,
    comment: 1000,
  };

  const formMinLengths = {
    title: 1,
    author: 1,
    body: 0,
    comment: 1,
  };

  const input = fieldInput.trim();

  const maxLength = formMaxLengths[fieldInputType];
  const minLength = formMinLengths[fieldInputType];

  if (input.length >= minLength && input.length < maxLength) {
    return true;
  }

  return false;
};
