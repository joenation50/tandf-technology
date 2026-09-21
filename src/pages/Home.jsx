import { useState, useEffect } from 'react';

export default function Home() {
  const [formState, setFormState] = useState({ name: '', email: '', company: '', service: 'ict', message: '' });
  const [status, setStatus] = useState({ submitting: false, success: false, error: null });

  /*
  useEffect(() => {
    const header = document.getElementById('siteHeader');
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 50) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
      lastScroll = currentScroll;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  */

  const handleSubmit = async (e) => {
    ...

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });
    
    try {
      const res = await fetch('/api/consultations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      });
      if (!res.ok) throw new Error('Submission failed');
      setStatus({ submitting: false, success: true, error: null });
      setFormState({ name: '', email: '', company: '', service: 'ict', message: '' });
      setTimeout(() => setStatus(s => ({ ...s, success: false })), 5000);
    } catch (err) {
      setStatus({ submitting: false, success: false, error: err.message });
    }
  };

  const handleChange = (e) => setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <>
      

{/* ================= HEADER ================= */}
<header className="site-header" id="siteHeader">
  <div className="header-inner">
    <a href="#top" className="logo" aria-label="TANDF Technology Limited — home">
      <div className="logo-mark">
        <div className="logo-symbol" aria-hidden="true"></div>
        <div>
          <div className="logo-word">TANDF</div>
          <div className="logo-sub">Technology Limited</div>
        </div>
      </div>
    </a>

    <nav className="main-nav" aria-label="Primary">
      <ul>
        <li><a className="nav-link active" href="#top">Home</a></li>
        <li><a className="nav-link" href="#about">About</a></li>
        <li className="has-dropdown" id="servicesDropdown">
          <button className="nav-link dropdown-toggle" aria-expanded="false" aria-haspopup="true" aria-controls="servicesMenu">
            Services <span className="chev" aria-hidden="true"></span>
          </button>
          <div className="dropdown" id="servicesMenu" role="menu">
            <a href="#services" role="menuitem"><span>ICT Infrastructure</span><span className="idx">01</span></a>
            <a href="#services" role="menuitem"><span>Electrical Installations</span><span className="idx">02</span></a>
            <a href="#services" role="menuitem"><span>Renewable Energy</span><span className="idx">03</span></a>
            <a href="#services" role="menuitem"><span>Technical Consulting</span><span className="idx">04</span></a>
          </div>
        </li>
        <li><a className="nav-link" href="#projects">Projects</a></li>
        <li><a className="nav-link" href="#contact">Contact</a></li>
      </ul>
    </nav>

    <a href="#contact" className="btn btn-amber header-cta">Request a Consultation</a>

    <button className="menu-toggle" id="menuToggle" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobileMenu">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>

{/* Mobile menu */}
<div className="mobile-menu" id="mobileMenu" aria-hidden="true">
  <a className="m-link" href="#top"><span className="n">01</span> Home</a>
  <a className="m-link" href="#about"><span className="n">02</span> About</a>
  <a className="m-link" href="#services"><span className="n">03</span> Services</a>
  <a className="m-link" href="#projects"><span className="n">04</span> Projects</a>
  <a className="m-link" href="#contact"><span className="n">05</span> Contact</a>
  <div className="mobile-sub">
    <a href="#services">ICT Infrastructure</a>
    <a href="#services">Electrical</a>
    <a href="#services">Renewable Energy</a>
    <a href="#services">Consulting</a>
  </div>
  <a href="#contact" className="btn btn-amber" style={{width: "100%"}}>Request a Consultation</a>
  <div className="mobile-contact">
    <span>Direct lines</span>
    <a href="tel:+2348012345678">+234 801 234 5678</a>
    <a href="mailto:info@tandftechnology.com">info@tandftechnology.com</a>
  </div>
</div>

<main id="top">

