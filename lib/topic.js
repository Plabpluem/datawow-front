export const getTopics = async() => {
    const response = await fetch('http://localhost:8000/topics',{
        headers:{
            "Content-Type":'application/json'
        }
    })
    const topicData = await response.json()
    return topicData
}

export const getTopic = async(id) => {
    const response = await fetch(`http://localhost:8000/comments/topics/${id}`,{
        headers:{
            "Content-Type":'application/json'
        }
    })
    const topicData = await response.json()
    return topicData
}

export const createTopic = async(data) => {
    const response = await fetch(`http://localhost:8000/topics`,{
        method:"post",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":'application/json'
        }
    })
    const topicData = await response.json()
    return topicData
}

export const getTopicAdmin = async(data) => {
    const response = await fetch(`http://localhost:8000/topics/admin`,{
        method:'post',
        body:JSON.stringify(data),
        headers:{
            "Content-Type":'application/json'
        }
    })
    const topicData = await response.json()
    return topicData
}

export const editTopic = async(data,id) => {
    const response = await fetch(`http://localhost:8000/topics/${id}`,{
        method:'PATCH',
        body:JSON.stringify(data),
        headers:{
            "Content-Type":'application/json'
        }
    })
    const topicData = await response.json()
    return topicData
}

export const deleteTopic = async(id) => {
    const response = await fetch(`http://localhost:8000/comments/topics/${id}`,{
        method:'DELETE',
        headers:{
            "Content-Type":'application/json'
        }
    })
    const topicData = await response.json()
    return topicData
}