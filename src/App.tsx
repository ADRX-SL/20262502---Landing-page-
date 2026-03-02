/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Chrome, 
  Database, 
  Mail, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  Users, 
  Rocket,
  Play,
  Star,
  ExternalLink,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';
import { motion } from 'motion/react';

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="text-white w-5 h-5 fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">Scalelist</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-blue-600 transition-colors">Product</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Resources</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4 text-sm font-medium">
            <a href="#" className="text-gray-600 hover:text-blue-600 flex items-center gap-1.5">
              <Chrome className="w-4 h-4" />
              Chrome Extension
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Talk to Sales</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Log In</a>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm">
            Try for free
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const Badge = ({ children, icon: Icon, color = "blue" }: { children: React.ReactNode, icon?: any, color?: string }) => {
  const colors: Record<string, string> = {
    blue: "bg-blue-50 text-blue-700 border-blue-100",
    orange: "bg-orange-50 text-orange-700 border-orange-100",
    purple: "bg-purple-50 text-purple-700 border-purple-100",
    green: "bg-green-50 text-green-700 border-green-100",
  };
  
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${colors[color]}`}>
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {children}
    </span>
  );
};

const ImagePlaceholder = ({ label, className = "" }: { label: string, className?: string }) => (
  <div className={`bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center p-8 text-center ${className}`}>
    <div className="max-w-xs">
      <p className="text-[10px] font-mono uppercase tracking-widest text-gray-400 leading-relaxed">
        [IMAGE: {label}]
      </p>
    </div>
  </div>
);

const FeatureSection = ({ 
  badge, 
  headline, 
  body, 
  links, 
  button, 
  imageLabel, 
  reverse = false 
}: { 
  badge: { text: string, color: string }, 
  headline: string, 
  body: string, 
  links?: { text: string, href: string }[], 
  button?: { text: string, icon?: any },
  imageLabel: string,
  reverse?: boolean
}) => (
  <section className="py-24 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`grid lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        <div className={reverse ? 'lg:order-2' : ''}>
          <Badge color={badge.color}>{badge.text}</Badge>
          <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
            {headline}
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            {body}
          </p>
          
          {links && (
            <div className="mt-8 space-y-3">
              {links.map((link, i) => (
                <a key={i} href={link.href} className="flex items-center gap-2 text-blue-600 font-semibold hover:underline group">
                  {link.text}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              ))}
            </div>
          )}

          {button && (
            <button className="mt-10 inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-6 py-3 rounded-xl font-bold hover:bg-blue-100 transition-colors border border-blue-100">
              {button.icon && <button.icon className="w-5 h-5" />}
              {button.text}
            </button>
          )}
        </div>
        <div className={reverse ? 'lg:order-1' : ''}>
          <ImagePlaceholder label={imageLabel} className="aspect-[4/3]" />
        </div>
      </div>
    </div>
  </section>
);

const USE_CASES: Record<string, any> = {
  'For Sales Teams': {
    testimonial: {
      quote: "Scalelist is incredibly intuitive and user-friendly with seamless navigation. Their customer support is excellent and always responsive. Most importantly, I've yet to encounter even a 1% bounce rate—a testament to the platform's accuracy and reliability. Highly recommended!",
      author: "Karlo Svrze",
      role: "Senior Sales Manager EMEA at BD",
      imageLabel: "KARLO SVRZE - SENIOR SALES MANAGER EMEA AT BD"
    },
    features: [
      { title: "Verified Data Reps Trust", desc: "Stop fixing broken lists. Give your team accurate emails and mobile numbers so they can focus on closing, not research.", id: "01" },
      { title: "Effortless Prospecting", desc: "Build lists instantly and sync them to your sequencer. No manual cleanup, no CSV hell—just pure outbound speed.", id: "02" },
      { title: "Pay for Results, Not Fluff", desc: "Only pay for verified, reachable data. Scale your outbound volume without burning your budget on bad leads.", id: "03" }
    ]
  },
  'For Outbound Agencies': {
    testimonial: {
      quote: "This is by far the easiest and cleanest UX of any solution I've used to export leads and enrich data. Simple and fast to use. Perfect for small to medium teams who want to start quickly. Verification is prioritised over volume, so also strong for protecting data, domains etc.",
      author: "James Donaldson",
      role: "Founder & Director at Zaapi",
      imageLabel: "JAMES DONALDSON - FOUNDER & DIRECTOR AT ZAAPI"
    },
    features: [
      { title: "More Replies for Your Clients", desc: "Better data equals more opens and positive replies. Deliver the meeting volume your clients expect and prove your ROI.", id: "01" },
      { title: "Zero Domain Burn", desc: "Low bounce rates protect your reputation. Spend less time rotating domains or warming inboxes and more time scaling client campaigns.", id: "02" },
      { title: "Protect Your Margins", desc: "Get premium data at the best price. Pay only for verified hits so you can stay profitable while delivering world-class results.", id: "03" }
    ]
  },
  'For Founders': {
    testimonial: {
      quote: "Brilliant tool - loving it!",
      author: "Wilfried Buiron",
      role: "Founder & CEO at Zaapi",
      imageLabel: "WILFRIED BUIRON - FOUNDER & CEO AT ZAAPI"
    },
    features: [
      { title: "Test Audiences in 24 Hours", desc: "Build lists of thousands in seconds. Export verified data and start your first campaign the same day you launch a new idea.", id: "01" },
      { title: "Find Your Early Adopters", desc: "Target by buying intent and tech stack. Reach the people who actually need your product, not just anyone in the market.", id: "02" },
      { title: "Conserve Your Runway", desc: "Only pay for validated data. Keep your acquisition costs low and test new markets without burning cash on bad lists.", id: "03" }
    ]
  }
};