{/* ================= HERO ================= */}
<section className="hero noise" aria-label="Introduction">
  <div className="hero-media" id="heroMedia">
    {/* REPLACE with client photography: data centre aisle / rooftop solar array at dusk */}
    <img
      src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80&auto=format&fit=crop"
      srcset="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=960&q=78&auto=format&fit=crop 960w,
              https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80&auto=format&fit=crop 1600w,
              https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=2200&q=80&auto=format&fit=crop 2200w"
      sizes="100vw"
      alt="Illuminated server aisle inside a modern data centre" fetchpriority="high" decoding="async" />
  </div>
  <div className="hero-overlay"></div>
  <div className="hero-overlay-2"></div>
  <div className="hero-sweep" aria-hidden="true"></div>

  <div className="container">
    <div className="hero-content">
      <div className="hero-label mono" data-hero="1">
        <span className="dot" aria-hidden="true"></span>
        ICT &nbsp;·&nbsp; Electrical &nbsp;·&nbsp; Renewable Energy
      </div>

      <h1 data-hero="2">
        Reliable IT &amp; Electrical Solutions That <span className="accent">Power Your Business</span>
      </h1>

      <p className="hero-sub" data-hero="3">
        TANDF Technology designs, installs and maintains the infrastructure Nigerian organisations
        depend on — from structured cabling and switchgear to solar-hybrid power and managed IT support.
      </p>

      <div className="hero-actions" data-hero="4">
        <a href="#contact" className="btn btn-amber">Request a Consultation <span className="arw" aria-hidden="true">→</span></a>
        <a href="#services" className="btn btn-outline">Explore Our Services</a>
      </div>

      <div className="hero-meta" data-hero="5">
        <div className="item">
          <div className="num">12<span style={{color: "var(--amber)"}}>+</span></div>
          <div className="lbl">Years in the field</div>
        </div>
        <div className="item">
          <div className="num">240<span style={{color: "var(--amber)"}}>+</span></div>
          <div className="lbl">Sites commissioned</div>
        </div>
        <div className="item">
          <div className="num">99.9<span style={{color: "var(--amber)"}}>%</span></div>
          <div className="lbl">Contracted uptime</div>
        </div>
      </div>
    </div>
  </div>

  <a href="#about" className="scroll-cue" aria-label="Scroll to about section">
    <span className="track" aria-hidden="true"></span>
    Scroll to explore
  </a>
</section>

{/* ================= TRUST BAR ================= */}
<section className="trust" aria-label="Clients and sectors">
  <div className="container trust-inner">
    <div className="trust-label mono">
      <span className="bar" aria-hidden="true"></span>
      Trusted across Nigeria
    </div>
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track" id="marqueeTrack">
        <div className="client-mark"><span className="glyph"></span>Providus Bank</div>
        <div className="client-mark"><span className="glyph"></span>University of Lagos</div>
        <div className="client-mark"><span className="glyph"></span>Delta State Hospitals Board</div>
        <div className="client-mark"><span className="glyph"></span>Dangote Agro Estates</div>
        <div className="client-mark"><span className="glyph"></span>NSIA Insurance</div>
        <div className="client-mark"><span className="glyph"></span>Port Harcourt Refinery Co.</div>
        <div className="client-mark"><span className="glyph"></span>Meridian Logistics</div>
      </div>
    </div>
  </div>
</section>

{/* ================= INTRO / ABOUT ================= */}
<section className="section intro" id="about">
  <div className="container intro-grid">
    <div className="intro-copy">
      <div className="section-head">
        <div className="eyebrow amber mono" data-reveal="fade">
          <span className="rule" aria-hidden="true"></span> Who we are
        </div>
        <h2 data-reveal>An engineering firm built for <span style={{color: "var(--teal)"}}>critical infrastructure</span>.</h2>
        <div className="body-text">
          <p data-reveal>
            TANDF Technology Limited is a Nigerian ICT and electrical engineering company headquartered
            in Lagos, with active project teams in Abuja, Port Harcourt and Kano. We plan, install and
            maintain the systems that keep organisations running — networks, power, and the physical
            infrastructure underneath them.
          </p>
          <p data-reveal>
            <strong>Our work is led by engineers, not resellers.</strong> Every design is load-tested,
            documented and handed over with as-built drawings, cable schedules and commissioning reports
            your facilities team can actually use.
          </p>
          <p data-reveal>
            From a 40-bed hospital in Ikeja to a multi-branch bank rollout across the South-West, we
            build for the realities of operating in Nigeria — unstable grid, harsh environments, and
            zero tolerance for downtime.
          </p>
        </div>
      </div>

      <div className="intro-points">
        <div className="intro-point" data-reveal><div className="tick" aria-hidden="true"></div><span>In-house certified engineers &amp; licensed electricians</span></div>
        <div className="intro-point" data-reveal><div className="tick" aria-hidden="true"></div><span>Documented handover &amp; operator training</span></div>
        <div className="intro-point" data-reveal><div className="tick" aria-hidden="true"></div><span>Genuine, warranty-backed equipment only</span></div>
        <div className="intro-point" data-reveal><div className="tick" aria-hidden="true"></div><span>Preventive maintenance schedules, not fire-fighting</span></div>
      </div>

      <div className="intro-actions" data-reveal>
        <a href="#contact" className="btn btn-dark">Talk to an Engineer <span className="arw" aria-hidden="true">→</span></a>
        <a href="#projects" className="text-link">See selected projects <span className="arw" aria-hidden="true">→</span></a>
      </div>
    </div>

    <div className="intro-visual" data-reveal="right">
      <div className="teal-block" aria-hidden="true"></div>
      <div className="amber-block" aria-hidden="true"></div>
      <div className="frame">
        {/* REPLACE with client photography: technician working on a distribution board */}
        <img
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1000&q=80&auto=format&fit=crop"
          srcset="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=700&q=78&auto=format&fit=crop 700w,
                  https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80&auto=format&fit=crop 1200w"
          sizes="(max-width:1023px) 100vw, 42vw"
          alt="Engineer inspecting electrical control equipment on site" loading="lazy" decoding="async" />
      </div>
      <div className="stat-card">
        <div className="v">24 / 7</div>
        <div className="k">Response desk for SLA clients nationwide</div>
      </div>
    </div>
  </div>
