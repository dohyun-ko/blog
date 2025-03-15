import { PageProps } from "$fresh/server.ts";
import { ComponentChildren } from "preact/src/index.d.ts";

const HeaderLink = (
  { href, children }: { href: string; children: ComponentChildren },
) => {
  return (
    <a
      href={href}
      class={"px-5 py-2 rounded-full h-full hover:bg-amber-200 transition-colors flex items-center"}
    >
      {children}
    </a>
  );
};

export default function Layout({ Component, url }: PageProps) {
  console.log(url.searchParams);

  return (
    <div
      class={`bg-amber-50 min-h-screen flex flex-col items-center`}
    >
      <header
        class={"h-[60px] p-5 box-content w-full max-w-[1440px]"}
      >
        <div
          class={"rounded-full w-full h-full p-0.5 grid grid-cols-6 items-stretch gap-5 bg-amber-100"}
        >
          <div
            class={"col-span-2 rounded-full bg-amber-300 font-varela flex items-center justify-center"}
          >
            <h1 class={"text-2xl"}>
              Dohyun Ko
            </h1>
          </div>

          <div
            class={"col-span-4 rounded-full flex items-center justify-end gap-2 pr-5"}
          >
            <HeaderLink href="/">
              Home
            </HeaderLink>
            <HeaderLink href="/about">
              About
            </HeaderLink>
            <HeaderLink href="/contact">
              Contact
            </HeaderLink>
          </div>
        </div>
      </header>

      <main class={"p-5 pt-0 w-full max-w-[1440px] flex-grow box-content"}>
        <Component />
      </main>
    </div>
  );
}
