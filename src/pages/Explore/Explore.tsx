import React, { useState } from "react";
import { useQuery } from "react-query";
import { ExploreFilter, Loading, NotFound } from "../../components";
import { getSearchConfig } from "../../services";
import { SearchConfigResponse } from "../../shared/type";

const Explore = () => {
  const [sectionIdx, setSectionIdx] = useState<number>(0);
  const { isLoading, error, data } = useQuery<SearchConfigResponse[], Error>(
    "searchConfig",
    getSearchConfig
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />
      </div>
    );
  }
  if (error) {
    return <NotFound message={error.message} />;
  }

  if (!data) {
    return (
      <NotFound message={"Something went wrong. Please try again later!"} />
    );
  }

  return (
    <div className="py-[100px]">
      <div className="app-container">
        <div className="flex gap-4">
          {data?.map((section, i) => (
            <button
              className={`px-3 py-1 bg-[#2a2f3a] rounded-md hover:bg-yellow transition-all duration-300 ease-in ${
                sectionIdx === i ? "bg-yellow text-black" : ""
              }`}
              key={i}
              onClick={() => setSectionIdx(i)}
            >
              {section.name}
            </button>
          ))}
        </div>
        <ExploreFilter options={data[sectionIdx]} />
      </div>
    </div>
  );
};

export default Explore;
