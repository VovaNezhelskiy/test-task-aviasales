/**
 * Crete async action type with 3 state
 * Because I use typescript-fsa without TS, I need to create small helper for getting 3 state of async action
 * @param type - action name
 * @returns {{started: string, failed: string, done: string}} - async action type with 3 state
 */
export function asyncActionTypeCreator(type) {
  return {
    started: `${type}_STARTED`,
    done: `${type}_DONE`,
    failed: `${type}_FAILED`,
  };
}
