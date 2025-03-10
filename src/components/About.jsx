import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ApplicationTitle from "./ApplicationTitle";
import { useLanguage } from '../contexts/LanguageContext';
const About = () => {
  const [isVisible, setIsVisible] = useState({
    content: false,
    image: false,
  });
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const { translations } = useLanguage();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === contentRef.current) {
            setIsVisible((prev) => ({ ...prev, content: true }));
          } else if (entry.target === imageRef.current) {
            setIsVisible((prev) => ({ ...prev, image: true }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (contentRef.current) observer.observe(contentRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="py-12">
      <div className="mx-auto max-w-8xl sm:px-6 lg:px-8">
        <ApplicationTitle myTitle={"About"} />
        {/* div1 */}
        <div className="flex flex-col mb-12 items-center justify-center">
          <div className="flex flex-col md:flex-row w-full md:w-5/6">
            <div
              ref={contentRef}
              className={`md:w-2/3 transform transition-all duration-1000 ease-out ${isVisible.content
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
                }`}
            >
              <p className="mb-2">
                <span className="text-2xl font-bold font-myName sm:text-3xl">{translations.about.name}</span>
              </p>
              <p className="border-t border-gray-500 w-5/6 mb-4" />
              <p className="mb-4">
                {translations.about.education}
              </p>
              <p className="mb-2">{translations.about.labTag}：
                <a
                  href="http://watabegroup.quie.ise.shibaura-it.ac.jp/"
                  target="_blank"
                  className="text-blue-500 transition-colors duration-300 underline hover:text-blue-200"
                >
                  {translations.about.labName}<i class="fa-solid fa-up-right-from-square"></i>
                </a></p>
              <div className="mb-2">
                {translations.about.birthplace}
              </div>
              <p className="mb-2">
                {translations.about.graduationResearch}
              </p>
              <p className="mb-2">
                {translations.about.researchTheme}
              </p>
              <p className="mb-2">
                <span>Qiita：</span>
                {translations.about.qiita.map((qiita, index) => (
                  <p key={index} className="ml-5">
                    {"・"}
                    <a
                      href={qiita.link}
                      target="_blank"
                      className="text-blue-500 transition-colors duration-300 underline hover:text-blue-200"
                    >
                      {qiita.title}
                    </a>
                  </p>
                ))}
              </p>

            </div>
            <div
              ref={imageRef}
              className={`md:w-1/3 transition-all duration-1000 ease-out transform ${isVisible.image ? "opacity-100 translate-x-0" : "-translate-x-full opacity-0"
                }`}
            >
              <div className="relative w-full h-[300px]">
                <Image
                  src="/mepic.jpg"
                  alt="profile"
                  className="rounded shadow-xl hover:scale-105 hover:border-2 hover:border-blue-500 transition-all duration-300"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                  style={{
                    objectFit: "cover",
                    objectPosition: "center"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* div2 */}
        <div className="flex w-full justify-center">
          <p className="mb-4 w-full md:w-5/6">
            <p className="mb-4 text-2xl font-bold">{translations.about.paper}</p>
            <div className="mb-5 w-full md:w-5/6 mx-auto rounded-md bg-gray-100 p-4 border-l-4 border-gray-500 border-b-4">
              <p className="mb-2">
                <a
                  href="https://arxiv.org/abs/2408.16062v2"
                  target="_blank"
                  className="block text-center text-blue-700 transition-colors duration-300 hover:text-blue-500 underline"
                >
                  Quantum Algorithm for Shortest Vector Problems with Folded
                  Spectrum Method
                </a>
              </p>
              <p className="text-center text-gray-800">
                Kota Mizuno, Shohei Watabe <br />
                arXiv:2408.16062[v2] [quant-ph]
              </p>
            </div>
            <div className="w-full">
              <div className="mb-4">
                <span className="font-bold text-2xl">{translations.about.experienceTag}</span><br></br>
              </div>
              <p className="ml-5">
                {translations.about.experiences.map((exp, index) => (
                  <React.Fragment key={index}>
                    <div className="mb-1">
                      {exp.date}：
                      {exp.link ? (
                        <>
                          {exp.prefix}
                          <a
                            href={exp.link}
                            target="_blank"
                            className="underline text-blue-500 hover:text-blue-200 transition-color duration-300"
                          >
                            {exp.linkText}
                          </a>
                          {exp.suffix}
                        </>
                      ) : (
                        exp.description
                      )}
                      {exp.interviewLink && (
                        <>
                          <br />
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;-&nbsp; &nbsp;
                          <span className="group relative inline-block">
                            <a
                              href={exp.interviewLink}
                              className="text-blue-500 underline hover:text-blue-200 transition-colors duration-300"
                              target="_blank"
                            >
                              <span>
                                {exp.interviewText} <i className="fa-solid fa-up-right-from-square"></i>
                              </span>
                            </a>
                            <div className="absolute hidden top-1/2 transform -translate-y-1/2 left-full ml-2 w-96 bg-white border border-gray-300 rounded-md shadow-md p-2 group-hover:block z-10 speech-bubble">
                              <Image
                                src={`/${index === 6 ? 'progate' : 'jij'}-interview.png`}
                                alt="Interview"
                                width={400}
                                height={200}
                                layout="responsive"
                              />
                            </div>
                          </span>
                        </>
                      )}
                      <br />
                    </div>
                  </React.Fragment>
                ))}
              </p>
            </div>
            <br></br>
            <div className="w-full">
              <div className="mb-4">
                <span className="font-bold text-2xl">{translations.about.achievements}</span>
              </div>
              <p className="ml-5">
                {translations.about.achievementsList.map((achievement, index) => (
                  <div key={index} className="mb-1">
                    {achievement.date}：
                    {achievement.prefix}
                    <span className="italic">{achievement.eventName}</span>
                    {achievement.suffix}
                    {achievement.hasAward && (
                      <button onClick={handleToggle}>
                        <div className="handle-toggle-button">
                          <i className="fa-solid fa-chevron-down"></i>
                        </div>
                      </button>
                    )}
                    <br />
                  </div>
                ))}
                {isExpanded && (
                  <div className="flex flex-col justify-center items-center mt-4 bg-gray-100 px-3 sm:px-20 py-5 rounded-lg">
                    <p className="text-black">
                      {translations.about.award.description}
                      <span className="font-bold">
                        {translations.about.award.title}
                      </span>
                      {translations.about.award.congratulations}
                      <br />
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center mt-2">
                      <div className="w-full sm:w-1/2 flex justify-center">
                        <img
                          src="/me_and_poster.jpg"
                          alt="award"
                          className="rounded-lg shadow-md w-1/2 sm:max-w-full"
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="w-70 sm:w-80 aspect-auto sm:ml-10 my-auto">
                        <img
                          src="/qi_award_table.png"
                          alt="award_table"
                          className="rounded-lg shadow-md"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="w-full flex justify-center">
                        <a
                          href="https://www.shibaura-it.ac.jp/headline/award/20250117_7070_002.html"
                          className="w-30 bg-green-500 text-black py-2 px-4 rounded-lg mt-4 text-center hover:bg-green-400 transition-colors duration-300"
                          target="_blank"
                        >
                          {translations.about.award.universityLink}
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </p>
            </div>
          </p>
        </div>
      </div>
    </div >
  );
};

export default About;
