import "./page.scss"
import me from "../public/me.jpg"
import Image from "next/image";
import EmailButton from "@/app/components/email-button";
import {SOCIAL_LINKS} from "@/app/lib/data";
import Link from "next/link";

export default function Page() {
  return (
      <>
          <main className="bio">
              <div className="bio__left">
                  <Image src={me} alt="Jack Willars" width={40} height={40}/>
              </div>
              <div className="bio__right">
                  <h4>
                      Hi, my name&apos;s <span className="darken">Jack</span>.
                      <br/>
                      I craft <span className="darken">digital experiences</span>, front to back.                      <br/>
                      <br/>
                      Always learning, driven with a passion for acquiring new skills. I continually strive to
                      participate in <span className="darken">high-quality</span>, <span className="darken">unique</span> and <span className="darken">meaningful</span> projects.
                      <br/>
                      <br/>
                      My aim is to continue <span className="darken">improving</span>, <span
                      className="darken">learning</span> and <span className="darken">exploring</span> the various
                      corners of life.
                  </h4>
                  <EmailButton/>
              </div>
          </main>
          <div className="hr"/>
          <footer>
              {SOCIAL_LINKS.map((link, index) => (
                  <Link className='icon' key={index} href={link.url} target="_blank" rel="noreferrer">
                      <link.icon/>
                  </Link>
              ))}
          </footer>
      </>
  );
}
