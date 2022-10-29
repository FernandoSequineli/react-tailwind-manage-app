import React from "react";

const featuresList = [
  {
    id: 1,
    heading: "Track company-wide progress",
    description:
      "See how your day-to-day tasks fit into the wider vision. Go fromtracking progress at the milestone level all the way down to the smallest of details. Never lose sight of the bigger picture again.",
  },
  {
    id: 2,
    heading: "Advanced built-in reports",
    description:
      "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build outthe reports you need to keep key stakeholders informed.",
  },
  {
    id: 3,
    heading: "Everything you need in one place",
    description:
      "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
  },
];

const Features = () => {
  return (
    <section id="features">
      <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            What's different about Manage?
          </h2>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

        <div className="flex flex-col space-y-8 md:w-1/2">
          {featuresList.map(({ id, heading, description }) => (
            <div
              key={id}
              className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
            >
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    {id}
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    {heading}
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  {heading}
                </h3>
                <p className="text-darkGrayishBlue">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;