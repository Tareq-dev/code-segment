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
              আপনার ক্যারিয়ার গড়ার দৃঢ় প্রত্যয়ে, <span>Code Segment</span> আছে সাথে
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
            <h3>আমাদের থেকে যা পাবেন</h3>
            <p>
              প্রযুক্তি বিপ্লবের এই যুগে সফল ক্যারিয়ার গড়ার লক্ষ্যে প্রযুক্তি সম্পর্কে জানার ও শেখার কোনো বিকল্প নেই।
              আমরা আপনার শেখা এবং জানার আগ্রহকে ক্যারিয়ার পর্যন্ত পৌঁছে দিতে আমাদের অবদান সমূহঃ
            </p>

            <div className="icon-box" data-aos="zoom-in" data-aos-delay="100">
              <div className="icon">
                <i className="bx bx-fingerprint"></i>
              </div>
              <h4 className="title">
                <a href="">অনলাইন লাইভ ক্লাস</a>
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
                <a href="">অনলাইন সাপোর্ট সেশন</a>
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
                <a href="">প্রজেক্টবেস ক্লাস</a>
              </h4>
              <p className="description">
                Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut
                deserunt minus aut eligendi omnis
              </p>
            </div>
            
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="300">
              <div className="icon">
                <i className="bx bx-atom"></i>
              </div>
              <h4 className="title">
                <a href="">লাইভ প্রজেক্ট ও এসাইনমেন্ট</a>
              </h4>
              <p className="description">
                Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut
                deserunt minus aut eligendi omnis
              </p>
            </div>
            
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="300">
              <div className="icon">
                <i className="bx bx-atom"></i>
              </div>
              <h4 className="title">
                <a href="">চাকরি ও ইন্টার্নশিপের প্রস্তুতি</a>
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
          <h2>প্রযুক্তি</h2>
          <p>আমরা যা শেখাবো</p>
        </div>

        <div className="row" data-aos="fade-left">
          <div className="col-lg-3 col-md-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="50">
              {/* <!-- <i className="ri-store-line" style="color: #ffbb2c;"></i> --> */}
              <h3>
                <a href="">HTML5</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="100">
              {/* <!-- <i className="ri-bar-chart-box-line" style="color: #5578ff;"></i> --> */}
              <h3>
                <a href="">CSS3</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="150">
              {/* <!-- <i className="ri-calendar-todo-line" style="color: #e80368;"></i> --> */}
              <h3>
                <a href="">Responsive Web Design</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
              {/* <!-- <i className="ri-paint-brush-line" style="color: #e361ff;"></i> --> */}
              <h3>
                <a href="">Bootstrap</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="250">
              {/* <!-- <i className="ri-database-2-line" style="color: #47aeff;"></i> --> */}
              <h3>
                <a href="">Tailwind CSS</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="300">
              {/* <!-- <i className="ri-gradienter-line" style="color: #ffa76e;"></i> --> */}
              <h3>
                <a href="">JavaScript</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="350">
              {/* <!-- <i className="ri-file-list-3-line" style="color: #11dbcf;"></i> --> */}
              <h3>
                <a href="">Github</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="400">
              {/* <!-- <i className="ri-price-tag-2-line" style="color: #4233ff;"></i> --> */}
              <h3>
                <a href="">React</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="450">
              {/* <!-- <i className="ri-anchor-line" style="color: #b2904f;"></i> --> */}
              <h3>
                <a href="">RESTful API</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="500">
              {/* <!-- <i className="ri-disc-line" style="color: #b20969;"></i> --> */}
              <h3>
                <a href="">Firebase</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="550">
              {/* <i className="ri-base-station-line" style="color: #ff5828;"></i> */}
              <h3>
                <a href="">NodeJS</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="600">
              {/* <!-- <i className="ri-fingerprint-line" style="color: #29cc61;"></i> --> */}
              <h3>
                <a href="">MongoDB</a>
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
               ৭০
              </span>
              <p>সর্বমোট ক্লাস</p>
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
                ১৫
              </span>
              <p>প্র্যাকটিস প্রজেক্ট</p>
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
                ১৬
              </span>
              <p>এসাইনমেন্ট</p>
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
                ৩৫
              </span>
              <p>সর্বোচ্চ শিক্ষার্থী/ব্যাচ</p>
            </div>
          </div>


        </div>
      </div>
    </section>
    {/* <!-- End Counts Section --> */}
    {/* <!-- ======= Details Section ======= --> */}
    <section id="details" className="details">
      <div className="container">

        <div className="row content">
          <div className="col-md-4" data-aos="fade-right">
            <img src="assets/img/details-1.png" className="img-fluid" alt=""/>
          </div>
          <div className="col-md-8 pt-4" data-aos="fade-up">
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i className="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="bi bi-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i className="bi bi-check"></i> Iure at voluptas aspernatur dignissimos doloribus repudiandae.</li>
              <li><i className="bi bi-check"></i> Est ipsa assumenda id facilis nesciunt placeat sed doloribus praesentium.</li>
            </ul>
            <p>
              Voluptas nisi in quia excepturi nihil voluptas nam et ut. Expedita omnis eum consequatur non. Sed in asperiores aut repellendus. Error quisquam ab maiores. Quibusdam sit in officia
            </p>
          </div>
        </div>

        <div className="row content">
          <div className="col-md-4 order-1 order-md-2" data-aos="fade-left">
            <img src="assets/img/details-2.png" className="img-fluid" alt=""/>
          </div>
          <div className="col-md-8 pt-5 order-2 order-md-1" data-aos="fade-up">
            <h3>Corporis temporibus maiores provident</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
            <p>
              Inventore id enim dolor dicta qui et magni molestiae. Mollitia optio officia illum ut cupiditate eos autem. Soluta dolorum repellendus repellat amet autem rerum illum in. Quibusdam occaecati est nisi esse. Saepe aut dignissimos distinctio id enim.
            </p>
          </div>
        </div>

        <div className="row content">
          <div className="col-md-4" data-aos="fade-right">
            <img src="assets/img/details-3.png" className="img-fluid" alt=""/>
          </div>
          <div className="col-md-8 pt-5" data-aos="fade-up">
            <h3>Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h3>
            <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
            <ul>
              <li><i className="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="bi bi-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i className="bi bi-check"></i> Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</li>
            </ul>
            <p>
              Qui consequatur temporibus. Enim et corporis sit sunt harum praesentium suscipit ut voluptatem. Et nihil magni debitis consequatur est.
            </p>
            <p>
              Suscipit enim et. Ut optio esse quidem quam reiciendis esse odit excepturi. Vel dolores rerum soluta explicabo vel fugiat eum non.
            </p>
          </div>
        </div>

        <div className="row content">
          <div className="col-md-4 order-1 order-md-2" data-aos="fade-left">
            <img src="assets/img/details-4.png" className="img-fluid" alt=""/>
          </div>
          <div className="col-md-8 pt-5 order-2 order-md-1" data-aos="fade-up">
            <h3>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
            <ul>
              <li><i className="bi bi-check"></i> Et praesentium laboriosam architecto nam .</li>
              <li><i className="bi bi-check"></i> Eius et voluptate. Enim earum tempore aliquid. Nobis et sunt consequatur. Aut repellat in numquam velit quo dignissimos et.</li>
              <li><i className="bi bi-check"></i> Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
    {/* <!-- End Details Section --> */}

  </>
);

export default Page;
