import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component }: PageProps) {
  return (
    <div
      class={`p-5 bg-paper`}
    >
      <header>
        <h1>Fresh App</h1>
      </header>

      <Component />
    </div>
  );
}
