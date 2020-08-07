<template>
  <div class="string">
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-12">
            <div class="content is-medium">

              <h3 class="title is-3">String utilities¯\_(ツ)_/¯</h3>
              <div class="box">
                <h4 id="const" class="title is-3">Length</h4>
                <textarea class="textarea" placeholder="Paste your long text here" v-model="input_str_01"></textarea>
                <div class="text has-text-centered">
                  <span class="is-size-1">{{input_str_01.length}}</span> characters
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'String',
  data: () => {
    return {
      input_str_01: ''
    }
  }
}
</script>
