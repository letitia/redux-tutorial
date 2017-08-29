import { List, Map } from 'immutable';
import { expect } from 'chai';
import { setEntries, next } from '../src/core';

describe('application logic', () => {
  describe('setEntries', () => {
    const state = Map();

    it('adds the entries to the state', () => {
      const entries = List.of('The Karamazov Brothers', 'The Master and Margarita');
      const nextState = setEntries(state, entries);

      expect(nextState).to.equal(Map({
        entries: List.of('The Karamazov Brothers', 'The Master and Margarita')
      }));
    });

    it('converts to immutable', () => {
      const entries = ['The Karamazov Brothers', 'The Master and Margarita'];
      const nextState = setEntries(state, entries);

      expect(nextState).to.equal(Map({
        entries: List.of('The Karamazov Brothers', 'The Master and Margarita')
      }));
    });
  });

  describe('next', () => {
    it('takes the next two entries under vote', () => {
      const state = Map({
        entries: List.of('Trainspotting', '28 Days Later', 'Sunshine')
      });
      const nextState = next(state);

      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of('Trainspotting', '28 Days Later')
        }),
        entries: List.of('Sunshine')
      }));
    });
  });
});
