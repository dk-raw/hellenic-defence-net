<template>
  <div>
    <div v-if="JSON.parse(margin)">
      <br />
      <br />
      <br />
    </div>
    <hr v-if="JSON.parse(hr)" />
    <h2 class="display-5 fw-bold mb-0">Κάντε εγγραφή στο Newsletter</h2>
    <p class="lead text-muted">
      Θα σας στέλνουμε περιοδίκα, επιλεγμένα άρθρα απο το Hellenic Defence Net
      χωρίς διαφημίσεις και spam
    </p>
    <form
      action="http://newsletter.hellenicdefence.net/add_subscriber"
      method="POST"
      target="_blank"
    >
      <div class="input-group">
        <span class="input-group-text"
          ><i class="fa-solid fa-envelope-open-text"></i
        ></span>
        <input
          type="email"
          name="member[email]"
          class="required email form-control"
          id="email"
          placeholder="ΕΙΣΑΓΕΤΕ ΤΟ EMAIL ΣΑΣ"
          required
        />
        <input
          type="submit"
          value="ΕΓΓΡΑΦΗ"
          name="member[subscribe]"
          class="btn btn-outline-light button"
        />
      </div>
    </form>
    <div class="fs-small text-muted mt-1">
      Κάνοντας εγγραφή, συμφωνείτε με τους
      <a target="_blank" href="https://www.getrevue.co/terms" class="link"
        >Όρους Χρήσης</a
      >
      και την
      <a target="_blank" href="https://www.getrevue.co/privacy" class="link"
        >Πολιτική Απορρήτου</a
      >
      του Revue.
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "Newsletter",
  props: {
    margin: {
      type: Boolean,
    },
    hr: {
      type: Boolean,
    },
  },
};
</script>
  