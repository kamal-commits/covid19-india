import React from 'react';
import CountUp from 'react-countup';
import './style.css';

const State = ({
  stateData: {
    state,
    confirmed,
    deaths,
    active,
    recovered,
    deltaconfirmed,
    deltadeaths,
    deltarecovered,
  },
}) => {
  return (
    <tr>
      <td>{state}</td>

      <td>
        <span className="delta">
          {deltaconfirmed > 0 ? (
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="19" x2="12" y2="5"></line>
                <polyline points="5 12 12 5 19 12"></polyline>
              </svg>
              <CountUp
                start={0}
                end={deltaconfirmed}
                separator=","
                duration={2.5}
              />
            </span>
          ) : null}
        </span>
        <CountUp start={0} end={confirmed} separator="," duration={2.5} />
      </td>
      <td>
        <CountUp start={0} end={active} separator="," duration={2.5} />
      </td>
      <td>
        <span className="delta2">
          {deltarecovered > 0 ? (
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="19" x2="12" y2="5"></line>
                <polyline points="5 12 12 5 19 12"></polyline>
              </svg>
              <CountUp
                start={0}
                end={deltarecovered}
                separator=","
                duration={2.5}
              />
            </span>
          ) : null}
        </span>
        <CountUp start={0} end={recovered} separator="," duration={2.5} />
      </td>
      <td>
        <span className="delta3">
          {deltadeaths > 0 ? (
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="19" x2="12" y2="5"></line>
                <polyline points="5 12 12 5 19 12"></polyline>
              </svg>
              <CountUp
                start={0}
                end={deltadeaths}
                separator=","
                duration={2.5}
              />
            </span>
          ) : null}
        </span>
        <CountUp start={0} end={deaths} separator="," duration={2.5} />
      </td>
    </tr>
  );
};
export default State;
