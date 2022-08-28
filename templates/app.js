const tracker_data = Vue.component('tracker_data', {

    template:
    `
    <div>
    <div class="card" style="width: 50rem; margin: auto; padding: 20px;  ">
    <div class="row ">
    <div class="col-3 ">
      <h5 class="display-7">Tracker name</h5>
    </div>
    <div class="col ">
      <h5 class="display-7">Last Tracked Value</h5>
    </div>	
  </div> 
    <div class="row py-2 ">
				<div class="col-3 ">
				<a href=""> Tracker_name </a>
			</div>
			<div class="col-3 ">
				value
			</div>	
			
			<div class="col-1 ">
				<a href='' type="button" class="btn btn-outline-dark">Edit</a>
			</div>	
			<div class="col-2 ">
				<a href='' type="button" class="btn btn-outline-dark">Delete</a>
			</div>
		</div>	
    </div>
    </div>
  `
    
})

const routes= [
  {path:'/',  component: tracker_data,}]


const router = new VueRouter({
  routes 
})


var app = new Vue({
    el: '#app',
    router: router,
    data: {
      message: 'username'
    }
  })


