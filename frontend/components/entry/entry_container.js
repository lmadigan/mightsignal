import {connect} from 'react-redux';
import Entries from './entry';
import { selectEntries } from '../../reducers/selectors';
import { fetchEntries, createEntry, fetchMonths, fetchEntry } from '../../actions/entry_action';



const mapStateToProps = (state) => {
  return {
    entries: state.entries,
    thisMonth: selectEntries(state.entries.thisMonth),
    months: state.months
  };
};

const mapDispatchToProps = dispatch => ({
  createEntry: (data) => dispatch(createEntry(data)),
  fetchEntries: () => dispatch(fetchEntries()),
  fetchMonths: () => dispatch(fetchMonths()),
  fetchEntry: () => dispatch(fetchEntry())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Entries);
