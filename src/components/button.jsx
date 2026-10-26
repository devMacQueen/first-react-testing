function Button({name}) {
    return (
        <button className="mt-3 sm:mt-0 sm:ml-3">
  <a
    class="w-full flex items-center justify-center px-8 py-3 text-base leading-6 font-medium rounded-md text-purple-700 dark:text-purple-700 bg-purple-100 hover:bg-purple-50 hover:text-purple-600 focus:ring ring-offset-2 ring-purple-100 focus:outline-none transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
    href=""
    rel="noopener"
    target="_blank"
  >
    {name}
  </a>
</button>

    )
}

export default Button