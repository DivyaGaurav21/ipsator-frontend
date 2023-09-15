import React from "react";
import ReusableAccordion from "./ReusableAccordion";
import { policies } from "../../staticdata";
import VideoEmbed from "../reusable/VideoEmbed";

const Policies = () => {


    return (
        <div className="w-full md:w-[85%] m-auto">
            <h1 className="text-red-900 text-center mt-10 mb-8 text-3xl font-bold">
                POLICIES
            </h1>
            <div className="p-5 bg-gray-50 dark:bg-gray-800">
                <ReusableAccordion data={policies} />
            </div>
            <div className="flex gap-4 justify-center items-center bg-neutral-400 flex-wrap xl:flex-nowrap my-10 py-5 rounded-3xl">
                <VideoEmbed url="https://www.youtube.com/embed/azoyJ97I52E" height="300" width="300" />
                <VideoEmbed url="https://www.youtube.com/embed/vgI8KpNSjeo" height="300" width="300" />
                <VideoEmbed url="https://www.youtube.com/embed/pEX2_kVs52o" height="300" width="300" />
                <VideoEmbed url="https://www.youtube.com/embed/yH_oH5OUwWk" height="300" width="300" />
            </div>

        </div>
    );
};

export default Policies;
