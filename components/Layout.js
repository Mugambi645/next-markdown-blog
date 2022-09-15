import Link from 'next/link';
import { useState } from 'react';
import Head from 'next/head';

export default function Layout({ children }) {
    const [navbar, setNavbar] = useState(false);

  return (
	<div>
 <Head>
        <title>Create Next Responsive Navbar With Tailwind CSS</title>
        <meta
          name="description"
          content="Create Next JS Responsive Menu with Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="w-full bg-gray-800 shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="#">
                <h2 className="text-2xl text-white font-bold">NEXT JS</h2>
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                                  </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="/blogs">
                    <a>Blogs</a>
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="/about">
                    <a>About US</a>
                  </Link>
                  </li>
                <li className="text-white">
                  <Link href="/contact">
                    <a>Contact US</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex justify-center items-center mt-8">
        <h1 className="text-2xl font-bold text-purple-500">
          Create Responsive Navbar Menu in Next js with Tailwind CSS
        </h1>
      </div>
      <div class="grid grid-cols-3 gap-4">
  <div class="..."></div>
  <div class="..."></div>
  <div class="..."></div>
  <div class="col-span-2 ..."></div>
  <div class="..."></div>
  <div class="...">
  <aside className="w-full p-10 sm:w-60 dark:bg-gray-900 dark:text-gray-100">
	<nav className="space-y-8 text-sm">
		<div className="">
			<h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Getting Started</h2>
			<div className="flex flex-col space-y-1">
				<a rel="noopener noreferrer" href="#">Installation</a>
				<a rel="noopener noreferrer" href="#">Plugins</a>
				<a rel="noopener noreferrer" href="#">Migrations</a>
				<a rel="noopener noreferrer" href="#">Appearance</a>
				<a rel="noopener noreferrer" href="#">Mamba UI</a>
			</div>
		</div>
		<div className="space-y-2">
			<h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Dashboard</h2>
			<div className="flex flex-col space-y-1">
				<a rel="noopener noreferrer" href="#">Header</a>
				<a rel="noopener noreferrer" href="#">Drawer</a>
				<a rel="noopener noreferrer" href="#">Page Title</a>
				<a rel="noopener noreferrer" href="#">Menus</a>
				<a rel="noopener noreferrer" href="#">Sidebar</a>
				<a rel="noopener noreferrer" href="#">Footer</a>
			</div>
		</div>
		<div className="space-y-2">
			<h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Pages</h2>
			<div className="flex flex-col space-y-1">
				<a rel="noopener noreferrer" href="#">Homepage</a>
				<a rel="noopener noreferrer" href="#">Users</a>
				<a rel="noopener noreferrer" href="#">Tools</a>
				<a rel="noopener noreferrer" href="#">Settings</a>
			</div>
		</div>
		<div className="space-y-2">
			<h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Misc</h2>
			<div className="flex flex-col space-y-1">
				<a rel="noopener noreferrer" href="#">Tutorials</a>
				<a rel="noopener noreferrer" href="#">Changelog</a>
			</div>
		</div>
	</nav>
</aside>
  </div>
  <div class="col-span-2 ...">{children}</div>
</div>
<footer className="px-4 py-8 dark:bg-gray-800 dark:text-gray-400 bg-black text-white p-10">
	<div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
		<div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
			<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-violet-400">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5 rounded-full dark:text-gray-900">
					<path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
				</svg>
			</div>
			<ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
				<li>
					<a rel="noopener noreferrer" href="#">Terms of Use</a>
				</li>
				<li>
					<a rel="noopener noreferrer" href="#">Privacy</a>
				</li>
			</ul>
		</div>
		<ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
			<li>
				<a rel="noopener noreferrer" href="#">Instagram</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#">Facebook</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#">Twitter</a>
			</li>
		</ul>
	</div>
</footer>
  </div>
  );
}