</section>

{/* ================= SERVICES ================= */}
<section className="section services noise" id="services">
  <div className="container">
    <div className="services-top">
      <div className="section-head">
        <div className="eyebrow amber mono" data-reveal="fade">
          <span className="rule" aria-hidden="true"></span> What we do
        </div>
        <h2 data-reveal>Four disciplines. One accountable team.</h2>
        <p className="lead" data-reveal>
          We take responsibility for the whole installation — design, procurement, execution,
          testing and after-sales support — so you have one contract, one contact and one standard.
        </p>
      </div>
      <a href="#contact" className="btn btn-outline" data-reveal>Request a Site Assessment <span className="arw" aria-hidden="true">→</span></a>
    </div>

    <div className="services-grid">
      {/* Card 1 */}
      <article className="svc-card" data-reveal>
        <div className="svc-img">
          {/* REPLACE with client photography: server rack / patch panel */}
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop"
               srcset="https://images.unsplash.com/photo-1518770660439-4636190af475?w=520&q=78&auto=format&fit=crop 520w,
                       https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80&auto=format&fit=crop 900w"
               sizes="(max-width:479px) 92vw,(max-width:1023px) 46vw,23vw"
               alt="Network hardware and structured cabling detail" loading="lazy" decoding="async" />
          <div className="svc-num">01</div>
        </div>
        <div className="svc-body">
          <h3>ICT Infrastructure &amp; Operations</h3>
          <p>
            Network design, structured cabling, server and storage deployment, firewall configuration
            and managed IT support — engineered for organisations that cannot afford an outage.
          </p>
          <div className="svc-tags"><span>LAN / WAN</span><span>Structured Cabling</span><span>Managed Support</span></div>
          <a href="#contact" className="svc-link">Read more <span className="arw" aria-hidden="true">→</span></a>
        </div>
      </article>

      {/* Card 2 */}
      <article className="svc-card" data-reveal>
        <div className="svc-img">
          {/* REPLACE with client photography: switchgear / industrial wiring */}
          <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80&auto=format&fit=crop"
               srcset="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=520&q=78&auto=format&fit=crop 520w,
                       https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=900&q=80&auto=format&fit=crop 900w"
               sizes="(max-width:479px) 92vw,(max-width:1023px) 46vw,23vw"
               alt="Industrial electrical installation work" loading="lazy" decoding="async" />
          <div className="svc-num">02</div>
        </div>
        <div className="svc-body">
          <h3>Electrical Installations</h3>
          <p>
            LV and MV distribution design, switchgear, earthing and lightning protection, UPS systems
            and industrial wiring — installed to NEMSA and IEC standards, then tested and certified.
          </p>
          <div className="svc-tags"><span>LV / MV</span><span>Switchgear</span><span>UPS &amp; Earthing</span></div>
          <a href="#contact" className="svc-link">Read more <span className="arw" aria-hidden="true">→</span></a>
        </div>
      </article>

      {/* Card 3 */}
      <article className="svc-card" data-reveal>
        <div className="svc-img">
          {/* REPLACE with client photography: rooftop solar array, golden hour */}
          <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80&auto=format&fit=crop"
               srcset="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=520&q=78&auto=format&fit=crop 520w,
                       https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&q=80&auto=format&fit=crop 900w"
               sizes="(max-width:479px) 92vw,(max-width:1023px) 46vw,23vw"
               alt="Solar photovoltaic panels at golden hour" loading="lazy" decoding="async" />
          <div className="svc-num">03</div>
        </div>
        <div className="svc-body">
          <h3>Renewable Energy Systems</h3>
          <p>
            Solar PV, hybrid inverters, lithium and tubular battery storage, plus energy audits and
            load profiling — designed to cut diesel spend without compromising reliability.
          </p>
          <div className="svc-tags"><span>Solar PV</span><span>Hybrid Inverters</span><span>Battery Storage</span></div>
          <a href="#contact" className="svc-link">Read more <span className="arw" aria-hidden="true">→</span></a>
        </div>
      </article>

      {/* Card 4 */}
      <article className="svc-card" data-reveal>
        <div className="svc-img">
          {/* REPLACE with client photography: engineer with tablet on site */}
          <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80&auto=format&fit=crop"
               srcset="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=520&q=78&auto=format&fit=crop 520w,
                       https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900&q=80&auto=format&fit=crop 900w"
               sizes="(max-width:479px) 92vw,(max-width:1023px) 46vw,23vw"
               alt="Engineer reviewing technical plans on site" loading="lazy" decoding="async" />
          <div className="svc-num">04</div>
        </div>
        <div className="svc-body">
          <h3>Technical Consulting</h3>
          <p>
            Feasibility studies, bill-of-quantities preparation, project management, vendor evaluation
            and compliance documentation for new builds, retrofits and expansions.
          </p>
          <div className="svc-tags"><span>Advisory</span><span>Project Management</span><span>Compliance</span></div>
          <a href="#contact" className="svc-link">Read more <span className="arw" aria-hidden="true">→</span></a>
        </div>
      </article>
    </div>
  </div>
