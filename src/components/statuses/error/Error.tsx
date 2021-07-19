import React from 'react';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';

import {BUTTON_TITLES, ERROR_MESSAGE} from '../../../const/card.consts';
import {useStyles} from './Error.styles';


function Error() {

  const styles = useStyles();

  return (
      <div className={`p-4 position-absolute ${styles.alert}`}>
        <ErrorOutlineOutlinedIcon fontSize="small" className={`${styles.alertIcon}`}/>
        {ERROR_MESSAGE}
        <div className=" d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-light border-dark me-1">{BUTTON_TITLES.deleteFile}</button>
          <button className={`btn text-white ${styles.reportBtn}`}>{BUTTON_TITLES.reportIssue}</button>
        </div>
      </div>
  )
}

export default Error;
