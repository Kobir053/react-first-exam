import { useEffect, useState } from 'react'
import './App.css'
import AddMission from './components/addMission/AddMission'
import { Mission } from './types/MissionModel';
import { addData, deleteMission, getData, updateStatus } from './requests';
import MissionGrid from './components/missionGrid/MissionGrid';

function App() {

  const [allMissions, setAllMissions] = useState<Mission[]>([]);
  const [dbChangedFlag, setDbChangedFlag] = useState<boolean>(false);
  
  const getMissions = async () => {
    const missions = await getData();
    if(!missions){
      return;
    }
    setAllMissions(missions);
  }

  const updateMissionOnDb = async (id: string) => {
    try {
      await updateStatus(id);
      setDbChangedFlag(!dbChangedFlag);
    } 
    catch (error: any) {
      throw new Error(error.message);
    }
  }

  const deleteFromDb = async (id: string) => {
    try {
      await deleteMission(id);
      setDbChangedFlag(!dbChangedFlag);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  const addMissionToDb = async(newMission: Mission): Promise<void> => {
    try {
      const addedMission = await addData(newMission);
      if(!addedMission){
        console.log("could not add the mission");
        return;
      }
      setAllMissions([...allMissions, addedMission]);
    } 
    catch (error: any) {
      throw new Error(error.message);
    }
  }

  useEffect(() => {
    getMissions();
    console.log(allMissions);
  }, [dbChangedFlag]);
  
  return (
    <div className='app'>
      <h2 style={{color: "navy"}}>Military Operations Dashboard</h2>
      <AddMission add = {addMissionToDb} setFlag={() => setDbChangedFlag(!dbChangedFlag)}/>
      <MissionGrid missions={allMissions} deleteTheMission={deleteFromDb} updateMission={updateMissionOnDb}/> 
    </div>
  )
}

export default App
