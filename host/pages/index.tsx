import dynamic from "next/dynamic";

const RemoteButton = dynamic(() => import("remote/Button"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <RemoteButton />
    </main>
  );
}
