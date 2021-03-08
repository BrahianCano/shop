import {Transition} from '@headlessui/react'

export default function Navbar() {

    return (
        <>
            <div class="relative bg-yellowdull ">
                <div class="max-w-7xl mx-auto px-4 sm:px-6">

                    <div
                        class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">

                        <div class="flex justify-start lg:w-0 lg:flex-1">
                            <a href="#">
                                <span class="sr-only">Logotipo</span>
                                <img class="h-8 w-auto sm:h-10"
                                     src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                     alt="Logotipo"/>
                            </a>
                        </div>

                        <div class="-mr-2 -my-2 md:hidden">
                            <button type="button"
                                    class="bg-primary-100 rounded-md p-2 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-50">
                                <span class="sr-only">Open menu</span>

                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M4 6h16M4 12h16m-7 6h7"/>
                                </svg>

                            </button>
                        </div>

                        <nav class="hidden md:flex space-x-10">

                            <a href="#" className="text-base font-medium text-mediumgray hover:text-gray-900">
                                Pricing
                            </a>

                            <a href="#" className="text-base font-medium text-mediumgray hover:text-gray-900">
                                Docs
                            </a>

                            <div class="relative">

                                <a href="#"
                                   class="text-base group inline-flex items-center font-medium text-mediumgray hover:text-gray-900">
                                    <span>Solutions</span>

                                    <svg class="ml-2 h-5 w-5 text-mediumgray group-hover:text-gray-800"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                         aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                </a>
                                {/*
                                    <!--
                                      'Solutions' flyout menu, show/hide based on flyout menu state.

                                      Entering: "transition ease-out duration-200"
                                        From: "opacity-0 translate-y-1"
                                        To: "opacity-100 translate-y-0"
                                      Leaving: "transition ease-in duration-150"
                                        From: "opacity-100 translate-y-0"
                                        To: "opacity-0 translate-y-1"
                                    -->*/}
                                <Transition
                                    show={false}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                >
                                    {(ref) => (

                                        <div ref={ref}
                                             class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                            <div
                                                class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                    <a href="#"
                                                       class="-m-3 p-3 flex items-start rounded-lg hover:bg-primary-50">

                                                        <svg class="flex-shrink-0 h-6 w-6 text-secondary-50"
                                                             xmlns="http://www.w3.org/2000/svg" fill="none"
                                                             viewBox="0 0 24 24"
                                                             stroke="currentColor" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                  stroke-width="2"
                                                                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                                                        </svg>
                                                        <div class="ml-4">
                                                            <p class="text-base font-medium text-gray-900">
                                                                Analytics
                                                            </p>
                                                            <p class="mt-1 text-sm text-gray-600">
                                                                Get a better understanding of where your traffic is
                                                                coming from.
                                                            </p>
                                                        </div>
                                                    </a>

                                                    <a href="#"
                                                       className="-m-3 p-3 flex items-start rounded-lg hover:bg-primary-50">

                                                        <svg className="flex-shrink-0 h-6 w-6 text-secondary-50"
                                                             xmlns="http://www.w3.org/2000/svg" fill="none"
                                                             viewBox="0 0 24 24"
                                                             stroke="currentColor" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                  stroke-width="2"
                                                                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                                                        </svg>
                                                        <div className="ml-4">
                                                            <p className="text-base font-medium text-gray-900">
                                                                Analytics
                                                            </p>
                                                            <p className="mt-1 text-sm text-gray-600">
                                                                Get a better understanding of where your traffic is
                                                                coming from.
                                                            </p>
                                                        </div>
                                                    </a>

                                                    <a href="#"
                                                       className="-m-3 p-3 flex items-start rounded-lg hover:bg-primary-50">

                                                        <svg className="flex-shrink-0 h-6 w-6 text-secondary-50"
                                                             xmlns="http://www.w3.org/2000/svg" fill="none"
                                                             viewBox="0 0 24 24"
                                                             stroke="currentColor" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                  stroke-width="2"
                                                                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                                                        </svg>
                                                        <div className="ml-4">
                                                            <p className="text-base font-medium text-gray-900">
                                                                Analytics
                                                            </p>
                                                            <p className="mt-1 text-sm text-gray-600">
                                                                Get a better understanding of where your traffic is
                                                                coming from.
                                                            </p>
                                                        </div>
                                                    </a>


                                                </div>
                                                <div
                                                    class="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">

                                                    <div class="flow-root">
                                                        <a href="#"
                                                           class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-primary-50">

                                                            <svg class="flex-shrink-0 h-6 w-6 text-secondary-50"
                                                                 xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                 viewBox="0 0 24 24" stroke="currentColor"
                                                                 aria-hidden="true">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                      stroke-width="2"
                                                                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                                            </svg>
                                                            <span class="ml-3">Contacto</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Transition>
                            </div>


                        </nav>
                        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <a href="#"
                               class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-secondary-50 hover:secondary-100">
                                Iniciar sesion
                            </a>
                        </div>
                    </div>
                </div>

                {  /* <!--
                  Mobile menu, show/hide based on mobile menu state.

                  Entering: "duration-200 ease-out"
                    From: "opacity-0 scale-95"
                    To: "opacity-100 scale-100"
                  Leaving: "duration-100 ease-in"
                    From: "opacity-100 scale-100"
                    To: "opacity-0 scale-95"
                -->*/}
                <Transition
                    show={false}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (

                        <div ref={ref}
                             class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                            <div
                                class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                <div class="pt-5 pb-6 px-5">
                                    <div class="flex items-center justify-between">
                                        <div>
                                            <img class="h-8 w-auto"
                                                 src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                                 alt="Workflow"/>
                                        </div>
                                        <div class="-mr-2">
                                            <button type="button"
                                                    class="bg-primary-50 rounded-md p-2 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-100">
                                                <span class="sr-only">Close menu</span>

                                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                     viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          stroke-width="2"
                                                          d="M6 18L18 6M6 6l12 12"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="mt-6">
                                        <nav class="grid gap-y-8">
                                            <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-primary-50">

                                                <svg class="flex-shrink-0 h-6 w-6 text-secondary-50"
                                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          stroke-width="2"
                                                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                                                </svg>
                                                <span class="ml-3 text-base font-medium text-gray-900">
                                                    Analytics
                                                </span>
                                            </a>

                                            <a href="#"
                                               className="-m-3 p-3 flex items-center rounded-md hover:bg-primary-50">

                                                <svg className="flex-shrink-0 h-6 w-6 text-secondary-50"
                                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          stroke-width="2"
                                                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                                                </svg>
                                                <span className="ml-3 text-base font-medium text-gray-900">
                                                    Analytics
                                                </span>
                                            </a>

                                            <a href="#"
                                               className="-m-3 p-3 flex items-center rounded-md hover:bg-primary-50">

                                                <svg className="flex-shrink-0 h-6 w-6 text-secondary-50"
                                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          stroke-width="2"
                                                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                                                </svg>
                                                <span className="ml-3 text-base font-medium text-gray-900">
                                                    Analytics
                                                </span>
                                            </a>


                                        </nav>
                                    </div>
                                </div>
                                <div class="py-6 px-5 space-y-6">
                                    <div class="grid grid-cols-2 gap-y-4 gap-x-8">
                                        <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                                            Pricing
                                        </a>

                                        <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                                            Docs
                                        </a>

                                        <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                                            Enterprise
                                        </a>

                                        <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                                            Blog
                                        </a>

                                    </div>
                                    <div>
                                        <a href="#"
                                           class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-secondary-50 hover:bg-secondary-100">
                                            Sign up
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </Transition>
            </div>

        </>
    )
}

