# modal react without libraries
this is a example of implement modal layouts in react
## Open Modal Function
~~~
// all definition
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
~~~
the open modal function is include in a button event. when on click in this button call the function
## OpenModal behaviour
~~~
import React, {Suspense, lazy} from "react";

import { createRoot } from "react-dom/client";
~~~
the function use Lazy for best performance in  slow networks 
### using Lazy
this code controls whether the import is necessary or not
~~~
const Modal = lazy(() => import('./Modal'));
~~~
### create the modal
create modal element inside a div
~~~
const modalDiv = document.createElement('div');

modalDiv.id = 'modal';
~~~

### append in root
add the element with the document API and use for createRoot

~~~
    document.body.appendChild(modalDiv)

    const root = createRoot(modalDiv);
~~~

### render the component
in the final of function your use root.render an in this method inside a Suspense Component with fallback  while waiting for it to render
a special component call modal
 in this component is styles of the modal
~~~
 root.render(

        <Suspense fallback={<div>...loading</div>}>

            <Modal root={root} title="Modal" >openModal</Modal>

        </Suspense>

    );
~~~
