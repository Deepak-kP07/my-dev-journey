export default function Input({label , textarea ,input , ...props }){
    return <p>
        <label {...props} className='uppercase text-sm font-semibold text-stone-700 '> {label}</label> <br />
        {textarea ? <textarea {...props} className='w-full bg-stone-300 py-2 px-2  border-b-2 rounded focus:outline-none border-b-stone-600 focus:border-b-stone-900 ' /> : <input type={input}  {...props} className='w-full bg-stone-300 py-2 px-2 border-b-2 rounded focus:outline-none border-b-stone-600 focus:border-b-stone-900 '/>} 
    </p>
}
