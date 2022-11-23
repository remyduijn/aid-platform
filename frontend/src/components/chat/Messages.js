import React from 'react';
import './chat.css';
import moment from 'moment';

export default function Message(props) {
    const {
      data,
      isMine,
      time,
      startsSequence,
      endsSequence,
      showTimestamp
    } = props;
    const friendlyTimestamp = moment(time).format('LLL');
    return (
      <div className={[
        'message',
        `${isMine == 'true' ? 'mine' : ''}`,
        `${startsSequence ? 'start' : ''}`,
        `${endsSequence ? 'end' : ''}`
      ].join(' ')}>
        {
          showTimestamp &&
            <div className="timestamp">
              { friendlyTimestamp }
            </div>
        }

        <div className="bubble-container">
          <div className="bubble" title={friendlyTimestamp}>
            { data }
          </div>
        </div>
      </div>
    );
}