import React from 'react';

import {TRANSCRIBING} from '../../../const/card.consts';
import {useStyles} from './Transcribing.styles';


function Transcribing() {

  const styles = useStyles();

  return (
      <div className={styles.middle}>
        <div className={`text mb-5 ${styles.textMuted}`}>{TRANSCRIBING}</div>
        <div className="progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated brand-color w-100"
               role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}/>
        </div>
      </div>
  )
}

export default Transcribing;
