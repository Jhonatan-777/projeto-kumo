function BackGroundAnimation()
{
  const header = document.querySelector('header');

  window.addEventListener('scroll', function ()
  {
    header.classList.toggle('sticky', this.window.scrollY > 0);
  }
  )
}

function NavMenu()
{
  let menu = document.querySelector('#menu-icon');
  let navmenu = document.querySelector('.navmenu');

  menu.onclick = () =>
  {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
  }
}

BackGroundAnimation()
NavMenu()