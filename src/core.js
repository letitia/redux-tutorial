import { List, Map } from 'immutable';

function setEntries(state, entries) {
  return state.set('entries', List(entries));
}

function next(state) {
  const entries = state.get('entries');

  return state.merge({
    vote: Map({
      pair: entries.take(2)
    }),
    entries: entries.skip(2)
  });
}

export {
  setEntries,
  next
};