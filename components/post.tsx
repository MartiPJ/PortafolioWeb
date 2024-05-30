import { parsedEnv } from "@/env";
import axios from "axios";

interface PostAttributes {
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Post{
  id: string;
  attributes: PostAttributes;
}

interface ApiResponse {
  data: Post[];
}

export default  async function Post() {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${parsedEnv.NEXT_PUBLIC_API_KEY}`,
    }
  };
    // Realiza la petición con los headers configurados
const response = await axios.get<ApiResponse>(`${parsedEnv.NEXT_PUBLIC_API_URL}`, config);
console.log(response.data);


  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4 mt-auto">Posts</h1>
      <div className="flex flex-col gap-4">
        {response.data.data.map((post) => (
          
          <article
            key={post.id}
            className="p-4 border border-lime-300 rounded-xl h-40 overflow-auto"
          >
            <h2 className="text-xl text-lime-500 font-semibold mb-2">{post.attributes?.title}</h2>
            <p className="text-amber-100 text-justify">{post.attributes?.body}</p>
            
          </article>
        ))}
      </div>
    </main>
  );
}





