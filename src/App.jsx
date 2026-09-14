import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Boxes,
  Building2,
  Check,
  ChevronRight,
  Cloud,
  Code2,
  FileCheck2,
  IndianRupee,
  LayoutGrid,
  LifeBuoy,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Server,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  X,
} from 'lucide-react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';

const MAP_URL = "https://www.google.com/maps/place/28%C2%B020'41.7%22N+79%C2%B025'08.6%22E/@28.3449035,79.4164902,17z/data=!3m1!4b1!4m4!3m3!8m2!3d28.3449035!4d79.4190651?hl=en&entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D";
const WHATSAPP_URL = 'https://wa.me/919837222899';
const PHONE = 'tel:+919837222899';

const products = [
  { title: 'TallyPrime', text: 'Business management software for accounting, GST, inventory, payroll, and financial reporting.', icon: BarChart3, image: '/assets/images/OIP .webp', tone: 'blue' },
  { title: 'TallyPrime Edit Log', text: 'Track and review changes in business data to improve transparency and audit readiness.', icon: FileCheck2, image: '/assets/images/tallyprime_Editlo71.webp', tone: 'gold' },
  { title: 'TallyPrime Server', text: 'Centralized multi-user server solution for secure, high-performance business operations.', icon: Server, image: '/assets/images/tally-prime-server-horizontal.svg', tone: 'navy' },
  { title: 'Shoper 9', text: 'Retail and POS management solution with integrated sales, inventory, and customer operations.', icon: ShoppingBag, image: '/assets/images/shoper-img.svg', tone: 'blue' },
  { title: 'Tally Software Services', text: 'Professional services, support, implementation, and customization for Tally users.', icon: LifeBuoy, tone: 'gold' },
  { title: 'TallyPrime Cloud Access', text: 'Cloud access options that help you work remotely with better flexibility and uptime.', icon: Cloud, tone: 'navy' },
  { title: 'TallyDeveloper 9', text: 'Developer environment for building custom solutions and extensions around Tally.', icon: Code2, image: '/assets/images/tally-prime-developer-logo-horizontal.svg', tone: 'blue' },
  { title: 'Silver, Gold, Rental & Lifetime', text: 'Flexible licensing plans designed for different business sizes and long-term requirements.', icon: IndianRupee, tone: 'gold' },
];

const services = [
  ['TallyPrime sales', 'Choose the right accounting software for your business with clear, practical guidance.', BarChart3],
  ['Installation & setup', 'Get your company, users, configuration, and workflow ready for daily business use.', LayoutGrid],
  ['GST & accounting support', 'Keep GST records, accounting workflows, and reporting processes organized.', FileCheck2],
  ['Inventory & billing', 'Improve stock, sales, purchase, and billing control through Tally features.', Boxes],
  ['Training for teams', 'Help your staff use Tally confidently with guided, business-focused training.', Sparkles],
  ['After-sales support', 'Get dependable troubleshooting, updates, and ongoing technical assistance.', LifeBuoy],
];

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

function App() {
  return (
    <div className="app-shell">
      <Header />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <a className="floating-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={22} /></a>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const links = [['Home', '/'], ['About Us', '/about'], ['Products', '/products'], ['Contact', '/contact']];

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <div className="brand-visuals">
            <img src="/assets/images/LogoSVSWhite.jpg" alt="Shree Vaishnavi Software logo" />
            <img className="partner-mark" src="/assets/images/tally-partnerlogo.jpg" alt="Tally Certified 3 Star Partner" />
          </div>
          <span className="brand-copy"><strong>SHREE VAISHNAVI</strong><small>SOFTWARE • BAREILLY</small></span>
        </Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
        <nav className={open ? 'main-nav open' : 'main-nav'}>
          {links.map(([label, path]) => <NavLink key={path} to={path} end={path === '/'} onClick={() => setOpen(false)}>{label}</NavLink>)}
        </nav>
        <div className="header-actions">
          <a className="button button-ghost compact" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a>
          <Link className="button button-primary compact" to="/contact">Book a Demo <ArrowRight size={16} /></Link>
        </div>
      </div>
    </header>
  );
}

