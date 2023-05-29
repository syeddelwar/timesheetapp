import React, { useEffect } from "react";
import Header from "./Header";
import { FcAlarmClock } from "react-icons/fc";
import { GiStopwatch } from "react-icons/gi";
import Sidebar from "./Sidebar";
import {
  Card,
  CardBody,
  ButtonGroup,
  Button,
  Input,
  Chip,
} from "@material-tailwind/react";

export default function Index() {
  return (
    <section className="wraper">
      {/* header */}
      <Header />

      {/* clock  */}
      <div className="clock   container mx-auto">
        <Sidebar />
        <Card className="  w-full ">
          <CardBody className="p-[5rem] border">
            <div className="clock__wrapper">
              {/*  name and details*/}
              <div className=" border  p-8 rounded-md ">
                <div className=" grid grid-cols-1 gap-y-4 lg:grid-cols-2 items-center  justify-items-center ">
                  <div className="flex justify-center  space-x-5 items-center">
                    <label
                      htmlFor="start"
                      className="  block space-x-1 text-black font-bold"
                    >
                      <span>Full</span>
                      <span>Name</span>
                    </label>

                    <Input label="name" disabled />
                  </div>

                  <div className="flex justify-center  space-x-5 items-center">
                    <label
                      htmlFor="start"
                      className="  flex items-center  space-x-3 font-bold"
                    >
                      <span className="  text-black"> Email:</span>
                    </label>
                    <Input label="name" disabled />
                  </div>
                </div>

                <div className=" grid grid-cols-1 gap-y-4 lg:grid-cols-2 mt-[2rem] items-center  justify-items-center ">
                  {/* start time */}
                  <div className="flex justify-center  space-x-5 items-center">
                    <label
                      htmlFor="start"
                      className="  flex items-center  space-x-3 font-bold"
                    >
                      <span className="  text-black"> Pethent:</span>
                    </label>
                    <Input label="name" disabled />
                  </div>
                  {/* end time */}
                  <div className="flex justify-center  space-x-5 items-center">
                    <label
                      htmlFor="start"
                      className="  flex items-center  space-x-3 font-bold"
                    >
                      <span className="  text-black"> Employee:</span>
                    </label>
                    <Input label="name" disabled />
                  </div>
                </div>
              </div>

              {/* start and end time  */}
              <div className=" grid grid-cols-1 mt-[4rem] lg:grid-cols-2 gap-y-10 items-center  justify-items-center ">
                {/* start time */}
                <div className="flex justify-center  space-x-5 items-center">
                  <label
                    htmlFor="start"
                    className="  flex items-center  space-x-3 font-bold"
                  >
                    <FcAlarmClock className="text-[1.3rem]" />
                    <span className=" text-[1rem] md:text-[1.5rem] text-black">
                      {" "}
                      Start Time :
                    </span>
                  </label>
                  <Chip
                    variant="ghost"
                    color="blue"
                    value="12:00"
                    className=" shadow-md rounded-md  w-[10rem] text-[1.3rem] text-center font-bold"
                  />
                </div>
                {/* end time */}
                <div className="flex justify-center  space-x-5 items-center">
                  <label
                    htmlFor="end"
                    className="  flex items-center  space-x-3 font-bold"
                  >
                    <FcAlarmClock className="text-[1.3rem]" />
                    <span className=" text-[1rem] md:text-[1.5rem] text-black">
                      {" "}
                      End Time :
                    </span>
                  </label>
                  <Chip
                    variant="ghost"
                    color="blue"
                    value="12:00"
                    className=" shadow-md rounded-md  w-[10rem] text-[1.3rem] text-center font-bold"
                  />
                </div>
              </div>

              {/* counter */}
              <div className=" grid  grid-cols-1 items-center justify-items-center mt-12">
                <div className=" flex justify-center items-center space-x-5">
                  <div className="counter__circle  w-8 h-8  bg-red-600  rounded-full"></div>
                  <Chip
                    variant="ghost"
                    color="red"
                    value="12:00"
                    className=" shadow-md rounded-md  w-[10rem] text-[1.3rem] text-center font-bold"
                  />
                </div>
              </div>

              {/* breack & buttons pannel  */}
              <div className=" grid  grid-cols-1 lg:grid-cols-2  gap-y-10 items-center justify-items-center mt-12">
                <div className="flex justify-center  space-x-5 items-center">
                  <label
                    htmlFor="end"
                    className="  flex items-center  space-x-3 font-bold"
                  >
                    <GiStopwatch className="text-[1.3rem]" />
                    <span className=" text-[1rem] md:text-[1.5rem] text-black">
                      Break
                    </span>
                  </label>
                  <Chip
                    variant="ghost"
                    color="blue"
                    value="20 min"
                    className=" shadow-md rounded-md  w-[10rem] text-[1.3rem] text-center font-bold"
                  />
                </div>

                <div>
                  <ButtonGroup
                    color="purple"
                    className=" space-x-4  "
                    variant="gradient"
                  >
                    <Button className=" bg-[#7F007F] font-bold text-[.9rem] md:text-[1rem]  rounded-md">
                      Puse
                    </Button>
                    <Button className=" bg-[#7F007F]  font-bold text-[.9rem] md:text-[1rem] rounded-md">
                      Switch
                    </Button>
                    <Button className="  bg-[#7F007F] font-bold text-[.9rem] md:text-[1rem] rounded-md">
                      Stop
                    </Button>
                  </ButtonGroup>
                </div>
              </div>

              {/* location and signature */}
              <div className=" grid  grid-cols-1 lg:grid-cols-2  gap-y-10 items-center justify-items-center mt-[3rem] lg:mt-[5rem]">
                {/* location */}
                <div className="flex flex-col justify-center   space-x-5 items-center">
                  <Card className=" min-w-[15rem] border min-h-[15rem]">
                    <CardBody>
                      <h1 className=" text-current font-bold">locaions</h1>
                    </CardBody>
                  </Card>

                  <div>
                    <h1 className=" mt-4 font-bold uppercase ">
                      Your Locations
                    </h1>
                  </div>
                </div>

                {/* signature */}

                <div className="flex flex-col justify-center   space-x-5 items-center">
                  <Card className=" min-w-[15rem] border min-h-[15rem]">
                    <CardBody>
                      <h1 className=" text-current font-bold">Signature</h1>
                    </CardBody>
                  </Card>

                  <div>
                    <Button color="purple" className=" font-bold mt-4 ">
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
