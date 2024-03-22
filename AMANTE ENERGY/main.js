let menu = document . queryselector ('#menu-icon');
let navbar = document . querySelector ('.navbar');

menu.onclick = () => {
    menu.classlist.toggle('bx-x');
    menu.classlist.toggle('active');
}

Window.onscroll = () =>{
    menu.classlist.remove('bx-x');
    menu.classlist.remove('active');
}