function Home() {
  return <>
    <main>
      <section className="hero-section">
        <div className="hero-glow" />
        <div className="container hero-grid">
          <motion.div className="hero-copy" initial="hidden" animate="visible" variants={stagger}>
            <motion.div className="eyebrow" variants={fadeUp}><BadgeCheck size={16} /> Authorized Tally Certified 3-Star Partner</motion.div>
            <motion.h1 variants={fadeUp}>Your TallyPrime partner for <em>better business.</em></motion.h1>
            <motion.p variants={fadeUp}>Sales, setup, and after-sales support for TallyPrime, GST, payroll, inventory, and the systems that keep your business moving.</motion.p>
            <motion.div className="hero-actions" variants={fadeUp}><Link className="button button-primary" to="/products">Explore Tally products <ArrowRight size={17} /></Link><a className="button button-ghost" href={PHONE}><Phone size={17} /> Call 9837222899</a></motion.div>
            <motion.div className="trust-points" variants={fadeUp}><span><Check size={15} /> Bareilly-based support</span><span><Check size={15} /> Mon-Sat, 9:30 AM-6:30 PM</span></motion.div>
          </motion.div>
          <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
            <div className="hero-dashboard">
              <div className="dashboard-top"><span className="live-dot" /> TallyPrime support desk <span>SVS / 03</span></div>
              <div className="dashboard-main"><div className="dashboard-label">Your business, in control</div><div className="dashboard-number">₹ 24.8L</div><div className="dashboard-caption">Illustrative monthly overview</div></div>
              <div className="chart"><span style={{ height: '35%' }} /><span style={{ height: '56%' }} /><span style={{ height: '42%' }} /><span style={{ height: '72%' }} /><span style={{ height: '62%' }} /><span style={{ height: '88%' }} /><span style={{ height: '77%' }} /></div>
              <div className="dashboard-bottom"><span><span className="status-dot blue" /> GST ready</span><span><span className="status-dot gold" /> Support included</span></div>
            </div>
            <div className="hero-badge"><span>3★</span><div><strong>Certified Partner</strong><small>TallyPrime sales & support</small></div></div>
          </motion.div>
        </div>
      </section>
      <div className="trust-strip"><div className="container trust-strip-inner"><span>Powering smarter operations with</span><strong>TallyPrime</strong><strong>TallyPrime Server</strong><strong>Shoper 9</strong><strong>TSS & Cloud</strong></div></div>
      <ProductPreview />
      <ServicePreview />
      <TestimonialSection />
      <ContactCta />
    </main>
  </>;
}

function ProductPreview() {
  return <section className="section section-tint"><div className="container"><SectionHeading eyebrow="Product range" title="Tools that scale with your business." copy="From daily accounting to enterprise-grade access, choose the Tally products and plans that fit the way you work." action={<Link className="text-link" to="/products">View all products <ChevronRight size={17} /></Link>} /><motion.div className="product-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger}>{products.slice(0, 4).map((product) => <ProductCard key={product.title} product={product} />)}</motion.div></div></section>;
}

function ProductCard({ product }) {
  const Icon = product.icon;
  return <motion.article className={`product-card product-${product.tone}`} variants={fadeUp} whileHover={{ y: -6 }}><div className="product-card-top"><div className="product-icon"><Icon size={20} /></div><span className="product-arrow"><ArrowRight size={18} /></span></div>{product.image ? <div className="product-image"><img src={product.image} alt={product.title} loading="lazy" /></div> : null}<h3>{product.title}</h3><p>{product.text}</p><Link className="card-link" to="/products">Learn more <ArrowRight size={15} /></Link></motion.article>;
}

function ServicePreview() {
  return <section className="section"><div className="container"><SectionHeading eyebrow="More than software" title="A partner after the purchase." copy="Our support is built around the everyday details that make accounting software genuinely useful." /><motion.div className="service-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger}>{services.map(([title, text, Icon], index) => <motion.div className="service-item" key={title} variants={fadeUp}><div className="service-index">0{index + 1}</div><div className="service-icon"><Icon size={20} /></div><h3>{title}</h3><p>{text}</p></motion.div>)}</motion.div></div></section>;
}

function TestimonialSection() {
  return <section className="section testimonial-section"><div className="container"><div className="testimonial-layout"><div><SectionHeading eyebrow="Why businesses stay" title="Clear advice. Dependable support." copy="We help teams make the most of TallyPrime with practical recommendations, hands-on setup, and responsive assistance." /><div className="stat-row"><div><strong>3★</strong><span>Authorized partner</span></div><div><strong>360°</strong><span>Business support</span></div><div><strong>Local</strong><span>Bareilly service</span></div></div></div><blockquote className="testimonial"><span className="quote-mark">“</span><p>Professional service, clear communication, and dependable support made the whole software experience smooth.</p><footer>— A Shree Vaishnavi Software customer</footer></blockquote></div></div></section>;
}

function ContactCta() {
  return <section className="section"><div className="container cta-panel"><div><span className="eyebrow">Ready when you are</span><h2>Let’s set up a better way to run your business.</h2><p>Tell us what you need from TallyPrime and we’ll help you find the right next step.</p></div><div className="cta-actions"><Link className="button button-primary" to="/contact">Start a conversation <ArrowRight size={17} /></Link><a className="button button-ghost" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp us</a></div></div></section>;
}

