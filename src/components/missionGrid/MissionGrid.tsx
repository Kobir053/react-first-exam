import React from 'react';
import './missionGrid.css';
import { Mission } from '../../types/MissionModel';
import MissionCard from '../missionCard/MissionCard';

interface MissionGridProps {
    missions: Mission[];
    deleteTheMission: (id: string) => void;
    updateMission: (id: string) => void;
}

const MissionGrid: React.FC<MissionGridProps> = ({ missions, deleteTheMission, updateMission }) => {

    const renderMissions = () => {
        if(missions.length == 0) return;
        return missions.map((mission: Mission) => {
            return <MissionCard mission={mission} deleteTheMission={() => {deleteTheMission(mission._id!)}} updateMission={() => {updateMission(mission._id!)}}/>
        });
    }

  return (
    <div className='mission-grid'>
        <h3 style={{color: "red"}}>Missions</h3>
        {renderMissions()}
    </div>
  )
}

export default MissionGrid