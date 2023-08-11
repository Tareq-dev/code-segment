import Head from "next/head";
import Link from "next/link";

const Page = () => (
  <>
    <Head>
      <title>Home | Code Segment</title>
    </Head>
    <header id="header" className="fixed-top d-flex align-items-center header-transparent">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <h1>
            <a href="index.html">
              <span>Code Segment</span>
            </a>
          </h1>
          {/* <!-- Uncomment below if you prefer to use an image logo --> */}
          {/* <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}
        </div>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#features">
                Features
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#gallery">
                Gallery
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#team">
                Team
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#pricing">
                Pricing
              </a>
            </li>
            <Link className="nav-link scrollto" href="/overview">
              Dashboard
            </Link>

            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        {/* <!-- .navbar --> */}
      </div>
    </header>

    <section id="hero">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
            <div data-aos="zoom-out">
              <h1>
                Build Your Landing Page With <span>Bootstlander</span>
              </h1>
              <h2>We are team of talented designers making websites with Bootstrap</h2>
              <div className="text-center text-lg-start">
                <a href="#about" className="btn-get-started scrollto">
                  Get Started
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 order-1 order-lg-2 hero-img"
            data-aos="zoom-out"
            data-aos-delay="300"
          >
            <img src="assets/img/hero-img.png" className="img-fluid animated" alt="" />
          </div>
        </div>
      </div>

      <svg
        className="hero-waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="wave1">
          <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)" />
        </g>
        <g className="wave2">
          <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)" />
        </g>
        <g className="wave3">
          <use xlinkHref="#wave-path" x="50" y="9" fill="#fff" />
        </g>
      </svg>
    </section>
    {/* <!-- End Header --> */}

    {/* <!-- ======= About Section ======= --> */}

    <section id="about" className="about">
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch"
            data-aos="fade-right"
          >
            <a
              href="https://www.youtube.com/watch?v=StpBR2W8G5A"
              className="glightbox play-btn mb-4"
            ></a>
          </div>

          <div
            className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5"
            data-aos="fade-left"
          >
            <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
            <p>
              Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et
              sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores
              excepturi. Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.
            </p>

            <div className="icon-box" data-aos="zoom-in" data-aos-delay="100">
              <div className="icon">
                <i className="bx bx-fingerprint"></i>
              </div>
              <h4 className="title">
                <a href="">Lorem Ipsum</a>
              </h4>
              <p className="description">
                Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                occaecati cupiditate non provident
              </p>
            </div>

            <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
              <div className="icon">
                <i className="bx bx-gift"></i>
              </div>
              <h4 className="title">
                <a href="">Nemo Enim</a>
              </h4>
              <p className="description">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque
              </p>
            </div>

            <div className="icon-box" data-aos="zoom-in" data-aos-delay="300">
              <div className="icon">
                <i className="bx bx-atom"></i>
              </div>
              <h4 className="title">
                <a href="">Dine Pad</a>
              </h4>
              <p className="description">
                Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut
                deserunt minus aut eligendi omnis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- End About Section --> */}

    {/* <!-- ======= Features Section ======= --> */}
    <section id="features" className="features">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Features</h2>
          <p>Check The Features</p>
        </div>

        <div className="row" data-aos="fade-left">
          <div className="col-lg-3 col-md-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="50">
              {/* <!-- <i className="ri-store-line" style="color: #ffbb2c;"></i> --> */}
              <h3>
                <a href="">Lorem Ipsum</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="100">
              {/* <!-- <i className="ri-bar-chart-box-line" style="color: #5578ff;"></i> --> */}
              <h3>
                <a href="">Dolor Sitema</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="150">
              {/* <!-- <i className="ri-calendar-todo-line" style="color: #e80368;"></i> --> */}
              <h3>
                <a href="">Sed perspiciatis</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
              {/* <!-- <i className="ri-paint-brush-line" style="color: #e361ff;"></i> --> */}
              <h3>
                <a href="">Magni Dolores</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="250">
              {/* <!-- <i className="ri-database-2-line" style="color: #47aeff;"></i> --> */}
              <h3>
                <a href="">Nemo Enim</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="300">
              {/* <!-- <i className="ri-gradienter-line" style="color: #ffa76e;"></i> --> */}
              <h3>
                <a href="">Eiusmod Tempor</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="350">
              {/* <!-- <i className="ri-file-list-3-line" style="color: #11dbcf;"></i> --> */}
              <h3>
                <a href="">Midela Teren</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="400">
              {/* <!-- <i className="ri-price-tag-2-line" style="color: #4233ff;"></i> --> */}
              <h3>
                <a href="">Pira Neve</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="450">
              {/* <!-- <i className="ri-anchor-line" style="color: #b2904f;"></i> --> */}
              <h3>
                <a href="">Dirada Pack</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="500">
              {/* <!-- <i className="ri-disc-line" style="color: #b20969;"></i> --> */}
              <h3>
                <a href="">Moton Ideal</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="550">
              {/* <i className="ri-base-station-line" style="color: #ff5828;"></i> */}
              <h3>
                <a href="">Verdo Park</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="600">
              {/* <!-- <i className="ri-fingerprint-line" style="color: #29cc61;"></i> --> */}
              <h3>
                <a href="">Flavor Nivelanda</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- End Features Section --> */}

    {/* <!-- ======= Counts Section ======= --> */}
    <section id="counts" className="counts">
      <div className="container">
        <div className="row" data-aos="fade-up">
          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              {/* <!-- <i className="bi bi-emoji-smile"></i> --> */}
              <span
                data-purecounter-start="0"
                data-purecounter-end="232"
                data-purecounter-duration="1"
                className="purecounter"
              >
                232
              </span>
              <p>Happy Clients</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div className="count-box">
              {/* <!-- <i className="bi bi-journal-richtext"></i> --> */}
              <span
                data-purecounter-start="0"
                data-purecounter-end="521"
                data-purecounter-duration="1"
                className="purecounter"
              >
                521
              </span>
              <p>Projects</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              {/* <!-- <i className="bi bi-headset"></i> --> */}
              <span
                data-purecounter-start="0"
                data-purecounter-end="1463"
                data-purecounter-duration="1"
                className="purecounter"
              >
                1463
              </span>
              <p>Hours Of Support</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              {/* <!-- <i className="bi bi-people"></i> --> */}
              <span
                data-purecounter-start="0"
                data-purecounter-end="15"
                data-purecounter-duration="1"
                className="purecounter"
              >
                15
              </span>
              <p>Hard Workers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- End Counts Section --> */}
  </>
);

export default Page;
