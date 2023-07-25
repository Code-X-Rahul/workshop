'use client'
import { useAuth } from '@/context/UserContext'
import { PlusCircleIcon, X } from 'lucide-react'
import { FormEvent, useState, useEffect } from 'react';
import { useWorkshop } from '@/context/WorkshopContext'
import { createWorkshop, fetchWorkshops } from '@/helpers/workshop'

const Form = ({ setDialogOpen, refetch }: {
  setDialogOpen: (e: boolean) => void
  refetch: any
}) => {
  const { user } = useAuth()
  const [workshop, setWorkshop] = useState({
    name: "",
    venue: "",
    url: "",
    email: "",
    type: "",
    date: "",
    createdBy: user._id
  })


  const valueHandler = (e: any) => {
    setWorkshop((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await createWorkshop(workshop, setDialogOpen)
      refetch();
    } catch (error: any) {
      throw new Error(error)
    }
  }
  return (
    <form onSubmit={submitHandler} className='grid place-items-center'>

      <div className='flex items-center justify-center'>
        <label className='text-xl text-slate-100 p-2' htmlFor="name">Name</label>
        <input
          className='p-2 h-10 mx-4 bg-transparent border-b-2 border-red-600 outline-none text-slate-50'
          type="text"
          name="name"
          id="name"
          required
          value={workshop.name}
          onChange={(e: any) => valueHandler(e)}
        />
      </div>

      <div className='flex items-center justify-center'>
        <label className='text-xl text-slate-100 p-2' htmlFor="email">Email</label>
        <input
          className='p-2 h-10 mx-4 bg-transparent border-b-2 border-red-600 outline-none text-slate-50'
          type="email"
          name="email"
          id="email"
          required
          value={workshop.email}
          onChange={(e: any) => valueHandler(e)}
        />
      </div>

      <div className='flex items-center justify-center'>
        <label className='text-xl text-slate-100 p-2' htmlFor="venue">Venue</label>
        <input
          className='p-2 h-10 mx-4 bg-transparent border-b-2 border-red-600 outline-none text-slate-50'
          type="text"
          name="venue"
          id="venue"
          required
          value={workshop.venue}
          onChange={(e: any) => valueHandler(e)}
        />
      </div>

      <div className='flex items-center justify-center'>
        <label className='text-xl text-slate-100 p-2' htmlFor="url">Url</label>
        <input
          className='p-2 h-10 mx-4 bg-transparent border-b-2 border-red-600 outline-none text-slate-50'
          type="url"
          name="url"
          id="url"
          required
          value={workshop.url}
          onChange={(e: any) => valueHandler(e)}
        />
      </div>

      <div className='flex items-center justify-center'>
        <label className='text-xl text-slate-100 p-2' htmlFor="type">Type</label>
        <input
          className='p-2 h-10 mx-4 bg-transparent border-b-2 border-red-600 outline-none text-slate-50'
          type="text"
          name="type"
          id="type"
          required
          value={workshop.type}
          onChange={(e: any) => valueHandler(e)}
        />
      </div>

      <div className='flex items-center self-start'>
        <label className='text-xl text-slate-100 p-2' htmlFor="date">Date</label>
        <input
          className='p-2 h-10 mx-4 bg-transparent border-b-2 border-red-600 outline-none text-slate-50'
          type="date"
          name="date"
          id="date"
          required
          value={workshop.date}
          onChange={(e: any) => valueHandler(e)}
        />
      </div>
      <div className='flex space-x-4 m-2'>
        <button className='flex items-center justify-center gap-1 text-lg text-slate-50 bg-green-600 rounded-md p-2' type='submit'>
          Create
          <PlusCircleIcon className='text-xl' />
        </button>
        <button onClick={() => setDialogOpen(false)} className='flex items-center justify-center gap-1 text-lg text-slate-100 bg-red-600 rounded-md p-2' type='button'>
          Cancel
          <X className='text-xl' />
        </button>
      </div>
    </form>
  )
}

export default Form