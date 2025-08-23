import { useState, useEffect } from "react";
import API from '../api';
import MsgComp from "./MsgComp";
import ProjectsComp from "./ProjectsComp";
import SkillsComp from "./SkillsComp";

const Panel = () => {
  const [data, setData] = useState([]);
  const [currComp, setCurrComp] = useState('msgs');
  const [loading, setLoading] = useState(false);
  const [editP, setEditP] = useState(false);
  const [editS, setEditS] = useState(false);
  const [formData, setFormData] = useState({});

  const closeEdit = () => {
    setEditP(false);
    setEditS(false);
    setFormData({});
  };
  const handleForm = (target) => {
    const {id, value} = target;
    setFormData(prev => ({...prev, [id]: value}));
    console.log(formData);
  };
  useEffect(() => {
    setLoading(true);
    let type;
    switch (currComp) {
      case 'msgs':
        type = 'getMsgs';
        break;
      case 'projects':
        type = 'getProjects';
        break;
      case 'skills':
        type = 'getSkills';
        break;
      default:
        type = 'getMsgs';
    }

    fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type }),
    })
      .then(res => res.json())
      .then(setData)
      .catch(e => console.error(e))
      .finally(() => setLoading(false));
  }, [currComp]);
  const renderComp = () => {
    switch (currComp) {
      case 'msgs':
        return (
          <div className="msgs">
            {data.map((e) => (
              <MsgComp
                key={e.id}
                subj={e.subj}
                date={e.date}
                name={e.name}
                msg={e.msg}
              />
            ))}
          </div>
        );
      case 'projects':
        return (
          <div className="projects">
            {data.map((project, index) => (
              <ProjectsComp
                key={index}
                name={project.name}
                disc={project.disc}
                link={project.link}
                isClicked={setEditP}
                getData={setFormData}
              />
            ))}
            <div className="add-project" onClick={() => {setEditP(true);setFormData({ type: 'addP' })}}>+</div>
          </div>
        );
      case 'skills':
        return (
          <div className="skills">
            {data.map(e => (
              <SkillsComp
                key={e.id}
                skill={e.skill}
                getSkill={setFormData}
                isClicked={setEditS} />
            ))}
            <div className="add skill" onClick={() => {setEditS(true);setFormData({type: 'addS'})}}>+</div>
          </div>
        );
      default:
        return null;
    };
  };
  const sendData = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(API, {
      method: 'POST',
      headers: {'Content-Type': 'Application/json'},
      body: JSON.stringify(formData),
    }).then(res => res.json())
      .then(json => {
        if (json.msg === 'done') {
          closeEdit();
          setCurrComp(prev => prev);
        }
      })
      .finally(() => setLoading(false));
  };
  const logout = () => {
    localStorage.removeItem('role');
    window.location.reload();
  };

  return (
    <div className="controls d-flex">
      <ul className="options">
        <li onClick={() => setCurrComp('msgs')}>Show messages</li>
        <li onClick={() => setCurrComp('projects')}>Modify projects</li>
        <li onClick={() => setCurrComp('skills')}>Modify skills</li>
        <li onClick={logout}>Logout</li>
      </ul>
      <div className="separator"></div>
      <div className="content">
        {loading ? <div className="spinner"></div> : renderComp()}
      </div>
      {editP &&
        <div className="edit-parent">
          <form onSubmit={sendData}>
            <div>
              <label htmlFor="name">Name</label>
              <input id="name" type="text" value={formData.name} onChange={e => handleForm(e.target)} />
            </div>
            <div>
              <label htmlFor="link">Link</label>
              <input id="link" type="text" value={formData.link} onChange={e => handleForm(e.target)} />
            </div>
            <div className="text-area">
              <label htmlFor="disc">Disc</label>
              <textarea id="disc" type="text" value={formData.disc} onChange={e => handleForm(e.target)} />
            </div>
            <div className="btns">
              <button  type="submit" id="save">Submit</button>
              <button onClick={closeEdit} id="close-btn">Close</button>
            </div>
          </form>
        </div>
      } {editS &&
        <div className="edit-parent">
          <form onSubmit={sendData}>
            <div>
              <label htmlFor="skill">Name</label>
              <input id="skill" type="text" value={formData.skill} onChange={e => handleForm(e.target)} />
            </div>
            <div className="btns">
              <button type="submit" id="save">Submit</button>
              <button onClick={closeEdit} id="close-btn">Close</button>
            </div>
          </form>
        </div>
      }
    </div>
  );
};

export default Panel;
