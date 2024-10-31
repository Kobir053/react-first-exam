import React, { FormEvent, useState } from 'react';
import './addMission.css';
import { Mission } from '../../types/MissionModel';

interface AddMissionProps {
    add: (mission: Mission) => void;
    setFlag: () => void;
}

const AddMission: React.FC<AddMissionProps> = ({ add, setFlag }) => {

    const [formData, setFormData] = useState<Mission>({
        name: "",
        status: "Pending",
        priority: "Low",
        description: ""
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };

    const handleForm = (e: FormEvent) => {
        e.preventDefault();
        console.log(formData);
        add(formData);
        setFlag();
    }

  return (
    <div className='add-mission'>
        <form onSubmit={handleForm}>
            <input type="text" name='name' className='elements' placeholder='name' value={formData.name} onChange={handleChange}/>
            <select name="status" className='elements' value={formData.status} onChange={handleChange}>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>
            <select name="priority" className='elements' value={formData.priority} onChange={handleChange}>
                <option value="Low">Low</option>
                <option value="High">High</option>
            </select>
            <input type="text" name='description' className='elements' placeholder='description' value={formData.description} onChange={handleChange}/>
            <button type='submit'>Add Mission</button>
        </form>
    </div>
  )
}

export default AddMission