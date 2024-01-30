import {forwardRef} from 'react'

const Input = forwardRef( ({className,...props },ref) => {
  return (
    <input
        className={"w-full bg-[#242e4c] border border-[#161f3b] p-2 pl-3  focus:" + {className}}
        ref={ref}
        {...props}
      />
  )
})

export default Input
