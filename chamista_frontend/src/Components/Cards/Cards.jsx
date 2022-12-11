import React from "react";
import "./cards.css";
import { AiFillCaretRight } from "react-icons/ai";
import Wave from "../../assets/wave.svg";

const Cards = () => {
  return (
    <>
      <div className="cards-bg cards">
        {/* <img className="cards-wave" src={Wave} alt="" width="100%" /> */}
        <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 px-4 cards-container mx-auto">
          <div>
            <h1 className="card-h card-heading border_color   p-6  shadow-md">
              Blogs
            </h1>
            <div className="card-h block p-6 mt-3 rounded-lg border_color   shadow-md">
              <div href="#" className="">
                <div className=" relative py-3">
                  <a href="" className="flex">
                    <button className="pr-3">
                      <AiFillCaretRight />
                    </button>

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                      Some Heading related to blog
                    </h5>
                  </a>

                  <p className="font-normal text-gray-700 dark:text-black-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <br />
                  <a href="" className=" underline absolute bottom-0 right-0  ">
                    See More
                  </a>
                </div>

                <div className=" relative py-3">
                  <a href="" className="flex">
                    <button className="pr-3">
                      <AiFillCaretRight />
                    </button>

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                      Some Heading related to blog
                    </h5>
                  </a>

                  <p className="font-normal text-gray-700 dark:text-black-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <br />
                  <a href="" className=" underline absolute bottom-0 right-0  ">
                    See More
                  </a>
                </div>
                <div className=" relative py-3">
                  <a href="" className="flex">
                    <button className="pr-3">
                      <AiFillCaretRight />
                    </button>

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                      Some Heading related to blog
                    </h5>
                  </a>

                  <p className="font-normal text-gray-700 dark:text-black-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <br />
                  <a href="" className=" underline absolute bottom-0 right-0  ">
                    See More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="card-h card-heading border_color  p-6  rounded-lg  shadow-md ">
              Courses
            </h1>

            <div className=" card-h block p-6 mt-3 border_color   rounded-lg  shadow-md">
              <div href="#" className=" card-lines">
                <div className=" relative py-3">
                  <div href="" className="flex">
                    <button className="pr-3">
                      <AiFillCaretRight />
                    </button>
                    <p className="mb-2  text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                      O/A Levels
                    </p>
                  </div>
                  <div className=" inline-block ml-24">
                    <a href="">
                      {" "}
                      <p className="hover-underline-animation">A-2 Level</p>
                    </a>
                    <a href="">
                      {" "}
                      <p className="hover-underline-animation">A-1 Level</p>
                    </a>
                    <a href="">
                      {" "}
                      <p className="hover-underline-animation">O-2 Level</p>
                    </a>
                    <a href="">
                      {" "}
                      <p className="hover-underline-animation">O-1 Level</p>
                    </a>
                  </div>
                </div>
                <div className=" relative py-3">
                  <div href="" className="flex">
                    <button className="pr-3">
                      <AiFillCaretRight />
                    </button>
                    <p className="mb-2  text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                      Intermediat
                    </p>
                  </div>
                  <div className=" ml-24 inline-block">
                    <a href="" className="">
                      {" "}
                      <p className="hover-underline-animation">12th Grade</p>
                    </a>
                    <a href="">
                      {" "}
                      <p className="hover-underline-animation">11th Grade</p>
                    </a>
                    <a href="">
                      {" "}
                      <p className="hover-underline-animation">10th Grade</p>
                    </a>
                    <a href="">
                      {" "}
                      <p className="hover-underline-animation">9th Grade</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="card-h card-heading  p-6 border_color    rounded-lg  shadow-md">
              Lectures
            </h1>

            <div className="card-h block mt-3 rounded-lg  p-3 cursor-pointer border_color   shadow-md">
              <div href="#" className=".card-lines">
                <div className=" relative py-3 flex video-card">
                  <iframe
                    className="videos-frame"
                    width="160"
                    height="100"
                    src="https://www.youtube.com/embed/7uIIq_Ofzgw"
                    title="What Is Electrolysis | Reactions | Chemistry | FuseSchool"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>

                  <div className=" ml-4 flex flex-col justify-center font-bold video-heading">
                    <p>Lecutre 1</p>
                    <p>12/12/12</p>
                  </div>
                </div>
              </div>
              <div href="#" className="">
                <div className=" relative py-3 flex video-card">
                  <iframe
                    className="videos-frame"
                    width="160"
                    height="100"
                    src="https://www.youtube.com/embed/7uIIq_Ofzgw"
                    title="What Is Electrolysis | Reactions | Chemistry | FuseSchool"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className=" ml-4 flex flex-col justify-center font-bold video-heading">
                    <p>Lecutre 1</p>
                    <p>12/12/12</p>
                  </div>
                </div>
              </div>
              <div href="#" className="">
                <div className=" relative py-3 flex video-card">
                  <iframe
                    className="videos-frame"
                    width="160"
                    height="100"
                    src="https://www.youtube.com/embed/7uIIq_Ofzgw"
                    title="What Is Electrolysis | Reactions | Chemistry | FuseSchool"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className=" ml-4 flex flex-col justify-center font-bold video-heading">
                    <p>Lecutre 1</p>
                    <p>12/12/12</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="card-h card-heading  p-6 border_color rounded-lg   shadow-md">
              Ebooks/Notes
            </h1>

            <div className="card-h block p-6 mt-3   rounded-lg border_color  shadow-md ">
              <div href="#" className="card-lines">
                <div className=" relative py-3">
                  <div href="" className="flex">
                    <button className="pr-3">
                      <AiFillCaretRight />
                    </button>
                    <p className="mb-2  text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                      Books
                    </p>
                  </div>
                  <div className=" inline-block ml-24">
                    <a href="">
                      {" "}
                      <p className="hover-underline-animation">Chemistery</p>
                    </a>
                    <a href="">
                      {" "}
                      <p className="hover-underline-animation">Physics</p>
                    </a>
                    <a href="">
                      {" "}
                      <p className="hover-underline-animation">Methmetics</p>
                    </a>
                    <a href="">
                      {" "}
                      <p className="hover-underline-animation">Computer</p>
                    </a>
                  </div>
                </div>
                <div className=" relative py-3">
                  <div href="" className="flex">
                    <button className="pr-3">
                      <AiFillCaretRight />
                    </button>
                    <p className="mb-2  text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                      Notes
                    </p>
                  </div>
                  <div className=" ml-24 inline-block ">
                    <a href="" className="">
                      {" "}
                      <p className="hover-underline-animation">Chemistery</p>
                    </a>
                    <a href="">
                      {" "}
                      <p className="hover-underline-animation">Physics</p>
                    </a>
                    <a href="">
                      {" "}
                      <p className="hover-underline-animation">Methmetics</p>
                    </a>
                    <a href="">
                      {" "}
                      <p className="hover-underline-animation">Computer</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
