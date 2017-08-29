import { expect } from 'chai';
import { List, Map } from 'immutable';

describe('Immutability', () => {
  describe('a List', () => {
    function addBook(currentState, book) {
      return currentState.push(book);
    }

    it('is immutable', () => {
      const state = List.of('Jonathan Strange & Mr Norrell', 'Beloved');
      const nextState = addBook(state, 'Ministry of Moral Panic');

      expect(nextState).to.equal(List.of(
        'Jonathan Strange & Mr Norrell',
        'Beloved',
        'Ministry of Moral Panic'
      ));

      expect(state).to.equal(List.of('Jonathan Strange & Mr Norrell', 'Beloved'));
    });
  });

  describe('a tree', () => {
    function addMovie(currentState, movie) {
      return currentState.update('movies', movies => movies.push(movie));
      /* equivalent to
        currentState.set('movies', currentState.get('movies').push(movie));
      */
    }

    it('is immutable', () => {
      const state = Map({
        movies: List.of('Trainspotting', '28 Days Later')
      });
      const nextState = addMovie(state, 'Sunshine');

      expect(nextState).to.equal(Map({
        movies: List.of('Trainspotting',
        '28 Days Later',
        'Sunshine'
        )
      }));
    });
  });
});