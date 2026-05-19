[33mcommit 9ca2bca2e01c82d1f8e3d016abd16ab67fb6c684[m[33m ([m[1;36mHEAD[m[33m -> [m[1;32mmain[m[33m)[m
Author: SharathMengani <chanduvarma57@gmail.com>
Date:   Mon May 18 13:46:42 2026 +0530

    Initial commit from Create Next App

[1mdiff --git a/.gitignore b/.gitignore[m
[1mnew file mode 100644[m
[1mindex 0000000..5ef6a52[m
[1m--- /dev/null[m
[1m+++ b/.gitignore[m
[36m@@ -0,0 +1,41 @@[m
[32m+[m[32m# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.[m
[32m+[m
[32m+[m[32m# dependencies[m
[32m+[m[32m/node_modules[m
[32m+[m[32m/.pnp[m
[32m+[m[32m.pnp.*[m
[32m+[m[32m.yarn/*[m
[32m+[m[32m!.yarn/patches[m
[32m+[m[32m!.yarn/plugins[m
[32m+[m[32m!.yarn/releases[m
[32m+[m[32m!.yarn/versions[m
[32m+[m
[32m+[m[32m# testing[m
[32m+[m[32m/coverage[m
[32m+[m
[32m+[m[32m# next.js[m
[32m+[m[32m/.next/[m
[32m+[m[32m/out/[m
[32m+[m
[32m+[m[32m# production[m
[32m+[m[32m/build[m
[32m+[m
[32m+[m[32m# misc[m
[32m+[m[32m.DS_Store[m
[32m+[m[32m*.pem[m
[32m+[m
[32m+[m[32m# debug[m
[32m+[m[32mnpm-debug.log*[m
[32m+[m[32myarn-debug.log*[m
[32m+[m[32myarn-error.log*[m
[32m+[m[32m.pnpm-debug.log*[m
[32m+[m
[32m+[m[32m# env files (can opt-in for committing if needed)[m
[32m+[m[32m.env*[m
[32m+[m
[32m+[m[32m# vercel[m
[32m+[m[32m.vercel[m
[32m+[m
[32m+[m[32m# typescript[m
[32m+[m[32m*.tsbuildinfo[m
[32m+[m[32mnext-env.d.ts[m
[1mdiff --git a/AGENTS.md b/AGENTS.md[m
[1mnew file mode 100644[m
[1mindex 0000000..8bd0e39[m
[1m--- /dev/null[m
[1m+++ b/AGENTS.md[m
[36m@@ -0,0 +1,5 @@[m
[32m+[m[32m<!-- BEGIN:nextjs-agent-rules -->[m
[32m+[m[32m# This is NOT the Next.js you know[m
[32m+[m
[32m+[m[32mThis version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.[m
[32m+[m[32m<!-- END:nextjs-agent-rules -->[m
[1mdiff --git a/CLAUDE.md b/CLAUDE.md[m
[1mnew file mode 100644[m
[1mindex 0000000..43c994c[m
[1m--- /dev/null[m
[1m+++ b/CLAUDE.md[m
[36m@@ -0,0 +1 @@[m
[32m+[m[32m@AGENTS.md[m
[1mdiff --git a/README.md b/README.md[m
[1mnew file mode 100644[m
[1mindex 0000000..e215bc4[m
[1m--- /dev/null[m
[1m+++ b/README.md[m
[36m@@ -0,0 +1,36 @@[m
[32m+[m[32mThis is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).[m
[32m+[m
[32m+[m[32m## Getting Started[m
[32m+[m
[32m+[m[32mFirst, run the development server:[m
[32m+[m
[32m+[m[32m```bash[m
[32m+[m[32mnpm run dev[m
[32m+[m[32m# or[m
[32m+[m[32myarn dev[m
[32m+[m[32m# or[m
[32m+[m[32mpnpm dev[m
[32m+[m[32m# or[m
[32m+[m[32mbun dev[m
[32m+[m[32m```[m
[32m+[m
[32m+[m[32mOpen [http://localhost:3000](http://localhost:3000) with your browser to see the result.[m
[32m+[m
[32m+[m[32mYou can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.[m
[32m+[m
[32m+[m[32mThis project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.[m
[32m+[m
[32m+[m[32m## Learn More[m
[32m+[m
[32m+[m[32mTo learn more about Next.js, take a look at the following resources:[m
[32m+[m
[32m+[m[32m- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.[m
[32m+[m[32m- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.[m
[32m+[m
[32m+[m[32mYou can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome![m
[32m+[m
[32m+[m[32m## Deploy on Vercel[m
[32m+[m
[32m+[m[32mThe easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.[m
[32m+[m
[32m+[m[32mCheck out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.[m
[1mdiff --git a/app/favicon.ico b/app/favicon.ico[m
[1mnew file mode 100644[m
[1mindex 0000000..718d6fe[m
Binary files /dev/null and b/app/favicon.ico differ
[1mdiff --git a/app/globals.css b/app/globals.css[m
[1mnew file mode 100644[m
[1mindex 0000000..a2dc41e[m
[1m--- /dev/null[m
[1m+++ b/app/globals.css[m
[36m@@ -0,0 +1,26 @@[m
[32m+[m[32m@import "tailwindcss";[m
[32m+[m
[32m+[m[32m:root {[m
[32m+[m[32m  --background: #ffffff;[m
[32m+[m[32m  --foreground: #171717;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m@theme inline {[m
[32m+[m[32m  --color-background: var(--background);[m
[32m+[m[32m  --color-foreground: var(--foreground);[m
[32m+[m[32m  --font-sans: var(--font-geist-sans);[m
[32m+[m[32m  --font-mono: var(--font-geist-mono);[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m@media (prefers-color-scheme: dark) {[m
[32m+[m[32m  :root {[m
[32m+[m[32m    --background: #0a0a0a;[m
[32m+[m[32m    --foreground: #ededed;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mbody {[m
[32m+[m[32m  background: var(--background);[m
[32m+[m[32m  color: var(--foreground);[m
[32m+[m[32m  font-family: Arial, Helvetica, sans-serif;[m
[32m+[m[32m}[m
[1mdiff --git a/app/layout.tsx b/app/layout.tsx[m
[1mnew file mode 100644[m
[1mindex 0000000..976eb90[m
[1m--- /dev/null[m
[1m+++ b/app/layout.tsx[m
[36m@@ -0,0 +1,33 @@[m
[32m+[m[32mimport type { Metadata } from "next";[m
[32m+[m[32mimport { Geist, Geist_Mono } from "next/font/google";[m
[32m+[m[32mimport "./globals.css";[m
[32m+[m
[32m+[m[32mconst geistSans = Geist({[m
[32m+[m[32m  variable: "--font-geist-sans",[m
[32m+[m[32m  subsets: ["latin"],[m
[32m+[m[32m});[m
[32m+[m
[32m+[m[32mconst geistMono = Geist_Mono({[m
[32m+[m[32m  variable: "--font-geist-mono",[m
[32m+[m[32m  subsets: ["latin"],[m
[32m+[m[32m});[m
[32m+[m
[32m+[m[32mexport const metadata: Metadata = {[m
[32m+[m[32m  title: "Create Next App",[m
[32m+[m[32m  description: "Generated by create next app",[m
[32m+[m[32m};[m
[32m+[m
[32m+[m[32mexport default function RootLayout({[m
[32m+[m[32m  children,[m
[32m+[m[32m}: Readonly<{[m
[32m+[m[32m  children: React.ReactNode;[m
[32m+[m[32m}>) {[m
[32m+[m[32m  return ([m
[32m+[m[32m    <html[m
[32m+[m[32m      lang="en"[m
[32m+[m[32m      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}[m
[32m+[m[32m    >[m
[32m+[m[32m      <body className="min-h-full flex flex-col">{children}</body>[m
[32m+[m[32m    </html>[m
[32m+[m[32m  );[m
[32m+[m[32m}[m
[1mdiff --git a/app/page.tsx b/app/page.tsx[m
[1mnew file mode 100644[m
[1mindex 0000000..3f36f7c[m
[1m--- /dev/null[m
[1m+++ b/app/page.tsx[m
[36m@@ -0,0 +1,65 @@[m
[32m+[m[32mimport Image from "next/image";[m
[32m+[m
[32m+[m[32mexport default function Home() {[m
[32m+[m[32m  return ([m
[32m+[m[32m    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">[m
[32m+[m[32m      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">[m
[32m+[m[32m        <Image[m
[32m+[m[32m          className="dark:invert"[m
[32m+[m[32m          src="/next.svg"[m
[32m+[m[32m          alt="Next.js logo"[m
[32m+[m[32m          width={100}[m
[32m+[m[32m          height={20}[m
[32m+[m[32m          priority[m
[32m+[m[32m        />[m
[32m+[m[32m        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">[m
[32m+[m[32m          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">[m
[32m+[m[32m            To get started, edit the page.tsx file.[m
[32m+[m[32m          </h1>[m
[32m+[m[32m          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">[m
[32m+[m[32m            Looking for a starting point or more instructions? Head over to{" "}[m
[32m+[m[32m            <a[m
[32m+[m[32m              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"[m
[32m+[m[32m              className="font-medium text-zinc-950 dark:text-zinc-50"[m
[32m+[m[32m            >[m
[32m+[m[32m              Templates[m
[32m+[m[32m            </a>{" "}[m
[32m+[m[32m            or the{" "}[m
[32m+[m[32m            <a[m
[32m+[m[32m              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"[m
[32m+[m[32m              className="font-medium text-zinc-950 dark:text-zinc-50"[m
[32m+[m[32m            >[m
[32m+[m[32m              Learning[m
[32m+[m[32m            </a>{" "}[m
[32m+[m[32m            center.[m
[32m+[m[32m          </p>[m
[32m+[m[32m        </div>[m
[32m+[m[32m        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">[m
[32m+[m[32m          <a[m
[32m+[m[32m            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"[m
[32m+[m[32m            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"[m
[32m+[m[32m            target="_blank"[m
[32m+[m[32m            rel="noopener noreferrer"[m
[32m+[m[32m          >[m
[32m+[m[32m            <Image[m
[32m+[m[32m              className="dark:invert"[m
[32m+[m[32m              src="/vercel.svg"[m
[32m+[m[32m              alt="Vercel logomark"[m
[32m+[m[32m              width={16}[m
[32m+[m[32m              height={16}[m
[32m+[m[32m            />[m
[32m+[m[32m            Deploy Now[m
[32m+[m[32m          </a>[m
[32m+[m[32m          <a[m
[32m+[m[32m            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"[m
[32m+[m[32m            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"[m
[32m+[m[32m            target="_blank"[m
[32m+[m[32m            rel="noopener noreferrer"[m
[32m+[m[32m          >[m
[32m+[m[32m            Documentation[m
[32m+[m[32m          </a>[m
[32m+[m[32m        </div>[m
[32m+[m[32m      </main>[m
[32m+[m[32m    </div>[m
[32m+[m[32m  );[m
[32m+[m[32m}[m
[1mdiff --git a/eslint.config.mjs b/eslint.config.mjs[m
[1mnew file mode 100644[m
[1mindex 0000000..05e726d[m
[1m--- /dev/null[m
[1m+++ b/eslint.config.mjs[m
[36m@@ -0,0 +1,18 @@[m
[32m+[m[32mimport { defineConfig, globalIgnores } from "eslint/config";[m
[32m+[m[32mimport nextVitals from "eslint-config-next/core-web-vitals";[m
[32m+[m[32mimport nextTs from "eslint-config-next/typescript";[m
[32m+[m
[32m+[m[32mconst eslintConfig = defineConfig([[m
[32m+[m[32m  ...nextVitals,[m
[32m+[m[32m  ...nextTs,[m
[32m+[m[32m  // Override default ignores of eslint-config-next.[m
[32m+[m[32m  globalIgnores([[m
[32m+[m[32m    // Default ignores of eslint-config-next:[m
[32m+[m[32m    ".next/**",[m
[32m+[m[32m    "out/**",[m
[32m+[m[32m    "build/**",[m
[32m+[m[32m    "next-env.d.ts",[m
[32m+[m[32m  ]),[m
[32m+[m[32m]);[m
[32m+[m
[32m+[m[32mexport default eslintConfig;[m
[1mdiff --git a/next.config.ts b/next.config.ts[m
[1mnew file mode 100644[m
[1mindex 0000000..e9ffa30[m
[1m--- /dev/null[m
[1m+++ b/next.config.ts[m
[36m@@ -0,0 +1,7 @@[m
[32m+[m[32mimport type { NextConfig } from "next";[m
[32m+[m
[32m+[m[32mconst nextConfig: NextConfig = {[m
[32m+[m[32m  /* config options here */[m
[32m+[m[32m};[m
[32m+[m
[32m+[m[32mexport default nextConfig;[m
[1mdiff --git a/package-lock.json b/package-lock.json[m
[1mnew file mode 100644[m
[1mindex 0000000..6935ff0[m
[1m--- /dev/null[m
[1m+++ b/package-lock.json[m
[36m@@ -0,0 +1,10107 @@[m
[32m+[m[32m{[m
[32m+[m[32m  "name": "gsap-portfolio",[m
[32m+[m[32m  "version": "0.1.0",[m
[32m+[m[32m  "lockfileVersion": 2,[m
[32m+[m[32m  "requires": true,[m
[32m+[m[32m  "packages": {[m
[32m+[m[32m    "": {[m
[32m+[m[32m      "name": "gsap-portfolio",[m
[32m+[m[32m      "version": "0.1.0",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "next": "16.2.6",[m
[32m+[m[32m        "react": "19.2.4",[m
[32m+[m[32m        "react-dom": "19.2.4"[m
[32m+[m[32m      },[m
[32m+[m[32m      "devDependencies": {[m
[32m+[m[32m        "@tailwindcss/postcss": "^4",[m
[32m+[m[32m        "@types/node": "^20",[m
[32m+[m[32m        "@types/react": "^19",[m
[32m+[m[32m        "@types/react-dom": "^19",[m
[32m+[m[32m        "eslint": "^9",[m
[32m+[m[32m        "eslint-config-next": "16.2.6",[m
[32m+[m[32m        "tailwindcss": "^4",[m
[32m+[m[32m        "typescript": "^5"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@alloc/quick-lru": {[m
[32m+[m[32m      "version": "5.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=10"[m
[32m+[m[32m      },[m
[32m+[m[32m      "funding": {[m
[32m+[m[32m        "url": "https://github.com/sponsors/sindresorhus"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/code-frame": {[m
[32m+[m[32m      "version": "7.29.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.29.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-9NhCeYjq9+3uxgdtp20LSiJXJvN0FeCtNGpJxuMFZ1Kv3cWUNb6DOhJwUvcVCzKGR66cw4njwM6hrJLqgOwbcw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/helper-validator-identifier": "^7.28.5",[m
[32m+[m[32m        "js-tokens": "^4.0.0",[m
[32m+[m[32m        "picocolors": "^1.1.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/compat-data": {[m
[32m+[m[32m      "version": "7.29.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.29.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-LIVqM46zQWZhj17qA8wb4nW/ixr2y1Nw+r1etiAWgRM6U1IqP+LNhL1yg440jYZR72jCWcWbLWzIosH+uP1fqg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/core": {[m
[32m+[m[32m      "version": "7.29.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.29.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-CGOfOJqWjg2qW/Mb6zNsDm+u5vFQ8DxXfbM09z69p5Z6+mE1ikP2jUXw+j42Pf1XTYED2Rni5f95npYeuwMDQA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/code-frame": "^7.29.0",[m
[32m+[m[32m        "@babel/generator": "^7.29.0",[m
[32m+[m[32m        "@babel/helper-compilation-targets": "^7.28.6",[m
[32m+[m[32m        "@babel/helper-module-transforms": "^7.28.6",[m
[32m+[m[32m        "@babel/helpers": "^7.28.6",[m
[32m+[m[32m        "@babel/parser": "^7.29.0",[m
[32m+[m[32m        "@babel/template": "^7.28.6",[m
[32m+[m[32m        "@babel/traverse": "^7.29.0",[m
[32m+[m[32m        "@babel/types": "^7.29.0",[m
[32m+[m[32m        "@jridgewell/remapping": "^2.3.5",[m
[32m+[m[32m        "convert-source-map": "^2.0.0",[m
[32m+[m[32m        "debug": "^4.1.0",[m
[32m+[m[32m        "gensync": "^1.0.0-beta.2",[m
[32m+[m[32m        "json5": "^2.2.3",[m
[32m+[m[32m        "semver": "^6.3.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "funding": {[m
[32m+[m[32m        "type": "opencollective",[m
[32m+[m[32m        "url": "https://opencollective.com/babel"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/generator": {[m
[32m+[m[32m      "version": "7.29.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.29.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-qsaF+9Qcm2Qv8SRIMMscAvG4O3lJ0F1GuMo5HR/Bp02LopNgnZBC/EkbevHFeGs4ls/oPz9v+Bsmzbkbe+0dUw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/parser": "^7.29.0",[m
[32m+[m[32m        "@babel/types": "^7.29.0",[m
[32m+[m[32m        "@jridgewell/gen-mapping": "^0.3.12",[m
[32m+[m[32m        "@jridgewell/trace-mapping": "^0.3.28",[m
[32m+[m[32m        "jsesc": "^3.0.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-compilation-targets": {[m
[32m+[m[32m      "version": "7.28.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.28.6.tgz",[m
[32m+[m[32m      "integrity": "sha512-JYtls3hqi15fcx5GaSNL7SCTJ2MNmjrkHXg4FSpOA/grxK8KwyZ5bubHsCq8FXCkua6xhuaaBit+3b7+VZRfcA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/compat-data": "^7.28.6",[m
[32m+[m[32m        "@babel/helper-validator-option": "^7.27.1",[m
[32m+[m[32m        "browserslist": "^4.24.0",[m
[32m+[m[32m        "lru-cache": "^5.1.1",[m
[32m+[m[32m        "semver": "^6.3.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-globals": {[m
[32m+[m[32m      "version": "7.28.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-globals/-/helper-globals-7.28.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-+W6cISkXFa1jXsDEdYA8HeevQT/FULhxzR99pxphltZcVaugps53THCeiWA8SguxxpSp3gKPiuYfSWopkLQ4hw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-module-imports": {[m
[32m+[m[32m      "version": "7.28.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.28.6.tgz",[m
[32m+[m[32m      "integrity": "sha512-l5XkZK7r7wa9LucGw9LwZyyCUscb4x37JWTPz7swwFE/0FMQAGpiWUZn8u9DzkSBWEcK25jmvubfpw2dnAMdbw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/traverse": "^7.28.6",[m
[32m+[m[32m        "@babel/types": "^7.28.6"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-module-transforms": {[m
[32m+[m[32m      "version": "7.28.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-modu