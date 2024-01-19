import image from "./assets/avatar-jessica.jpeg";

function App() {
  return (
    <>
      <main>
        <div className="card">
          <div>
            <div>
              <img src={image} height={100} alt="" />
            </div>
            <h1>Jessica Rendall</h1>
            <h3>London,United Kingdom</h3>
            <h4>{`"Front-end developer and avid reader"`}</h4>

            <ul className="social-links">
              <li>
                <a href="#">GitHub</a>
              </li>
              <li>
                <a href="#">Fontend Mentor</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
