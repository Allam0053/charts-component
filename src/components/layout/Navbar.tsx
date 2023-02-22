import styles from '@/components/layout/Navbar.module.css';

import UnstyledLink from '@/components/links/UnstyledLink';

export default function Navbar() {
  return (
    <div className='supports-backdrop-blur:bg-white/60 sticky top-0 z-40 w-full flex-none bg-white/95 backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] dark:bg-transparent lg:z-50 lg:border-b lg:border-slate-900/10'>
      <div className='max-w-8xl mx-auto'>
        <div className='mx-4 border-b border-slate-900/10 py-4 dark:border-slate-300/10 lg:mx-0 lg:border-0 lg:px-8'>
          <div className='relative flex items-center'>
            <UnstyledLink
              className='mr-3 w-[2.0625rem] flex-none overflow-hidden md:w-auto'
              href='/'
            >
              <span className='sr-only'>Tailwind CSS home page</span>
              <svg
                viewBox='0 0 248 31'
                className='h-5 w-auto text-slate-900 dark:text-white'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z'
                  fill='#38bdf8'
                ></path>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z'
                  fill='currentColor'
                ></path>
              </svg>
            </UnstyledLink>
            <div className='relative' data-headlessui-state=''>
              <button
                className='dark:highlight-white/5 flex items-center space-x-2 rounded-full bg-slate-400/10 py-1 px-3 text-xs font-semibold leading-5 hover:bg-slate-400/20'
                id='headlessui-menu-button-1'
                type='button'
                aria-haspopup='true'
                aria-expanded='false'
                data-headlessui-state=''
              >
                v 3.2.7
                <svg
                  width='6'
                  height='3'
                  className='ml-2 overflow-visible'
                  aria-hidden='true'
                >
                  <path
                    d='M0 0L3 3L6 0'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                  ></path>
                </svg>
              </button>
            </div>
            <a
              className='ml-3 hidden items-center rounded-full bg-sky-400/10 py-1 px-3 text-xs font-medium leading-5 text-sky-600 hover:bg-sky-400/20 dark:text-sky-400 xl:flex'
              href='/blog/tailwindcss-v3-2'
            >
              <strong className='font-semibold'>Tailwind CSS v3.2</strong>
              <svg
                width='2'
                height='2'
                fill='currentColor'
                aria-hidden='true'
                className='ml-2 text-sky-600 dark:text-sky-400/70'
              >
                <circle cx='1' cy='1' r='1'></circle>
              </svg>
              <span className='ml-2 min-[1372px]:hidden'>
                Dynamic breakpoints, container queries, and more
              </span>
              <span className='ml-2 hidden min-[1372px]:inline'>
                Dynamic breakpoints, multi-config, container queries, and more
              </span>
              <svg
                width='3'
                height='6'
                className='ml-3 overflow-visible text-sky-300 dark:text-sky-400'
                aria-hidden='true'
              >
                <path
                  d='M0 0L3 3L0 6'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>
              </svg>
            </a>
            <div className='relative ml-auto hidden items-center lg:flex'>
              <nav className='text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200'>
                <ul className='flex space-x-8'>
                  <li>
                    <a
                      className='hover:text-sky-500 dark:hover:text-sky-400'
                      href='/docs/installation'
                    >
                      Docs
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://tailwindui.com/?ref=top'
                      className='hover:text-sky-500 dark:hover:text-sky-400'
                    >
                      Components
                    </a>
                  </li>
                  <li>
                    <a
                      className='hover:text-sky-500 dark:hover:text-sky-400'
                      href='/blog'
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className='hover:text-sky-500 dark:hover:text-sky-400'
                      href='/showcase'
                    >
                      Showcase
                      <span className='ml-2 rounded-full bg-sky-400/10 px-2 py-0.5 text-xs font-medium leading-5 text-sky-600 dark:text-sky-400'>
                        New
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
              <div className='ml-6 flex items-center border-l border-slate-200 pl-6 dark:border-slate-800'>
                <label
                  className='sr-only'
                  id='headlessui-listbox-label-3'
                  data-headlessui-state=''
                >
                  Theme
                </label>
                <button
                  type='button'
                  id='headlessui-listbox-button-4'
                  aria-haspopup='true'
                  aria-expanded='false'
                  data-headlessui-state=''
                  aria-labelledby='headlessui-listbox-label-3 headlessui-listbox-button-4'
                >
                  <span className='dark:hidden'>
                    <svg
                      viewBox='0 0 24 24'
                      fill='none'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='h-6 w-6'
                    >
                      <path
                        d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                        className='fill-sky-400/20 stroke-sky-500'
                      ></path>
                      <path
                        d='M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836'
                        className='stroke-sky-500'
                      ></path>
                    </svg>
                  </span>
                  <span className='hidden dark:inline'>
                    <svg viewBox='0 0 24 24' fill='none' className='h-6 w-6'>
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z'
                        className='fill-sky-400/20'
                      ></path>
                      <path
                        d='m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z'
                        className='fill-sky-500'
                      ></path>
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z'
                        className='fill-sky-500'
                      ></path>
                    </svg>
                  </span>
                </button>
                <a
                  href='https://github.com/tailwindlabs/tailwindcss'
                  className='ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300'
                >
                  <span className='sr-only'>Tailwind CSS on GitHub</span>
                  <svg
                    viewBox='0 0 16 16'
                    className='h-5 w-5'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'></path>
                  </svg>
                </a>
              </div>
            </div>
            <button
              type='button'
              className='-my-1 ml-auto flex h-8 w-8 items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300 lg:hidden'
            >
              <span className='sr-only'>Search</span>
              <svg
                width='24'
                height='24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                aria-hidden='true'
              >
                <path d='m19 19-3.5-3.5'></path>
                <circle cx='11' cy='11' r='6'></circle>
              </svg>
            </button>
            <div className='-my-1 ml-2 lg:hidden'>
              <button
                type='button'
                className='flex h-8 w-8 items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300'
              >
                <span className='sr-only'>Navigation</span>
                <svg width='24' height='24' fill='none' aria-hidden='true'>
                  <path
                    d='M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  ></path>
                </svg>
              </button>
              <div className={styles['sr-only-cus']}></div>
            </div>
          </div>
        </div>
        <div className='flex items-center border-b border-slate-900/10 p-4 dark:border-slate-50/[0.06] lg:hidden'>
          <button
            type='button'
            className='text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300'
          >
            <span className='sr-only'>Navigation</span>
            <svg width='24' height='24'>
              <path
                d='M5 6h14M5 12h14M5 18h14'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
              ></path>
            </svg>
          </button>
          <ol className='ml-4 flex min-w-0 whitespace-nowrap text-sm leading-6'>
            <li className='flex items-center'>
              Getting Started
              <svg
                width='3'
                height='6'
                aria-hidden='true'
                className='mx-3 overflow-visible text-slate-400'
              >
                <path
                  d='M0 0L3 3L0 6'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                ></path>
              </svg>
            </li>
            <li className='truncate font-semibold text-slate-900 dark:text-slate-200'>
              Installation
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
