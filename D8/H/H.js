const icons = document.getElementsByClassName('icon');
const btn = document.getElementById('learn-more');

btn.addEventListener( 'click' ,function(e){
   console.log('I was clicked' + e.target);
})

for (var i = 0; i < icons.length; i++) {
   icons[i].addEventListener('mouseenter', function(e){
       console.log('I was mouseenter' + e.target);
       console.log(this.style.height);
       this.style.height = '200px';
   });
   icons[i].addEventListener('mouseleave', function(e){
      console.log('I was mouseleave' + e.target);
      this.style.height = '50px';
  });
}