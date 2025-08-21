const SkillsComp = ({ skill, getSkill, isClicked }) => {
  const click = () => {
    getSkill({type: 'editS', skill});
    isClicked(true);
  };
  return (
    <>
      <div className="skill" >
        <span>{ skill }</span>
        <div className="menu">
          <span>Remove</span>
          <span onClick={click}>Edit</span>
        </div>
      </div>
    </>
  );
};

export default SkillsComp;
