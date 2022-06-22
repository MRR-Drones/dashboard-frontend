/* eslint-disable */

import React, { useEffect, useState } from 'react';
import '../shared.scss';
import './TestPage.scss';

import { useRef } from 'react';
import Chat from '../../components/SignalR/Chat';
import Button from '../../components/Button/Button';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import axios from 'axios';

export default function TestPage() {
  const [scriptName, setScriptName] = useState();
  const [coords, setCoords] = useState();

  const [connection, setConnection] = useState(null);
  const [chat, setChat] = useState([]);
  const latestChat = useRef(null);
  const textAreaRef = useRef(null);

  latestChat.current = chat;

  const connectionEstablishedHandler = () => {
    textAreaRef.current.append('Connected!' + '\n');
  };

  const realTimeDataReceivedHandler = (data) => {
    console.log(data);
    textAreaRef.current.append(data + '\n');
    textAreaRef.current.scrollTop = textAreaRef.current.scrollHeight;
  };

  const eraseTextarea = () => {
    textAreaRef.current.value = '';
  };

  const sendWaypoint = () => {
    axios.post(`https://localhost:7001/DroneCommand/Waypoint`, {
      latitude,
      longitude,
      altitude,
      heading,
      order,
      missionId,
    });
  };

  const runScript = () => {
    axios.post(`https://localhost:7001/DroneCommand/RunScript`, { scriptName });
  };

  const startTraining = () => {
    axios.post(`https://localhost:7001/DroneCommand/RunScript`, {
      scriptName: 'f_data.py',
    });
  };

  const startListening = () => {
    axios.post(`https://localhost:7001/DroneCommand/StartListeningToDrone`);
  };

  const sendCoords = () => {
    axios.post(`https://localhost:7001/DroneCommand/SendTrainingCoords`, {
      scriptName: coords,
    });
  };

  const startMission = () => {
    axios.post(`https://localhost:7001/DroneCommand/StartMission`, {
      Id: missionId,
    });
  };

  const endMission = () => {
    axios.post(`https://localhost:7001/DroneCommand/EndMission`, {
      Id: missionId,
    });
  };
  return (
    <PageWrapper fullscreen>
      <Chat onReceivingLiveRawData={realTimeDataReceivedHandler} onConnected={connectionEstablishedHandler} />
      <div style={{ padding: '100px' }} className="TestPage">
        <h2>Drone Testing</h2>
        <br />
        <div className="group">
          <div className="group-item">
            <label htmlFor="coords">Coords</label>
            <input type="text" onChange={(e) => setCoords(e.target.value)} placeholder="Coords" />
          </div>
          <br />
          <Button onclick={sendCoords}>Send Coords</Button>
          <br />
          <Button onclick={startTraining}>Start Training</Button>
        </div>

        <div className="group">
          <div className="group-item">
            <label htmlFor="scriptName">Script Name</label>
            <input type="text" onChange={(e) => setScriptName(e.target.value)} placeholder="Enter script name" />
          </div>

          <br />
          <Button onclick={runScript}>Run script</Button>
        </div>

        <p>
          Debug messages<Button onclick={eraseTextarea}>Clear</Button>
        </p>

        <br />
        <br />
        <br />

        <textarea id="debugMessagesTextArea" name="debugMessages" rows="20" cols="100" ref={textAreaRef}></textarea>
      </div>
    </PageWrapper>
  );
}
