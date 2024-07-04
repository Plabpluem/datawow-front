"use client";
import { useEffect, useState } from "react";
import { getTopicAdmin } from "@/lib/topic";
import ListTopicAdmin from "../UI/ListTopicAdmin";
import BarSearchFilter from "../UI/BarSearchFilter";

const TopicAdmin = () => {
  const [topicData, setTopicData] = useState();
  const [topicDefault, setTopicDefault] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const userLogin = JSON.parse(localStorage.getItem("user"));
      const topicData = await getTopicAdmin({ user: userLogin });
      const sortDataTopics = topicData
        .map((a) => ({ ...a, timestamp: new Date(a.timestamp).getTime() }))
        .sort((a, b) => b.timestamp - a.timestamp);
      setTopicData(sortDataTopics);
      setTopicDefault(sortDataTopics);
    };
    fetchData();
  }, []);

  const onFilterData = (data) => {
    const filterData = topicDefault.filter((topic) =>
      data === "Community" ? topic : topic.community === data
    );
    setTopicData(filterData);
  };

  const onFilterSearch = (data) => {
    setSearchTerm(data);
    if (data.length > 1) {
      const filterData = topicDefault.filter((topic) =>
        topic.title.includes(data)
      );
      setTopicData(filterData);
    } else {
      setTopicData(topicDefault);
    }
  };
  return (
    <div className="relative mx-[40px] mt-[48px] sm:mt-[36px] 2xl:max-w-[1200px] md:max-w-[798px] w-full flex flex-col gap-[24px]">
      <BarSearchFilter
        searchData={(data) => onFilterSearch(data)}
        filterData={(data) => onFilterData(data)}
      />
      <div className="bg-white rounded-[12px] min-h-[150px]">
        {topicData?.length === 0 && (
          <h1 className="text-center relative top-[50%] translate-y-[-50%]">
            No Topics
          </h1>
        )}
        {topicData?.map((topic,index) => (
          <ListTopicAdmin key={index} {...topic} searchTerm={searchTerm} />
        ))}
      </div>
    </div>
  );
};

export default TopicAdmin;
