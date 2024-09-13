import localFont from "next/font/local"

 
const irancell = localFont({
    src: [
      {
        path: '../../../public/fonts/irancell/irancell.woff2',
        weight: '900',
      },
      {
        path: '../../../public/fonts/irancell/irancell1.woff2',
        weight: '300',
      },
      {
        path: '../../../public/fonts/irancell/irancell2.woff2',
        weight: '200',
      },
      {
        path: '../../../public/fonts/irancell/irancellblack.woff2',
        weight: '700',
      },
      {
        path: '../../../public/fonts/irancell/irancelllight.woff2',
        weight: '100', 
      },
      {
        path: '../../../public/fonts/irancell/irancellmedium.woff2',
        weight: '400',
      },
    ],
    variable:"--font-irancell",
    style :"normal",
    display:'block',
  })

  export default irancell