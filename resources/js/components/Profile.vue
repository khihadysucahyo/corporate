<!--
<style>
.widget-user-header {
    background-position: center center;
    background-size: cover;
}
</style>
-->
<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">

            <div class="card card-widget widget-user">
              <!-- Add the bg color to the header using any of the bg-* classes -->
              <div class="widget-user-header text-white" style="background: url('./img/cover-profile.png') center center;">
                <h3 class="widget-user-username">{{ form.name }}</h3>
                <h5 class="widget-user-desc">Web Designer</h5>
              </div>
              <div class="widget-user-image">
                <img class="img-circle" v-bind:src="'/img/profile/' + form.photo" alt="User Avatar">
              </div>
              <div class="card-footer">
                <div class="row">
                  <div class="col-sm-4 border-right">
                    <div class="description-block">
                      <h5 class="description-header">3,200</h5>
                      <span class="description-text">SALES</span>
                    </div>
                    <!-- /.description-block -->
                  </div>
                  <!-- /.col -->
                  <div class="col-sm-4 border-right">
                    <div class="description-block">
                      <h5 class="description-header">13,000</h5>
                      <span class="description-text">FOLLOWERS</span>
                    </div>
                    <!-- /.description-block -->
                  </div>
                  <!-- /.col -->
                  <div class="col-sm-4">
                    <div class="description-block">
                      <h5 class="description-header">35</h5>
                      <span class="description-text">PRODUCTS</span>
                    </div>
                    <!-- /.description-block -->
                  </div>
                  <!-- /.col -->
                </div>
                <!-- /.row -->
              </div>
            </div>

            </div>

            <div class="col-md-12">
            <div class="card">
              <div class="card-header p-2">
                <ul class="nav nav-pills">
                  <li class="nav-item"><a class="nav-link active show" href="#activity" data-toggle="tab">Activity</a></li>
                  <li class="nav-item"><a class="nav-link" href="#timeline" data-toggle="tab">Timeline</a></li>
                  <li class="nav-item"><a class="nav-link" href="#settings" data-toggle="tab">Settings</a></li>
                </ul>
              </div><!-- /.card-header -->
              <div class="card-body">
                <div class="tab-content">
                  <div class="tab-pane active show" id="activity">
                    <!-- Post -->
                    <div class="post">
                      <div class="user-block">
                        <img class="img-circle img-bordered-sm" src="/img/profile.png" alt="user image">
                        <span class="username">
                          <a href="#">Jonathan Burke Jr.</a>
                          <a href="#" class="float-right btn-tool"><i class="fa fa-times"></i></a>
                        </span>
                        <span class="description">Shared publicly - 7:30 PM today</span>
                      </div>
                      <!-- /.user-block -->
                      <p>
                        Lorem ipsum represents a long-held tradition for designers,
                        typographers and the like. Some people hate it and argue for
                        its demise, but others ignore the hate as they create awesome
                        tools to help create filler text for everyone from bacon lovers
                        to Charlie Sheen fans.
                      </p>

                      <p>
                        <a href="#" class="link-black text-sm mr-2"><i class="fa fa-share mr-1"></i> Share</a>
                        <a href="#" class="link-black text-sm"><i class="fa fa-thumbs-o-up mr-1"></i> Like</a>
                        <span class="float-right">
                          <a href="#" class="link-black text-sm">
                            <i class="fa fa-comments-o mr-1"></i> Comments (5)
                          </a>
                        </span>
                      </p>

                      <input class="form-control form-control-sm" type="text" placeholder="Type a comment">
                    </div>
                    <!-- /.post -->

                    <!-- Post -->
                    <div class="post clearfix">
                      <div class="user-block">
                        <img class="img-circle img-bordered-sm" src="/img/profile.png" alt="User Image">
                        <span class="username">
                          <a href="#">Sarah Ross</a>
                          <a href="#" class="float-right btn-tool"><i class="fa fa-times"></i></a>
                        </span>
                        <span class="description">Sent you a message - 3 days ago</span>
                      </div>
                      <!-- /.user-block -->
                      <p>
                        Lorem ipsum represents a long-held tradition for designers,
                        typographers and the like. Some people hate it and argue for
                        its demise, but others ignore the hate as they create awesome
                        tools to help create filler text for everyone from bacon lovers
                        to Charlie Sheen fans.
                      </p>

                      <form class="form-horizontal">
                        <div class="input-group input-group-sm mb-0">
                          <input class="form-control form-control-sm" placeholder="Response">
                          <div class="input-group-append">
                            <button type="submit" class="btn btn-danger">Send</button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <!-- /.post -->

                    <!-- Post -->
                    <div class="post">
                      <div class="user-block">
                        <img class="img-circle img-bordered-sm" src="/img/profile.png" alt="User Image">
                        <span class="username">
                          <a href="#">Adam Jones</a>
                          <a href="#" class="float-right btn-tool"><i class="fa fa-times"></i></a>
                        </span>
                        <span class="description">Posted 5 photos - 5 days ago</span>
                      </div>
                      <!-- /.user-block -->
                      <div class="row mb-3">
                        <div class="col-sm-6">
                          <img class="img-fluid" src="" alt="Photo">
                        </div>
                        <!-- /.col -->
                        <div class="col-sm-6">
                          <div class="row">
                            <div class="col-sm-6">
                              <img class="img-fluid mb-3" src="" alt="Photo">
                              <img class="img-fluid" src="" alt="Photo">
                            </div>
                            <!-- /.col -->
                            <div class="col-sm-6">
                              <img class="img-fluid mb-3" src="" alt="Photo">
                              <img class="img-fluid" src="" alt="Photo">
                            </div>
                            <!-- /.col -->
                          </div>
                          <!-- /.row -->
                        </div>
                        <!-- /.col -->
                      </div>
                      <!-- /.row -->

                      <p>
                        <a href="#" class="link-black text-sm mr-2"><i class="fa fa-share mr-1"></i> Share</a>
                        <a href="#" class="link-black text-sm"><i class="fa fa-thumbs-o-up mr-1"></i> Like</a>
                        <span class="float-right">
                          <a href="#" class="link-black text-sm">
                            <i class="fa fa-comments-o mr-1"></i> Comments (5)
                          </a>
                        </span>
                      </p>

                      <input class="form-control form-control-sm" type="text" placeholder="Type a comment">
                    </div>
                    <!-- /.post -->
                  </div>
                  <!-- /.tab-pane -->
                  <div class="tab-pane" id="timeline">
                    <!-- The timeline -->
                    <ul class="timeline timeline-inverse">
                      <!-- timeline time label -->
                      <li class="time-label">
                        <span class="bg-danger">
                          10 Feb. 2014
                        </span>
                      </li>
                      <!-- /.timeline-label -->
                      <!-- timeline item -->
                      <li>
                        <i class="fa fa-envelope bg-primary"></i>

                        <div class="timeline-item">
                          <span class="time"><i class="fa fa-clock-o"></i> 12:05</span>

                          <h3 class="timeline-header"><a href="#">Support Team</a> sent you an email</h3>

                          <div class="timeline-body">
                            Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                            weebly ning heekya handango imeem plugg dopplr jibjab, movity
                            jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                            quora plaxo ideeli hulu weebly balihoo...
                          </div>
                          <div class="timeline-footer">
                            <a href="#" class="btn btn-primary btn-sm">Read more</a>
                            <a href="#" class="btn btn-danger btn-sm">Delete</a>
                          </div>
                        </div>
                      </li>
                      <!-- END timeline item -->
                      <!-- timeline item -->
                      <li>
                        <i class="fa fa-user bg-info"></i>

                        <div class="timeline-item">
                          <span class="time"><i class="fa fa-clock-o"></i> 5 mins ago</span>

                          <h3 class="timeline-header no-border"><a href="#">Sarah Young</a> accepted your friend request
                          </h3>
                        </div>
                      </li>
                      <!-- END timeline item -->
                      <!-- timeline item -->
                      <li>
                        <i class="fa fa-comments bg-warning"></i>

                        <div class="timeline-item">
                          <span class="time"><i class="fa fa-clock-o"></i> 27 mins ago</span>

                          <h3 class="timeline-header"><a href="#">Jay White</a> commented on your post</h3>

                          <div class="timeline-body">
                            Take me to your leader!
                            Switzerland is small and neutral!
                            We are more like Germany, ambitious and misunderstood!
                          </div>
                          <div class="timeline-footer">
                            <a href="#" class="btn btn-warning btn-flat btn-sm">View comment</a>
                          </div>
                        </div>
                      </li>
                      <!-- END timeline item -->
                      <!-- timeline time label -->
                      <li class="time-label">
                        <span class="bg-success">
                          3 Jan. 2014
                        </span>
                      </li>
                      <!-- /.timeline-label -->
                      <!-- timeline item -->
                      <li>
                        <i class="fa fa-camera bg-purple"></i>

                        <div class="timeline-item">
                          <span class="time"><i class="fa fa-clock-o"></i> 2 days ago</span>

                          <h3 class="timeline-header"><a href="#">Mina Lee</a> uploaded new photos</h3>

                          <div class="timeline-body">
                            <img src="" alt="..." class="margin">
                            <img src="" alt="..." class="margin">
                            <img src="" alt="..." class="margin">
                            <img src="" alt="..." class="margin">
                          </div>
                        </div>
                      </li>
                      <!-- END timeline item -->
                      <li>
                        <i class="fa fa-clock-o bg-gray"></i>
                      </li>
                    </ul>
                  </div>
                  <!-- /.tab-pane -->

                  <div class="tab-pane" id="settings">
                    <form  @submit.prevent="update" class="form-horizontal">
                      <div class="form-group">
                        <label for="inputName2" class="col-sm-2 control-label">Name</label>

                        <div class="col-sm-12">
                          <input v-model="form.name" type="text" name="name" placeholder="Name"
                            class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                          <has-error :form="form" field="name"></has-error>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="inputName2" class="col-sm-2 control-label">Email</label>

                        <div class="col-sm-12">
                          <input v-model="form.email" type="text" name="name" placeholder="Email"
                            class="form-control" :class="{ 'is-invalid': form.errors.has('email') }">
                          <has-error :form="form" field="email"></has-error>                            
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="inputName2" class="col-sm-2 control-label">Type</label>

                        <div class="col-sm-12">
                          <select v-model="form.type" name="type"
                            class="form-control" :class="{ 'is-invalid': form.errors.has('type') }">
                            <option value="">Select User Role</option>
                            <option value="admin">Admin</option>
                            <option value="user">Standard User</option>
                            <option value="author">Author</option>
                          </select>
                          <has-error :form="form" field="type"></has-error>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="inputExperience" class="col-sm-2 control-label">Bio</label>

                        <div class="col-sm-12">
                          <textarea v-model="form.bio" name="bio" placeholder="Short bio for user (optional)"
                              class="form-control" :class="{ 'is-invalid': form.errors.has('bio') }" />
                          <has-error :form="form" field="bio"></has-error>
                        </div>
                      </div>

                    <div class="form-group">
                        <label for="inputName2" class="col-sm-2 control-label">Profile Photo</label>
                        <div class="col-sm-12">
                          <!-- for testing only -->
                          <!-- <input v-model="nama_lengkap" type="text" >
                          <datepicker @input="ambilTanggal" v-model="tanggal"></datepicker>
                          <datepicker :disabled-dates="this.disabledDates" @input="ambilTanggal" v-model="tanggal_akhir"></datepicker> -->
                          <input @change="uploadProfile" type="file" class="form-input" >
                        </div>
                    </div>

                    <!-- <div class="form-group">
                      <label for="inputName2" class="col-sm-4 control-label">Password (Leave empty if not changing)</label>
                      <div class="col-sm-12">
                        <input v-model="form.password" type="password" name="password" placeholder="Password"
                            class="form-control" :class="{ 'is-invalid': form.errors.has('password') }">
                        <has-error :form="form" field="password"></has-error>
                      </div>
                    </div>

                    <div class="form-group">
                      <label for="inputName2" class="col-sm-4 control-label">Password Confirmation</label>
                      <div class="col-sm-12">
                        <input v-model="form.password_confirmation" type="password" 
                        class="form-control"
                        name="password_confirmation" placeholder="Confirm Password" id="password-confirm"
                        autocomplete="new-password">
                        <has-error :form="form" field="password"></has-error>
                      </div>
                    </div> -->
                    
                      <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                          <button type="submit" class="btn btn-danger">Save</button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <!-- /.tab-pane -->
                </div>
                <!-- /.tab-content -->
              </div><!-- /.card-body -->
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import Datepicker from 'vuejs-datepicker';
    
    export default {
        // components: {
        //   Datepicker
        // },
        mounted () {
            console.log('Component mounted.')
            
        },
        data () {
            return {
                // tanggal: '',
                // tanggal_akhir: '',
                // disabledDates: {
                //  to: new Date(Date.now())
                // },
                form: new Form ({
                    id: '',
                    name : '',
                    email : '',
                    password : '',
                    type : '',
                    bio : '',
                    photo : '',
                    base64: '',
                    password_confirmation: ''
                })
            }
        },
        methods: {
            // async ambilTanggal () {
            //   console.log('tanggal',  this.tanggal)
            //   console.log('tanggalsss',  this.disabledDates.to)
            //   this.disabledDates.to=this.tanggal
            //   console.log('tanggalsss_ubah',  this.disabledDates.to)

            // },
            async getProfile () {
                try {
                    const user = await axios.get('/api/user')
                    this.form.fill(user.data)
                } catch (e) {

                }
            },
            async update () {
                this.$Progress.start()
                try {
                    await this.form.put('/api/profile/' + this.form.id)
                    Fire.$emit('profile_changed')
                    this.$Progress.finish()
                } catch (e) {
                    Swal.fire('Failed', 'There was something wrong. \n' + e, 'warning')
                    this.$Progress.fail()
                }
            },
            uploadProfile (e) {
               let file = e.target.files[0]
               let reader = new FileReader()
              //  console.log(file)
               if (file['size'] <= 2097152 ) {
                  reader.onloadend = (file) => {
                    this.form.base64 = reader.result
                  }
                  reader.readAsDataURL(file)
               } else {
                  this.form.base64 = ''
                  Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: 'You are uploading large than 2mb'
                  })
               }
            }
        }, 
        created () {
            this.getProfile()
            console.log(this.form);
            
            Fire.$on('profile_changed', () => {
                Toast.fire({
                    type: 'success',
                    title: `Profile updated in successfully`
                })
                this.getProfile()
            })
        }
    }
</script>
