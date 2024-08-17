import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div><figure className="md:flex bg-green-400 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/waleed.jpeg" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “I am Waleed Bin Khalid.I am student of AI rebortic.i complete my 2nd project of AI class dileverd by 
        respected sir "Mian Asif". i face some problem but sir asif guidlines was very professional. I'll try
        my best for this project.”
        
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Waleed Bin Khalid
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, Pakistan AI
      </div>
    </figcaption>
  </div>
</figure></div>
    </main>
  );
}
