const ProjectsComp = ({ name, disc, link, isClicked, getData }) => {
  const click = () => {
    isClicked(true);
    getData({type: 'editP', name, disc, link});
  };
  return (
    <div className="project" onClick={click}>
      <div className="name">{ name }</div>
      <div className="disc">{ disc }</div>
      <div className="link">{ link }</div>
    </div>
  );
};

export default ProjectsComp;
