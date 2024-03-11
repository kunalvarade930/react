import React from 'react'

export async function loader({ params }) {
    const subpost = await getSubPost(params.postId);
    if (!subpost) {
        throw new Response("", {
          status: 404,
          statusText: "Not Found",
        });
      }
    return { subpost };
}

function Subpost(props) {
  return (
    <div>

    <div className='card'  >
        <div className='card-body'>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
        </div>
    </div>
</div>
  )
}

export default Subpost