</section>

{/* ================= STATS BAND ================= */}
<section className="stats-band noise" aria-label="Company figures">
  <div className="container">
    <div className="stats-grid">
      <div className="stat" data-reveal>
        <div className="v"><span data-count="240" data-suffix="+">0</span></div>
        <div className="k">Sites designed,<br />installed &amp; commissioned</div>
      </div>
      <div className="stat" data-reveal>
        <div className="v"><span data-count="36" data-suffix="">0</span></div>
        <div className="k">States covered through<br />our field partner network</div>
      </div>
      <div className="stat" data-reveal>
        <div className="v"><span data-count="98" data-suffix="%">0</span></div>
        <div className="k">First-visit resolution<br />on SLA maintenance calls</div>
      </div>
      <div className="stat" data-reveal>
        <div className="v"><span data-count="6" data-suffix=" MW">0</span></div>
        <div className="k">Solar &amp; hybrid capacity<br />deployed to date</div>
      </div>
    </div>
  </div>
</section>

{/* ================= WHY TANDF ================= */}
<section className="section why" id="why">
  <div className="container why-grid">
    <div className="why-sticky">
      <div className="section-head">
        <div className="eyebrow mono" data-reveal="fade">
          <span className="rule" aria-hidden="true"></span> Why TANDF
        </div>
        <h2 data-reveal>What procurement teams and engineers look for.</h2>
        <p className="lead" data-reveal>
          Infrastructure decisions are measured in years, not weeks. These are the four commitments
          our clients hold us to — written into the contract, not just the pitch.
        </p>
      </div>
      <div style={{marginTop: "2.15rem"}} data-reveal>
        <a href="#contact" className="btn btn-dark">Book a Technical Review <span className="arw" aria-hidden="true">→</span></a>
      </div>
    </div>

    <div className="why-list">
      <article className="why-item" data-reveal>
        <div className="why-num">01</div>
        <div>
          <h3>Engineering-led, not box-shifting</h3>
          <p>
            Every proposal starts with a site survey and a load study. We size systems against your
            actual demand profile — not a catalogue guess — and we show the calculation.
          </p>
          <div className="meta"><span>Load analysis</span><span>Single-line diagrams</span><span>As-built docs</span></div>
        </div>
      </article>

      <article className="why-item" data-reveal>
        <div className="why-num">02</div>
        <div>
          <h3>Nationwide coverage, local response</h3>
          <p>
            Core teams in Lagos, Abuja, Port Harcourt and Kano, with vetted partner engineers across
            all 36 states — so a branch rollout doesn't mean a dozen separate contracts.
          </p>
          <div className="meta"><span>36 states</span><span>4 regional hubs</span><span>48-hour mobilisation</span></div>
        </div>
      </article>

      <article className="why-item" data-reveal>
        <div className="why-num">03</div>
        <div>
          <h3>Compliance-first documentation</h3>
          <p>
            Installations are executed and documented to COREN, NEMSA and NITDA requirements, with
            test certificates, material approvals and safety files ready for audit or insurance.
          </p>
          <div className="meta"><span>COREN</span><span>NEMSA</span><span>NITDA</span><span>IEC / IEEE</span></div>
        </div>
      </article>

      <article className="why-item" data-reveal>
        <div className="why-num">04</div>
        <div>
          <h3>Long-term SLAs that actually hold</h3>
          <p>
            Preventive maintenance calendars, spare-part holding, defined response windows and
            quarterly performance reporting. We stay after commissioning — that's the point.
          </p>
          <div className="meta"><span>24/7 desk</span><span>Quarterly reporting</span><span>Spare parts</span></div>
        </div>
      </article>
    </div>
  </div>
