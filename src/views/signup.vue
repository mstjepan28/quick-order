<template>
    <div style="margin-top: 40px;">
        <div class="row">
            <div class="col">
            <h1 class="text-center mb-5">Sign up</h1>
            </div>
        </div>

        <div class="row">
            <div class="col"></div>
            <div class="col">
                <form @submit.prevent="signup">
                    <div class="form-group">
                        <label for="emailField">Email address</label>
                        <input v-model="email" type="email" class="form-control" id="emailField" aria-describedby="emailHelp" placeholder="Enter email">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <div class="form-group">
                        <label for="passwordField">Password</label>
                        <input v-model='password' type="password" class="form-control" id="passwordField" placeholder="Password">
                    </div>

                    <div class="form-group">
                        <label for="passwordField">Position</label>
                        <input v-model='position' type="text" class="form-control" placeholder="Position">
                    </div>
                    
                    <button type="submit" class="btn btn-primary mt-5">Submit</button>
                </form>
            </div>
            <div class="col"></div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      position: ''
    }
  },
  methods: {
    signup () {
      //Na firebase posalji email i password koji povuce iz ispunjene forme
      //.then -> vraca novo stvorenog korisnika, pristupamo njegovom Id-u i u kolekciji 'users' stvaramo novi
      //  dokument u koji se sprema pozicija koju smo upisali u formi
      //Position sluzi da samo odredeni korisnici mogu pristupati nekim dijelovima
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(cred => {
        return db.collection('users').doc(cred.user.uid).set({
          position: this.position
        });
      }).catch(function(error) {
        console.log(error)
      });
    }
  }
}
</script>
