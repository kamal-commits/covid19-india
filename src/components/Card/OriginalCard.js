import React from 'react';
import CountUp from 'react-countup';
import '../StateTable/style.css';

const OriginalCard = ({
  cases: {
    confirmed,
    deaths,
    recovered,
    deltaconfirmed,
    deltadeaths,
    deltarecovered,
    lastupdatedtime,
  },
}) => {
  //   console.log(confirmed);
  if (!confirmed) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4 col-sm-12">
            <div className="card text-center" style={{ width: '18rem' }}>
              <div className="card-header text-primary font-weight-bold">
                Total Confirmed
              </div>
              <div className="list-group list-group-flush">
                <span className="deltainc mt-2 text-center">
                  {confirmed > 0 ? (
                    <span>
                      [+
                      <CountUp
                        start={0}
                        end={deltaconfirmed}
                        separator=","
                        duration={2.5}
                      />
                      ]
                    </span>
                  ) : null}
                </span>
                <h3 className="font-weight-bold text-primary text-center ">
                  <CountUp
                    start={0}
                    end={confirmed}
                    separator=","
                    duration={2.5}
                  />
                </h3>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-12">
            <div className="card text-center" style={{ width: '18rem' }}>
              <div className="card-header text-success font-weight-bold">
                Total Recovered
              </div>
              <div className="list-group list-group-flush">
                <span className="deltainc2 mt-2 text-center">
                  {recovered > 0 ? (
                    <span>
                      [+
                      <CountUp
                        start={0}
                        end={deltarecovered}
                        separator=","
                        duration={2.5}
                      />
                      ]
                    </span>
                  ) : null}
                </span>
                <h3 className="font-weight-bold text-success text-center ">
                  <CountUp
                    start={0}
                    end={recovered}
                    separator=","
                    duration={2.5}
                  />
                </h3>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-12">
            <div className="card text-center" style={{ width: '18rem' }}>
              <div className="card-header text-danger font-weight-bold">
                Total Deaths
              </div>
              <div className="list-group list-group-flush">
                <span className="deltainc3 mt-2 text-center">
                  {deaths > 0 ? (
                    <span>
                      [+
                      <CountUp
                        start={0}
                        end={deltadeaths}
                        separator=","
                        duration={2.5}
                      />
                      ]
                    </span>
                  ) : null}
                </span>
                <h3 className="font-weight-bold text-danger text-center ">
                  <CountUp
                    start={0}
                    end={deaths}
                    separator=","
                    duration={2.5}
                  />
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-right mt-3 font-weight-bold text-secondary">
        Last Updated : {lastupdatedtime}
      </p>
    </div>
  );
};

export default OriginalCard;
