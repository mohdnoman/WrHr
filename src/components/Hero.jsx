import React from "react";
import SmallCards from "./SmallCards";
import LrgeCard from "./LargeCard";
import List from "./List";
import Activity from "./Activity";

const Hero = () => {
  return (
    <div className="w-full h-full ">
      <h1 className="text-[#161E54] text-2xl p-4 ">Dashboard</h1>
      <div className="md:flex col-span-5">
        <div className="flex-col">
          <div className="md:flex">
            <SmallCards
              heading={"Available Position"}
              number={"24"}
              description={"4 Urgently needed"}
              bgColor={`bg-orange-100`}
              textColor={"#FF5151"}
            />
            <SmallCards
              heading={"Job Open"}
              number={"10"}
              description={"4 Active hiring"}
              bgColor={`bg-blue-100`}
              textColor={"#3786F1"}
            />
            <SmallCards
              heading={"New Employees"}
              number={"24"}
              description={"4 Department"}
              bgColor={`bg-pink-100`}
              textColor={"#EE61CF"}
            />
          </div>
          <div className="md:flex">
            <LrgeCard
              heading={"Total Employees"}
              number={"216"}
              men={"120"}
              women={"96"}
              rate={"2"}
            />
            <LrgeCard
              heading={"Talent Request"}
              number={"16"}
              men={"6"}
              women={"10"}
              rate={"5"}
            />
          </div>
          <div>
            <List
              list={[
                {
                  heading: "Outing schedule for every department",
                  subheading: "5 Minutes ago",
                },
                {
                  heading: "Meeting HR Department",
                  subheading: "Yesterday, 12:30 PM",
                },
                {
                  heading:
                    "IT Department need two more talents for UX/UI Designer position",
                  subheading: "Yesterday, 09:15 AM",
                },
              ]}
              heading={"Announcement"}
              dropdown={"Today, 13 Sep 2021"}
              footer={"See All Announcement"}
            />
          </div>
        </div>

        <div className="md:flex-col items-center justify-center ">
          <div className="md:w-[24rem] w-[90%] mx-3 self-center">
            <Activity />
          </div>
          <div>
            <List
              list={[
                {
                  heading: "Review candidate applications",
                  subheading: "Today - 11.30 AM",
                },
                {
                  heading: "Interview with candidates",
                  subheading: "Today - 10.30 AM",
                },
                {
                  heading:
                    "Short meeting with product designer from IT Department",
                  subheading: "Today - 09.15 AM",
                },
              ]}
              heading={"Upcoming Schedule"}
              dropdown={"Upcoming Schedule"}
              footer={"Create a New Schedule"}
              priority={true}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;

{
  /* <div className=" col-span-3">
          <div className="md:flex sm:block">
            <SmallCards
              heading={"Available Position"}
              number={"24"}
              description={"4 Urgently needed"}
              bgColor={`bg-orange-100`}
              textColor={"#FF5151"}
            />
            <SmallCards
              heading={"Job Open"}
              number={"10"}
              description={"4 Active hiring"}
              bgColor={`bg-blue-100`}
              textColor={"#3786F1"}
            />
            <SmallCards
              heading={"New Employees"}
              number={"24"}
              description={"4 Department"}
              bgColor={`bg-pink-100`}
              textColor={"#EE61CF"}
            />
          </div>
          <div className="flex">
            <LrgeCard
              heading={"Total Employees"}
              number={"216"}
              men={"120"}
              women={"96"}
              rate={"2"}
            />
            <LrgeCard
              heading={"Talent Request"}
              number={"16"}
              men={"6"}
              women={"10"}
              rate={"5"}
            />
          </div>
          <div>
            <List
              list={[
                {
                  heading: "Outing schedule for every department",
                  subheading: "5 Minutes ago",
                },
                {
                  heading: "Meeting HR Department",
                  subheading: "Yesterday, 12:30 PM",
                },
                {
                  heading:
                    "IT Department need two more talents for UX/UI Designer position",
                  subheading: "Yesterday, 09:15 AM",
                },
              ]}
              heading={"Announcement"}
              dropdown={"Today, 13 Sep 2021"}
              footer={"See All Announcement"}
            />
          </div>
        </div> */
}

{
  /* <div className="col-span-1">
      <div className="mb-4">
        <Activity />
      </div>
      <List
        list={[
          {
            heading: "Review candidate applications",
            subheading: "Today - 11.30 AM",
          },
          {
            heading: "Interview with candidates",
            subheading: "Today - 10.30 AM",
          },
          {
            heading:
              "Short meeting with product designer from IT Department",
            subheading: "Today - 09.15 AM",
          },
        ]}
        heading={"Upcoming Schedule"}
        dropdown={"Upcoming Schedule"}
        footer={"Create a New Schedule"}
        priority={true}
      />
    </div> */
}
