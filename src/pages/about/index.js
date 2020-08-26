import React from "react";

import StandardButton from "../../components/buttons/ButtonStandard";
import SixSteps from "../../components/InfoBlocks/SixSteps";
import FinalNote from "../../components/InfoBlocks/EcgFinalNote";
import Footer from "../../components/Footer/Footer";
import GraniteCountertop1 from "../../images/tropic-brown-stacked-stone area-4.jpg";
import GraniteCountertop2 from "../../images/wave-flower-granite-kitchen-countertops.jpg";
import GraniteCountertop3 from "../../images/Zaytseva-0074.JPG";

export default function AboutSection() {
  return (
    <>
      <div>
        <StandardButton title={"Home"} linkTo={""} />
        <div class="mb-8">Header</div>
        <div className="text-center">
          <h1 className="text-3xl">About East Coast Granite & Tile</h1>
        </div>
        <hr className="border-2" />

        <div className="md:flex mt-8 md:px-32">
          <div className="md:flex md:flex-shrink-0">
            <img
              className="m-auto rounded-lg md:m-auto md:rounded-lg shadow-lg md:mr-4"
              src={GraniteCountertop1}
              width="448"
              height="299"
              alt="Woman paying for a purchase"
            />
          </div>
          <div className="static mt-6 px-6 md:mt-0 md:ml-6">
            <div class="z-10 my-6 uppercase text-3xl text-yellow-300 font-bold">
              Priority Customer Service
            </div>
            <hr className="border-8 w-32 mb-8" />
            <p className="block mt-1 text-lg leading-tight font-semibold text-gray-500 pb-4">
              Over the course of a decade, East Coast Granite & Tile has
              installed more than 25,000 granite, marble and quartz projects in
              both North and South Carolina.
            </p>
            <p class="mt-2 text-gray-600">
              Our 20 plus locations have access to thousands of stone slabs and
              are ready to deliver a quality installation at any given time. Our
              design specialists and installation technicians are experts in
              stone countertops and can provide you with the very best advice on
              how to proceed.
            </p>
            <p class="mt-2 text-gray-600">
              Not only do we offer stone countertops of superior quality, we
              also install them to the highest industry standards. Why settle
              for second best when the team at East Coast Granite & Tile stands
              ready to help you make the best choice for your home?
            </p>
            <p class="mt-2 text-gray-600">
              Family owned and operated since its founding, East Coast Granite &
              Tile is committed to exceeding our customers' expectations. At the
              top of our list is turning every dream kitchen into reality – and
              making it as effortless and painless for the client. Our design
              staff and installation technicians are extremely well-qualified to
              offer guidance and solutions. Here is why:
            </p>
          </div>
        </div>

        <div className="md:flex mt-8 md:px-32">
          <div className="md:flex md:flex-shrink-0 md:bg-gray-100 md:order-last">
            <img
              className="m-auto md:w-128 rounded-lg shadow-lg md:m-4 md:self-center"
              src={GraniteCountertop2}
              width="448"
              height="299"
              alt="Woman paying for a purchase"
            />
          </div>
          <div className="bg-gray-100 py-6 md:rounded-l-lg">
            <div className="mt-6 px-6 md:mt-0 md:ml-6">
              <div class="my-6 uppercase tracking-wide text-3xl text-yellow-300 font-bold">
                Specialization
              </div>
              <hr className="border-8 w-32 mb-8" />
              <p className="block mt-1 text-lg leading-tight font-semibold text-gray-500 pb-4">
                Since East Coast Granite & Tile only deals solely with granite,
                marble and quartz countertops, our team has an enormous amount
                of experience in this area. In fact, due to this specialization,
                we provide our customers with a host of added benefits
                including:
              </p>
              <ul className="mt-4">
                <li>
                  <span className="font-bold">More affordable prices –</span>{" "}
                  With 20 locations spread out across both North and South
                  Carolina, we have thousands of stone slabs meaning we buy in
                  bulk, get the best wholesale prices and pass on the savings to
                  our clients.
                </li>
                <li className="mt-4">
                  <span className="font-bold">Quick turnaround –</span> Our time
                  from templating or layout to final fabrication will only take
                  5-7 business days, as opposed to the 4-6 weeks that Lowes or
                  Home Depot – and many of our other competitors - require.
                </li>
                <li className="mt-4">
                  <span className="font-bold">Wide variety –</span> Natural
                  stone countertops are available in 1000s of colors and
                  patterns. Add the customization options available for each
                  stone product and the choices are almost unimaginable.
                </li>
                <li className="mt-4">
                  <span className="font-bold">Customization –</span> In addition
                  to edging options, our experienced design team can also offer
                  further options to customize your countertop installation such
                  as backsplashes and “floating islands.”
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="md:flex mt-8 md:px-32">
          <div className="md:flex md:flex-shrink-0">
            <img
              className="m-auto md:w-128 rounded-lg shadow-lg md:mr-4 md:self-center"
              src={GraniteCountertop3}
              width="448"
              height="299"
              alt="Woman paying for a purchase"
            />
          </div>
          <div className="mt-6 px-6 md:mt-0 md:ml-6">
            <div class="my-6 uppercase tracking-wide text-3xl text-yellow-300 font-bold">
              Quality
            </div>
            <hr className="border-8 w-32 mb-8" />
            <p className="block mt-1 text-lg leading-tight font-semibold text-gray-500 pb-4">
              Everyone at East Coast Granite & Tile is enthusiastic about the
              job we do and are passionate about customer service. It is a team
              effort that utilizes the skills of designers, templators,
              fabricators and installers. Here are just a few reasons why we
              outstrip the competition
            </p>
            <ul className="mt-4">
              <li>
                <span className="font-bold">Easy Contact –</span> With The
                client will always have a single point of contact to resolve any
                issues as quickly as possible.
              </li>
              <li className="mt-4">
                <span className="font-bold">One Stop Shop –</span> We offer a
                complete solution. Basically the client merely needs to make a
                list of requirements and pick a color and style of stone. We
                handle all of the other details.
              </li>
              <li className="mt-4">
                <span className="font-bold">Expert Designers –</span> We always
                have experts available to help you make the right decisions.
              </li>
              <li className="mt-4">
                <span className="font-bold">Minimal Intrusion –</span> We get
                the job done quickly and cause as little inconvenience as
                possible to you and your family during the project.
              </li>
              <li className="mt-4">
                <span className="font-bold">Quality Service & Product –</span>{" "}
                We are confident in the quality of our product and its
                installation. We offer a one year guarantee on the workmanship
                and a 25-year sealer warranty.
              </li>
            </ul>
          </div>
        </div>

        <div className="md:flex mt-8 md:px-32 mb-8">
          <div className="md:flex md:flex-shrink-0 md:bg-gray-100 md:order-last">
            <img
              className="m-auto md:w-128 rounded-lg shadow-lg md:m-4 md:self-center"
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
              width="448"
              height="299"
              alt="Woman paying for a purchase"
            />
          </div>
          <div className=" bg-gray-100 py-6 md:rounded-r-lg">
            <div className="mt-6 px-6 md:mt-0 md:ml-6 md:bg-gray-100 md:rounded-lg">
              <div class="my-6 uppercase tracking-wide text-3xl text-yellow-300 font-bold">
                Convenient Delivery
              </div>
              <hr className="border-8 w-32 mb-8" />
              <p className="block mt-1 text-lg leading-tight font-semibold text-gray-500 pb-4">
                Our experience installing over 25,000 different projects has
                given us a wealth of experience at East Coast Granite & Tile.
                With this experience, we have developed a relatively simple
                5-step process. To help our customers understand the process,
                here is a quick overview:
              </p>
              <ul className="mt-4">
                <li>
                  <span className="font-bold">Obtain An Estimate -</span> Simply
                  describe your project to us in an Online Form or in person to
                  a Design Specialist and we will provide you a free estimate.
                </li>
                <li className="mt-4">
                  <span className="font-bold">Choose A Stone –</span> A visit to
                  any of our locations will offer you 1000's of choices. Take as
                  much or as little time as you need to feel confident in your
                  decision.
                </li>
                <li className="mt-4">
                  <span className="font-bold">Schedule Your Template –</span>{" "}
                  One of our professional templaters will contact you and
                  schedule a convenient time to measure and replicate your
                  kitchen.
                </li>
                <li className="mt-4">
                  <span className="font-bold">Fabrication –</span> From initial
                  inspection of your slab through fabrication to final quality
                  assurance. Rest assured that you will get the finest stone
                  countertops.
                </li>
                <li className="mt-4">
                  <span className="font-bold">Installation –</span> Our process
                  ensures that this is the easiest part of the process. We fit
                  the pieces together and get out of your way as quickly as
                  possible.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <SixSteps />
        <FinalNote />
        <Footer />
      </div>
    </>
  );
}
