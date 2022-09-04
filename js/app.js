
const dashboard = Vue.component('dashboard', {

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
    <div class="row gy-2 " style="width: 50rem; margin: auto; padding: 20px;">
		<div class="col-2 ">
			<a @click="addtracker" type="button" class="btn btn-light">Add new tracker</a>
		</div>	
	</div> 
    </div>
  `
  ,methods:{
      addtracker:function(){
        this.$router.push({name:'new_tracker'})
      }
    } 
})

const new_tracker=Vue.component('new_tracker', {
  template: `
    <div>
    <div class="container">

    <div class="row py-2">
      <div class="col">
        <h2>Add Tracker</h2>
      </div>
    </div>


  <form action="" method="POST" id="create_tracker">
    <div class="row py-4 ">
      <div class="col-1">
        <p class="fs-6">Tracker type</p>
      </div>
      <div class="col-6">
        <select name="tracker_type" class="form-select" aria-label="Default select example" required>
            <option selected>Open this select menu</option>
         
          <option value="">tracker.name</option>
          
        </select>
      </div>
    </div>
    <div class="row py-4">
      <div class="col-1">
        <p class="fs-6">Name</p>
      </div>
      <div class="col">
        <div class="col-md-6">
            <input class="form-control" name="tracker_name" type="text" placeholder="enter tracker name" aria-label="default input example" required>
          </div>
      </div>
    </div>


    <div class="row py-4">
      <div class="col-1">
        <p class="fs-6">Description</p>
      </div>
      <div class="col">
        <div class="col-md-6">
        <textarea class="form-control" v-model="desc" id="desc" rows="2" name="desc" placeholder="Write something..."></textarea>
          </div>
      </div>
    </div>

    
    <div class="row py-4 ">
      <div class="col-6">
        <button type="submit" class="btn btn-success">Submit</button>
      </div>
    </div>
  </form>

  </div>
  
  <div>
  `
})

const routes= [
  {path:'/',  component: dashboard, name:'dashboard'},
  {path:'/newtracker', component: new_tracker, name:'new_tracker'} 
]


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


