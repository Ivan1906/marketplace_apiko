import * as actions from './viewerActions';
import Api from './../../api';

export function fetchViewer() {
  return async function initThunk(dispatch) {
    try {
      dispatch(actions.fetchViewer.start());

      const res = await Api
        .Viewer
        .get();

      dispatch(actions.fetchViewer.success(res.data));
    } catch (error) {
      console.error(error);
      dispatch(actions.fetchViewer.error({message: error.message}));
    }
  }
}