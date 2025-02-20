import React from 'react';
import { TaskInfo } from '../types';

type TaskProps = {
  id: string;
  info: TaskInfo;
  onMarkAsDone: () => void;
  onDelete: () => void;
};

export default function Task({ id, info, onMarkAsDone, onDelete }: TaskProps) {
  return (
    <div className="card mb-3 position-relative">
      <span
        className={`badge position-absolute top-0 end-0 m-3 ${
          info.done ? 'bg-success' : 'bg-warning'
        }`}
        style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}
      >
        {info.done ? 'Completed' : 'Pending'}
      </span>
      <div className="card-body">
        <h5 className="card-title">{info.name}</h5>
        <p className="card-text">{info.description}</p>
        <div className="d-flex mt-3">
          <button
            className={`btn ${info.done ? 'btn-secondary' : 'btn-primary'}`}
            onClick={() => onMarkAsDone()}
            disabled={info.done}
            style={{ width: '80%' }}
          >
            Mark as Done
          </button>
          <button
            className="btn btn-danger ms-2"
            onClick={() => onDelete()}
            style={{ width: '20%' }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}