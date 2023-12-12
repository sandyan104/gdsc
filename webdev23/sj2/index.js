const cno = {
  dc: {
    tl: 'About',
    dc: 'Lorem about ipsum dolor sit amet consectetur adipisicing elit. Dolorum consectetur accusantium eum recusandae quos repellat, eveniet veritatis non distinctio reprehenderit, rem aspernatur doloremque tenetur! Sunt vitae ex sint illum minima.'
  },
  ex: {
    tl: 'Experience',
    dc: 'Lorem experience ipsum dolor sit amet consectetur adipisicing elit. Dolorum consectetur accusantium eum recusandae quos repellat, eveniet veritatis non distinctio reprehenderit, rem aspernatur doloremque tenetur! Sunt vitae ex sint illum minima.'
  },
  ct: {
    tl: 'Contact',
    dc: 'Lorem contact ipsum dolor sit amet consectetur adipisicing elit. Dolorum consectetur accusantium eum recusandae quos repellat, eveniet veritatis non distinctio reprehenderit, rem aspernatur doloremque tenetur! Sunt vitae ex sint illum minima.'
  },
  do: {
    tl: 'Documentation',
    dc: 'Lorem documentation ipsum dolor sit amet consectetur adipisicing elit. Dolorum consectetur accusantium eum recusandae quos repellat, eveniet veritatis non distinctio reprehenderit, rem aspernatur doloremque tenetur! Sunt vitae ex sint illum minima.'
  }
}

const oCnt = document.querySelectorAll(".obj");
const cCnt = document.querySelector("#cno");

oCnt.forEach(obj => {
  obj.addEventListener('click', () => {
    const id = obj.id;
    let tl, dc;
    switch (id) {
      case 'about' : 
        tl = cno.dc.tl;
        dc = cno.dc.dc;
      break;
      case 'experience' : 
        tl = cno.ex.tl;
        dc = cno.ex.dc;
      break;
      case 'contact' : 
        tl = cno.ct.tl;
        dc = cno.ct.dc;
      break;
      case 'documentation' : 
        tl = cno.do.tl;
        dc = cno.do.dc;
      break;
    }

    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    h2.textContent = tl;
    p.textContent = dc;

    cCnt.innerHTML = '';
    cCnt.appendChild(h2);
    cCnt.appendChild(p);
  })
})