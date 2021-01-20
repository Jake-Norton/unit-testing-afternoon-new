import {shortenText} from '../utils/functions';
import {wordCount, attachUserName} from '../../server/utils';
import {shortText, longText, posts, users} from './__data__/testData';

test('shortenText should only trim strings over 100 characters', () => {
    expect(shortenText(shortText)).toHaveLength(29);
});

test('shortenText should trim a string to end at 100 characters and add an ellipsis', () => {
    const shortened = shortenText(longText);
    expect(shortened).not.toHaveLength(longText.length);
    expect(shortened.slice(-3)).toBe('...');
});

test('wordCount should count words in a sentence', () => {
    expect(wordCount(posts)).toBe(233);
});

test('attachUserName should add a users full name to a post', () => {
    const newPosts = attachUserName(users, posts);
    expect(newPosts[0]).toHaveProperty('displayName');
});

test('attachUserName should filter out posts without a matching user', () => {
    const newPosts = attachUserName(users, posts);
    const deletedPost = posts[5];
    expect(newPosts).not.toContainEqual(deletedPost);
});