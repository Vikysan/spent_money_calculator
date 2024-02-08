import { forwardRef } from 'react'
import { createPortal } from 'react-dom'



const Modal = forwardRef(({ children }, ref) => {
    return (<>

        {createPortal(
            <dialog ref={ref}>
                {children}


            </dialog>, document.getElementById("modal")
        )}
    </>
    )
})

export default Modal




// import { forwardRef, useImperativeHandle } from 'react';

// const MyInput = forwardRef(function MyInput(props, ref) {
//   useImperativeHandle(ref, () => {
//     return {
//       // ... your methods ...
//     };
//   }, []);