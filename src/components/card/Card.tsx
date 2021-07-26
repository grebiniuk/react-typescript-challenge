import React, {useState} from 'react';
import Moment from 'react-moment';

import {CardItem} from '../app/App';
import {useStyles} from './Card.styles';
import {UPLOAD_STATUS, UPLOAD_STATUS_TEXT} from '../../const/card.consts';
import Error from '../statuses/error/Error';
import Ready from '../statuses/ready/Ready';
import Transcribing from '../statuses/transcribing/Transcribing';

type CardProps = {
  children: CardItem
}

function Card({children: {name, status, cover, languages, updatedAt}}: CardProps) {
  const [hovered, setHovered] = useState(false);
  const styles = useStyles();

  const detailedStatus = UPLOAD_STATUS_TEXT[status];
  const {transcribing} = UPLOAD_STATUS;
  const transcribingStyle = status === transcribing ? styles.transcribing : '';

  return (
      <div className="col col-md-4 col-sm-6 m-6">
        <div className="card h-100 shadow-sm" onMouseEnter={() => {
          setHovered(true)
        }}
             onMouseLeave={() => {
               setHovered(false)
             }}>
          <img
              className={`card-img-top img-fluid ${styles.img} ${transcribingStyle}`}
              src={cover}
              alt={name}
          />
          {
            {
              ready: <Ready languagesNumber={languages.length} hovered={hovered}/>,
              transcribing: <Transcribing/>,
              error: <Error/>
            }[status]
          }
          <div className="card-body text-start">
            <h5 className="card-title">
              {name}
            </h5>
            <div className={`card-text ${styles.textMuted}`}>{detailedStatus}{status === 'ready' ?
                <Moment fromNow>{updatedAt}</Moment> : ''}</div>
          </div>
        </div>
      </div>
  )
}

export default Card;
