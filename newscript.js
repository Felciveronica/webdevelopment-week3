document.querySelectorAll('.modalbutton').forEach(function (element) {
   element.addEventListener('click', function () 
   {
       var mycart = document.getElementById('cart');
       closemodal();

       mycart.classList.toggle('show');

   });
});

function changeimage(n)
{var images= document.querySelectorAll('#image1');
var display =document.getElementById('mainimage');
var newimage=images[n];
let i;
display.src=newimage.src;
for(i=0;i<5;i++)
{ if (i!==n)
   { 
    images[i].style.border="rgb(210, 208, 208) solid 2px";
   }
   else
   {images[i].style.border="black solid 2px";}
}
}

function openmodal()
{let mymodal=document.getElementById("mymodal");
mymodal.style.display="block";
}
function closemodal()
{
let mymodal=document.getElementById("mymodal");
var xicon = document.getElementsByClassName('xicon');
mymodal.style.display="none";
}
var modalbutton=document.getElementsByClassName('modalbutton');