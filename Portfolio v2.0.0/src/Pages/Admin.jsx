import Panel from '../Components/Panel';
import '../Styles/admin.css';

const Admin = () => {
  return (
    <>
      <main className="admin">
        <div className="welcome-dev">
          <h2 className="dev hollow">hello my developer...</h2>
        </div>
        <section className="panel">
          <Panel />
        </section>
      </main>
    </>
  );
}

export default Admin;
