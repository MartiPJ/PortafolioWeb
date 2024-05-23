import TransitionPage from "@/components/transitionPage";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        {/* <p>Hola mundo</p> */}

      </div>
    </main>
  );
}
