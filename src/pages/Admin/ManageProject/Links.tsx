import { useState } from 'react';

function Links({ linksState }: { linksState: [object, React.Dispatch<React.SetStateAction<object>>] }) {
  const [linkKey, setLinkKey] = useState("")
  const [linkValue, setLinkValue] = useState("")
  const [links, setLinks] = linksState;

  const handleAddLink = () => {
    if (linkKey && linkValue) {
      setLinks({ ...links, [linkKey]: linkValue })
      setLinkKey("")
      setLinkValue("")
    }
  }
  console.log(links);

  const handleRemoveLink = (key: string) => {
    setLinks((l) => {
      delete l[key as keyof typeof links]
      return { ...l }
    })
  }

  return (
    <>
      <div className='dark:bg-[#91919114] bg-white rounded outline-none border border-transparent flex'>
        <input value={linkKey} onChange={(e) => setLinkKey(e.target.value)} type="text" className='bg-transparent rounded w-1/4 outline-none  focus:border-slate-400 border border-transparent px-2 py-1' autoFocus placeholder='Name' />
        <div className='h-auto w-[1px] bg-slate-400 mx-1 my-1'></div>
        <input value={linkValue} onChange={(e) => setLinkValue(e.target.value)} type="text" className='bg-transparent rounded w-3/4 outline-none  focus:border-slate-400 border border-transparent px-2 py-1' autoFocus placeholder='Link' />
        <button onClick={handleAddLink} type='button' className='ml-3 px-2 '>Add</button>
      </div>
      <ul className="flex gap-1 flex-col mt-1">
        {Object.keys(links).map((key) => {
          if (links[key as keyof typeof links]) {
            return (
              <li key={Math.random()} className='flex gap-2'>
                <span className="px-[5px] py-[2px] text-sm bg-slate-900 text-white rounded w-1/6">
                  {key}:
                </span>
                <span className='w-3/4 whitespace-normal'>
                  {/* @ts-expect-error - Passing a num array as opposed */}
                  {links[key as keyof typeof links]!.length > 30 ? links[key as keyof typeof links]!.slice(0, 30) + "..." : links[key as keyof typeof links]!.slice(0, 30)}
                </span>
                <span className='text-red-600 text-sm font-semibold cursor-pointer' onClick={() => handleRemoveLink(key)}>Remove</span>
              </li>
            )
          }
        })}
      </ul>
    </>
  );
}

export default Links;
