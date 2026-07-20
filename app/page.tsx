import Script from "next/script";
import Interactions from "./Interactions";

const calendlyBase = process.env.NEXT_PUBLIC_CALENDLY_URL;
const calendlyUrl = calendlyBase
  ? `${calendlyBase}?hide_gdpr_banner=1&background_color=0B0B0C&text_color=F4F3F0&primary_color=CFB87C`
  : null;

export default function Home() {
  return (
    <>
      {/* ================= NAV ================= */}
      <header className="nav" id="nav">
        <div className="wrap nav-inner">
          <a className="brand" href="#top" aria-label="Matt Ryan QB Training home">
            <span className="mark">4</span>
            <span className="name">
              Matt Ryan<span>QB Training</span>
            </span>
          </a>
          <nav className="nav-links" id="navLinks">
            <a className="link" href="#about">
              The Coach
            </a>
            <a className="link" href="#training">
              Training
            </a>
            <a className="link" href="#packages">
              Packages
            </a>
            <a className="link" href="#book">
              Book
            </a>
            <a className="btn btn-gold" href="#book">
              Book a session
            </a>
          </nav>
          <button
            className="nav-toggle"
            id="navToggle"
            aria-label="Menu"
            aria-expanded="false"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="hero" id="top">
        <div className="hero-inner">
          <span className="eyebrow reveal">
            Former Division I Quarterback — University of Colorado
          </span>
          <h1 className="reveal">
            Own every
            <br />
            <span className="sheen">snap.</span>
          </h1>
          <p className="lede reveal">
            Full-scope quarterback training in Phoenix — mechanics, defensive
            reads, film study, and the recruiting roadmap — from a coach who&apos;s
            lined up at the Division&nbsp;I level.
          </p>
          <div className="hero-cta reveal">
            <a className="btn btn-gold" href="#book">
              Book a session <span className="arrow">→</span>
            </a>
            <a className="btn btn-ghost" href="#training">
              See the training
            </a>
          </div>
        </div>
        <div className="scrollcue">Scroll</div>
      </section>

      {/* ================= CREDIBILITY ================= */}
      <section className="creds">
        <div
          className="creds-grid wrap"
          style={{ paddingLeft: 0, paddingRight: 0 }}
        >
          <div className="cred">
            <div className="k">Division I QB</div>
            <div className="v">University of Colorado</div>
          </div>
          <div className="cred">
            <div className="k">All Levels</div>
            <div className="v">Youth through varsity</div>
          </div>
          <div className="cred">
            <div className="k">Phoenix, AZ</div>
            <div className="v">In-person &amp; virtual</div>
          </div>
          <div className="cred">
            <div className="k">Full-Scope</div>
            <div className="v">Mechanics · IQ · Recruiting</div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="section about" id="about">
        <div className="wrap about-grid">
          <div className="about-copy reveal">
            <span className="eyebrow">The Coach</span>
            <h2>Coached by someone who&apos;s taken the reps that count.</h2>
            <p>
              <strong>
                Matt Ryan played quarterback at the University of Colorado
              </strong>{" "}
              — two years inside a Division I program, learning first-hand what
              the position demands when the speed, the film study, and the
              pressure all climb a level.
            </p>
            <p>
              Now he brings that standard to Phoenix. Every session is built
              around the things that actually move a quarterback forward: clean,
              repeatable mechanics, reading and diagnosing defenses, the training
              habits the position requires, and an honest understanding of what
              college programs look for and how recruiting really works.
            </p>
            <p>
              Whether your quarterback is just starting out or chasing a
              scholarship, the goal is the same — build a complete player who
              understands the <em>why</em> behind every rep.
            </p>
            <blockquote className="pullquote">
              You can&apos;t fake the position. You train it.
              <cite>— Matt Ryan</cite>
            </blockquote>
          </div>
          <div className="about-photo reveal">
            <img
              src="/about.jpg"
              alt="Matt Ryan in his University of Colorado quarterback uniform"
            />
            <span className="tag">Colorado · QB · #4</span>
          </div>
        </div>
      </section>

      {/* ================= JERSEY NAMEPLATE ================= */}
      <section className="nameplate">
        <span className="num" aria-hidden="true">
          4
        </span>
        <div className="wrap nameplate-copy reveal">
          <span className="eyebrow">The Standard</span>
          <div className="name" style={{ marginTop: 16 }}>
            Ryan<em>.</em>
          </div>
          <p>
            Reps carried by a Division I standard — and passed on to the next
            quarterback in line.
          </p>
        </div>
      </section>

      {/* ================= TRAINING ================= */}
      <section className="section training" id="training">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">The Training</span>
            <h2>Everything the position asks of you.</h2>
            <p>
              Not just throwing drills — the full quarterback picture, on the
              field and off it.
            </p>
          </div>
          <div className="train-grid">
            <div className="train-card reveal">
              <div className="ico">◎</div>
              <h3>Throwing Mechanics</h3>
              <p>
                Footwork, base, and release rebuilt rep by rep until they hold up
                under speed and pressure.
              </p>
            </div>
            <div className="train-card reveal">
              <div className="ico">◇</div>
              <h3>Reading Defenses</h3>
              <p>
                Coverages, leverage, and pre-snap tells — so the game slows down
                and the right read comes first.
              </p>
            </div>
            <div className="train-card reveal">
              <div className="ico">▷</div>
              <h3>Film Sessions</h3>
              <p>
                Break down your own reps and upcoming opponents the way a college
                QB room does it.
              </p>
            </div>
            <div className="train-card reveal">
              <div className="ico">⊹</div>
              <h3>Practice Evaluations</h3>
              <p>
                Matt comes to your practice, watches you live, and builds a plan
                around what he sees.
              </p>
            </div>
            <div className="train-card reveal">
              <div className="ico">⤴</div>
              <h3>QB Training &amp; Conditioning</h3>
              <p>
                Arm care, mobility, and the off-field habits that keep you sharp
                and throwing all season.
              </p>
            </div>
            <div className="train-card reveal">
              <div className="ico">★</div>
              <h3>Recruiting Guidance</h3>
              <p>
                Film, exposure, communication, timelines — a clear map through a
                process most families face blind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PACKAGES ================= */}
      <section className="section packages" id="packages">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Training Packages</span>
            <h2>Book by the session. Improve by the package.</h2>
            <p>
              Training is sold in blocks so progress compounds. Most quarterbacks
              start with a package and a plan built around their goals — pricing
              is quoted based on what you need.
            </p>
          </div>
          <div className="pkg-grid">
            <div className="pkg reveal">
              <div className="flag">Get Started</div>
              <div className="count">
                3<span>Sessions</span>
              </div>
              <p className="desc">
                A focused block to assess where your quarterback is, fix the
                biggest mechanical leaks, and set a direction.
              </p>
              <div className="price">Pricing on request</div>
              <a className="btn btn-ghost" href="#contact">
                Request pricing
              </a>
            </div>
            <div className="pkg featured reveal">
              <div className="flag">Most Popular</div>
              <div className="count">
                6<span>Sessions</span>
              </div>
              <p className="desc">
                Enough runway to rebuild mechanics, layer in defensive reads, and
                see real, repeatable improvement.
              </p>
              <div className="price">Pricing on request</div>
              <a className="btn btn-gold" href="#contact">
                Request pricing
              </a>
            </div>
            <div className="pkg reveal">
              <div className="flag">Ongoing</div>
              <div className="count">
                ∞<span>Custom</span>
              </div>
              <p className="desc">
                Season-long development, practice evaluations, film, and
                recruiting support — scoped to your goals.
              </p>
              <div className="price">Pricing on request</div>
              <a className="btn btn-ghost" href="#contact">
                Let&apos;s talk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="section gallery">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">On The Field</span>
            <h2>Where the standard comes from.</h2>
          </div>
        </div>
        <div className="gallery-strip reveal">
          <figure>
            <img
              src="/action2.jpg"
              alt="Matt Ryan setting to throw during pregame warmups"
              loading="lazy"
            />
          </figure>
          <figure>
            <img
              src="/side.jpg"
              alt="Matt Ryan on the sideline in his Colorado uniform"
              loading="lazy"
            />
          </figure>
          <figure>
            <img src="/bw.jpg" alt="Matt Ryan after a game" loading="lazy" />
          </figure>
          <figure>
            <img
              src="/huddle.jpg"
              alt="Quarterbacks huddled up before taking the field"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      {/* ================= BOOK / CALENDLY ================= */}
      <section className="section book" id="book">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Book</span>
            <h2>Grab a time that works.</h2>
            <p>
              Pick a slot and lock in your first session. Prefer to talk first?
              Use the form below.
            </p>
          </div>

          <div className="cal-shell reveal">
            {calendlyUrl ? (
              <>
                <div
                  className="calendly-inline-widget"
                  data-url={calendlyUrl}
                  style={{ minWidth: 320, width: "100%", height: 640 }}
                />
                <Script
                  src="https://assets.calendly.com/assets/external/widget.js"
                  strategy="lazyOnload"
                />
              </>
            ) : (
              <div className="cal-placeholder">
                <div className="ring">◷</div>
                <h3>Scheduling calendar loads here</h3>
                <p>
                  Set <code>NEXT_PUBLIC_CALENDLY_URL</code> to your{" "}
                  <code>https://calendly.com/&lt;your-link&gt;</code> to load the
                  embed.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="section contact" id="contact">
        <div className="wrap contact-grid">
          <div className="contact-info reveal">
            <span className="eyebrow">Contact</span>
            <h2>Tell us about your quarterback.</h2>
            <p>
              Send a few details and Matt will follow up with availability,
              pricing, and the right starting point.
            </p>
            <div className="row">
              <span className="lbl">Area</span>
              <span className="val">Phoenix, Arizona &amp; surrounding</span>
            </div>
            <div className="row">
              <span className="lbl">Format</span>
              <span className="val">In-person training &amp; virtual film</span>
            </div>
            <div className="row">
              <span className="lbl">Email</span>
              <span className="val">matt@phoenixqbtraining.com</span>
            </div>
          </div>

          {/* FORM SUBMIT: posts JSON to /api/contact */}
          <form className="lead reveal" id="leadForm" noValidate>
            {/* Honeypot — hidden from real users; bots that fill it are rejected */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "-9999px",
                width: 1,
                height: 1,
                overflow: "hidden",
              }}
            >
              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <div className="field">
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" />
            </div>
            <div className="field">
              <label htmlFor="level">Player age / grade</label>
              <input
                id="level"
                name="level"
                type="text"
                placeholder="e.g. 15 / sophomore"
              />
            </div>
            <div className="field full">
              <label htmlFor="focus">What are you looking for?</label>
              <select id="focus" name="focus" defaultValue="">
                <option value="">Select one…</option>
                <option>Throwing mechanics</option>
                <option>Reading defenses</option>
                <option>Film sessions</option>
                <option>Practice evaluation</option>
                <option>Recruiting guidance</option>
                <option>Full development plan</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <div className="field full">
              <label htmlFor="message">Anything else?</label>
              <textarea
                id="message"
                name="message"
                placeholder="Goals, current level, timeline…"
              ></textarea>
            </div>
            <div className="form-status" id="formStatus"></div>
            <button className="btn btn-gold" type="submit" id="submitBtn">
              Send inquiry <span className="arrow">→</span>
            </button>
            <p className="form-note">
              Your details go straight to Matt — no spam, no lists.
            </p>
          </form>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="site">
        <div className="wrap">
          <div className="foot-top">
            <div className="foot-brand">
              <div className="name">
                Matt Ryan <span>QB Training</span>
              </div>
              <p>
                Full-scope quarterback development for players of every level,
                based in Phoenix, Arizona.
              </p>
            </div>
            <div className="foot-links">
              <div className="foot-col">
                <h4>Explore</h4>
                <a href="#about">The Coach</a>
                <a href="#training">Training</a>
                <a href="#packages">Packages</a>
                <a href="#book">Book</a>
              </div>
              <div className="foot-col">
                <h4>Connect</h4>
                <a href="mailto:matt@phoenixqbtraining.com">Email</a>
                <a href="#" target="_blank" rel="noopener">
                  Instagram
                </a>
                <a href="#contact">Contact form</a>
              </div>
            </div>
          </div>
          <div className="foot-bottom">
            <p className="disclaimer">
              Not affiliated with, endorsed by, or sponsored by the University of
              Colorado, CU Athletics, or the NCAA. Team references reflect the
              coach&apos;s own playing history.
            </p>
            <p>© 2026 Matt Ryan QB Training</p>
          </div>
        </div>
      </footer>

      <Interactions />
    </>
  );
}
