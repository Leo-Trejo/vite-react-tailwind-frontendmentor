import CrossIcon from "./componentsIcons/Crossicon"
import MoonIcon from "./componentsIcons/Moonicon"


const App = () =>{
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">


      <header className=" container mx-auto px-4 pt-8 ">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">Todo</h1>
          <button><MoonIcon/></button>
        </div>
        <form className=" overflow-hidden rounded-md bg-white py-4 flex gap-4 items-center px-4 mt-8">
          <span className="rounded-full border-2  w-5 h-5 inline-block"></span>
          <input className="w-full text-gray-500 outline-none" type="text" placeholder="Create new todo..."></input>
        </form>
      </header>

      <main className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-md  ">
            <article className=" flex gap-4 py-4 border-b-gray-400 border-b px-4">
              <button className="rounded-full border-2  w-5 h-5 inline-block flex-none"></button>
              <p className="text-gray-600 grow">
                complete online js curse
              </p>
              <button className="flex-none">
                <CrossIcon/>
              </button>
            </article>

            <article className=" flex gap-4 py-4 border-b-gray-400 border-b px-4">
              <button className="rounded-full border-2  w-5 h-5 inline-block flex-none"></button>
              <p className="text-gray-600 grow">
                complete online js curse
              </p>
              <button className="flex-none">
                <CrossIcon/>
              </button>
            </article>

            <article className=" flex gap-4 py-4 border-b-gray-400 border-b px-4">
              <button className="rounded-full border-2  w-5 h-5 inline-block flex-none"></button>
              <p className="text-gray-600 grow">
                complete online js curse
              </p>
              <button className="flex-none">
                <CrossIcon/>
              </button>
            </article>

            <article className=" flex gap-4 py-4 border-b-gray-400 border-b px-4">
              <button className="rounded-full border-2  w-5 h-5 inline-block flex-none"></button>
              <p className="text-gray-600 grow">
                complete online js curse
              </p>
              <button className="flex-none">
                <CrossIcon/>
              </button>
            </article>

            <article className=" flex gap-4 py-4 border-b-gray-400 border-b px-4">
              <button className="rounded-full border-2  w-5 h-5 inline-block flex-none"></button>
              <p className="text-gray-600 grow">
                complete online js curse
              </p>
              <button className="flex-none">
                <CrossIcon/>
              </button>
            </article>

        </div>
      
      

        <section className="py-4 px-4 flex justify-between bg-white rounded-md">
          <span className="text-gray-400 ">5 items left</span>
          <button className="text-gray-400 ">clear completed</button>
        </section>

      </main>

        <section className="container mx-auto px-4 mt-8">

          <div className="bg-white p-4 rounded-md flex justify-center gap-4">
            <button className="text-blue-600">All</button>
            <button className="hover:text-blue-600">active</button>
            <button className="hover:text-blue-600">completed</button>
          </div>
          
        </section>

        <p className="text-center">drag and drop</p>

      
      
    </div>


    
  )
}

export default App 