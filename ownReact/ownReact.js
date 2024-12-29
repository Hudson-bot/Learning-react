function customrender(reactelement,container){
    /*
    const domElement= document.createElement(reactelemnt.type)
    domElement.innerHTML = reactelemnt.children
    domElement.setAttribute('href',reactelemnt.props.href)
    domElement.setAttribute('target',reactelemnt.props.target)
    container.appendChild(domElement)
    */

    const domElement= document.createElement(reactelement.type)
    domElement.innerHTML = reactelement.children
   for(const prop in reactelement.props){
    if(prop === 'children') continue
    domElement.setAttribute(prop,reactelement.props[prop])
   }
    container.appendChild(domElement)  


}

const reactelement= {
    type : 'a',
    props :{
        href : "https://google.com",
        target: '_blank'
        
    },
    children : 'click me to visit google'
}

const mainContainer = document.querySelector('#root')

customrender(reactelement, mainContainer)