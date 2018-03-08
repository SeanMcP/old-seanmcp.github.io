$.getScript('./js/data.json', function(data, textStatus, jqxhr) {
  // console.log( Data ); // Data returned
  // console.log( textStatus ); // Success
  // console.log( jqxhr.status ); // 200
  // console.log( "Load was performed." );
  // const data = JSON.parse(Data);
  writePage(JSON.parse(data));
});

// const tagList = [
//   "Software developer",
//   "Problem solver",
//   "Soccer fan"
// ];
//
// const linkList = [
//   {
//     title: 'Blog',
//     url: 'https://medium.com/@seanmcp',
//     icon: 'fab fa-medium',
//   },
//   {
//     title: 'GitHub',
//     url: 'https://github.com/seanmcp',
//     icon: 'fab fa-github',
//   },
//   {
//     title: 'Twitter',
//     url: 'https://twitter.com/mcpcodes',
//     icon: 'fab fa-twitter',
//   },
//   {
//     title: 'LinkedIn',
//     url: 'https://linkedin.com/in/seanmcp',
//     icon: 'fab fa-linkedin',
//   },
//   {
//     title: 'Resume',
//     url: 'https://github.com/seanmcp/resume',
//     icon: 'fas fa-briefcase',
//   },
//   {
//     title: 'Email',
//     url: 'mailto:sean@seanmcp.com',
//     icon: 'fas fa-paper-plane',
//   },
// ];

// tagList.forEach(tag => {
//   const newLi = `<li>${tag}</li>`;
//   $('header ul').append(newLi);
// })

// linkList.forEach(link => {
//   const newLi = `
//     <li>
//       <i class="${link.icon} fa-fw""></i>
//       <a href=${link.url} alt=${link.title}>${link.title}</a>
//     </li>
//   `;
//   $('footer ul').append(newLi);
// })

const writePage = data => {
  const wrapper = document.createElement('div');
  wrapper.id = "wrapper";
  $('body').prepend(wrapper);
  for (const element in data) {
    const temp = document.createElement(element);
    if (element !== 'main') {
      const ul = document.createElement('ul');
      if (element === 'header') {
        const heading = document.createElement('h1');
        heading.append(data[element].title);
        temp.append(heading);
      }
      temp.append(ul);
    } else {
      writeParagraphs(temp, data[element].content);
    }
    $('#wrapper').append(temp);
  }
  writeTags(data.header.tagList);
  writeLinks(data.footer.linkList);
}

const writeTags = tagList => {
  tagList.forEach(tag => {
    const newLi = `<li>${tag}</li>`;
    $('header ul').append(newLi);
  });
}

const writeLinks = linkList => {
  linkList.forEach(link => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const i = document.createElement('i');
    const span = document.createElement('span');
    a.href = link.url;
    a.alt = link.text;
    a.title = link.text;
    const classList = link.icon.split(' ');
    classList.forEach(item => i.classList.add(item));
    i.classList.add('fa-fw');
    a.append(i);
    span.append(link.text);
    a.append(span);
    li.append(a);
    $('footer ul').append(li);
  });
}

const writeParagraphs = (container, contentList) => {
  contentList.forEach(paragraph => {
    const p = document.createElement('p');
    p.append(paragraph);
    container.append(p);
  });
}