export default function App() {
  const [activeTab, setActiveTab] = useState('For Sales Teams');
  const currentCase = USE_CASES[activeTab];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <div className="flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-full border border-gray-100 shadow-sm">
              <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />
              <span className="text-xs font-bold text-gray-600">4.8 / 5 on Google</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-orange-400 text-orange-400" />)}
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-full border border-gray-100 shadow-sm">
              <span className="text-xs font-bold text-orange-600">A</span>
              <span className="text-xs font-bold text-gray-600">4.9 / 5 on Capterra</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-orange-400 text-orange-400" />)}
              </div>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-8"
          >
            Unlock B2B emails & <br className="hidden md:block" /> mobile numbers.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-xl text-gray-600 mb-12 leading-relaxed"
          >
            Build lead lists from <span className="text-blue-600 font-bold underline decoration-blue-200 underline-offset-4">anywhere online</span> and enrich your existing database in one click.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 group">
              Try for free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-50 transition-all">
              Talk to sales
            </button>
          </motion.div>

          {/* Hero Image Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="absolute inset-0 bg-blue-600/5 blur-3xl rounded-full -z-10" />
            <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-4">
              <div className="bg-gray-50 rounded-2xl aspect-video flex items-center justify-center relative group cursor-pointer overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1280&q=80" 
                  alt="Scalelist Dashboard Interface" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="text-white w-8 h-8 fill-current ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Social Proof */}
      <section className="py-16 border-y border-gray-100 bg-gray-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-10">
            7000+ companies save time using Scalelist
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale">
            <span className="text-xl font-bold text-gray-900">ElevenLabs</span>
            <span className="text-xl font-black text-gray-900 tracking-tighter">CLOUDERA</span>
            <span className="text-xl font-bold text-gray-900">stripe</span>
            <span className="text-xl font-serif font-bold text-gray-900">J.P.Morgan</span>
            <span className="text-xl font-bold text-gray-900">ORACLE <span className="font-normal">NetSuite</span></span>
            <span className="text-xl font-bold text-gray-900">BD</span>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-stone-50 rounded-[2.5rem] p-8 md:p-16 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 italic">
                "Scalelist is a must-have!"
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                We've been using Scalelist for six months and are extremely satisfied. The tool is powerful and intuitive, and the founders provide outstanding support. What stands out is that user feedback is not just heard but actively implemented. Regular updates make it even better. If you want to scale efficiently, Scalelist is a must-have!
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center font-bold text-blue-600 border border-gray-100">
                  S
                </div>
                <div>
                  <p className="font-bold text-gray-900">Manuel Drissner</p>
                  <p className="text-sm text-gray-500">Head of Sales @ Consolidate Software</p>
                </div>
              </div>
            </div>
            <div>
              <ImagePlaceholder label="MANUEL DRISSNER PORTRAIT - HEAD OF SALES" className="aspect-square max-w-md mx-auto bg-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <FeatureSection 
        badge={{ text: "CHROME EXTENSION", color: "blue" }}
        headline="Create lead lists from your preferred platform"
        body="Find verified business emails and mobile numbers right from LinkedIn and Sales Nav"
        links={[{ text: "Learn more", href: "#" }]}
        button={{ text: "Discover extension", icon: Chrome }}
        imageLabel="BROWSER WINDOW SHOWING LINKEDIN/SALES NAVIGATOR SEARCH RESULTS WITH A SCALELIST SIDE-PANEL EXTENSION OVERLAY FOR PROFILE SELECTION AND EXPORT"
      />

      <FeatureSection 
        badge={{ text: "ENRICH EXISTING LISTS", color: "purple" }}
        headline="Find up to 95% B2B emails and mobile numbers worldwide"
        body="Upload your own CSV or sync via API. We enrich your lists with mobile numbers and verified B2B emails."
        links={[
          { text: "Learn more about our email finder", href: "#" },
          { text: "Learn more about our mobile number finder", href: "#" }
        ]}
        imageLabel="SEARCH PORTAL UI WINDOW SHOWING THE BULK ENRICHMENT"
        reverse
      />

      <FeatureSection 
        badge={{ text: "INTEGRATIONS | API | EXPORT", color: "orange" }}
        headline="Integrate with any system"
        body="Connect Scalelist to HubSpot, Salesforce, or any tool via our API, Zapier or Make - or simply export to CSV and Excel."
        links={[
          { text: "Learn more", href: "#" },
          { text: "Get an API key", href: "#" }
        ]}
        imageLabel="CIRCULAR DIAGRAM SHOWING SCALELIST AT THE CENTER WITH ORBITAL RINGS CONNECTING TO SALESFORCE, ZAPIER, CLAY, HUBSPOT, CSV, AND OTHER INTEGRATION ICONS"
      />

      <FeatureSection 
        badge={{ text: "EMAIL VERIFIER", color: "green" }}
        headline="Verify Emails with 99% Accuracy"
        body="Kill bounce rates and reach real inboxes. Verify every email in milliseconds."
        links={[{ text: "Learn more", href: "#" }]}
        imageLabel="EMAIL VERIFICATION LIST SHOWING VALID, BOUNCE, AND CATCH-ALL STATUSES NEXT TO EMAIL ADDRESSES"
        reverse
      />

      <FeatureSection 
        badge={{ text: "DATA", color: "blue" }}
        headline="The most relevant 15 data points for sales people, in one place"
        body="Understand your total market. Then act on it."
        links={[{ text: "Learn more", href: "#" }]}
        imageLabel="UI WINDOW SHOWING PROFESSIONAL PROFILES WITH DATA TAGS LIKE JOB TITLE, LINKEDIN URL, COMPANY NAME, INDUSTRY, AND MORE"
      />

      {/* Most Accurate Data Section */}
      <section className="py-24 bg-[#0a0f1a] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-500 font-bold text-xs uppercase tracking-[0.2em] mb-4">
              JOIN 7,000+ COMPANIES USING SCALELIST
            </p>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              The most accurate data
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Card: Data Coverage */}
            <div className="lg:col-span-7 bg-[#151b28] rounded-3xl p-8 md:p-12 border border-gray-800 shadow-2xl">
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                DATA COVERAGE
              </p>
              <div className="flex items-baseline gap-4 mb-4">
                <h3 className="text-5xl font-extrabold">up to 95%</h3>
                <p className="text-gray-400 text-sm">Verified emails + direct dials</p>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-blue-400 font-bold text-sm hover:underline mb-12">
                See how we perform against competitors
              </a>

              <div className="grid grid-cols-6 items-end gap-3 h-48 mt-8">
                {[
                  { name: 'Apollo', val: 78 },
                  { name: 'ZoomInfo', val: 69 },
                  { name: 'Lusha', val: 83 },
                  { name: 'Prospeo', val: 72 },
                  { name: 'Fullenrich', val: 84 },
                  { name: 'Scalelist', val: 95 }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <span className="text-[10px] font-bold text-gray-400">{item.val}%</span>
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: `${item.val}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className={`w-full rounded-t-sm ${item.name === 'Scalelist' ? 'bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]' : 'bg-gray-700'}`}
                    />
                    <div className="h-10 flex items-start justify-center">
                      <span className={`text-[9px] font-bold uppercase tracking-tighter text-center leading-tight ${item.name === 'Scalelist' ? 'text-blue-400' : 'text-gray-500'}`}>
                        {item.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Testimonials */}
            <div className="lg:col-span-5">
              <h3 className="text-xl font-bold mb-8 text-white">Sales Teams Winning with Scalelist's Data</h3>
              <div className="space-y-6">
                <div className="bg-[#151b28] p-8 rounded-3xl border border-gray-800">
                  <p className="text-gray-300 italic mb-6 leading-relaxed text-sm">
                    "I love Scalelist — Cannot recommend it enough. It does EVERYTHING you need it to do really well. Easy to use/ navigate and Arnaud and colleagues are always there to lend a hand. Built by people who really care about their product."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-700 flex-shrink-0">
                      <img src="https://picsum.photos/seed/chris/100/100" alt="Chris Hackett" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Chris Hackett</p>
                      <p className="text-[10px] text-gray-500">CEO & Founder @ Firm Growth</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#151b28] p-8 rounded-3xl border border-gray-800">
                  <p className="text-gray-300 italic mb-6 leading-relaxed text-sm">
                    "We use Scalelist everyday. It's a really good product that helps us find our prospects' emails and phone numbers."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-700 flex-shrink-0">
                      <img src="https://picsum.photos/seed/baptiste/100/100" alt="Baptiste Graffin" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Baptiste Graffin</p>
                      <p className="text-[10px] text-gray-500">VP of Sales APAC @ Happydemics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Refreshed Data */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-stone-50 rounded-[3rem] p-12 md:p-20">
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-bold">
                C
                <span>4.8</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 fill-white text-white" />)}
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                GDPR Compliant
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-10">
              Weekly refreshed data
            </h2>
            <div className="flex flex-wrap items-center gap-6">
              <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all">
                Get started for free
              </button>
              <a href="#" className="text-gray-900 font-bold hover:underline underline-offset-4">
                View all reviews
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Gallery */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge color="blue">USE CASES</Badge>
          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-12">
            See how <span className="text-blue-600">Scalelist</span> can help you
          </h2>

          <div className="flex justify-center gap-4 mb-16">
            {Object.keys(USE_CASES).map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border ${
                  activeTab === tab 
                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200' 
                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-gray-100 rounded-[2.5rem] shadow-xl p-8 md:p-12 text-left"
          >
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-4">
                <div className="relative">
                  <ImagePlaceholder label={currentCase.testimonial.imageLabel} className="aspect-[3/4] bg-gray-50" />
                  <div className="absolute bottom-4 left-4 right-4 bg-gray-900 text-white p-6 rounded-2xl shadow-xl">
                    <p className="text-sm font-bold mb-4 leading-relaxed">
                      "{currentCase.testimonial.quote}"
                    </p>
                    <p className="text-xs font-bold">{currentCase.testimonial.author}</p>
                    <p className="text-[10px] opacity-60 uppercase tracking-wider mt-0.5">{currentCase.testimonial.role}</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="flex flex-col gap-6">
                  {currentCase.features.map((item: any, i: number) => (
                    <div key={i} className="bg-gray-50 p-8 rounded-2xl relative group hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                      <span className="absolute top-6 right-6 text-[10px] font-bold text-gray-300 group-hover:text-blue-200 transition-colors">{item.id}</span>
                      <h4 className="font-bold text-gray-900 mb-3">{item.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-stone-50 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/5 via-transparent to-transparent pointer-events-none" />
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-xl mb-10 relative z-10"
            >
              <Rocket className="w-8 h-8 text-blue-600 fill-blue-50" />
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-12 relative z-10">
              Unlock B2B emails & <br /> mobile numbers for free
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <button className="w-full sm:w-auto bg-blue-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
                Get started for free
              </button>
              <button className="w-full sm:w-auto bg-white text-gray-900 border border-gray-200 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                Talk to Sales
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
              <Zap className="text-white w-4 h-4 fill-current" />
            </div>
            <span className="font-bold tracking-tight text-gray-900">Scalelist</span>
          </div>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Scalelist. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-blue-600">Privacy</a>
            <a href="#" className="hover:text-blue-600">Terms</a>
            <a href="#" className="hover:text-blue-600">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
