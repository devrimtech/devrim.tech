import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="border-b-4 dark:bg-gray-800 bg-gray-200 border-black px-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:pl-64">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-20 sm:space-x-3">
                  <a className="text-cyan-800 hover:bg-gray-700 px-3 py-2 rounded-md font-medium text-2xl dark:text-cyan-200">
                    Kai Devrim
                  </a>

                  <a
                    href="/"
                    className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-2xl font-medium dark:text-gray-200"
                  >
                    Home
                  </a>

                  <a
                    href="/blog"
                    className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-2xl font-medium dark:text-gray-200"
                  >
                    Blog
                  </a>

                  <a
                    href="/contact"
                    className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-2xl font-medium dark:text-gray-200"
                  >
                    Contact
                  </a>

                  <a
                    href="/resume.pdf"
                    className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-2xl font-medium dark:text-gray-200"
                  >
                    Résumé
                  </a>
                  <a
                    href="/now"
                    className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-2xl font-medium dark:text-gray-200"
                  >
                    Now
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a className="hover:bg-gray-700 text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">
                  Kai Devrim
                </a>

                <a
                  href="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>

                <a
                  href="/blog"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Blog
                </a>

                <a
                  href="/contact"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </a>

                <a
                  href="/resume.pdf"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Résumé
                </a>
                <a
                  href="/now"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Now
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
