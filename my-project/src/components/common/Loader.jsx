import { Grid } from 'ldrs/react'
import 'ldrs/react/Grid.css'

const Loader = () => {
  return (
    // First Option
    // <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
    //   <div className="flex flex-col items-center">
    //     <div
    //       className="
    //         w-24 h-24
    //         rounded-full
    //         border-[12px]
    //         border-black
    //         animate-spin
    //       "
    //     />

    //     <h2 className="mt-6 text-2xl font-bold text-black">
    //       Mars Enterprises
    //     </h2>

    //   </div>

    // </div>

    // Loader Component using ldrs
    // <Grid
    // size="60"
    // speed="1.5"
    // color="black" 
    // />

    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">

      <div className="flex flex-col items-center">

        <div
          className="
            w-24 h-24
            rounded-full
            border-[12px]
            border-black
            animate-spin
          "
        />

        <h2 className="mt-6 text-2xl font-bold text-black">
          Mars Enterprises
        </h2>
      
      </div>
    </div>
  )
}

export default Loader

