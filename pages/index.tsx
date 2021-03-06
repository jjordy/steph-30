import Head from "next/head";
import { useState, useCallback } from "react";
import RSVP from "shared/RSVP";
import axios from "axios";
export default function IndexPage() {
  const [showRSVP, setShowRSVP] = useState(false);
  const [showRSVPSuccess, setShowRSVPSuccess] = useState(false);
  const handleSubmitForm = useCallback((values) => {
    axios
      .post(`/api/contact`, values)
      .then((res) => {
        setShowRSVPSuccess(true);
        setShowRSVP(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Yellowtail&display=swap"
          rel="stylesheet"
        />
        <title>Stephanies 30th Birthday Celebration</title>
      </Head>
      <div className="flex flex-no-wrap">
        <div className="md:w-2/3 md:p-16">
          <div
            className="block md:hidden"
            style={{
              backgroundImage: "url(/bg_2.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              height: "40vh",
              width: "100%",
            }}
          >
            <div className="h-full w-full flex items-end justify-end">
              <h1 className="text-3xl text-white heading p-4 block md:hidden">
                Stephanies turning 30
              </h1>
            </div>
          </div>
          <h1 className="text-6xl md:p-8 hidden md:block text-center text-white">
            Stephanies turning 30
          </h1>
          <div className="text-center text-white flex items-center justify-center flex-col">
            <h2 className="text-4xl tracking-tight font-medium p-2">
              <span className="my-2">Join us on </span>
              <span className="bg-orange-600 text-white p-1 md:p-4 cursive">
                September 26th 2020 @ 5PM
              </span>
              <br />
            </h2>
            <h3 className="text-3xl tracking-tight font-medium my-16">
              {" "}
              and don your best{" "}
              <span className="bg-orange-600 text-white p-1 md:p-4 cursive">90's</span> themed
              attire (OR dress as a{" "}
              <span className="bg-orange-600 text-white p-1 md:p-4 cursive">90's</span> celeb) for a{" "}
              <span className="bg-orange-600 text-white p-1 md:p-4 cursive">90's</span> Themed
              celebration.
            </h3>
            {!showRSVPSuccess && (
              <button
                onClick={() => setShowRSVP(!showRSVP)}
                className="cursive flex items-center justify-center bg-orange-600 text-white shadow-xl px-6 py-2 text-3xl hover:bg-indigo-600 transform transition-all duration-200 ease-in-out"
              >
                CLICK HERE TO RSVP <img src="mchammer.gif" alt="HAMMER TIME" />
              </button>
            )}
            {showRSVPSuccess && (
              <div className="cursive bg-orange-600 text-white shadow-xl px-6 py-2">
                RSVP RECORDED
              </div>
            )}
            {showRSVP && <RSVP onClose={() => setShowRSVP(false)} onSubmit={handleSubmitForm} />}
            <div className="flex flex-wrap items-center justify-center">
              <img src="tenor.gif" alt="WOW" className="w-48 h-48 object-contain" />
              <img src="mtv.gif" alt="WOW" className="w-48 h-48 object-contain" />
              <img src="kaledio.gif" alt="WOW" className="w-48 h-48 object-contain" />
              <img src="prince.gif" alt="WOW" className="w-48 h-48 object-contain" />
              <img src="wow.gif" alt="WOW" className="w-48 h-48 object-contain" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="geocities.jpg" alt="GEO" />
            <img src="counter2.gif" alt="COUNTER" />
          </div>
        </div>
        <div className="hidden: md:block md:w-1/3">
          <div
            style={{
              backgroundImage: "url(/bg_2.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              height: "100vh",
              width: "100%",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
