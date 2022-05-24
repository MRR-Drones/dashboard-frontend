import React, { useState } from 'react';
import './NotificationsBell.scss';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';

// Import components
import Tooltip from '../../../Tooltip/Tooltip';

export default function NotificationsBell() {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  return (
    <div className="NotificationsBell">
      <FontAwesomeIcon
        onClick={() => {
          setTooltipOpen(true);
        }}
        icon={regular('bell')}
      />
      <Tooltip
        open={tooltipOpen}
        onClose={() => {
          setTooltipOpen(!tooltipOpen);
        }}
        position="bottom"
      >
        test inhoud tootlip
      </Tooltip>
    </div>
  );
}
