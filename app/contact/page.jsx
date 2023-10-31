"use client";

import { useEffect, useRef, useState } from "react";
import { CustomButton, CustomTag, Faq } from "@/components";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const data = {
      name: String(e.target.name.value),
      email: String(e.target.email.value),
      number: Number(e.target.number.value),
      city: String(e.target.city.value),
      message: String(e.target.message.value),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (response.ok) {
      console.log("Message sent successfully");
      setLoading(false);
      //reset
      e.target.name.value = "";
      e.target.email.value = "";
      e.target.number.value = "";
      e.target.city.value = "";
      e.target.message.value = "";
      alert("Message Received, Will Get Back To You Shortly");
    }
    if (!response.ok) {
      console.log("Error sending message");
      setLoading(false);
    }
  }

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <section>
      <div className="contact_section">
        <div className="sm:bluegradient bluegradientsm">
          <div className="container py-[130px] md:py-[160px]">
            <div className="flex lg:flex-row items-center">
              <div>
                <div>
                  <CustomTag
                    title="Reach Us"
                    containerStyles="lg:w-[90px] px-2 w-[90px] text-sm text-white bg-tagbg2 py-[6px]"
                  />
                </div>
                <div className="sm:w-[570px] w-[220px]">
                  <h1 className="heading text-[42px] leading-[46px] text-white font-semibold md:text-[60px] md:leading-[70px]">
                    Contact Us
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:container px-4 pt-32">
        <div className="bg-testibg2" ref={ref}>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <div className="pt-20 sm:px-0 px-8 text-center">
              <div className="flex justify-center">
                <CustomTag
                  title="Contact"
                  containerStyles="lg:w-[75px] px-2 w-[75px] text-sm py-2 bg-tagbg2 text-white"
                />
              </div>
              <div className="flex justify-center">
                <h1 className="text-[28px] font-semibold heading md:text-[35px] text-white">
                  Get In Touch With Us
                </h1>
              </div>
              <div className="flex justify-center">
                <h6 className="font-medium text-white pt-4 sm:w-[700px] w-[400px] text-center">
                  We appreciate your interest please complete the form below and
                  we will contact you to discuss your warehousing, distribution,
                  air, ocean freight or any other logistics needs.
                </h6>
              </div>
            </div>
            <div className="py-20 flex justify-between md:px-40 px-0 lg:flex-row flex-col items-center">
              <div className="flex justify-center items-center flex-col">
                <Image
                  src="/Icons/contact_mail.svg"
                  width={70}
                  height={70}
                  alt="icon"
                />
                <p className="pt-4 text-white font-medium text-center">
                  info@mbtlogistics.com
                  <br />
                  sales@mbtlogistics.com
                </p>
              </div>
              <div className="flex justify-center items-center flex-col lg:pt-0 pt-7">
                <Image
                  src="/Icons/contact_phone.svg"
                  width={70}
                  height={70}
                  alt="icon"
                />
                <p className="pt-4 text-white font-medium">
                  (+91) 885 131 0113 <br />
                  &nbsp;
                </p>
              </div>
              <div className="flex justify-center items-center flex-col">
                <Image
                  src="/Icons/contact_timings.svg"
                  width={70}
                  height={70}
                  alt="icon"
                />
                <p className="pt-4 text-white font-medium text-center">
                  Mon - Sat 10.00 - 18.00 <br />
                  Sunday Closed
                </p>
              </div>
              <div className="flex justify-center items-center flex-col lg:pt-0 pt-7">
                <Image
                  src="/Icons/contact_address.svg"
                  width={70}
                  height={70}
                  alt="icon"
                />
                <p className="pt-4 text-white font-medium text-center">
                  4th Main Road, IIIrd Cross, <br />
                  Chamrajpet, Bangalore-560018
                </p>
              </div>
            </div>
            <div className="pb-10 sm:pt-5 pt-0 flex justify-center md:px-40 px-0 sm:flex-row flex-col items-center">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-8 sm:px-0 px-8">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    className="border border-white placeholder:text-white transition-all bg-transparent sm:py-5 py-3 sm:px-10 px-7 text-lg text-white"
                    name="name"
                    id="name"
                    size={30}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email*"
                    className="border border-white placeholder:text-white transition-all bg-transparent sm:py-5 py-3 sm:px-10 px-7 text-lg text-white"
                    name="email"
                    id="email"
                    size={30}
                    required
                  />
                  <input
                    type="number"
                    placeholder="Phone Number*"
                    className="border border-white placeholder:text-white transition-all bg-transparent sm:py-5 py-3 sm:px-10 px-7 text-lg text-white"
                    name="number"
                    id="number"
                    minLength={10}
                    maxLength={10}
                    size={30}
                    required
                  />
                  <input
                    type="text"
                    placeholder="City*"
                    className="border border-white placeholder:text-white transition-all bg-transparent sm:py-5 py-3 sm:px-10 px-7 text-lg text-white"
                    name="city"
                    id="city"
                    size={30}
                    required
                  />
                </div>
                <div className="grid grid-cols-1 pt-[32px] sm:px-0 px-8">
                  <textarea
                    cols="30"
                    rows="5"
                    type="text"
                    placeholder="Your Message*"
                    className="border border-white placeholder:text-white transition-all bg-transparent sm:py-5 py-3 sm:px-10 px-7 text-lg text-white"
                    name="message"
                    id="message"
                    required
                  />
                </div>
                <div className="flex justify-center py-12">
                  <CustomButton
                    title="Submit Message"
                    isDisabled={loading}
                    btnType="submit"
                    containerStyles="py-5 px-7 text-lg text-white bg-primaryColor hover:bg-hoverColor transition-all disabled:bg-tagbg disabled:text-tagbg2"
                  />
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="xl:pb-10 pb-48">
        <Faq />
      </div>
    </section>
  );
};

export default Contact;