</section>

{/* ================= PROJECTS ================= */}
<section className="section projects" id="projects">
  <div className="container">
    <div className="projects-head">
      <div className="section-head">
        <div className="eyebrow mono" data-reveal="fade">
          <span className="rule" aria-hidden="true"></span> Selected work
        </div>
        <h2 data-reveal>Outcomes, not just installations.</h2>
        <p className="lead" data-reveal>
          A cross-section of recent engagements across healthcare, financial services,
          education and industrial facilities.
        </p>
      </div>
      <div className="carousel-nav" data-reveal>
        <button className="car-btn" id="projPrev" aria-label="Previous projects">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="square"><path d="M15 5l-7 7 7 7"/></svg>
        </button>
        <button className="car-btn" id="projNext" aria-label="Next projects">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="square"><path d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>

    <div className="projects-track" id="projectsTrack">
      <article className="proj-card" data-reveal>
        <div className="proj-img">
          {/* REPLACE with client photography: hospital solar / inverter installation */}
          <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=900&q=80&auto=format&fit=crop"
               srcset="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=78&auto=format&fit=crop 600w,
                       https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1000&q=80&auto=format&fit=crop 1000w"
               sizes="(max-width:767px) 82vw, 31vw"
               alt="Solar panel installation on a facility rooftop" loading="lazy" decoding="async" />
          <div className="proj-tag">Healthcare</div>
        </div>
        <div className="proj-body">
          <h3>Hybrid solar &amp; inverter system — 40-bed hospital</h3>
          <p>
            Full load audit, 120 kWp rooftop array, three 60 kVA hybrid inverters and lithium storage
            wired into theatres, ICU and imaging suites with automatic changeover.
          </p>
          <div className="proj-result">
            <div className="big">70%</div>
            <div className="txt">Reduction in<br />diesel consumption</div>
          </div>
          <div className="proj-loc"><span className="pin" aria-hidden="true"></span> Ikeja, Lagos State</div>
        </div>
      </article>

      <article className="proj-card" data-reveal>
        <div className="proj-img">
          {/* REPLACE with client photography: data centre / network room */}
          <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80&auto=format&fit=crop"
               srcset="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=78&auto=format&fit=crop 600w,
                       https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&q=80&auto=format&fit=crop 1000w"
               sizes="(max-width:767px) 82vw, 31vw"
               alt="Data centre server racks" loading="lazy" decoding="async" />
          <div className="proj-tag">Financial Services</div>
        </div>
        <div className="proj-body">
          <h3>Core network refresh — 18 branch bank rollout</h3>
          <p>
            Fibre re-termination, structured cabling, redundant switching, rack standardisation and
            UPS replacement across eighteen branches, executed outside banking hours.
          </p>
          <div className="proj-result">
            <div className="big">0</div>
            <div className="txt">Unplanned service<br />hours during cutover</div>
          </div>
          <div className="proj-loc"><span className="pin" aria-hidden="true"></span> South-West Nigeria</div>
        </div>
      </article>

      <article className="proj-card" data-reveal>
        <div className="proj-img">
          {/* REPLACE with client photography: industrial switchgear / factory */}
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80&auto=format&fit=crop"
               srcset="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=78&auto=format&fit=crop 600w,
                       https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000&q=80&auto=format&fit=crop 1000w"
               sizes="(max-width:767px) 82vw, 31vw"
               alt="Engineer working in an industrial facility" loading="lazy" decoding="async" />
          <div className="proj-tag">Industrial</div>
        </div>
        <div className="proj-body">
          <h3>LV distribution upgrade — manufacturing plant</h3>
          <p>
            Replacement of ageing distribution boards, new 800 A main switchboard, power-factor
            correction and full earthing redesign with thermal imaging baseline.
          </p>
          <div className="proj-result">
            <div className="big">31%</div>
            <div className="txt">Drop in recorded<br />electrical faults</div>
          </div>
          <div className="proj-loc"><span className="pin" aria-hidden="true"></span> Ogun State</div>
        </div>
      </article>

      <article className="proj-card" data-reveal>
        <div className="proj-img">
          {/* REPLACE with client photography: campus / institutional building */}
          <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=900&q=80&auto=format&fit=crop"
               srcset="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&q=78&auto=format&fit=crop 600w,
                       https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1000&q=80&auto=format&fit=crop 1000w"
               sizes="(max-width:767px) 82vw, 31vw"
               alt="Modern institutional workspace interior" loading="lazy" decoding="async" />
          <div className="proj-tag">Education</div>
        </div>
        <div className="proj-body">
          <h3>Campus network &amp; power audit — private university</h3>
          <p>
            Survey of six faculty buildings, fibre backbone redesign, lecture-hall AV power provisioning
            and a phased five-year infrastructure roadmap for the estates team.
          </p>
          <div className="proj-result">
            <div className="big">4.2 km</div>
            <div className="txt">New fibre backbone<br />specified &amp; mapped</div>
          </div>
          <div className="proj-loc"><span className="pin" aria-hidden="true"></span> Ibadan, Oyo State</div>
        </div>
      </article>

      <article className="proj-card" data-reveal>
        <div className="proj-img">
          {/* REPLACE with client photography: rooftop solar commercial */}
          <img src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=900&q=80&auto=format&fit=crop"
               srcset="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&q=78&auto=format&fit=crop 600w,
                       https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1000&q=80&auto=format&fit=crop 1000w"
               sizes="(max-width:767px) 82vw, 31vw"
               alt="Solar panels installed on a commercial rooftop" loading="lazy" decoding="async" />
          <div className="proj-tag">Commercial</div>
        </div>
        <div className="proj-body">
          <h3>Office tower energy retrofit — Victoria Island</h3>
          <p>
            Sub-metering, LED relighting controls, HVAC power optimisation and a 60 kWp solar
            installation feeding common areas, with remote monitoring for the facilities desk.
          </p>
          <div className="proj-result">
            <div className="big">₦18.4m</div>
            <div className="txt">Estimated annual<br />energy cost saving</div>
          </div>
          <div className="proj-loc"><span className="pin" aria-hidden="true"></span> Lagos Island, Lagos</div>
        </div>
      </article>

      <article className="proj-card" data-reveal>
        <div className="proj-img">
          {/* REPLACE with client photography: telecom / field engineering */}
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80&auto=format&fit=crop"
               srcset="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=78&auto=format&fit=crop 600w,
                       https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&q=80&auto=format&fit=crop 1000w"
               sizes="(max-width:767px) 82vw, 31vw"
               alt="Connected network infrastructure visual" loading="lazy" decoding="async" />
          <div className="proj-tag">Public Sector</div>
        </div>
        <div className="proj-body">
          <h3>Site power standardisation — 22 government offices</h3>
          <p>
            Standard earthing, surge protection and inverter specification rolled out across multiple
            sites, with technician training and a maintenance manual per location.
          </p>
          <div className="proj-result">
            <div className="big">22</div>
            <div className="txt">Sites standardised<br />under one specification</div>
          </div>
          <div className="proj-loc"><span className="pin" aria-hidden="true"></span> Abuja FCT &amp; North-Central</div>
        </div>
      </article>
    </div>
  </div>
