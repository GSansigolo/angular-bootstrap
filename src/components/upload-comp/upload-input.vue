<template id="upload-input">
    <div>

        <!-- PRETTY FILE INPUT HIDDEN -->
        <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Choose File..." :value="file.name">
        <div class="input-group-append">
            <button class="btn btn-outline-secondary"  @click="launchFilePicker" type="button"> Upload </button>
        </div>
        </div>

        <!-- REAL FILE INPUT HIDDEN -->
        <input type="file" style="display:none" ref="file" v-uploader />
    </div>
</template>

<script>

import 'bootstrap/dist/css/bootstrap.min.css';

export default {
    
  name: 'upload-input',
  template: '#upload-input',
    directives: {
        uploader: {
            bind(el, binding, vnode) {
                el.addEventListener('change', e => {
                    if (e.target.files[0] !== undefined) {
                        vnode.context.file = e.target.files[0];
                    }
                });
            }
        },
    },
    watch: {
        file(val) {
            this.$emit('file_chosen', val);
        }
    },
    methods: {
        launchFilePicker() {
            this.$refs.file.click();
        }
    },
    data() {
        return {
            file: ''
        }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>