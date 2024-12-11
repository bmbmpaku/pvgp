import middleware from "../middleware";
import Image from "next/image";
import UserPosts from "./user-posts/page";
import PostVoices from "./components/postvoices";
import Herocard from "./components/voiceoftheday";
import Link from "next/link";
import {
  ClerkLoading,
  ClerkProvider,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

const Home: React.FC = () => {
  return (
    <ClerkProvider>
      <div className="grid grid-rows-[30px_1fr_30px] items-center justify-items-center min-h-screen p-6 mb-4 hover:shadow-lg transition font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center justify-items-center sm:items-start">
          {/* Uncomment Herocard if needed */}
          {/* <Herocard className="flex gap-4 items-center flex-col sm:flex-row" /> */}
          <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-200">
            <UserPosts />
          </div>
          <div className="z-10">
            <SignedIn>
              <Link href="/sign-in">Please sign in to make a post</Link>
              <PostVoices />
            </SignedIn>
          </div>
        </main>
      </div>
    </ClerkProvider>
  );
};

export default Home;
