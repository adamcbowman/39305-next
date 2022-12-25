import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import piImg from "../public/PngItem_2278415.png";
import Card from "../components/card";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>39-305 Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.bgImg}>
        <Image src={piImg} alt="pi logo" />
      </div>
      <main className={styles.main}>
        <h1 className={styles.title}>39-305 Home</h1>

        <p className={styles.description}>All the Pi 🥧</p>

        <div className={styles.grid}>
          <Card
            colour="red"
            name="redPi🍎"
            description="the OG pi in the cluster"
            linksList={{
              OMV: "http://redpi.local",
              Plex: "http://redpi.local:32400/web/index.html",
              NodeRed: "http://redpi.local:1880",
              Portainer: "http://redpi.local:9000",
            }}
            ip="192.168.0.23"
            glances={true}
          />
          <Card
            colour="yellow"
            name="yellowPi🍋"
            description="Secondary PiHole, shAirplay & Spotify Connect"
            linksList={{
              PiHole: "http://yellowpi.local/admin",
            }}
            ip="192.168.0.28"
            glances={true}
          />
          <Card
            colour="green"
            name="greenPi🥝"
            description="HomeAssistant"
            linksList={{
              HomeAssistant: "http://hass.acbhome.online",
            }}
            ip="192.168.0.13"
            glances={false}
          />
          <Card
            colour="blue"
            name="bluePi🫐"
            description="WebServer (this page) and Mysterium VPN node runner."
            linksList={{
              WebServer: "http://bluepi.local",
              MysteriumVPN: "http://bluepi.local:4449",
            }}
            ip="192.168.0.158"
            glances={true}
          />
          <Card
            colour="purple"
            name="purplePi🍇"
            description="Desktop pi. QbitTorrent"
            linksList={{
              QbitTorrent: "http://purplepi.local:8080/",
            }}
            ip="192.168.0.30"
            glances={true}
          />
          <Card
            colour="white"
            name="blackPi🍫"
            description="PiHole, PiVPN/Wireguard"
            linksList={{
              PiHole: "http://pi.hole/admin",
            }}
            ip="192.168.0.16"
            glances={true}
          />
        </div>

        <div id="infra" className={styles.grid}>
          <a href="http://192.168.0.1">
            <Card
              colour="lightblue"
              name="Bell Modem/Router "
              description="Admin Interface for web connection"
              linksList={{
                Admin: "http://192.168.0.1",
              }}
            ip="192.168.0.1"
            glances={false}
            />
          </a>
          <a href="http://192.168.0.10">
            <Card
              colour="lightgreen"
              name="tpLink Wifi Router "
              description="Admin interface for Wifi"
              linksList={{
                Admin: "http://192.168.0.10",
              }}
            ip="192.168.0.10"
            glances={false}
            />
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://acbconsulting.tech"
          target="_blank"
          rel="noopener noreferrer"
        >
          Designed by ACB Consulting
        </a>
      </footer>
    </div>
  );
}
