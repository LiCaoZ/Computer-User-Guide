export default {
    projectLink: 'https://github.com/LiCaoZ/Computer-User-Guide', // GitHub link in the navbar
    docsRepositoryBase: 'https://github.com/LiCaoZ/Computer-User-Guide/blob/main', // base URL for the docs repository
    titleSuffix: ' – 计算机使用指南',
    nextLinks: true,
    prevLinks: true,
    search: true,
    customSearch: null, // customizable, you can use algolia for example
    darkMode: true,
    footer: true,
    footerText: `使用 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh" target="_blank">署名-非商业性使用-相同方式共享 4.0 国际</a> 协议进行共享`,
    footerEditLink: `帮助我们改善此页`,
    logo: (
      <>
        <span class="mr-2 font-extrabold hidden md:inline">计算机使用指南</span>
        <span>科学使用你的计算机</span>
      </>
    ),
    head: (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="计算机使用指南: 科学使用你的计算机" />
        <meta name="og:title" content="计算机使用指南: 科学使用你的计算机" />
      </>
    ),
  }