import { NavLink, Route, Routes } from 'react-router-dom';
import Activities from './components/Activities.jsx';
import Leaderboard from './components/Leaderboard.jsx';
import Teams from './components/Teams.jsx';
import Users from './components/Users.jsx';
import Workouts from './components/Workouts.jsx';
import { apiBaseUrl } from './api.js';
import './App.css';

const navigation = [
  { label: 'Overview', path: '/' },
  { label: 'Activities', path: '/activities' },
  { label: 'Leaderboard', path: '/leaderboard' },
  { label: 'Teams', path: '/teams' },
  { label: 'People', path: '/users' },
  { label: 'Workouts', path: '/workouts' },
];

function Overview() {
  return (
    <section className="overview-page">
      <div className="overview-intro">
        <p className="eyebrow">Your movement, in focus</p>
        <h1>Make today count.</h1>
        <p className="overview-copy">
          Track the small wins, find your people, and keep a clear view of the habits that move you forward.
        </p>
        <NavLink className="primary-action" to="/activities">Log an activity <span aria-hidden="true">↗</span></NavLink>
      </div>
      <div className="overview-mark" aria-hidden="true">
        <span>O</span>
        <span>F</span>
        <span>IT</span>
      </div>
      <div className="overview-grid">
        <NavLink className="overview-card overview-card-teal" to="/leaderboard">
          <span className="card-index">01</span>
          <strong>See the board</strong>
          <span>Celebrate consistency across the community.</span>
        </NavLink>
        <NavLink className="overview-card overview-card-coral" to="/workouts">
          <span className="card-index">02</span>
          <strong>Find a workout</strong>
          <span>Pick a session that fits your energy today.</span>
        </NavLink>
        <NavLink className="overview-card overview-card-ink" to="/teams">
          <span className="card-index">03</span>
          <strong>Meet your team</strong>
          <span>Momentum is better when it is shared.</span>
        </NavLink>
      </div>
      <p className="api-note">Connected to <code>{apiBaseUrl}</code></p>
    </section>
  );
}

function App() {
  return (
    <div className="app-frame">
      <header className="topbar">
        <NavLink className="brand" to="/" aria-label="OctoFit Tracker home">
          <img src="/octofitapp-small.png" alt="" />
          <span>OctoFit <em>Tracker</em></span>
        </NavLink>
        <nav className="main-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="status-chip"><span aria-hidden="true" /> API online</div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>

      <footer className="footer">
        <span>OCTOFIT / 2026</span>
        <span>Built for the next good choice.</span>
      </footer>
    </div>
  );
}

export default App;
