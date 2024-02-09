"use client"
import DependencySearch from "@/components/DependencySearch";
import { useState } from "react";

export default function Home() {

  const [projectName, setProjectName] = useState();
  const [projectDescription, setProjectDescription] = useState();
  const [language, setLanguage] = useState('js');
  const [dependencies, setDependencies] = useState([]);





  return (
    <main className="flex min-h-screen items-center justify-between">
      <div className="max-md:m-0 m-20 flex">
      <div className="w-1/2 bg-white p-5 lg:pr-28 h-screen border border-black">
        <h1 className="text-3xl font-bold">Kickstart My Node⚡:Generate Node API Project;</h1>
        <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. At praesentium perspiciatis non hic accusamus quibusdam provident corrupti ipsa eius facere, repellat laudantium iste porro? At qui iste voluptates necessitatibus dolor!</p>

        <h2 className="text-lg font-semibold">Language</h2>
        <div className="flex">
          <div className="items-center mb-4 mr-2">
            <input id="javascript-checkbox" type="checkbox" value="js" className="w-5 h-5 outline-none accent-black bg-gray-100 border-gray-300 rounded focus:ring-2" />
            <label htmlFor="javascript-checkbox" className="ms-2 text-sm font-semibold text-gray-900">Javascript</label>
          </div>
          <div className="items-center mb-4">
            <input id="typescript-checkbox" type="checkbox" value="ts" className="w-5 h-5 outline-none accent-black bg-gray-100 border-gray-300 rounded focus:ring-2" />
            <label htmlFor="typescript-checkbox" className="ms-2 text-sm font-semibold text-gray-900">Typescript</label>
          </div>
        </div>

        <h2 className="text-lg font-semibold">Project Metadata</h2>
        <div className="block">
          <input type="text" className="border w-full border-black mb-[3px] text-black bg-transparent py-1 px-3 outline-none" placeholder="Project Name"/>
        </div>
        <div className="block">
          <input type="text" className="border w-full border-black mb-[3px] text-black bg-transparent py-1 px-3 outline-none" placeholder="Version"/>
        </div>
        <div className="block">
          <select className="border w-full border-black mb-[3px] text-black bg-transparent py-2 px-3 outline-none">
            <option value="" selected disabled>Select an license</option>
            <option value="">MIT</option>
            <option value="">GPD</option>
            <option value="">JFIFF</option>
            <option value="">NONE</option>
          </select>
        </div>
        {/* <div className="block">
          <input type="text" className="border w-full border-black mb-[3px] text-black bg-transparent py-1 px-3 outline-none" placeholder="Project Name"/>
        </div> */}

        <button className="bg-transparent border-2 flex mt-3 border-zinc-800 text-black px-3 py-2 hover:bg-black hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 11l5 5l5 -5" /><path d="M12 4l0 12" /></svg>  
          Generate
        </button>
      </div>

      <div className="w-1/2 bg-black overflow-y-scroll border border-black p-5 lg:pr-28 h-screen">
        <DependencySearch />
      </div>
      </div>
    </main>
  );
}
