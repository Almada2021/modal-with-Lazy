import React, {Suspense, lazy} from "react";
import { createRoot } from "react-dom/client";
export default function openModal (){
    const Modal = lazy(() => import('./Modal'));
    const modalDiv = document.createElement('div');
    modalDiv.id = 'modal';
    document.body.appendChild(modalDiv)
    const root = createRoot(modalDiv);
    root.render(
        <Suspense fallback={<div>...loading</div>}>
            <Modal root={root} title="Modal" >openModal</Modal>

        </Suspense>
    );

}