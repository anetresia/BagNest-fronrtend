import { Link } from "react-router-dom";

function Login() {
  return (
    <main className="auth-page">

      <div className="container">
        <div className="row justify-content-center">

          <div className="col-12 col-md-8 col-lg-5">

            <div className="auth-card">

              <div className="auth-header">

                <div className="auth-logo">
                  B
                </div>

                <span className="section-eyebrow">
                  WELCOME BACK
                </span>

                <h1>
                  Login to BagNest
                </h1>

                <p>
                  Access your bookings and manage
                  your luggage storage.
                </p>

              </div>

              <form className="auth-form">

                <div className="mb-3">

                  <label
                    htmlFor="email"
                    className="form-label"
                  >
                    Email address
                  </label>

                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />

                </div>

                <div className="mb-3">

                  <label
                    htmlFor="password"
                    className="form-label"
                  >
                    Password
                  </label>

                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter your password"
                  />

                </div>

                <div className="d-flex justify-content-between align-items-center mb-4">

                  <div className="form-check">

                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="remember"
                    />

                    <label
                      className="form-check-label"
                      htmlFor="remember"
                    >
                      Remember me
                    </label>

                  </div>

                  <button
                    type="button"
                    className="auth-text-button"
                  >
                    Forgot password?
                  </button>

                </div>

                <button
                  type="button"
                  className="btn btn-primary-custom w-100 auth-submit"
                >
                  Login
                </button>

              </form>

              <div className="auth-footer">

                <span>
                  Don't have an account?
                </span>

                <Link to="/register">
                  Create an account
                </Link>

              </div>

            </div>

          </div>

        </div>
      </div>

    </main>
  );
}

export default Login;