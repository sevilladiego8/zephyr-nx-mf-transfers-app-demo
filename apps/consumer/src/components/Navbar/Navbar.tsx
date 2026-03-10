// import { lazy } from "react";
import { Link } from "react-router-dom";

// const FederatedButton = lazy(() => import("federated_shared_ui/button"));

type NavBarProps = {
  links: { label: string; href: string }[];
};

const Navbar = (props: NavBarProps) => {
  const { links } = props;
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Transfers App 
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end"
          tabIndex={Number("-1")}
          id="mainNavbar"
          aria-labelledby="mainNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="mainNavbarLabel">
              Transfers App 
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              {links.map((link, index) => (
                <li className="nav-item" key={link.label}>
                  <Link
                    className={`nav-link${index === 0 ? " active" : ""}`}
                    to={link.href}
                    aria-current={index === 0 ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/*<FederatedButton
              text="Federate"
              type="button"
              variant="success"
              onClick={() => console.log("Clicked")}
            />*/}
            <button> TEST BUTTON </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;