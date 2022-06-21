import React, { useContext } from 'react';
import './NotificationsBell.scss';
import { motion } from 'framer-motion';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro';

// Import components
import Tooltip from '../../../Tooltip/Tooltip';
import Notification from '../../../Notifications/Notification/Notification';

// Import context
import { SideNavContext } from '../SideNav';

export default function NotificationsBell() {
  const { notificationsTooltipOpen, setNotificationsTooltipOpen, setWeatherTooltipOpen } = useContext(SideNavContext);
  const data = [
    {
      id: 1,
      messageTitle: 'titeltje 1',
      message: 'message',
      messageType: 'warning',
    },
    {
      id: 2,
      messageTitle: 'titeltje 2',
      message: 'message 2',
      messageType: 'error',
    },
    {
      id: 3,
      messageTitle: 'titeltje 3',
      message: 'message 3',
      messageType: 'check',
    },
  ];
  return (
    <div className="NotificationsBell">
      <FontAwesomeIcon
        onClick={() => {
          if (notificationsTooltipOpen === true) {
            setNotificationsTooltipOpen(false);
          } else {
            setNotificationsTooltipOpen(true);
            setWeatherTooltipOpen(false);
          }
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
        <div className="heading">
          <h3>Notifications</h3>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.25 }} whileTap={{ scale: 0.75 }}>
            <FontAwesomeIcon className="clearAll" icon={solid('bars-staggered')} />
          </motion.div>
        </div>
        <div className="messages">
          {data.map((item, index) => (
            <Notification
              key={item.id}
              messageTitle={item.messageTitle}
              message={item.message}
              messageType={item.messageType}
              firstChild={index === 0}
            />
          ))}
        </div>
      </Tooltip>
    </div>
  );
}
