import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <main className="landing-page">

      {/* Hero */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center g-5">

            {/* Left Content */}
            <div className="col-lg-7">
              <span className="hero-badge">
                Smart luggage storage network
              </span>

              <h1 className="hero-title">
                Travel light.
                <br />
                <span>Explore more.</span>
              </h1>

              <p className="hero-description">
                Find safe and convenient places to store your
                luggage while you explore the city without
                carrying heavy bags everywhere.
              </p>

              <div className="hero-actions">
                <Link
                  to="/explore-storage"
                  className="btn btn-hero-primary"
                >
                  Find Storage
                </Link>

                <Link
                  to="/register"
                  className="btn btn-hero-secondary"
                >
                  Become a Partner
                </Link>
              </div>

              <div className="hero-trust">
                <div>
                  <strong>Safe</strong>
                  <span>Verified locations</span>
                </div>

                <div>
                  <strong>Simple</strong>
                  <span>Easy booking</span>
                </div>

                <div>
                  <strong>Flexible</strong>
                  <span>Pay for what you use</span>
                </div>
              </div>
            </div>


            {/* Right Visual */}
            <div className="col-lg-5">
              <div className="hero-visual">

                <div className="visual-circle"></div>

                <div className="luggage-card">
                  <div className="luggage-handle"></div>

                  <div className="luggage-body">
                    <div className="luggage-label">
                      BAG
                    </div>

                    <div className="luggage-line"></div>
                    <div className="luggage-line short"></div>
                  </div>

                  <div className="luggage-wheel left"></div>
                  <div className="luggage-wheel right"></div>
                </div>


                <div className="storage-floating-card">
                  <span className="floating-dot"></span>

                  <div>
                    <strong>Storage Available</strong>
                    <small>Near your destination</small>
                  </div>
                </div>


                <div className="location-floating-card">
                  <strong>12+</strong>
                  <span>Storage spots</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Quick Stats */}
      <section className="stats-section">
        <div className="container">

          <div className="row g-3">

            <div className="col-6 col-lg-3">
              <div className="stat-box">
                <strong>50+</strong>
                <span>Storage Locations</span>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="stat-box">
                <strong>1,200+</strong>
                <span>Bags Stored</span>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="stat-box">
                <strong>98%</strong>
                <span>Happy Travellers</span>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="stat-box">
                <strong>24/7</strong>
                <span>Booking Access</span>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}

export default LandingPage;