import React, { useEffect, useState } from 'react'

class Package { // TODO - Vai da merda
  name: string;
  scope: string;
  version: string;
  description: string;
  date: Date;
  links: { npm: string };
  publisher: { username: string, email: string };
  maintainers: { username: string, email: string }[];

  constructor(data: any) {
      this.name = data.name;
      this.scope = data.scope;
      this.version = data.version;
      this.description = data.description;
      this.date = new Date(data.date);
      this.links = { npm: data.links.npm };
      this.publisher = { username: data.publisher.username, email: data.publisher.email };
      this.maintainers = data.maintainers.map((maintainer: any) => ({
          username: maintainer.username,
          email: maintainer.email
      }));
  }
}

const DependencySearch = () => {
    const [dependencies, setDependencies] = useState<any[]>([]);
    const [selected, setSelected] = useState<any[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch(`https://registry.npmjs.org/-/v1/search?text=${search}`)
            .then((res) => res.json())
            .then((dependency: any) => {
                console.log(dependency.objects);
                setDependencies(dependency.objects as any[]);
            })
    }, [search])

    const handleSelect = (pckg: Package) => {
      setSelected(selected => [...selected, pckg]);
      setShowModal(false);
    }
    
  return (
    <div>
        {/* <h1 className="text-3xl text-white font-bold">Add dependecies here:</h1> */}
        {showModal ? (
          <>
          <div className="flex">
            <input type="text" defaultValue={search} onChange={(e) => setSearch(e.target.value)} className="border w-full border-white text-white bg-transparent py-1 px-3 outline-none" placeholder="Search Dependency"/>
            <button onClick={() => setShowModal(false)} className='ml-1 p-1 px-5 bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white'>Close</button>
          </div>
          <div className=" rounded-md h-full w-full">
            <ul>              
              {dependencies.map(dep => (
                <li key={dep} onClick={() => handleSelect(dep)} className='py-3 hover:cursor-pointer my-[5px] border border-slate-400 hover:bg-slate-500'>
                    <span className='mx-3 my-3 w-full text-white'>{dep.package.name}</span>
                </li>
              ))}
            </ul>
          </div>
          </>
        ) : 
          <div className="p-2 rounded-md h-full w-full my-5">
            <button onClick={() => setShowModal(true)} className='py-2 w-full bg-transparent border border-white text-white hover:bg-white hover:text-black'>Add Dependency</button>
            <ul>
              {selected.map(selectedDep => (
                <li key={"selected "+selectedDep} className='py-3 bg-slate-100 hover:cursor-pointer my-[3px]'>
                    <span className='mx-3 my-3 w-full text-black'>{selectedDep.package.name}</span><button className='float-end mr-3 text-red-500 hover:underline px-4'>Remove</button>
                </li>
              ))}
            </ul>
          </div>
          }
    </div>
  )
}

export default DependencySearch