</section>

{/* ================= PROCESS ================= */}
<section className="section process noise" aria-label="How we work">
  <div className="container">
    <div className="section-head">
      <div className="eyebrow amber mono" data-reveal="fade">
        <span className="rule" aria-hidden="true"></span> How we work
      </div>
      <h2 data-reveal>A process your team can plan around.</h2>
      <p className="lead" data-reveal>
        Clear stages, documented deliverables and defined sign-off points — the same method whether
        it's a single distribution board or a multi-site rollout.
      </p>
    </div>

    <div className="process-rail" data-reveal>
      <div className="progress" aria-hidden="true"></div>
      <div className="step">
        <div className="node" aria-hidden="true"></div>
        <div className="s-num">STAGE 01</div>
        <h3>Survey &amp; Assessment</h3>
        <p>Site visit, load and network measurements, condition reporting and constraint mapping — delivered as a written findings brief.</p>
      </div>
      <div className="step">
        <div className="node" aria-hidden="true"></div>
        <div className="s-num">STAGE 02</div>
        <h3>Design &amp; Costing</h3>
        <p>Single-line diagrams, equipment schedules, three-tier bill of quantities and a phased implementation plan with transparent pricing.</p>
      </div>
      <div className="step">
        <div className="node" aria-hidden="true"></div>
        <div className="s-num">STAGE 03</div>
        <h3>Installation &amp; QA</h3>
        <p>Procurement of genuine equipment, methodical installation, staged inspections and safety documentation throughout execution.</p>
      </div>
      <div className="step">
        <div className="node" aria-hidden="true"></div>
        <div className="s-num">STAGE 04</div>
        <h3>Commissioning &amp; Support</h3>
        <p>Testing and commissioning, operator training, as-built handover pack, then scheduled preventive maintenance under SLA.</p>
      </div>
    </div>
  </div>
</section>

