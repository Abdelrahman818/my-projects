import { useState, useEffect } from 'react';
import Loading from '../Components/Loading';
import API from '../api';
import '../Styles/contact.css';
import '../Styles/loading.css';

const Contact = ({ show }) => {
  const [fade, setFade] = useState(false);
  const [render, setRender] = useState(false);
  const [form, setForm] = useState({type: 'contact'});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (show) {
      setRender(true);
      setTimeout(() => setFade(true), 25);
    } else {
      setFade(false);
      setTimeout(() => setRender(false), 200);
    }
  }, [show]);
  const handelForm = (e) => {
    const {id, value} = e.target;
    setForm({ ...form, [id]: value });
  };
  const handelSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    fetch(API, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then(res => res.json())
      .then(json => {
        if (json.msg === 'sent') {
          setLoading(false);
        } else if (json.msg === 'login') {
          localStorage.setItem('role', 'admin');
          window.location.reload();
        }
      })
      .finally(() => setLoading(false));
  };
  return (
    <>
      {render &&
        <section className={`contact ${fade ? 'fade-in' : 'fade-out'}`}>
          <div className="title-cont">
            <h2 className="title hollow">contact me</h2>
          </div>
          <form
            className="contact-form d-flex flex-direction-column"
            onSubmit={handelSubmit}
          >
            <div>
              <label htmlFor="name" className="name-lable">
                name: 
              </label>
              <input id="name" placeholder="someone" type="text" onChange={handelForm} required />
            </div>

            <div>
              <label htmlFor="subj" className="subj-lable">
                subject: 
              </label>
              <input id="subj" placeholder="something" type="text" onChange={handelForm} required />
            </div>

            <div>
              <label htmlFor="msg" className="msg-lable">
                content: 
              </label>
              <textarea
                id="msg"
                placeholder="something something something something something from someone"
                onChange={handelForm}
                required
              />
            </div>
            <button type='submit'>Submit</button>
          </form>
          <div className="links-btn d-flex justify-content-between mt-4">
            <span className="github"></span>
            <span className="linkedin"></span>
          </div>
        </section>
      }
      { loading && <Loading /> }
    </>
  );
};

export default Contact;
