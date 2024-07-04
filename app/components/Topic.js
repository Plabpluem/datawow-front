"use client";
import { getTopics } from "@/lib/topic";
import ListTopic from "../UI/ListTopic";
import { useEffect, useState } from "react";
import BarSearchFilter from "../UI/BarSearchFilter";

const Topic = () => {
  const [topics, setTopic] = useState([]);
  const [topicDefault,setTopicDefault] = useState([])
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const topicData = await getTopics();
      const sortDataTopics = topicData.map((a) => ({...a,timestamp:new Date(a.timestamp).getTime()})).sort((a,b)=> b.timestamp-a.timestamp)
      setTopic(sortDataTopics);
      setTopicDefault(sortDataTopics)
    };
    fetchData();
  }, []);

  const onFilterData =(data) => {
    const filterData = topicDefault.filter(topic => data==="Community"?topic: topic.community === data)
    setTopic(filterData)
  }

  const onFilterSearch = (data) => {
    setSearchTerm(data);
    if(data.length >1){
      const filterData = topicDefault.filter(topic => topic.title.includes(data))
      setTopic(filterData)
    }else{
      setTopic(topicDefault)
    }
  }
  
  return (
    <div className="relative mx-[40px] mt-[48px] sm:mt-[36px] 2xl:max-w-[1200px] md:max-w-[798px] w-full flex flex-col gap-[24px]">
      <BarSearchFilter searchData={(data)=> onFilterSearch(data)} filterData={(data) => onFilterData(data)} />
      <div className="bg-white rounded-[12px] min-h-[150px]">
        {topics.length === 0 && <h1 className="text-center relative top-[50%] translate-y-[-50%]">No Topics</h1>}
        {topics.map((topic,index) => (
          <ListTopic key={index} {...topic} searchTerm={searchTerm}/>
        ))}
      </div>
    </div>
  );
};

export default Topic;
