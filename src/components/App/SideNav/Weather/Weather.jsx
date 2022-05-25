import React, { useContext } from 'react';
import './Weather.scss';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';

// Import components
import Tooltip from '../../../Tooltip/Tooltip';

//import context
import { SideNavContext } from '../SideNav';

export default function Weather() {
  const { weatherTooltipOpen, setWeatherTooltipOpen } = useContext(SideNavContext);
  return (
    <div className="Weather">
      <FontAwesomeIcon onClick={() => setWeatherTooltipOpen(!weatherTooltipOpen)} icon={regular('cloud-sun')} />
      <Tooltip
        open={weatherTooltipOpen}
        onClose={() => {
          setWeatherTooltipOpen(false);
        }}
        position="bottom"
      >
        test inhoud tootlip
      </Tooltip>
    </div>
  );
}
