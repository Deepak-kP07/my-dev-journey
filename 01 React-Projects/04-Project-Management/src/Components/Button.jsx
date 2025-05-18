export default function Button({children , ...props}){
return (
  <>
   <button className="border border-stone-800 p-2 rounded  bg-stone-700 text-stone-300 m-4  mt-12 mx-10 hover:text-stone-100 hover:bg-stone-900 " {...props}>{children} </button>
  </>
)
}