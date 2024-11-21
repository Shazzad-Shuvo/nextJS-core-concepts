// export async function GET(request, {params}){
//     const id = (await params).id;
//     console.log(id);
//     return Response.json({
//         message: "Request successful!"
//     })
// };

export async function PATCH(request, {params}){
    const id = parseInt((await params).id);
    const text = (await request.json()).text;
    // comments.map((comm) => {
    //     if(comm.id === id){
    //         comm.text = text;
    //     }
    //     return comm;
    // });
    const commentIndex = comments.findIndex((comm) => comm.id === id);
    comments[commentIndex].text = text;

    return Response.json({
        message: "Comment Updated!",
        comments
    })
};

export async function DELETE(req, {params}){
    const id = parseInt((await params).id);

    const newComments = comments.filter((comm) => comm.id !== id);
    // console.log(newComments);

    return Response.json({
        message: "Comment Deletion Successful!",
        comments
    })
}

const comments = [
    {
        id: 1,
        text: "Comment 1"
    },
    {
        id: 2,
        text: "Comment 2"
    },
    {
        id: 3,
        text: "Comment 3"
    },
]