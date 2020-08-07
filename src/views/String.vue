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
                <textarea class="textarea is-medium" placeholder="Paste your long text here" v-model="input_str_01"></textarea>
                <div class="text has-text-centered">
                  <span class="is-size-1">{{input_str_01.length}}</span> characters
                </div>
              </div>

              <div class="box">
                <h4 id="const" class="title is-3">Converter</h4>
                <div class="field">
                  <div class="control">
                    <input class="input is-medium is-rounded" type="text" placeholder="Input something"
                           v-model="input_str_02">
                  </div>
                </div>
                <section class="hero is-primary" v-if="input_str_02">
                  <div class="hero-body">
                    <div class="container">
                      To Upper case
                      <h3 class="subtitle">
                        {{input_str_02.toUpperCase()}}
                      </h3>
                    </div>
                    <div class="container">
                      To Lower case
                      <h3 class="subtitle">
                        {{input_str_02.toLowerCase()}}
                      </h3>
                    </div>
                    <div class="container">
                      To Full-width
                      <h3 class="subtitle">
                        {{fullWidth(input_str_02)}}
                      </h3>
                    </div>
                    <div class="container">
                      To Half-width
                      <h3 class="subtitle">
                        {{halfWidth(input_str_02)}}
                      </h3>
                    </div>
                  </div>
                </section>
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
      input_str_01: '',
      input_str_02: ''
    }
  },
  methods: {
    fullWidth: (str) => {
      return str.replace(/[A-Za-z0-9]/g, (c) => {
        return String.fromCharCode(c.charCodeAt(0) + 0xFEE0);
      });
    },
    halfWidth: (str) => {
      return str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, (c) => {
        return String.fromCharCode(c.charCodeAt(0) - 0xFEE0);
      });
    }
  }
}
</script>
