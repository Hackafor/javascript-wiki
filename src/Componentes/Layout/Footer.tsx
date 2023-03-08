import Link from "next/link";

function Footer() {
  return (
    <footer className="dark:bg-slate-700 bg-gray-200 dark:text-white text-center p-2 min-w-full flex justify-center ">
      <div className="flex justify-between container min-h-full text-black-important ">
      <Link href={"/credits"} className="">Desarrolladores</Link>
       <Link href={"https://github.com/Hackafor/javascript-wiki"} target="_blank">Github</Link>

      </div>
       
       
    </footer>
  );
}

export default Footer;
