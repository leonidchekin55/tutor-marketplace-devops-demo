import test from 'node:test';
import assert from 'node:assert/strict';
import { isValidTutor, tutors } from '../src/content.js';

test('demo tutor list contains three valid tutors', () => {
  assert.equal(tutors.length, 3);
  assert.ok(tutors.every(isValidTutor));
});

test('tutor validation rejects missing names and out-of-range ratings', () => {
  assert.equal(isValidTutor({ name: ' ', subject: 'Python', rating: 4 }), false);
  assert.equal(isValidTutor({ name: 'Аня', subject: 'Python', rating: 6 }), false);
});
