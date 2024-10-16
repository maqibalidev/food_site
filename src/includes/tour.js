import React, { useState, useEffect } from 'react';
import Joyride from 'react-joyride';
import { steps } from '../assets/data/data';
import './tour.css';

const JorideCustom = ({ content, index, total_steps, backProps, primaryProps, closeProps, skipProps, isLast }) => {
  return (
    <div className='d-flex flex-column p-3 my-2' style={{ width: '300px', backgroundColor: '#ffffff', borderRadius: '10px' }}>
      <div className='text-end'>
        <p>{`${index + 1} / ${total_steps}`}</p>
      </div>
      <div>
        <p className='mb-3'>{content}</p>
      </div>

      <div className='d-flex w-100 justify-content-between'>
        <div>
          <button className='btn btn-secondary px-2' {...skipProps}>
            SKIP
          </button>
        </div>

        <div>
          {/* {index > 0 && (
            <button className='btn btn-success px-2 mx-1' {...backProps}>
              BACK
            </button>
          )} */}
          <button className='btn btn-success px-2 mx-1' {...primaryProps}>
            {isLast ? 'FINISH' : 'NEXT'}
          </button>
        </div>
      </div>
    </div>
  );
};

const CustomBeacon = (props) => {
  return <div className='custom-beacon' {...props}>START TOUR</div>;
};

const MyComponent = () => {
  const [run, setRun] = useState(false);

  useEffect(() => {

    const visited = localStorage.getItem('visited');
    if (!visited) {
 
      setRun(true);
    }
  }, []);

  const handleTourFinish = () => {
    
    localStorage.setItem('visited', 'true');
    setRun(false); 
  };

  return (
    <div>
      <Joyride
        steps={steps}
        run={run}
        spotlightPadding={5}
        continuous
      
        beaconComponent={CustomBeacon}
        tooltipComponent={(props) => (
          <JorideCustom
            content={props.step.content}
            index={props.index}
            isLast={props.isLastStep}
            total_steps={steps.length}
            // backProps={props.backProps}
            primaryProps={props.primaryProps}
            closeProps={props.closeProps}
            skipProps={props.skipProps}
          />
        )}
        styles={{
          options: {
            arrowColor: '#ffffff',
            backgroundColor: 'transparent',
            beaconSize: 100,
            color: '#FFFFFF',
            primaryColor: '#FF9800',
            textColor: '#FFFFFF',
          },
        }}
        callback={({ status } ) => {
       
          if (status === 'finished' || status === 'skipped') {
            handleTourFinish();
          }
        }}
      />
    </div>
  );
};

export default MyComponent;
