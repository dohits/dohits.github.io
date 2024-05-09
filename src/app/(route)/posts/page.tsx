
import Postspage from "@/app/(route)/posts/_components/PostsPage";

export default async function allpost() {

  return (
    <>
      <div className="text-white text-4xl">Post</div>
      <div className="w-full">
        <Postspage/>
      </div>
    </>
  );
}
