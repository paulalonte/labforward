import React, { FC, Fragment } from 'react';
import { formatDate } from 'utils/date-formatter';

type Props = {
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

const Card: FC<Props> = ({ name, createdAt, updatedAt }) => {
  return (
    <Fragment>
      <div className="card">
        <h3>{name}</h3>
        <p>Created At: {formatDate(createdAt)}</p>
        <p>Updated At: {formatDate(updatedAt)}</p>
      </div>
    </Fragment>
  );
};

export default Card;
