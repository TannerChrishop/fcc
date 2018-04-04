const search = document.getElementById('search');

const submit = document.getElementById('submit');

const items = document.getElementById('items');

const searchWiki = () => {
  
  if(search.value.trim()) {
    
    items.innerHTML = '';
    
   	let val = search.value.trim();
      
    if(val.includes(' ')) {
    	val = val.replace(/\s/g, "%20");
    }
      
    const api = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=info&inprop=url&list=search&srsearch=${val}&srlimit=10&prop=info&inprop=url&callback=?`;
      
    $.ajax({url: api, dataType: 'json', success: function(result){
        var list = result.query.search;
          
        let newList=list.map(function(item){
          const newItem = item.title.replace(/\s/g, "_"); 
      	  const li = document.createElement('li');
          li.innerHTML =`<a href='https://en.wikipedia.org/wiki/${newItem}' target='blank'>${item.title}</a>`
          return li;
    	});
        newList.forEach(function(item){
       	  items.appendChild(item);
        });
      }
   	});
  }search.value = '';        
};

submit.onclick = searchWiki

document.addEventListener('keypress', (e)=>{
  if (e.target === search && e.keyCode === 13) {
    searchWiki();
  }
});

document.addEventListener('click', (e)=>{
  if(e.target.parentElement !== items) {
    items.innerHTML = '';
  }
})

