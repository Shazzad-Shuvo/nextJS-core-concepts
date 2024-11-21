export async function GET() {
  return Response.json(comments, {
    headers: { "Set-Cookie": "token=secretToken" },
  });
}

export async function POST(request) {
  const newComment = await request.json();
  console.log(newComment);
  comments.push({
    id: comments.length + 1,
    text: newComment.text,
  });
  return Response.json({
    message: "New comment added",
    comments,
  });
}

const comments = [
  {
    id: 1,
    text: "Comment 1",
  },
  {
    id: 2,
    text: "Comment 2",
  },
  {
    id: 3,
    text: "Comment 3",
  },
];
