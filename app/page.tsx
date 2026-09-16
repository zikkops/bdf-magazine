import Image from "next/image";
import Placements from "@/components/Placements";
import RateTabs from "@/components/RateTabs";

export default function Home() {
  return (
    <>
    <nav className="nav" aria-label="Sections">
      <div className="wrap">
        <div className="brand">BDF Quarterly <span>·</span> Sales Kit</div>
        <ul>
          <li><a href="#magazine">Magazine</a></li>
          <li><a href="#reach">Reach</a></li>
          <li><a href="#numbers">Numbers</a></li>
          <li><a href="#industries">Who buys</a></li>
          <li><a href="#rates">Rates</a></li>
          <li><a href="#placements">Placements</a></li>
          <li><a href="#packages">Packages</a></li>
          <li><a href="#issues">Issues</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#mails">Mails</a></li>
          <li><a href="#specs">Specs</a></li>
          <li><a href="#start">Start</a></li>
        </ul>
      </div>
    </nav>

    <header className="hero">
      <div className="wrap">
        <div className="eyebrow">Beirut Duty Free · Media sales kit</div>
        <h1>BDF Quarterly Magazine</h1>
        <p className="lead">What is sellable, at what rate, in which issue, and how a sale is closed. Built for the Beirut Duty Free sales team.</p>
        <div className="meta">
          <div><b>Client</b>Beirut Duty Free</div>
          <div><b>For</b>BDF sales team</div>
          <div><b>Prepared by</b>VIPMINDS, AOR</div>
          <div><b>Version</b>16 September 2026</div>
        </div>
        <div className="status">Indicative rates, for BDF approval</div>
      </div>
    </header>

    <main className="wrap">

    <section id="magazine">
      <div className="kicker">The product</div>
      <h2>The magazine in one screen</h2>
      <p className="sub">A premium editorial magazine, four times a year, in every Beirut Duty Free shopping bag and where travellers wait. Advertisers fund it, so marketing pays for itself and the activation budget stays untouched.</p>
      <div className="stats">
        <div className="stat"><b>4</b><span>issues a year, one per season</span></div>
        <div className="stat"><b>A5</b><span>about 20 pages, print plus digital</span></div>
        <div className="stat"><b>Every bag</b><span>one copy in every BDF shopping bag</span></div>
        <div className="stat"><b>70%</b><span>international brands, chosen for the buyers</span></div>
      </div>
      <div className="grid g3" style={{ marginTop: "14px" }}>
        <div className="card"><h3>What is inside</h3><p>Products of duty free (in-store brands). Travel world (hotels, agencies, destinations). What is new (arrivals, new gems in and outside the airport). One interview or Q&amp;A per issue. Gift guides, trend pages, a puzzle page for the gate.</p></div>
        <div className="card"><h3>Who reads it</h3><p>Departing and arriving travellers at Beirut airport, the Lebanese diaspora going home and back, business travellers in lounges and hotels. Long dwell time at the gate, then the copy travels in the bag.</p></div>
        <div className="card accent"><h3>Why brands buy</h3><p>A premium editorial environment next to the point of purchase. Prices are shown, so the page sells. Barter first: brands pay in product or vouchers, cash is welcome too. Digital extension on Instagram, the BDF app and website.</p></div>
      </div>
      <div className="callout"><b>Editorial standard:</b> inflight magazine quality. Everything elevated compared with the previous BDF magazine.</div>
    </section>

    <section id="reach">
      <div className="kicker">Reach</div>
      <h2>Where the magazine is read</h2>
      <p className="sub">Phase 1 starts with issue 1. Phase 2 is added as partnerships are signed.</p>
      <div className="grid g4">
        <div className="card"><span className="tag">Phase 1</span><h3>Every BDF bag</h3><p>Guaranteed reach with every purchase.</p></div>
        <div className="card"><span className="tag">Phase 1</span><h3>Gate waiting areas</h3><p>Captive audience, long dwell time.</p></div>
        <div className="card"><span className="tag">Phase 1</span><h3>Arrivals hall</h3><p>Inbound travellers, ties to the What is new section.</p></div>
        <div className="card"><span className="tag">Phase 1</span><h3>Checkout counters</h3><p>Picked up while paying or waiting.</p></div>
        <div className="card"><span className="tag p2">Phase 2</span><h3>Partner hotels</h3><p>Rooms and lobbies, as part of the hotel package.</p></div>
        <div className="card"><span className="tag p2">Phase 2</span><h3>Travel agencies</h3><p>On desks and in booking packs.</p></div>
        <div className="card"><span className="tag p2">Phase 2</span><h3>Lounges and check-in</h3><p>VIP and business lounges, check-in area.</p></div>
        <div className="card"><span className="tag p2">Phase 2</span><h3>In-flight and gifting</h3><p>Seat pockets, amenity kits, corporate gifting, as separate deals.</p></div>
      </div>
      <div className="callout"><b>Digital extension</b>, included with every print placement above a half page: Instagram post and story on the BDF account, placement in the BDF app and on the website. Also sold standalone, see add-ons.</div>
    </section>


    <section id="numbers">
      <div className="kicker">Numbers</div>
      <h2>The exposure, and what a page costs per reader</h2>
      <p className="sub">The argument for the sales team: a page in the magazine reaches a captive, high-spending traveller for a fraction of what any comparable title charges. Volumes to be confirmed with BDF's bag counts before the kit goes out.</p>

      <div className="stats">
        <div className="stat"><b>873,095</b><span>passengers at Beirut airport in July 2025, the peak month of the year</span></div>
        <div className="stat"><b>3.87M</b><span>passengers January to July 2025, up 3.2% on 2024</span></div>
        <div className="stat"><b>721,992</b><span>passengers in July 2026, rebounding 63% on June after the spring disruption</span></div>
        <div className="stat"><b>~400k</b><span>departing passengers in a peak month, every one of them passes BDF</span></div>
      </div>


      <h3 style={{ fontSize: "16px", marginTop: "28px" }}>What a placement costs per reader</h3>
      <p className="note" style={{ margin: "6px 0 12px" }}>Based on 100,000 copies per issue (1,000 bags a day for 90 days plus 10,000 copies at gates, arrivals, checkout and partners) and 2.5 readers per copy, so 250,000 readers per issue. Figures update once BDF confirms its bag count.</p>
      <div className="tablewrap">
        <table>
          <thead><tr><th>Placement</th><th style={{ textAlign: "right" }}>Cash rate</th><th style={{ textAlign: "right" }}>Per copy</th><th style={{ textAlign: "right" }}>Per reader</th><th style={{ textAlign: "right" }}>Per 1,000 readers</th><th style={{ textAlign: "right" }}>Per day, 90 days</th></tr></thead>
          <tbody>
            <tr><td className="name">Fake cover</td><td className="num">$7,500</td><td className="num">$0.075</td><td className="num">$0.03</td><td className="num">$30</td><td className="num">$83</td></tr>
            <tr><td className="name">Cover</td><td className="num">$6,000</td><td className="num">$0.06</td><td className="num">$0.024</td><td className="num">$24</td><td className="num">$67</td></tr>
            <tr><td className="name">Back cover</td><td className="num">$4,500</td><td className="num">$0.045</td><td className="num">$0.018</td><td className="num">$18</td><td className="num">$50</td></tr>
            <tr><td className="name">Spread</td><td className="num">$3,800</td><td className="num">$0.038</td><td className="num">$0.015</td><td className="num">$15</td><td className="num">$42</td></tr>
            <tr><td className="name">Full page</td><td className="num">$2,200</td><td className="num">$0.022</td><td className="num">$0.009</td><td className="num">$9</td><td className="num">$24</td></tr>
            <tr><td className="name">Half page</td><td className="num">$1,300</td><td className="num">$0.013</td><td className="num">$0.005</td><td className="num">$5</td><td className="num">$14</td></tr>
            <tr><td className="name">Quarter page</td><td className="num">$750</td><td className="num">$0.0075</td><td className="num">$0.003</td><td className="num">$3</td><td className="num">$8</td></tr>
          </tbody>
        </table>
      </div>
      <div className="grid g3" style={{ marginTop: "14px" }}>
        <div className="card accent"><h3>Under one cent per reader</h3><p>A full page reaches 250,000 travellers for $2,200. That is $0.009 per reader, or $9 per thousand.</p></div>
        <div className="card accent"><h3>$24 a day</h3><p>A full page stays in every BDF bag for 90 days. Per day, it costs less than a coffee for two at the airport.</p></div>
        <div className="card accent"><h3>Or zero cash</h3><p>In barter, the same page costs the brand $2,850 of its own product at retail value, and no money leaves the marketing budget.</p></div>
      </div>

      <h3 style={{ fontSize: "16px", marginTop: "28px" }}>How that compares</h3>
      <p className="note" style={{ margin: "6px 0 12px" }}>Published full-page rates of comparable titles, and what they cost per copy. Duty free retailers rarely publish rate cards; their catalogues are funded by supplier marketing budgets, which is the barter logic this magazine uses.</p>
      <div className="tablewrap bench">
        <table>
          <thead><tr><th>Title</th><th>Type</th><th style={{ textAlign: "right" }}>Full page</th><th style={{ textAlign: "right" }}>Copies</th><th style={{ textAlign: "right" }}>Cost per copy</th></tr></thead>
          <tbody>
            <tr><td className="name">Condé Nast Traveller Middle East</td><td className="muted">Premium travel monthly, Dubai</td><td className="num">$10,000</td><td className="num">25,168</td><td className="num">$0.40</td></tr>
            <tr><td className="name">Emirates Open Skies</td><td className="muted">Inflight monthly (2007 published rate)</td><td className="num">€6,632</td><td className="num">55,000</td><td className="num">€0.12</td></tr>
            <tr><td className="name">SpiceJet Spice Route</td><td className="muted">Inflight monthly, India</td><td className="num">≈$2,400</td><td className="num">90,000</td><td className="num">≈$0.03</td></tr>
            <tr><td className="name">Air India Namaste</td><td className="muted">Inflight monthly, India</td><td className="num">≈$6,000</td><td className="num">100,000</td><td className="num">≈$0.06</td></tr>
            <tr><td className="name" style={{ color: "var(--twilight)" }}>BDF Quarterly</td><td className="muted">Airport retail quarterly, Beirut</td><td className="num">$2,200</td><td className="num">100,000</td><td className="num" style={{ fontWeight: "700", color: "var(--barter)" }}>$0.022</td></tr>
          </tbody>
        </table>
      </div>
      <p className="note">Sources: Condé Nast Traveller ME media kit; historical inflight rate survey (Open Skies); The Media Ant listings for Indian inflight titles (INR converted at about 83 per USD). Beirut airport figures: BLOMINVEST and This is Beirut reports on Rafic Hariri International Airport traffic.</p>
      <div className="callout"><b>The line for the sales team:</b> a full page reaches every BDF shopper for three months for less than the price of one week on a single airport billboard. In barter, it costs the brand nothing but product.</div>
    </section>

    <section id="industries">
      <div className="kicker">Industries</div>
      <h2>Who buys, and what they usually take</h2>
      <p className="sub">Start with the brands already on the shelf, then the categories outside the airport.</p>
      <div className="grid g4">
        <div className="card"><h3>Fragrance and beauty</h3><p>Cover, scent strips, Shop the look</p></div>
        <div className="card"><h3>Liquor and tobacco</h3><p>Spread, pairing feature. Check airport and legal rules first</p></div>
        <div className="card"><h3>Confectionery and gourmet</h3><p>Half page, pairing feature, sachets</p></div>
        <div className="card"><h3>Fashion and accessories</h3><p>Spread, Shop the look, gift guide</p></div>
        <div className="card"><h3>Watches and jewellery</h3><p>Inside front cover, full page</p></div>
        <div className="card"><h3>Electronics</h3><p>Full page, trend report</p></div>
        <div className="card"><h3>Hotels and resorts</h3><p>Destination guide, hotel package</p></div>
        <div className="card"><h3>Travel agencies and airlines</h3><p>Destination guide, agency package</p></div>
        <div className="card"><h3>Banks, telecom, insurance</h3><p>Back cover, coupon page, QR content</p></div>
        <div className="card"><h3>Car rental</h3><p>Half page, directory, coupon</p></div>
        <div className="card"><h3>Local Lebanese brands</h3><p>Directory grid, What is new section</p></div>
        <div className="card"><h3>Tourism boards and municipalities</h3><p>Destination guide, sponsored section</p></div>
      </div>
    </section>

    <section id="rates">
      <div className="kicker">Rate card</div>
      <h2>What is sellable</h2>
      <p className="sub">Rates per issue in USD. The barter value is 1.3 times the cash rate, settled in product, vouchers or services at retail value. All figures are indicative until BDF approves them.</p>
      <RateTabs
        standard={
          <>
              <table>
                <thead><tr><th>Placement</th><th>What the brand gets</th><th style={{ textAlign: "right" }}>Cash rate</th><th style={{ textAlign: "right" }}>Barter value</th></tr></thead>
                <tbody>
                  <tr><td className="name">Fake cover</td><td className="muted">Branded cover wrap around the real cover, highest impact</td><td className="num">$7,500</td><td className="barter">$9,750</td></tr>
                  <tr><td className="name">Cover</td><td className="muted">Single-brand cover presence plus an inside feature</td><td className="num">$6,000</td><td className="barter">$7,800</td></tr>
                  <tr><td className="name">Gatefold</td><td className="muted">Extended cover that opens out, three panels</td><td className="num">$5,500</td><td className="barter">$7,150</td></tr>
                  <tr><td className="name">4 pages</td><td className="muted">Extended advertorial or brand story</td><td className="num">$5,000</td><td className="barter">$6,500</td></tr>
                  <tr><td className="name">Back cover</td><td className="muted">Second most visible position</td><td className="num">$4,500</td><td className="barter">$5,850</td></tr>
                  <tr><td className="name">Spread</td><td className="muted">Double page</td><td className="num">$3,800</td><td className="barter">$4,950</td></tr>
                  <tr><td className="name">Inside front cover</td><td className="muted">Premium, facing the opening page</td><td className="num">$3,500</td><td className="barter">$4,550</td></tr>
                  <tr><td className="name">Q&amp;A interview</td><td className="muted">Two-page editorial interview, brand as content</td><td className="num">$3,000</td><td className="barter">$3,900</td></tr>
                  <tr><td className="name">Inside back cover</td><td className="muted">Premium, facing the back cover</td><td className="num">$3,000</td><td className="barter">$3,900</td></tr>
                  <tr><td className="name">Full page</td><td className="muted">Standard unit</td><td className="num">$2,200</td><td className="barter">$2,850</td></tr>
                  <tr><td className="name">Half page</td><td className="muted">Entry unit for established brands</td><td className="num">$1,300</td><td className="barter">$1,700</td></tr>
                  <tr><td className="name">Quarter page</td><td className="muted">Entry tier</td><td className="num">$750</td><td className="barter">$1,000</td></tr>
                  <tr><td className="name">Directory block</td><td className="muted">Small block on the directory grid, for small brands</td><td className="num">$350</td><td className="barter">$450</td></tr>
                </tbody>
              </table>
          </>
        }
        sponsored={
          <>
              <table>
                <thead><tr><th>Placement</th><th>What the brand gets</th><th style={{ textAlign: "right" }}>Cash rate</th><th style={{ textAlign: "right" }}>Barter value</th></tr></thead>
                <tbody>
                  <tr><td className="name">Sponsored recurring section</td><td className="muted">"What is new, presented by [Brand]". The brand owns the section for the issue</td><td className="num">$4,000</td><td className="barter">$5,200</td></tr>
                  <tr><td className="name">Shop the look</td><td className="muted">Styled fashion or beauty spread built around the brand</td><td className="num">$4,200</td><td className="barter">$5,450</td></tr>
                  <tr><td className="name">Destination guide</td><td className="muted">Featured spread on a city or resort, for hotels and agencies</td><td className="num">$4,200</td><td className="barter">$5,450</td></tr>
                  <tr><td className="name">Pairing feature</td><td className="muted">Food and drink pairing page, for spirits, chocolate, gourmet</td><td className="num">$2,800</td><td className="barter">$3,650</td></tr>
                  <tr><td className="name">Editor's letter sponsor</td><td className="muted">Logo and one line next to the opening editorial</td><td className="num">$1,500</td><td className="barter">$1,950</td></tr>
                </tbody>
              </table>
              <div className="callout" style={{ margin: "0", borderRadius: "0 0 10px 10px" }}><b>Rule for sponsored content:</b> editorial tone stays BDF's. The brand approves facts and product details, BDF approves the final page. Every sponsored piece is marked "In partnership with". This protects the magazine's credibility and keeps the rest of the inventory valuable.</div>
          </>
        }
        addOns={
          <>
              <table>
                <thead><tr><th>Add-on</th><th>What the brand gets</th><th style={{ textAlign: "right" }}>Cash rate</th><th style={{ textAlign: "right" }}>Barter value</th></tr></thead>
                <tbody>
                  <tr className="group"><td colSpan={4}>Physical</td></tr>
                  <tr><td className="name">Scent strip</td><td className="muted">Tip-in fragrance sample, standard in beauty and duty free print. Production supplied by the brand</td><td className="num">$3,000</td><td className="barter">$3,900</td></tr>
                  <tr><td className="name">Sample sachet</td><td className="muted">Bound-in skincare or cosmetics sample. Production supplied by the brand</td><td className="num">$2,500</td><td className="barter">$3,250</td></tr>
                  <tr><td className="name">Loose insert</td><td className="muted">Separate flyer or card in the bag with the magazine</td><td className="num">$1,800</td><td className="barter">$2,350</td></tr>
                  <tr><td className="name">Coupon page</td><td className="muted">Trackable in-store discount, proves the return on a barter deal</td><td className="num">$1,600</td><td className="barter">$2,100</td></tr>
                  <tr className="group"><td colSpan={4}>Digital</td></tr>
                  <tr><td className="name">QR unlocked content</td><td className="muted">Print ad links to exclusive video or app content</td><td className="num">$600</td><td className="barter">$800</td></tr>
                  <tr><td className="name">App and website banner</td><td className="muted">One quarter on the BDF app and website</td><td className="num">$900</td><td className="barter">$1,150</td></tr>
                  <tr><td className="name">Sponsored quiz or giveaway</td><td className="muted">Gamified page plus Instagram story mechanic</td><td className="num">$1,800</td><td className="barter">$2,350</td></tr>
                </tbody>
              </table>
          </>
        }
      />
      <p className="note">How the rates were set: a full page at $2,200 as the anchor, then standard print ratios for covers, spreads and fractions. They are VIPMINDS estimates for a small first print run, not a published benchmark. To be confirmed against print cost and quantity for issue 1.</p>
    </section>


    <section id="placements">
      <div className="kicker">Placements</div>
      <h2>What each placement means</h2>
      <p className="sub">One diagram per sellable unit, so the brand knows exactly what it books. A5 pages, 148 x 210 mm. The matching diagram goes on every booking confirmation.</p>
      <div className="legend"><span><span className="sw" style={{ background: "#FFCD0D" }}></span>Brand space</span><span><span className="sw" style={{ background: "#C9D1DE", borderColor: "#C9D1DE" }}></span>BDF editorial</span><span><span className="sw" style={{ background: "#28387F" }}></span>Cover / masthead</span></div>
      <Placements />
    </section>

    <section id="packages">
      <div className="kicker">Packages</div>
      <h2>Three ways to buy more than one page</h2>
      <p className="sub">Packages are how most of the inventory will move.</p>
      <div className="grid g3">
        <div className="card"><span className="tag">Annual</span><h3>Four issues, one position</h3><p>The brand books the same position in all four issues and gets 20% off the total. Example: a spread in four issues is $15,200 at rate, $12,160 in the annual package, or the equivalent in barter. Best for the brands already on the shelf.</p></div>
        <div className="card accent"><span className="tag">Launch</span><h3>Issue 1 founding partner</h3><p>A limited number of founding partners for the Winter issue: one premium position, one sponsored page and the digital extension, at a single price. Proposed: $9,000 cash or $11,700 in barter, maximum six partners. A sold-out first issue for BDF, a visible role in the launch for the partner.</p></div>
        <div className="card"><span className="tag p2">Partnership</span><h3>Hotels and travel agencies</h3><p>The magazine is placed in the partner's rooms, lobby or agency in exchange for 10% commission per stay or booking driven through the magazine. The partner can add a Destination guide spread at rate or in barter (room nights, packages). To define with BDF: how a driven booking is tracked, minimum placement, exclusivity.</p></div>
      </div>
    </section>

    <section id="issues">
      <div className="kicker">Issues</div>
      <h2>One issue per season, sold about ten weeks ahead</h2>
      <p className="sub">Proposed calendar for year one. Dates shift with BDF's peak seasons.</p>
      <div className="tablewrap">
        <table>
          <thead><tr><th>Issue</th><th>In bags from</th><th>Theme and moments</th><th>Booking closes</th><th>Material due</th></tr></thead>
          <tbody>
            <tr><td className="name">1 · Winter</td><td>10 December 2026</td><td className="muted">Christmas at the airport, New Year, ski season with Mzaar, gifting</td><td>30 October 2026</td><td>10 November 2026</td></tr>
            <tr><td className="name">2 · Spring</td><td>15 February 2027</td><td className="muted">Ramadan and Eid, Mother's Day, Easter, spring travel</td><td>8 January 2027</td><td>22 January 2027</td></tr>
            <tr><td className="name">3 · Summer</td><td>1 June 2027</td><td className="muted">Diaspora coming home, weddings, summer festivals, sun and beauty</td><td>16 April 2027</td><td>30 April 2027</td></tr>
            <tr><td className="name">4 · Autumn</td><td>1 September 2027</td><td className="muted">Back to school, autumn travel, new arrivals after Cannes, tech</td><td>16 July 2027</td><td>30 July 2027</td></tr>
          </tbody>
        </table>
      </div>
      <div className="grid g3" style={{ marginTop: "14px" }}>
        <div className="card"><h3>Booking closes</h3><p>Six weeks before the issue is on bags. After that date the position goes to the next brand on the list.</p></div>
        <div className="card"><h3>Material due</h3><p>Four weeks before. Late material means the brand's page runs in the next issue, the fee stays.</p></div>
        <div className="card accent"><h3>Issue 1 is tight</h3><p>Sales start the day the prototype is approved. Founding partners first, then the shelf brands, then outside categories.</p></div>
      </div>
    </section>

    <section id="process">
      <div className="kicker">Process</div>
      <h2>From first mail to placement report</h2>
      <p className="sub">BDF sells, VIPMINDS prepares and produces. One BDF point person owns the pipeline sheet: brand, position, issue, status, value.</p>
      <div className="steps">
        <div className="step"><h3>Approach</h3><p>Mail 1 with the one-page teaser, no rates.</p><span className="who">BDF sales</span></div>
        <div className="step"><h3>Meeting</h3><p>Show the prototype and this kit.</p><span className="who">BDF, VIPMINDS if needed</span></div>
        <div className="step"><h3>Proposal</h3><p>Mail 2 with the chosen position, rate or barter value.</p><span className="who">BDF sales</span></div>
        <div className="step"><h3>Agreement</h3><p>Signed agreement with the benefits listed.</p><span className="who">BDF</span></div>
        <div className="step"><h3>Material</h3><p>Brand sends artwork to spec, or VIPMINDS designs it (fee).</p><span className="who">Brand or VIPMINDS</span></div>
        <div className="step"><h3>Proof</h3><p>PDF proof approved by the brand and by BDF.</p><span className="who">VIPMINDS</span></div>
        <div className="step"><h3>Print and place</h3><p>Print, bag insertion, stands, digital posts.</p><span className="who">VIPMINDS with BDF</span></div>
        <div className="step"><h3>Report</h3><p>Mail 3: thank you, proof of placement, photos, next issue offer.</p><span className="who">BDF sales</span></div>
      </div>
    </section>

    <section id="mails">
      <div className="kicker">Templates</div>
      <h2>The three mails in the kit</h2>
      <p className="sub">Written for the BDF sales team. Short, ready to personalise. Supplied as Word and as Gmail-ready text, English first, Arabic on request.</p>
      <div className="grid g3">
        <div className="mail"><h3>Mail 1 · Approach</h3><div className="subj">Subject: Your brand in the new BDF magazine</div>
          <ul><li>Who we are and what is launching: a quarterly magazine in every Beirut Duty Free bag and at the gates.</li><li>Why this brand: one line on where it fits (section, issue).</li><li>The ask: 20 minutes to show the prototype.</li><li>Attachment: one-page teaser, no rates.</li></ul></div>
        <div className="mail"><h3>Mail 2 · Proposal</h3><div className="subj">Subject: BDF magazine, Winter issue, your position</div>
          <ul><li>Thank you for the meeting.</li><li>The proposal: position, issue, rate, and the barter option with its value in product or vouchers.</li><li>What is included: digital extension, proof of placement.</li><li>Deadlines: booking and material dates.</li><li>Attachment: agreement with benefits.</li></ul></div>
        <div className="mail"><h3>Mail 3 · Thank you and proof</h3><div className="subj">Subject: Your page is out, here is the proof</div>
          <ul><li>The issue is on bags since [date].</li><li>Attachment: placement proof (PDF page), photos in the bag and at the gate, digital screenshots.</li><li>Results where we have them: coupons redeemed, QR scans.</li><li>One line about the next issue and its booking deadline.</li></ul></div>
      </div>
    </section>

    <section id="specs">
      <div className="kicker">Specifications</div>
      <h2>Ad specs the brand receives with the agreement</h2>
      <p className="sub">A5 magazine, trimmed 148 x 210 mm.</p>
      <div className="tablewrap">
        <table>
          <thead><tr><th>Unit</th><th>Trim size (mm)</th><th>With bleed (mm)</th><th>Notes</th></tr></thead>
          <tbody>
            <tr><td className="name">Full page</td><td>148 x 210</td><td>154 x 216</td><td className="muted">Keep text 5 mm inside the trim</td></tr>
            <tr><td className="name">Spread</td><td>296 x 210</td><td>302 x 216</td><td className="muted">Avoid text across the centre fold</td></tr>
            <tr><td className="name">Half page, horizontal</td><td>148 x 105</td><td>154 x 111</td><td className="muted">Also available vertical, 74 x 210</td></tr>
            <tr><td className="name">Quarter page</td><td>74 x 105</td><td>no bleed</td><td className="muted">Sits inside the page margin</td></tr>
            <tr><td className="name">Gatefold</td><td>3 panels of 148 x 210</td><td>per panel + 3 mm</td><td className="muted">Inside panel 2 mm narrower to fold flat</td></tr>
            <tr><td className="name">Fake cover</td><td>148 x 210, front and back</td><td>154 x 216</td><td className="muted">Wraps the real cover, BDF logo stays on the spine strip</td></tr>
            <tr><td className="name">Loose insert</td><td>up to 148 x 210</td><td>as printed</td><td className="muted">Maximum 10 g, supplied by the brand</td></tr>
            <tr><td className="name">Scent strip, sachet</td><td>standard tip-in</td><td>supplied</td><td className="muted">Produced by the brand's fragrance house or supplier</td></tr>
          </tbody>
        </table>
      </div>
      <div className="grid g3" style={{ marginTop: "14px" }}>
        <div className="card"><h3>File</h3><p>PDF/X-1a, CMYK, 300 dpi, fonts embedded.</p></div>
        <div className="card"><h3>Digital</h3><p>Instagram 1080 x 1350 post, 1080 x 1920 story. Banner sizes on request.</p></div>
        <div className="card accent"><h3>Design service</h3><p>VIPMINDS designs the page from the brand's assets, from $350 per unit.</p></div>
      </div>
    </section>

    <section id="start">
      <div className="kicker">Next steps</div>
      <h2>What we need from BDF to start selling</h2>
      <p className="sub">Once these are approved, the kit is final and the sales team can go out.</p>
      <div className="tablewrap">
        <table>
          <thead><tr><th>#</th><th>Decision</th><th>Owner</th><th>By when</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>Approve the indicative rates, or send corrections</td><td>Lynn</td><td>This week</td></tr>
            <tr><td>2</td><td>Approve the barter rule: 1.3 times the cash rate, in product, vouchers or services</td><td>Lynn</td><td>This week</td></tr>
            <tr><td>3</td><td>Approve the four-issue calendar and the Winter issue date</td><td>Lynn</td><td>This week</td></tr>
            <tr><td>4</td><td>Name the BDF point person who owns the pipeline</td><td>BDF</td><td>This week</td></tr>
            <tr><td>5</td><td>Share the first-approach list: shelf brands, hotels, agencies</td><td>BDF sales team</td><td>Within 10 days</td></tr>
            <tr><td>6</td><td>Confirm airport permissions for gate and arrivals stands</td><td>BDF with the airport</td><td>Before 30 October</td></tr>
            <tr><td>7</td><td>Agree the print budget and quantity for issue 1</td><td>BDF and VIPMINDS</td><td>Before 30 October</td></tr>
          </tbody>
        </table>
      </div>
      <div className="callout"><b>What VIPMINDS delivers next:</b> prototype design with dummy ads, the one-page teaser, the agreement with benefits, and the three mails. Then the sales team gets a 30-minute walkthrough of this kit.</div>
    </section>

    </main>

    <footer>
      <div className="wrap">
        <Image src="/vipminds-logo.png" alt="VIPMINDS, Bold wins" width={640} height={257} />
        <p>VIPMINDS US LLC · AOR for Beirut Duty Free · norka@vipmindslb.com · +961 3 373882<br />The magazine pays for itself. The budget stays for activations.</p>
      </div>
    </footer>
    </>
  );
}
