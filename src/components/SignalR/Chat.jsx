import { HubConnectionBuilder } from '@microsoft/signalr';
import { useState, useEffect } from 'react';

const Chat = ({ onReceivingRealTimeData, onConnected, onReceivingLiveRawData }) => {
  const [connection, setConnection] = useState(null);

  useEffect(() => {
    // Check for internet. If internet, connect to https://localhost:5000/FlightHub. If no internet, connect to https://localhost:7000/FlightHub
    const newConnection = new HubConnectionBuilder()
      .withUrl('https://localhost:7001/FlightHub')
      .withAutomaticReconnect()
      .build();

    setConnection(newConnection);
  }, []);

  useEffect(() => {
    async function getData() {
      if (connection) {
        console.log(connection);
        await connection
          .start()
          .then(() => {
            onConnected();

            connection.on('FlightData', (flightData) => {
              console.log(flightData);
              onReceivingLiveRawData(flightData);
              // if (flightData.length < 15) return;
              // Remove newline from end of string
              const trimmedData = flightData.trim();
              const groups = trimmedData.split('\n');
              const flightDataObj = {};

              groups.forEach((item) => {
                const keyValuePair = item.split(': ');
                const key = keyValuePair[0];
                const value = keyValuePair[1];
                flightDataObj[key] = Number(value);
              });

              onReceivingRealTimeData(flightDataObj);
            });
          })
          .catch((e) => console.log('Connection failed: ', e));
      }
    }
    getData();
  }, [connection]);
};

export default Chat;