function About() {
  return <PageLayout eyebrow="About us" title="Technology that feels useful from day one." intro="Shree Vaishnavi Software is a Bareilly-based Authorized Tally Certified 3-Star Partner focused on TallyPrime sales, implementation, and dependable after-sales support."><section className="section"><div className="container split-layout"><div className="prose"><h2>Built around your business, not the other way around.</h2><p>We help shops, traders, service businesses, and growing teams choose the right Tally solution for their accounting, GST, inventory, payroll, and reporting needs.</p><p>Beyond the sale, we assist with installation, setup, training, troubleshooting, updates, and ongoing guidance so your team can work with confidence.</p></div><div className="info-panel"><ShieldCheck size={28} /><h3>Why businesses trust us</h3>{['Certified Tally expertise', 'Business-first software guidance', 'Hands-on implementation', 'Responsive after-sales support'].map((item) => <div className="check-row" key={item}><Check size={16} /> {item}</div>)}</div></div></section><section className="section section-tint"><div className="container"><SectionHeading eyebrow="Our approach" title="Simple, dependable, and focused on your business." /><div className="process-grid">{[['01', 'Understand', 'We learn your workflow and software needs.'], ['02', 'Set up', 'We configure the right tools for a smooth start.'], ['03', 'Support', 'We stay available as your business grows.']].map(([number, title, text]) => <div className="process-item" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></div>)}</div></div></section></PageLayout>;
}

function Products() {
  return <PageLayout eyebrow="Product range" title="The Tally ecosystem, made easier to choose." intro="Explore TallyPrime, enterprise server tools, developer environments, cloud access, and flexible licensing plans available through Shree Vaishnavi Software."><section className="section"><div className="container product-grid product-grid-full">{products.map((product) => <ProductCard key={product.title} product={product} />)}</div></section><ContactCta /></PageLayout>;
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return <PageLayout eyebrow="Contact" title="Tell us what your business needs." intro="Need TallyPrime, a setup partner, or after-sales support? Send an enquiry and our Bareilly team will get back to you."><section className="section"><div className="container contact-layout"><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}><div className="form-intro"><span className="form-kicker">Talk to our team</span><h2>Start with a quick enquiry.</h2><p>Share a few details and we’ll guide you from there.</p></div><div className="field-grid"><label>Full name<input required name="name" placeholder="Your name" /></label><label>Business name<input name="business" placeholder="Your business" /></label></div><div className="field-grid"><label>Phone number<input required name="phone" type="tel" placeholder="Your phone number" /></label><label>Email address<input name="email" type="email" placeholder="you@example.com" /></label></div><label>What can we help with?<select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>TallyPrime software sales</option><option>Installation & setup</option><option>GST & accounting support</option><option>After-sales support</option><option>Other</option></select></label><label>Message<textarea name="message" rows="5" placeholder="Tell us about your requirement" /></label><button className="button button-primary" type="submit">{submitted ? 'Enquiry received' : 'Send enquiry'} <ArrowRight size={17} /></button>{submitted && <p className="form-success"><Check size={16} /> Thank you. We will contact you shortly.</p>}</form><aside className="contact-aside"><div className="contact-card"><h3>Visit or reach us</h3><a href={MAP_URL} target="_blank" rel="noreferrer"><MapPin size={18} /><span>428 Indra Nagar<br />Bareilly, Uttar Pradesh - 243122, India</span></a><a href={PHONE}><Phone size={18} /><span>9837222899<br />9359120221</span></a><a href="mailto:svstallybly@gmail.com"><Mail size={18} /><span>svstallybly@gmail.com</span></a><div className="hours"><strong>Business hours</strong><span>Mon - Sat: 9:30 AM - 6:30 PM</span><span>Sunday: By appointment</span></div><a className="button button-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Chat on WhatsApp</a></div></aside></div></section></PageLayout>;
}

function PageLayout({ eyebrow, title, intro, children }) {
  const location = useLocation();
  return <main className="inner-page"><section className="page-hero"><div className="container narrow"><span className="eyebrow">{eyebrow}</span><motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>{title}</motion.h1><p>{intro}</p></div></section>{children}</main>;
}

function SectionHeading({ eyebrow, title, copy, action }) {
  return <div className="section-heading"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>{action}</div>;
}

function Footer() {
  return <footer className="site-footer"><div className="container footer-grid"><div><Link to="/" className="brand footer-brand"><div className="brand-visuals"><img src="/assets/images/LogoSVSWhite.jpg" alt="Shree Vaishnavi Software logo" /><img className="partner-mark" src="/assets/images/tally-partnerlogo.jpg" alt="Tally Certified 3 Star Partner" /></div><span className="brand-copy"><strong>SHREE VAISHNAVI</strong><small>SOFTWARE • BAREILLY</small></span></Link><p className="footer-copy">Tally software sales, implementation, and practical support for business success.</p></div><div><h3>Explore</h3><Link to="/about">About us</Link><Link to="/products">Products</Link><Link to="/contact">Contact</Link></div><div><h3>Contact</h3><a href={PHONE}>9837222899 · 9359120221</a><a href="mailto:svstallybly@gmail.com">svstallybly@gmail.com</a><a href={MAP_URL} target="_blank" rel="noreferrer">428 Indra Nagar, Bareilly</a></div></div><div className="bottom-bar"><div className="container"><span>© 2026 Shree Vaishnavi Software</span><span>Authorized Tally Certified 3-Star Partner</span></div></div></footer>;
}

export default App;