{/* ================= CTA BAND ================= */}
<section className="cta-band noise">
  <div className="glow" aria-hidden="true"></div>
  <div className="container cta-inner">
    <div>
      <h2 data-reveal>Ready to power your next project?</h2>
      <p data-reveal>
        Send us your site details and we'll arrange a no-obligation technical assessment —
        usually within five working days.
      </p>
      <div className="cta-note" data-reveal>Response within 24 hours · Nationwide coverage · No obligation</div>
    </div>
    <div className="cta-actions" data-reveal>
      <a href="#contact" className="btn btn-amber">Request a Consultation <span className="arw" aria-hidden="true">→</span></a>
      <a href="tel:+2348012345678" className="btn btn-outline">Call +234 801 234 5678</a>
    </div>
  </div>
</section>

{/* ================= CONTACT ================= */}
<section className="section contact" id="contact">
  <div className="container contact-grid">
    <div className="contact-info">
      <div className="section-head">
        <div className="eyebrow mono" data-reveal="fade">
          <span className="rule" aria-hidden="true"></span> Contact
        </div>
        <h2 data-reveal>Let's talk about your infrastructure.</h2>
        <p className="lead" data-reveal>
          Whether it's an urgent fault, a planned upgrade or a feasibility study, your enquiry goes
          straight to an engineer — not a call centre.
        </p>
      </div>

      <div className="info-list">
        <div className="info-row" data-reveal>
          <div className="ico" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="#0E7C7B" strokeWidth="1.7" strokeLinecap="square"><path d="M4 5h4l2 5-2.5 1.5a12 12 0 006 6L15 15l5 2v4h-2C10 21 3 14 3 4h1z"/></svg>
          </div>
          <div>
            <div className="k">Phone</div>
            <div className="v"><a href="tel:+2348012345678">+234 801 234 5678</a> &nbsp;·&nbsp; <a href="tel:+23470088990011">+234 700 889 90011</a></div>
          </div>
        </div>

        <div className="info-row" data-reveal>
          <div className="ico" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="#0E7C7B" strokeWidth="1.7" strokeLinecap="square"><rect x="3" y="5" width="18" height="14"/><path d="M3 6l9 7 9-7"/></svg>
          </div>
          <div>
            <div className="k">Email</div>
            <div className="v"><a href="mailto:info@tandftechnology.com">info@tandftechnology.com</a> &nbsp;·&nbsp; <a href="mailto:projects@tandftechnology.com">projects@tandftechnology.com</a></div>
          </div>
        </div>

        <div className="info-row" data-reveal>
          <div className="ico" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="#0E7C7B" strokeWidth="1.7" strokeLinecap="square"><path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/></svg>
          </div>
          <div>
            <div className="k">Head office</div>
            <div className="v">14B Adeola Odeku Street, Victoria Island, Lagos State, Nigeria</div>
          </div>
        </div>

        <div className="info-row" data-reveal>
          <div className="ico" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="#0E7C7B" strokeWidth="1.7" strokeLinecap="square"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/></svg>
          </div>
          <div>
            <div className="k">Working hours</div>
            <div className="v">Monday – Friday, 8:00 – 17:30 (WAT) · 24/7 emergency desk for SLA clients</div>
          </div>
        </div>
      </div>

      <div className="office-card" data-reveal>
        <div className="t">Regional offices</div>
        <div className="a">
          Abuja — Plot 1104 Aminu Kano Crescent, Wuse II<br />
          Port Harcourt — 7 Trans-Amadi Industrial Layout<br />
          Kano — 3 Zoo Road, Kano Municipal
        </div>
        <div className="hours">RC 1428765 · COREN-registered engineering practice</div>
      </div>
    </div>

    <div className="form-panel" data-reveal="scale">
      <h3>Request a consultation</h3>
      <p className="sub">
        Tell us a little about the project. We'll respond with next steps and, where relevant,
        a proposed site visit date.
      </p>

      
        <form className="consult-form" onSubmit={handleSubmit}>
          {status.success && <div className="p-3 mb-4 bg-green-900/30 border border-green-500/50 text-green-400 rounded">Consultation requested successfully. We will contact you soon.</div>}
          {status.error && <div className="p-3 mb-4 bg-red-900/30 border border-red-500/50 text-red-400 rounded">{status.error}</div>}
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input type="text" id="name" name="name" required placeholder="Engr. John Doe" value={formState.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Work Email *</label>
            <input type="email" id="email" name="email" required placeholder="john@company.com.ng" value={formState.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company / Institution</label>
            <input type="text" id="company" name="company" placeholder="e.g. First Bank of Nigeria" value={formState.company} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="service">Primary Interest *</label>
            <div className="select-wrapper">
              <select id="service" name="service" required value={formState.service} onChange={handleChange}>
                <option value="ict">ICT Infrastructure</option>
                <option value="electrical">Electrical Installations</option>
                <option value="renewable">Renewable Energy</option>
                <option value="consulting">Technical Consulting</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Project Details *</label>
            <textarea id="message" name="message" rows="4" required placeholder="Briefly describe your requirements, timeline, or current challenges..." value={formState.message} onChange={handleChange}></textarea>
          </div>
          <button type="submit" className="btn btn-primary" style={{width: '100%'}} disabled={status.submitting}>
            {status.submitting ? 'Submitting...' : 'Request Consultation'}
          </button>
        </form>
      
    </div>
  </div>
</section>

</main>

{/* ================= FOOTER ================= */}
<footer className="site-footer noise">
  <div className="container">
    <div className="footer-top">
      <div className="footer-brand">
        <a href="#top" className="logo" aria-label="TANDF Technology Limited">
          <div className="logo-mark">
            <div className="logo-symbol" aria-hidden="true"></div>
            <div>
              <div className="logo-word">TANDF</div>
              <div className="logo-sub">Technology Limited</div>
            </div>
          </div>
        </a>
        <p>
          ICT infrastructure, electrical installations, renewable energy systems and technical
          consulting for businesses, institutions and organisations across Nigeria. Engineering-led,
          documentation-driven, and built for the long term.
        </p>
        <div className="footer-badges">
          <span>COREN Aligned</span>
          <span>NEMSA Compliant</span>
          <span>NITDA Registered</span>
          <span>ISO 9001 Practices</span>
        </div>
      </div>

      <div className="footer-col">
        <h4>Services</h4>
        <ul>
          <li><a href="#services">ICT Infrastructure</a></li>
          <li><a href="#services">Structured Cabling</a></li>
          <li><a href="#services">Electrical Installations</a></li>
          <li><a href="#services">Solar &amp; Hybrid Energy</a></li>
          <li><a href="#services">Technical Consulting</a></li>
          <li><a href="#services">Maintenance SLAs</a></li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="#about">About TANDF</a></li>
          <li><a href="#why">Why Choose Us</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Careers</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#contact">Privacy Policy</a></li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Contact</h4>
        <ul>
          <li className="footer-contact-item">
            <span className="k">Phone</span>
            <span className="v"><a href="tel:+2348012345678">+234 801 234 5678</a></span>
          </li>
          <li className="footer-contact-item">
            <span className="k">Email</span>
            <span className="v"><a href="mailto:info@tandftechnology.com">info@tandftechnology.com</a></span>
          </li>
          <li className="footer-contact-item">
            <span className="k">WhatsApp</span>
            <span className="v"><a href="https://wa.me/2348012345678">+234 801 234 5678</a></span>
          </li>
          <li className="footer-contact-item">
            <span className="k">Head office</span>
            <span className="v">14B Adeola Odeku Street,<br />Victoria Island, Lagos</span>
          </li>
        </ul>
        <div className="socials">
          <a href="#" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.6c0-1.34-.02-3.07-1.9-3.07-1.9 0-2.2 1.46-2.2 2.97V21H9z"/></svg>
          </a>
          <a href="#" aria-label="X (Twitter)">
            <svg viewBox="0 0 24 24"><path d="M17.5 3h3.1l-6.8 7.8L22 21h-6.3l-4.9-6.4L5.1 21H2l7.3-8.3L2.3 3h6.4l4.4 5.9zM16.4 19.2h1.7L7.7 4.7H5.9z"/></svg>
          </a>
          <a href="#" aria-label="Facebook">
            <svg viewBox="0 0 24 24"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.29-.04-1.27-.12-2.41-.12-2.39 0-4.02 1.46-4.02 4.13V9.9H7.5V13h2.77v8z"/></svg>
          </a>
          <a href="https://wa.me/2348012345678" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.35A10 10 0 1012 2zm0 2a8 8 0 11-4.1 14.86l-.3-.18-2.72.7.72-2.65-.19-.31A8 8 0 0112 4zm-3.1 3.9c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.13 3.65.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.43-.58 1.63-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28s-1.43-.71-1.65-.79c-.22-.08-.38-.12-.54.12s-.62.79-.76.95c-.14.16-.28.18-.52.06a6.6 6.6 0 01-1.95-1.2 7.35 7.35 0 01-1.35-1.68c-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42s-.53-1.29-.73-1.76c-.19-.46-.38-.4-.53-.41z"/></svg>
          </a>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© 2025 TANDF Technology Limited · Information Technology &amp; Electrical Consulting · All rights reserved.</p>
      <div className="footer-legal">
        <a href="#contact">Privacy Policy</a>
        <a href="#contact">Terms of Service</a>
        <a href="#contact">Health &amp; Safety</a>
        <a href="#top">RC 1428765</a>
      </div>
    </div>
  </div>
</footer>

<button className="to-top" id="toTop" aria-label="Back to top">
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="square"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
</button>


    </>
  );
}
