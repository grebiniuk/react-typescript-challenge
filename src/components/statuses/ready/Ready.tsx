import React from 'react';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import TranslateOutlinedIcon from '@material-ui/icons/TranslateOutlined';

import {BUTTON_TITLES} from '../../../const/card.consts';
import {useStyles} from './Ready.styles';

type ReadyItem = {
  languagesNumber: number,
  hovered: boolean
};

function Ready({languagesNumber, hovered}: ReadyItem) {

  const styles = useStyles();

  return (
      <>
        <div className="position-absolute m-2">
          <button className={`btn btn-light ${styles.btnLabeled}`}>
            <span className={styles.btnLabel}>
              <TranslateOutlinedIcon className={styles.translateIcon}/>
            </span>
            {languagesNumber}{languagesNumber > 1 ? ' languages' : ' language'}
          </button>
        </div>
        {hovered ?
            <>
              <div className={styles.dark}/>
              <div className={styles.middle}>
                <button className="btn btn-outline-light px-5">{BUTTON_TITLES.edit}</button>
              </div>
              <div className={styles.topRight}>
                <button className="btn btn-link"><DeleteOutlineOutlinedIcon style={{color: '#fff'}}/></button>
              </div>
            </> : ''
        }
      </>
  )
}

export default Ready;
