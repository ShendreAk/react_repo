import { Link } from "react-router-dom";

const Sidebar = (/*{ setSelectTab, tab }*/) => {
  // const homeStatus = tab === 'Home' ? 'active' : 'link-body-emphasis';
  // const PostStatus = tab === 'Create Post' ? 'active' : 'link-body-emphasis';
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{ width: "200px" }}>
      <span className="fs-4 sidebarfont">Sidebar</span>
      {/* <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        
      </a> */}
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" /*onClick={() => setSelectTab('Home')}*/>
          <Link to="/" className={`nav-link `} aria-current="page" >
            {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg> */}
            Home
          </Link>
        </li>
        <li /*onClick={() => setSelectTab('Create Post')}*/>
          <Link to="/create-post" className={`nav-link`} >
            {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg> */}
            Create Post
          </Link>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a href="/" className="d-flex align-items-center  text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
          <strong styles={{ color: 'black' }}>Akshay shendre</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li><a className="dropdown-item" href="#">New project...</a></li>
          <li><a className="dropdown-item" href="#">Settings</a></li>
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    </div>
  );
}
export default Sidebar;