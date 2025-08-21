const msgs = ({ subj, date, msg, name }) => {
  return (
    <div className="msg-cont">
      <div className="subj">{ subj }</div>
      <div className="row">
        <div className="date">{ date }</div>
        <div className="name">{ name }</div>
      </div>
      <div className="msg mb-3">
        <pre style={{display: 'inline'}}>    </pre>
        <p style={{display: 'inline'}}>{ msg }</p>
      </div>
    </div>
  );
};

export default msgs;
