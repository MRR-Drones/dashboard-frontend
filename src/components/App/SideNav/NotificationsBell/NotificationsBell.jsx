import React, { useContext } from 'react';
import './NotificationsBell.scss';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';

// Import components
import Tooltip from '../../../Tooltip/Tooltip';

//import context
import { SideNavContext } from '../SideNav';

export default function NotificationsBell() {
  const { notificationsTooltipOpen, setNotificationsTooltipOpen } = useContext(SideNavContext);
  return (
    <div className="NotificationsBell">
      <FontAwesomeIcon
        onClick={() => {
          setNotificationsTooltipOpen(!notificationsTooltipOpen);
        }}
        icon={regular('bell')}
      />
      <Tooltip
        open={notificationsTooltipOpen}
        onClose={() => {
          setNotificationsTooltipOpen(false);
        }}
        position="bottom"
      >
        test inhoud tootlip
      </Tooltip>
    </div>
  );
}
