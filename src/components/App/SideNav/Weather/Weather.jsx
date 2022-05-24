import React, { useState } from 'react';
import './Weather.scss';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';

// Import components
import Tooltip from '../../../Tooltip/Tooltip';

export default function Weather() {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  return (
    <div className="Weather">
      <FontAwesomeIcon onClick={() => setTooltipOpen(!tooltipOpen)} icon={regular('cloud-sun')} />
      <Tooltip
        open={tooltipOpen}
        onClose={() => {
          setTooltipOpen(false);
        }}
        position="bottom"
      >
        test inhoud tootlip
      </Tooltip>
    </div>
  );
}
