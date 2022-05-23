const navigation = document.getElementById('navigation');

navigation.addEventListener('click', function (e) {
  const orderedList = document.querySelector('#navigation > ul');

  orderedList.classList.toggle('flex');
  orderedList.classList.toggle('hidden');

  document.body.classList.toggle('overflow-hidden');

  navigation.classList.toggle('active');
})