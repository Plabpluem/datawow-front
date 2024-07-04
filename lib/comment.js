export const createComment = async(bodyData,id) => {
    const response = await fetch(`http://localhost:8000/comments/${id}`,{
        method:"post",
        body:JSON.stringify(bodyData),
        headers:{
            "Content-Type":'application/json'
        }
    })
    const commentData = await response.json()
    return commentData
}