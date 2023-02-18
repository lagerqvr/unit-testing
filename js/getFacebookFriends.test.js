// Import the function to be tested
const getFacebookFriends = require('./getFacebookFriends');

// Positive Test 1: Test the function with a valid Facebook page link.
test('Returns a list of friends when passed a valid Facebook page link', () => {
    const fbLink = 'https://www.facebook.com/example';
    const expectedOutput = ['Friend1', 'Friend2', 'Friend3'];
    expect(getFacebookFriends(fbLink)).toEqual(expectedOutput);
});

// Positive Test 2: Test the function with a Facebook page link that has no friends.
test('Returns an empty list when passed a Facebook page link with no friends', () => {
    const fbLink = 'https://www.facebook.com/no_friends';
    const expectedOutput = [];
    expect(getFacebookFriends(fbLink)).toEqual(expectedOutput);
});

// Negative Test 1: Test the function with an invalid Facebook page link.
test('Returns an error when passed an invalid Facebook page link', () => {
    const fbLink = 'invalid_link';
    expect(() => getFacebookFriends(fbLink)).toThrow('Invalid link');
});

// Negative Test 2: Test the function with a non-Facebook page link.
test('Returns an error when passed a non-Facebook page link', () => {
    const fbLink = 'https://www.example.com';
    expect(() => getFacebookFriends(fbLink)).toThrow('Not a Facebook link');
});
