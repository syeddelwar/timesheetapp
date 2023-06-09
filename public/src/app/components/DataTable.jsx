"use client";
import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";

import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Monitored",
    value: "monitored",
  },
  {
    label: "Unmonitored",
    value: "unmonitored",
  },
];

const TABLE_HEAD = [
  "Patient's Name",
  "Employee Name",
  "Day & Date",
  "Start",
  "End",
  "Total",
  "Mobile",
  "Email",
  "Patient's Signature",
];
const TABLE_ROWS = [
  {
    patient: "John Michael",
    employee: "smit",
    date: "23/04/18",
    start: "12:00",
    end: "4:00",
    total: "10 hours",
    mobile: "0199215156",
    email: "demo@gmail.com",
    sig: "signature",
  },
];

export default function DataTable() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div>
      <Card className="h-full w-full border">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Members list
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                See information about all members
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button variant="outlined" color="blue-gray" size="sm">
                view all
              </Button>
              <Button
                className="flex items-center gap-3"
                color="purple"
                size="sm"
                onClick={() => handleOpen()}
              >
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add
                Empolyee
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Tabs value="all" className="w-full md:w-max">
              <TabsHeader>
                {TABS.map(({ label, value }) => (
                  <Tab key={value} value={value}>
                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                  </Tab>
                ))}
              </TabsHeader>
            </Tabs>
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head, index) => (
                  <th
                    key={head}
                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                    >
                      {head}{" "}
                      {index !== TABLE_HEAD.length - 1 && (
                        <ChevronUpDownIcon
                          strokeWidth={2}
                          className="h-4 w-4"
                        />
                      )}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(
                (
                  {
                    patient,
                    employee,
                    date,
                    start,
                    end,
                    total,
                    sig,
                    email,
                    mobile,
                  },
                  index
                ) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={index} className="even:bg-blue-gray-50/50">
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {patient}
                        </Typography>
                      </td>

                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {employee}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {date}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {start}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {end}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {total}
                        </Typography>
                      </td>

                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {mobile}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {email}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {sig}
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page 1 of 10
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" color="blue-gray" size="sm">
              Previous
            </Button>
            <Button variant="outlined" color="blue-gray" size="sm">
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>

      {/* modal  */}
      <Dialog
        open={open}
        handler={handleOpen}
        className=" min-w-[28rem] md:min-w-[35rem] md:max-w-[40rem]  py-[3rem]"
      >
        <DialogBody className="">
          <h1 className=" font-bold text-center text-[1.3rem] text-purple-600">
            Employee And Patient&apos;s Data{" "}
          </h1>

          <form className="pt-10 pb-2">
            <div className=" grid grid-cols-1 md:grid-cols-2 justify-items-center w-full gap-y-5 gap-x-2">
              <div className="w-full ">
                <Input label="Patient's name" />
              </div>
              <div className="w-full">
                <Input label="Employee name" />
              </div>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 justify-items-center w-full gap-y-5 mt-5 gap-x-2">
              <div className="w-full">
                <Input type="date" label="Day & Date " />
              </div>
              <div className="w-full">
                <Input label="Mobile" />
              </div>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 justify-items-center w-full gap-y-5 mt-5 gap-x-2">
              <div className="w-full">
                <Input label="Email " />
              </div>
            </div>
          </form>
        </DialogBody>

        <DialogFooter className="  items-center justify-center">
          <Button
            variant="gradient"
            className="mb-4"
            color="purple"
            onClick={handleOpen}
          >
            <span>Submit</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
