import { useRef } from "react"
import styles from "./modal.module.scss"
export default function Modal({children, title, root}) {
    const refer = useRef(null);
    function callback(e){
        root.unmount();
        document.querySelector('#modal').remove();
        refer.current.removeEventListener("animationend",callback)
    }
    function handleClick (){
        refer.current.classList.add(styles.fadeOut);
        refer.current.addEventListener("animationend",callback,
        {once:true});
    }
    return(
        <div ref={refer} className={styles.modalContainer}>
           <div className={styles.modalView}>
            <div className={styles.modalHeader}>
                 <div>{title}</div>
                 <div className={styles.closeButton}>
                    <button onClick={handleClick}>close Modal</button>
                 </div>
             </div >
             <div>
                 {children}
             </div>
           </div>
        </div>
    )
}