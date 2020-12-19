import React from 'react'

const Landing = () => {
    return (
        <div>
            <div>
  {/* ======= Hero Section ======= */}
  <section id="hero">
    <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">
      <ol className="carousel-indicators" id="hero-carousel-indicators">
        <li data-target="#heroCarousel" data-slide-to={0} className />
        <li data-target="#heroCarousel" data-slide-to={1} className="active" />
        <li data-target="#heroCarousel" data-slide-to={2} />
      </ol>
      <div className="carousel-inner" role="listbox">
        {/* Slide 1 */}
        <div className="carousel-item" style={{backgroundImage: 'url(../images/slide-1.jpg)'}}>
          <div className="container">
            <h2>Welcome to <span>Medicio</span></h2>
            <p>We provide an ecosystem where the donors, recipients and others can interact with each other
              directly on secure lines to make the entire procedure more fluid and secure.</p>
            <a href="#about" className="btn-get-started scrollto">Read More</a>
          </div>
        </div>
        {/* Slide 2 */}
        <div className="carousel-item active" style={{backgroundImage: 'url(../images/slide-2.jpg)'}}>
          <div className="container">
            <h2>Tracking Procedure Status</h2>
            <p>Each step (paperwork, medical tests) in the procedure of organ donation will be depicted as a
              checkpoint on the app/website, and the concerned authority can approve their concerned
              checkpoint and upload suitable documents (reports ) to validate their claim. This will ease
              the entire process, add transparency to it, and will provide a more secure ledger for the
              documents</p>
            <a href="#about" className="btn-get-started scrollto">Read More</a>
          </div>
        </div>
        {/* Slide 3 */}
        <div className="carousel-item" style={{backgroundImage: 'url(../images/slide-3.jpg)'}}>
          <div className="container">
            <h2>Moneyback Guarantee</h2>
            <p>Using blockchain technology powered by smart contracts we will ensure that no money of the
              recipient is wasted on a donor who backs out due to unforeseen and obsolete reasons, after
              promising an organ and going through the medical procedures.</p>
            <a href="#about" className="btn-get-started scrollto">Read More</a>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon icofont-simple-left" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon icofont-simple-right" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  </section>{/* End Hero */}
  <main id="main">
    {/* ======= Featured Services Section ======= */}
    <section id="featured-services" className="featured-services">
      <div className="container aos-init" data-aos="fade-up">
        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box aos-init" data-aos="fade-up" data-aos-delay={100}>
              <div className="icon"><i className="icofont-heart-beat" /></div>
              <h4 className="title"><a href>Status
                  of Donor</a></h4>
              <p className="description">Recipients would be able to check their rank in the priority queue
                for receiving the organ, without having to go to the hospital. They would also be able
                to see all the potential donors on the app/website</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box aos-init" data-aos="fade-up" data-aos-delay={200}>
              <div className="icon"><i className="icofont-drug" /></div>
              <h4 className="title"><a href>Sed ut perspiciatis</a></h4>
              <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box aos-init" data-aos="fade-up" data-aos-delay={300}>
              <div className="icon"><i className="icofont-thermometer-alt" /></div>
              <h4 className="title"><a href="https://bootstrapmade.com/demo/templates/Medicio/">Grievance
                  Portal</a></h4>
              <p className="description">User satisfaction is top priority.
                A complain portal will ensure that all grievances will be catered. They can also report
                any discrepancy that they noticed, ensuring a fault-free system.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box aos-init" data-aos="fade-up" data-aos-delay={400}>
              <div className="icon"><i className="icofont-dna-alt-1" /></div>
              <h4 className="title"><a href="https://bootstrapmade.com/demo/templates/Medicio/">Finest Medical
                  Attention</a>
              </h4>
              <p className="description">Providing the best emergency care services to care for your loves
                ones.ICU and life support systems with a 24X7 electricity supply assuring zero
                hinderance</p>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Featured Services Section */}
    {/* ======= Cta Section ======= */}
    <section id="cta" className="cta">
      <div className="container aos-init" data-aos="zoom-in">
        <div className="text-center">
          <h3>In an emergency? Need help now?</h3>
          <p> We are a multispecialty medical center that integrates clinical and hospital care with research
            and education.We are one of the largest and most respected hospitals in the country. Our mission
            is to provide better care of the sick, investigation into their problems, and further education
            of those who serve. Learn more about our leadership, vision, values and model of healthcare.</p>
          <a className="cta-btn scrollto" href="https://bootstrapmade.com/demo/templates/Medicio/#appointment">Make an Make
            an Appointment</a>
        </div>
      </div>
    </section>{/* End Cta Section */}
    {/* ======= About Us Section ======= */}
    <section id="about" className="about">
      <div className="container aos-init" data-aos="fade-up">
        <div className="section-title">
          <h2>About Us</h2>
          <p>Care for the patient as if they are your own family.
            To take care of patients. We are known for exceptional care delivered by multidisciplinary
            teams. We challenge ourselves to get better each year. Our goals are to touch more lives,
            relieve suffering and provide every patient the best care and experience.
            Caregivers
            Treat fellow caregivers as if they were your own family.
            There are nearly 60,000 caregivers around the world. We promote teamwork, inclusion and
            integrity. </p>
        </div>
        <div className="row">
          <div className="col-lg-6 aos-init" data-aos="fade-right">
            <img src="../images/about.jpg" className="img-fluid" alt />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content aos-init" data-aos="fade-left">
            <h3>Increased Efficiency</h3>
            <p className="font-italic">
              Using traditional, paper-heavy processes, trading anything is a time-consuming process that
              is prone to human error and often requires third-party mediation. However, by streamlining
              and automating these processes with blockchain, transactions can be completed faster and
              more efficiently. Since record-keeping is performed using a single digital ledger that is
              shared with both the parties, we don’t have to reconcile multiple ledgers, hence ending up
              with less clutter. And when everyone has access to the same information, it becomes easier
              to trust each other without the need for numerous intermediaries. Thus, clearing and
              settlement can occur much quicker.
            </p>
            <ul>
              <li><i className="icofont-check-circled" /> Effective cost along with funding for the
                underpriviledged</li>
              <li><i className="icofont-check-circled" /> Direct contact with the professionals</li>
              <li><i className="icofont-check-circled" /> Absoluete transparency to establish trust and
                satisfaction
              </li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>
      </div>
    </section>{/* End About Us Section */}
    {/* ======= Counts Section ======= */}
    <section id="counts" className="counts">
      <div className="container aos-init" data-aos="fade-up">
        <div className="row no-gutters">
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="icofont-doctor-alt" />
              <span data-toggle="counter-up">85</span>
              <p><strong>Doctors</strong> specialized in all aspects</p>
              <a href="#">Find out more »</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="icofont-patient-bed" />
              <span data-toggle="counter-up">18</span>
              <p><strong>Life Support</strong> Systems available</p>
              <a href="#">Find out more »</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="icofont-laboratory" />
              <span data-toggle="counter-up">8</span>
              <p><strong>Research Lab</strong> for rigorous testing and diagnosis</p>
              <a href="#">Find out more »</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="icofont-award" />
              <span data-toggle="counter-up">150</span>
              <p><strong>Satisfied</strong> patitnets living a healthy and happy life</p>
              <a href="#">Find out more »</a>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Counts Section */}
    {/* ======= Features Section ======= */}
    <section id="features" className="features">
      <div className="container aos-init" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1 aos-init" data-aos="fade-right">
            <div className="icon-box mt-5 mt-lg-0">
              <i className="bx bx-receipt" />
              <h4>Scan Index</h4>
              <p>the future for security purposes, a full-fledged descriptive report for the person’s body
                organs will be uploaded on our server to authenticate that no other body part has been
                hampered with as there are many cases where the person donating or receiving the organ
                is unaware of what all has been done to him during surgery.</p>
            </div>
            <div className="icon-box mt-5">
              <i className="bx bx-cube-alt" />
              <h4>Health card linking</h4>
              <p>As we all know that the government will be issuing a health card to every citizen in near
                future and so,as an advancement we will be linking it to the user at our network for the
                people to avail the benefits associated with it</p>
            </div>
            <div className="icon-box mt-5">
              <i className="bx bx-images" />
              <h4>Stem Cells</h4>
              <p>At this moment there is no authenticated process for stem cell donation despite the fact
                that it can be used to replace any tissue in the body.</p>
            </div>
            <div className="icon-box mt-5">
              <i className="bx bx-shield" />
              <h4>Completely Automated system</h4>
              <p>The person’s report will be a result of a full CT scan or an MRI to ensure this.We aim at
                developing a secure, easy, and smooth process for the donation and storage purposes like
                the one built for the organ donation by us.</p>
            </div>
          </div>
          <div className="image col-lg-6 order-1 order-lg-2 aos-init" style={{backgroundImage: 'url("../images/features.jpg")'}} data-aos="zoom-in" />
        </div>
      </div>
    </section>{/* End Features Section */}
    {/* ======= Services Section ======= */}
    <section id="services" className="services services">
      <div className="container aos-init" data-aos="fade-up">
        <div className="section-title">
          <h2>Services</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit
            sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias
            ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 icon-box aos-init" data-aos="zoom-in" data-aos-delay={100}>
            <div className="icon"><i className="icofont-heart-beat" /></div>
            <h4 className="title"><a href="https://bootstrapmade.com/demo/templates/Medicio/">Increased
                Efficiency</a>
            </h4>
            <p className="description">Using traditional, paper-heavy processes, trading anything is a
              time-consuming process that is prone to human error and often requires third-party
              mediation. </p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box aos-init" data-aos="zoom-in" data-aos-delay={200}>
            <div className="icon"><i className="icofont-drug" /></div>
            <h4 className="title"><a href="https://bootstrapmade.com/demo/templates/Medicio/">Greater
                Transparency</a>
            </h4>
            <p className="description">With the use of blockchain, all our transactions will be transparent and
              as blockchain is a type of distributed ledger, the network and both the parties involved
              will share individual copies and these documents can only be updated through consensus, that
              is after everyone’s consent.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box aos-init" data-aos="zoom-in" data-aos-delay={300}>
            <div className="icon"><i className="icofont-dna-alt-2" /></div>
            <h4 className="title"><a href="https://bootstrapmade.com/demo/templates/Medicio/" />Reduced Costs
            </h4>
            <p className="description">Each and every transaction taking place here are recorded on a
              blockchain, hence ending up with an audit trail through which we can easily track each and
              every transaction at each and every step. This historical transaction data can help to
              verify the authenticity of assets and prevent fraud.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box aos-init" data-aos="zoom-in" data-aos-delay={100}>
            <div className="icon"><i className="icofont-heartbeat" /></div>
            <h4 className="title"><a href="https://bootstrapmade.com/demo/templates/Medicio/">Enhanced
                Security</a>
            </h4>
            <p className="description">There are several ways blockchain is more secure than other
              record-keeping systems. Transactions must be agreed upon before they are recorded. After a
              transaction is approved, it is encrypted and linked to the previous transaction. </p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box aos-init" data-aos="zoom-in" data-aos-delay={200}>
            <div className="icon"><i className="icofont-disabled" /></div>
            <h4 className="title"><a href="https://bootstrapmade.com/demo/templates/Medicio/">Improved
                Traceability</a></h4>
            <p className="description">Each and every transaction taking place here are recorded on a
              blockchain, hence ending up with an audit trail through which we can easily track each and
              every transaction at each and every step. This historical transaction data can help to
              verify the authenticity of assets and prevent fraud.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box aos-init" data-aos="zoom-in" data-aos-delay={300}>
            <div className="icon"><i className="icofont-autism" /></div>
            <h4 className="title"><a href="https://bootstrapmade.com/demo/templates/Medicio/">Enhanced
                Security</a>
            </h4>
            <p className="description">Each and every transaction taking place here are recorded on a
              blockchain, hence ending up with an audit trail through which we can easily track each and
              every transaction at each and every step. This historical transaction data can help to
              verify the authenticity of assets and prevent fraud.</p>
          </div>
        </div>
      </div>
    </section>{/* End Services Section */}
    {/* ======= Testimonials Section ======= */}
    <section id="testimonials" className="testimonials">
      <div className="container aos-init" data-aos="fade-up">
        <div className="section-title">
          <h2>Testimonials</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit
            sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias
            ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        <div className="owl-carousel testimonials-carousel owl-loaded owl-drag aos-init" data-aos="fade-up" data-aos-delay={100}>
          <div className="owl-stage-outer">
            <div className="owl-stage">
              <div className="owl-item" style={{width: 310}}>
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum
                    suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et.
                    Maecen aliquam, risus at semper.
                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                  </p>
                  <img src="../images/testimonials-1.jpg" className="testimonial-img" alt />
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                </div>
              </div>
              <div className="owl-item" style={{width: 310}}>
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum
                    quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat
                    irure amet legam anim culpa.
                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                  </p>
                  <img src="../images/testimonials-2.jpg" className="testimonial-img" alt />
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                </div>
              </div>
              <div className="owl-item active" style={{width: 310}}>
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem
                    veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis
                    sint minim.
                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                  </p>
                  <img src="../images/testimonials-3.jpg" className="testimonial-img" alt />
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                </div>
              </div>
              <div className="owl-item active" style={{width: 310}}>
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim
                    fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore
                    quem dolore labore illum veniam.
                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                  </p>
                  <img src="../images/testimonials-4.jpg" className="testimonial-img" alt />
                  <h3>Matt Brandon</h3>
                  <h4>Freelancer</h4>
                </div>
              </div>
              <div className="owl-item active" style={{width: 310}}>
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor
                    noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam
                    esse veniam culpa fore nisi cillum quid.
                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                  </p>
                  <img src="../images/testimonials-5.jpg" className="testimonial-img" alt />
                  <h3>John Larson</h3>
                  <h4>Entrepreneur</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Testimonials Section */}
    {/* ======= Frequently Asked Questioins Section ======= */}
    <section id="faq" className="faq section-bg">
      <div className="container aos-init" data-aos="fade-up">
        <div className="section-title">
          <h2>Frequently Asked Questioins</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit
            sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias
            ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        <ul className="faq-list aos-init" data-aos="fade-up" data-aos-delay={100}>
          <li>
            <a data-toggle="collapse" className href="#faq1">Non consectetur a erat nam at lectus urna duis?
              <i className="icofont-simple-up" /></a>
            <div id="faq1" className="collapse show" data-parent=".faq-list">
              <p>
                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non
                curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus
                non.
              </p>
            </div>
          </li>
          <li>
            <a data-toggle="collapse" href="#faq2" className="collapsed">Feugiat scelerisque varius morbi enim
              nunc faucibus a pellentesque? <i className="icofont-simple-up" /></a>
            <div id="faq2" className="collapse" data-parent=".faq-list">
              <p>
                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum
                velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec
                pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus
                turpis massa tincidunt dui.
              </p>
            </div>
          </li>
          <li>
            <a data-toggle="collapse" href="#faq3" className="collapsed">Dolor sit amet consectetur adipiscing
              elit pellentesque habitant morbi? <i className="icofont-simple-up" /></a>
            <div id="faq3" className="collapse" data-parent=".faq-list">
              <p>
                Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus
                pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum
                tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna
                molestie at elementum eu facilisis sed odio morbi quis
              </p>
            </div>
          </li>
          <li>
            <a data-toggle="collapse" href="#faq4" className="collapsed">Ac odio tempor orci dapibus. Aliquam
              eleifend mi in nulla? <i className="icofont-simple-up" /></a>
            <div id="faq4" className="collapse" data-parent=".faq-list">
              <p>
                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum
                velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec
                pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus
                turpis massa tincidunt dui.
              </p>
            </div>
          </li>
          <li>
            <a data-toggle="collapse" href="#faq5" className="collapsed">Tempus quam pellentesque nec nam
              aliquam sem et tortor consequat? <i className="icofont-simple-up" /></a>
            <div id="faq5" className="collapse" data-parent=".faq-list">
              <p>
                Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est
                ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit
                adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
              </p>
            </div>
          </li>
          <li>
            <a data-toggle="collapse" href="#faq6" className="collapsed">Tortor vitae purus faucibus ornare.
              Varius vel pharetra vel turpis nunc eget lorem dolor? <i className="icofont-simple-up" /></a>
            <div id="faq6" className="collapse" data-parent=".faq-list">
              <p>
                Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo
                integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc
                eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus.
                Nibh tellus molestie nunc non blandit massa enim nec.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>{/* End Frequently Asked Questioins Section */}
    {/* ======= Contact Section ======= */}
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Have other queries or questions in mind ? Reach out to us</p>
        </div>
      </div>
      <div>
        <iframe style={{border: 0, width: '100%', height: 350}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder={0} allowFullScreen />
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-12">
                <div className="info-box">
                  <i className="bx bx-map" />
                  <h3>Our Address</h3>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bx-envelope" />
                  <h3>Email Us</h3>
                  <p>info@example.com<br />contact@example.com</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bx-phone-call" />
                  <h3>Call Us</h3>
                  <p>+1 5589 55488 55<br />+1 6678 254445 41</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="form-row">
                <div className="col form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validate" />
                </div>
                <div className="col form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div className="validate" />
                </div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div className="validate" />
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows={5} data-rule="required" data-msg="Please write something for us" placeholder="Message" defaultValue={""} />
                <div className="validate" />
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>
        </div>
      </div>
    </section>{/* End Contact Section */}
  </main>{/* End #main */}
  {/* ======= Footer ======= */}
  <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-info">
              <h3>Medicio</h3>
              <p>
                A108 Adam Street <br />
                NY 535022, USA<br /><br />
                <strong>Phone:</strong> +1 5589 55488 55<br />
                <strong>Email:</strong> info@example.com<br />
              </p>
              <div className="social-links mt-3">
                <a href="#" className="twitter"><i className="icofont-twitter" /></a>
                <a href="#" className="facebook"><i className="icofont-facebook" /></a>
                <a href="#" className="instagram"><i className="icofont-instagram" /></a>
                <a href="#" className="linkedin"><i className="icofont-linkedin" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right" /> <a href="#">Home</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">About us</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">Services</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">Terms of service</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">Privacy policy</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bx bx-chevron-right" /> <a href="#">Web Design</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">Web Development</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">Product Management</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">Marketing</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">Graphic Design</a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form action method="post">
              <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        © Copyright <strong><span>Medicio</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        {/* All the links in the footer should remain intact. */}
        {/* You can delete the links only if you purchased the pro version. */}
        {/* Licensing information: https://bootstrapmade.com/license/ */}
        {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/medicio-free-bootstrap-theme/ */}
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>{/* End Footer */}
  <a href="#" className="back-to-top"><i className="icofont-simple-up" /></a>
</div>

        </div>
    )
}

export default Landing
