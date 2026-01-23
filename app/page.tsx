"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useScrolledPastTop } from '@/app/lib/useScrolledPastTop';
import EmailForm from '@/app/ui/EmailForm';
import { courier } from '@/app/ui/fonts';
import Smokestack from '@/public/rggi-power-plants.svg';
import Law from '@/app/ui/Law';
import { lawsData } from '@/app/lib/lawsData';
import Counter from '@/app/ui/Counter';
import AnimatedPowerPlants from '@/app/ui/AnimatedPowerPlants';

export default function Home() {
  const scrolled = useScrolledPastTop();
  return (
    <>
      <div id="sentinel"></div>

      <div className="background-wrapper">
        <div className="smoke-background">
          <div className="smoke shift-right">
            <video
              className="smoke-video"
              autoPlay
              muted
              playsInline
              loop
              preload="metadata"
              poster="/chimney_poster.jpg"
            >
              <source src="/chimney.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="background">
          <div className="smokestack shift-right">
            <Smokestack />
            <AnimatedPowerPlants />
          </div>
          <div className="stockpile-container">
            <div className="stockpile">
              <Image
                src="/stockpile.svg"
                alt="Stockpile"
                width={4434}
                height={1087}
                className="stockpile-base"
              />
              <div className="stockpile-grain-layer"></div>
            </div>
          </div>
        </div>
      </div>



      <header className="navbar-container">
        <div className="navbar">
          <div className="brand-container">
            <Link href="/" className={`brand ${!scrolled ? 'fade-in' : 'fade-out'}`}>
              <Image
                src="/wordmark-dark.svg"
                alt="BAN CARBON wordmark"
                width={152}
                height={19}
                className="wordmark"
              />
            </Link>
            <Link href="/" className={`brand ${scrolled ? 'fade-in' : 'fade-out'}`}>
              <Image
                src="/favicon-dark.svg"
                alt="BAN CARBON logo"
                width={20}
                height={20}
                className="logo"
              />
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section>
          <div className="landing-container">
            <div className="landing">
              <div className="hero">
                <h1 className="hero-line">
                  Burn the permits<br />
                  polluters need<br />
                  to emit CO<sub>2</sub>.
                </h1>
              </div>
              <EmailForm />
            </div>
          </div>
        </section>
        <div className="smokestack-contents">
          <div className="polluters-line">
            <div className="polluters-line-container">
              <h2 className="explainer-line">
                They&apos;re U.S.<br />
                power plants<br />
                still burning<br />
                fossil fuels.
              </h2>
            </div>
          </div>
          <div className="polluter-card">
            <div className="polluter-card-container">
              <Image
                src="/astoria.png"
                alt="Picture of Astoria Energy"
                width={340}
                height={340}
                className="polluter-card-image"
              />
              <div className={`${courier.className} polluter-info`}>
                <div className="percentage45-margin-top">
                  <p>Astoria Energy</p>
                </div>
                <div>
                  <p>Queens, N.Y.C.</p>
                </div>
                <div className="percentage7-margin-top">
                  <p>CO<sub>2</sub> emissions in 2024:</p>
                </div>
                <div>
                  <p>3.5 million tons</p>
                </div>
                <div>
                  <p>= Bhutan or Iceland</p>
                </div>
              </div>
            </div>
          </div>
          <div className="permits-line-container right-of-smokestack">
            <h2 className="explainer-line">
              They need one <br />
              state permit to emit<br />
              each ton of CO<sub>2</sub>.
            </h2>
          </div>
          <div className={`laws-container ${courier.className}`}>
            <div className="folder">
              <div className="tab-bar worn-paper">
                <input type="radio" name="state-tab" id="tab-ct" />
                <input type="radio" name="state-tab" id="tab-de" />
                <input type="radio" name="state-tab" id="tab-ma" />
                <input type="radio" name="state-tab" id="tab-md" />
                <input type="radio" name="state-tab" id="tab-nh" defaultChecked />
                <input type="radio" name="state-tab" id="tab-nj" />
                <input type="radio" name="state-tab" id="tab-ny" />
                <input type="radio" name="state-tab" id="tab-ri" />
                <input type="radio" name="state-tab" id="tab-vt" />
                <label htmlFor="tab-ct">CT</label>
                <label htmlFor="tab-de">DE</label>
                <label htmlFor="tab-ma">MA</label>
                <label htmlFor="tab-md">MD</label>
                <label htmlFor="tab-nh">NH</label>
                <label htmlFor="tab-nj">NJ</label>
                <label htmlFor="tab-ny">NY</label>
                <label htmlFor="tab-ri">RI</label>
                <label htmlFor="tab-vt">VT</label>
              </div>
              <div className="folder-background worn-paper"></div>
              <Law lawData={lawsData[0]} />
              <Law lawData={lawsData[1]} />
              <Law lawData={lawsData[2]} />
              <Law lawData={lawsData[3]} />
              <Law lawData={lawsData[4]} />
              <Law lawData={lawsData[5]} />
              <Law lawData={lawsData[6]} />
              <Law lawData={lawsData[7]} />
              <Law lawData={lawsData[8]} />
              <Law lawData={lawsData[9]} />
              <Law lawData={lawsData[6]} className="law-placeholder" />
            </div>
          </div>
          <div className={`counter-container ${courier.className} right-of-smokestack`}>
            <div className="counter-labels">
              <div>
                Live emissions<br />
                (2026, tons CO<sub>2</sub>)
              </div>
              <div className="counter-divider"></div>
              <div className="counter-label-right">
                Permits they<br />
                must obtain
              </div>
            </div>
            <Counter className="counter-number" />
          </div>
        </div>
        <section>
          <div className="stockpile-contents">
              <div className="burn-line-container">
                <h2 className="explainer-line">
                  To ban their CO<sub>2</sub><span className="tiny-hspace"></span>,<br />
                  burn their permits.
                </h2>
              </div>
            <div className="permit-footage-container">
              <div className="permits-closeup-container">
                <Image
                  src="/permits-closeup.svg"
                  alt="Permits close-up"
                  width={119}
                  height={134}
                  className="permits-closeup"
                />
              </div>
              <div className="permit-footage">
                {/* Background layer - permits */}
                <Image
                  src="/permits.png"
                  alt="Permit footage"
                  width={300}
                  height={200}
                  className="permits-background"
                />
                {/* Intermediate layer - vignette */}
                <div className="vignette-overlay"></div>
                {/* Intermediate layer - analog static/scanlines */}
                <div className="analog-static"></div>
                <div className="rolling-line"></div>
                <div className="rolling-line line-2"></div>
                {/* Foreground layer - CCTV overlay */}
                <Image
                  src="/permits-cctv.svg"
                  alt="CCTV overlay"
                  width={131}
                  height={88}
                  className="permits-cctv-overlay"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="cta-section">
            <div className="cta-lines cta-line">
              <p>1. We compete with power plants to buy <br />
              <span className="invisible">1. </span>
              their carbon permits in state auctions.</p>
              <p>2. We lock them up in a trust forever.</p>
            </div>
          </div>
          <EmailForm className="cta-end"/>
        </section>
        <footer>
          <a href="mailto:paco@bancarbon.com" className="footer-email">
            paco@bancarbon.com
          </a>
        </footer>
      </main>
    </>
  );
}
