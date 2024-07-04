"use client";
import { useEffect, useState } from "react";
import CommentList from "../UI/CommentList";
import ListTopicDetail from "../UI/ListTopicDetail";
import { getTopic } from "@/lib/topic";
import { useParams, useRouter } from "next/navigation";
import arrowLeft from "../image/arrowLeft.png";

const TopicDetailPage = () => {
  const params = useParams();
  const [dataTopic, setDataTopic] = useState(null);
  const router = useRouter()

  const sortDataComment = dataTopic?.comment
    .map((a) => ({ ...a, timestamp: new Date(a.timestamp).getTime() }))
    .sort((a, b) => b.timestamp - a.timestamp);

  useEffect(() => {
    const fetchData = async () => {
      const topicData = await getTopic(params.topicId);
      setDataTopic(topicData);
    };
    fetchData();
  }, []);

  const goBackHandler = () => {
    router.push('/')
  }
  return (
    <div className="px-[40px] bg-white pt-[36px] w-full min-h-screen flex flex-col gap-[24px]">
      <span onClick={goBackHandler} className="cursor-pointer bg-green-100 p-[10px] w-[44px] h-[44px] rounded-[50%] flex justify-center items-center">
        <img src={arrowLeft.src} alt="" />
      </span>
      <ListTopicDetail {...dataTopic?.topic} />
      <div className="flex flex-col gap-[24px] max-w-[800px] rounded-[12px] min-h-[50px]">
        {sortDataComment?.map((list,index) => (
          <CommentList key={index} {...list} />
        ))}
      </div>
    </div>
  );
};

export default TopicDetailPage;
