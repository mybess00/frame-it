'use client'

import { useState } from "react";

export default function SearchBox ({ change }){
  const [link, setLink] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    change(link);
  }

  return(
    <form onSubmit={handleSubmit} className="search-box place-self-stretch">   
        <label for="default-search" class="mb-2 text-sm font-medium sr-only">Search</label>
        <div class="relative w-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="search" id="default-search" value={link} onChange={(e) => setLink(e.target.value)} class="block w-full p-4 pl-10 text-sm bg-[#01090e]" placeholder="Paste your tweet link here"/>
            <button type="submit" class="absolute right-2.5 bottom-2.5 bg-[#5cb4b6] text-[#125354] font-medium rounded-lg text-sm px-4 py-2">Search</button>
        </div>
    </form>

  );
}