import React, { useEffect, useState } from 'react'

const DependencySearch = () => {
    const [dependencies, setDependencies] = useState<any[]>([]);
    let [search, setSearch] = useState('');

    useEffect(() => {
        fetch(`https://registry.npmjs.org/-/v1/search?text=${search}`)
            .then((res) => res.json())
            .then((dependency: any[]) => {
                setDependencies(dependency)
            })
    }, [])
    
  return (
    <div>
        <h1 className="text-3xl text-white font-bold">Add dependecies here:</h1>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="border w-full border-white mb-[3px] text-white bg-transparent py-1 px-3 outline-none" placeholder="Search Dependency"/>
          <div className="border-l border-white rounded-lg h-full w-full my-5">
            <ul>
              {dependencies.map(dep => (
                <li key={dep}>
                  <label className='hover:bg-white hover:text-black'>
                    <input type="text"/> {dep}
                  </label>
                </li>
              ))}
            </ul>
          </div>
    </div>
  )
}

export default DependencySearch