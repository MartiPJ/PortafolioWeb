import { parsedEnv } from "@/env";
import axios from "axios";

interface Post {
  data: {
    id: number;
    attributes: {
      Title: string;
      Body: string;
    };
  };
}

export default async function Post() {
  const response = await axios.get<{ data: Post[] }>(parsedEnv.API_URL, {
    headers: {
      Authorization: `Bearer ${parsedEnv.API_KEY}`,
    },
  });

  console.log(response.data);

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4 mt-auto">Posts</h1>
      <div className="flex flex-col gap-4">
        {response.data.data.map((post) => (
          <article
            key={post.id}
            className="p-4 border border-lime-300 rounded-xl"
          >
            <h2 className="text-xl text-lime-500 font-semibold mb-2">{post.attributes.Title}</h2>
            <p className="text-amber-100 text-justify">{post.attributes.Body}</p>
          </article>
        ))}
      </div>
    </main>
  );
}



