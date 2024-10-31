import React from 'react';
import './missionCard.css';
import { Mission } from '../../types/MissionModel';

interface MissionCardProps {
    mission: Mission;
    deleteTheMission: () => void;
    updateMission: () => void;
}

const MissionCard: React.FC<MissionCardProps> = ({ mission, deleteTheMission, updateMission }) => {

    const setBackgroundByStatus = (): string => {
        let color = "";
        switch(mission.status) {
            case "Pending": 
                color = "red";
                break;
            case "In Progress": 
                color = "orange";
                break;
            case "Completed": 
                color = "green";
                break;
            default: 
                color = "black";
        }
        return color;
    }

  return (
    <div className='mission-card' style={{backgroundColor: setBackgroundByStatus()}}>
        <div className='info'>
            <h3>Name: {mission.name}</h3>
            <p>Status: {mission.status}</p>
            <p>Priority: {mission.priority}</p>
            <p>Description: {mission.description}</p>
        </div>
        <div className='buttons-div'>
            <button className='delete' onClick={deleteTheMission}>Delete</button>
            <button className='progress' onClick={updateMission}>Progress</button>
        </div>
    </div>
  )
}

export default MissionCard