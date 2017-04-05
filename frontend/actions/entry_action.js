import * as EntryAPIUtil from '../util/entry_api_util';
export const RECEIVE_ENTRIES = "RECEIVE_ENTRIES";
export const RECEIVE_ENTRY = "RECEIVE_ENTRY";
export const RECEIVE_MONTHS = "RECEIVE_MONTHS";
export const RECEIVE_ENTRY_ERRORS = "RECEIVE_ENTRY_ERRORS";
export const CLEAR_ENTRY_ERRORS = "CLEAR_ENTRY_ERRORS";


export const createEntry = entry => dispatch => (
    EntryAPIUtil.createEntry(entry)
    .then(entries => dispatch(receiveEntries(entries)),
    err => dispatch(receiveEntryErrors(err.responseJSON)))
  );

export const fetchEntries = entries => dispatch => (
  EntryAPIUtil.fetchEntries(entries)
    .then(resp => dispatch(receiveEntries(resp))
  ));

  export const fetchEntry = entries => dispatch => (
    EntryAPIUtil.fetchEntry(entries)
      .then(resp => dispatch(receiveEntry(resp))
    ));

  export const fetchMonths = entries => dispatch => (
    EntryAPIUtil.fetchMonths(entries)
      .then(resp => dispatch(receiveMonths(resp))
    ));

export const receiveEntries = entries => ({
  type: RECEIVE_ENTRIES,
  entries
});

export const receiveEntry = entries => ({
  type: RECEIVE_ENTRY,
  entries
});

export const receiveMonths = months => ({
  type: RECEIVE_MONTHS,
  months
});


export const receiveEntryErrors = errors => ({
  type: RECEIVE_ENTRY_ERRORS,
  errors
});

export const clearEntryErrors = () => ({
  type: CLEAR_ENTRY_ERRORS
});
