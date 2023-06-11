// 获取所有符合条件的img元素
let links = document.querySelectorAll('.mylinksbtn');

// 为每个元素添加点击事件监听器
links.forEach(link => {
  link.addEventListener('click', () => {

    // 获取class为'linkis'的元素
    let target = document.querySelector('.linkis');
    let linkbtn = document.querySelector('.mylinksbtn');

    // 如果元素已经处于active状态，则将其隐藏
    if (target.classList.contains('hide')) {
      target.classList.remove('hide');
      linkbtn.classList.remove('isclosed');

    // 如果元素处于非活动状态，则将其显示
    } else {
      target.classList.add('hide');
      linkbtn.classList.add('isclosed');
    }

    // 将用户的选择保存在LocalStorage中
    localStorage.setItem('drawerSelection', target.classList.contains('hide'));
    localStorage.setItem('drawerSelection', linkbtn.classList.contains('isclosed'));
  });
});

// 在页面加载时，从LocalStorage中检索用户的选择并将其应用于元素
if (localStorage.getItem('drawerSelection')) {
  let target = document.querySelector('.linkis');
  let linkbtn = document.querySelector('.mylinksbtn');
  if (localStorage.getItem('drawerSelection') === 'true') {
    target.classList.add('hide');
    linkbtn.classList.remove('isclosed');
  }
}