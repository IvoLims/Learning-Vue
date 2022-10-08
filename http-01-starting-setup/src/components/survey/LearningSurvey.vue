<template>
  <section>
    <base-card>
      <h2>How was you learning experience?</h2>
      <form @submit.prevent="submitSurvey">
        <div class="form-control">
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" v-model.trim="enteredName" />
        </div>
        <h3>My learning experience was ...</h3>
        <div class="form-control">
          <input
            type="radio"
            id="rating-poor"
            value="poor"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-poor">Poor</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            id="rating-average"
            value="average"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-average">Average</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            id="rating-great"
            value="great"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-great">Great</label>
        </div>
        <p v-if="invalidInput">
          One or more input fields are invalid. Please check your provided data.
        </p>
        <p v-if="error">
          {{ error }}
        </p>
        <div>
          <base-button>Submit</base-button>
        </div>
      </form>
    </base-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      enteredName: '',
      chosenRating: null,
      invalidInput: false,
      error: null,
    };
  },
  /* Can comment cuz I am already sending the survey throw http request 
  emits: ['survey-submit'],
  */
  methods: {
    submitSurvey() {
      if (this.enteredName === '' || !this.chosenRating) {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;

      /* Can comment cuz I am already sending the survey throw http request
      this.$emit('survey-submit', {
        userName: this.enteredName,
        rating: this.chosenRating,
      });
      */

      //Send info throw https
      this.error = null;
      fetch(
        'https://vue-http-demo-37139-default-rtdb.europe-west1.firebasedatabase.app/surveys.json',
        {
          //There are other options like GET (receber), POST (enviar), PATCH (update), DELETE (apagar),
          method: 'POST',
          headers: { ContentType: 'application/json' },
          body: JSON.stringify({
            name: this.enteredName,
            rating: this.chosenRating,
          }),
        }
      )
        .then((response) => {
          if (response.ok) {
            this.error = 'Everything is right.';
          } else {
            throw new Error('Could not send info: ' + response);
          }
        }) // This will catch all browser errors but not server errors
        .catch((error) => {
          console.error(error);
          this.error = error.message;
        });

      this.enteredName = '';
      this.chosenRating = null;
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

input[type='text'] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}
</style>
