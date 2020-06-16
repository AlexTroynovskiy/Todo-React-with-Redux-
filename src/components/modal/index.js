import { Modal } from './Modal';
import { connect } from 'react-redux';

import { updateItem, openCloseModal } from '../../redux/action';

const mapStateToProps = (state) => ({
  showModal: state.showModal,
});

const mapDispatchToProps = {
  updateItem,
  openCloseModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
